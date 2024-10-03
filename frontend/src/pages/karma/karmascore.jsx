import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

// import { Gauge } from 'react-gauge-component';

function Karmascore() {
  const percentage = 50; // You can dynamically set this value
  const navigate = useNavigate();


  return (
    <div className="w-full h-full bg-contain flex flex-col justify-center items-center bg-cyan-300 bg-[url(/images/fourth.png)] ">
      <p className="text-black mb-5 font-semibold font-playwrite  text-xl text-center ">
        {" "}
        Summary
      </p>
      <div className="bg-white w-[90%] h-[80%] rounded-2xl p-7 gap-5 flex flex-col justify-between items-center">
        <div className="w-full  h-[50%] flex flex-col bg-[#f8fbfe] gap-4 rounded-xl justify-center items-center ">
          <p className="text-black  font-semibold font-playwrite  text-xl text-center ">
            Your annual carbon footprint
          </p>

          <div className="flex flex-col justify-center   items-center">
            <div className="w-72 h-44  relative">
              {" "}
              {/* Increased width, reduced height */}
              <CircularProgressbar
                value={percentage}
                maxValue={100}
                // text={`18 ton CO2`}
                styles={buildStyles({
                  rotation: 0.75, // Start at 270deg
                  strokeLinecap: "round",
                  pathTransitionDuration: 0.5,
                  fontSize: "12px", // Reduced font size
                  pathColor: `#2ecc71`, // green color for part of the circle
                  textColor: "#000", // Text color
                  trailColor: "#d6d6d6", // Background color
                  backgroundColor: "#FF5733", // Optional background
                  strokeWidth: 8, // Customize stroke width
                })}
                strokeWidth={10} // Control the stroke size here
                circleRatio={0.5} // This makes it a semi-circle
              />

              <p className="absolute top-1/2 left-1/3 text-xl mt-5 text-black font-semibold ">                18 ton CO2
              </p>
            </div>
          </div>

          <div className="flex justify-around  w-full text-black">
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded  bg-[#F58E27]"></div>
              commute
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded  bg-[#F4646E]"></div>
              Food
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded  bg-[#4AC596]"></div>
              Appliances
            </div>
          </div>
          <div className="bg-[#FFF1F1] p-2 flex gap-2 rounded-lg">
            <img src="/images/graph.png" className="w-7" alt="" />
            <p className="text-[#FF5757]">which is 25% higher than average</p>
          </div>
        </div>

        <div className="w-full  h-[50%] flex flex-col bg-[#f8fbfe]  rounded-xl justify-around items-center ">
          <img src="/images/tree.png" className="w-20" alt="" />

          <div className="flex flex-col gap-5 justify-center items-center">
            <p className="text-black  font-semibold font-playwrite  text-lg text-center ">
              Offset your excess carbon footprint by{" "}
            </p>

            <p className="text-[#1B9863] text-xl font-semibold">
              planting 15 saplings
            </p>

            <button className="p-2 bg-[#1B9863] rounded-lg text-white text-lg "            onClick={() => navigate("/survey")}
            >
              Plant now to offset
            </button>
          </div>
        </div>

        <p className="text-[#0E70EB] font-semibold font-playwrite  text-xl text-center ">
          {" "}
          Remain me later
        </p>
      </div>
    </div>
  );
}

export default Karmascore;
