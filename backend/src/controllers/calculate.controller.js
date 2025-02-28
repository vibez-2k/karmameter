const db = require("../../models/index");

const postData = async (req, res) => {
  const {
    userID,
    vehicalID,
    vehicalCount,
    fuelID,
    AvgKilometers,
    foodID,
    userOwnSppliances,
    electricityUnit,
  } = req.body;

  // Check for missing fields
  if (
    !userID ||
    !fuelID ||
    !foodID ||
    !vehicalID ||
    !vehicalCount ||
    !AvgKilometers ||
    !electricityUnit ||
    !userOwnSppliances
  ) {
    return res.status(400).send({
      message: "Please fill all fields",
    });
  }

  try {
    // Fetch user, vehicle, fuel, food, and appliances data
    const user = await db.users.findOne({
      where: { id: userID },
      attributes: ["id", "email"],
    });

    if (!user) {
      return res.status(400).send({
        message: "User not found",
      });
    }

    const vehicle = await db.vehicalMaster.findOne({
      where: { id: vehicalID },
      attributes: ["id", "vehicalCategory", "carbonFootprint"],
    });

    const fuel = await db.fueltypeMaster.findOne({
      where: { id: fuelID },
      attributes: ["carbonFootprint"],
    });

    const food = await db.foodtypeMaster.findOne({
      where: { id: foodID },
      attributes: ["carbonFootprint"],
    });

    let appliancecarbon = 0;
    for (const applianceID of userOwnSppliances) {
      const appliance = await db.appliancesMaster.findOne({
        where: { id: applianceID },
        attributes: ["carbonFootprint"],
      });
      appliancecarbon += appliance.carbonFootprint;
    }

    // Emission factor for electricity
    const electricityEmissionFactor = 0.5; // kg CO2 per electricity unit
    const electricityCO2 = electricityUnit * electricityEmissionFactor;

    // Calculate CO2 emissions
    const vehicleCO2 = vehicle.carbonFootprint * AvgKilometers * vehicalCount;
    const fuelCO2 = fuel.carbonFootprint * AvgKilometers * vehicalCount;
    const foodCO2 = food.carbonFootprint;
    const totalCo2 = vehicleCO2 + fuelCO2 + foodCO2 + appliancecarbon + electricityCO2;

    // Calculate saplings required to offset the CO2 emissions
    const co2AbsorbedPerSapling = 22; // kg CO2 per year per sapling
    const saplingsNeeded = Math.ceil(totalCo2 / co2AbsorbedPerSapling);

    // Check if user already exists in transactions
    const userExist = await db.transcations.findOne({
      where: { userID: userID },
      attributes: ["id", "userID"],
    });

    if (userExist) {
      await db.transcations.update(
        {
          userID: userID,
          foodID: foodID,
          fuelID: fuelID,
          vehicalID: vehicalID,
          vehicalCount: vehicalCount,
          AvgKilometers: AvgKilometers,
          electricityUnit: electricityUnit,
          karmaScore: totalCo2,
        },
        {
          where: { id: userExist.id },
        }
      );
      return res.status(200).send({
        vehicleCO2: vehicleCO2 + fuelCO2,
        foodCO2: foodCO2,
        applianceCO2: appliancecarbon + electricityCO2,
        karmaScore: totalCo2,
        saplingsNeeded: saplingsNeeded,
        message: "Karma score updated successfully",
      });
    } else {
      await db.transcations.create({
        userID: userID,
        foodID: foodID,
        fuelID: fuelID,
        vehicalID: vehicalID,
        vehicalCount: vehicalCount,
        AvgKilometers: AvgKilometers,
        electricityUnit: electricityUnit,
        karmaScore: totalCo2,
      });

      return res.status(200).send({
        vehicleCO2: vehicleCO2 + fuelCO2,
        foodCO2: foodCO2,
        applianceCO2: appliancecarbon + electricityCO2,
        karmaScore: totalCo2,
        saplingsNeeded: saplingsNeeded,
        message: "Karma score updated successfully",
      });
    }
  } catch (error) {
    console.error("Error calculating Karma Score:", error);
    return res.status(500).send({
      message: "An error occurred while calculating the Karma Score.",
    });
  }
};

module.exports = { postData };
