import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function VehicalChoose() {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-full bg-red-400">
        <div className="w-full h-full bg-white">
          <div className="flex flex-col h-full justify-around items-center">
            <p className="text-center text-xl text-black">
              Choose the vehicles you use for commuting?
            </p>
            <div className="mb-3">
              <div className="w-full justify-center py-3 px-8 flex gap-8 mt-4">
                <div
                  className={`w-36 h-32 rounded-xl cursor-pointer flex flex-col justify-center items-center gap-5 bg-[#EEF6FF] ${
                    selected === 0 ? "border-2 border-[#8aabcf]" : ""
                  }`}
                  onClick={() => handleClick(0)}
                >
                  <img src="/images/cycle.png" className="w-16" alt="" />
                  <p className="text-black mb-4">Cycle/Walk</p>
                </div>
                <div
                  className={`w-36 h-32 rounded-xl cursor-pointer flex flex-col justify-center items-center gap-5 bg-[#FFF4E6] ${
                    selected === 1 ? "border-2 border-[#FFBA63]" : ""
                  }`}
                  onClick={() => handleClick(1)}
                >
                  <img src="/images/scooter.png" className="w-14" alt="" />
                  <p className="text-black mb-2">Two wheeler</p>
                </div>
              </div>
              <div className="w-full justify-center py-3 px-8 flex">
                <div
                  className={`w-36 h-32 rounded-xl cursor-pointer flex flex-col justify-center items-center gap-4 bg-[#FFF4F3] ${
                    selected === 2 ? "border-2 border-[#EB7E74]" : ""
                  }`}
                  onClick={() => handleClick(2)}
                >
                  <img src="/images/car.png" className="w-14" alt="" />
                  <p className="text-black mb-4">Car</p>{" "}
                </div>
              </div>
            </div>
            <button className="bg-[#1d78ec] w-[90%] text-white text-lg mb-3 h-16 rounded-xl" onClick={() => navigate("vehical-Count")} >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VehicalChoose;
