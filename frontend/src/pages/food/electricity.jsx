import React from "react";
import { useNavigate } from "react-router-dom";

function Electricity() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-red-400">
      <div className="w-full h-full bg-white">
        <div className="flex flex-col h-full w-full  justify-between items-center">
          <div className="w-full px-3">
            <p className="text-center text-xl mb-3 text-black">
              How much electricity do you consume for a month?
            </p>
            <div className="w-full justify-center mt-5 items-center flex">
              <div className="w-2 h-7 bg-[#0E70EB] rounded-lg"></div>
              <input
                type="range"
                min={0}
                max="100"
                value="25"
                step="25"
                className="custom-range-slider w-full "
              />

              <div className="w-2 h-7 bg-[#0E70EB] rounded-lg"></div>
            </div>
            <div className="flex w-full  justify-between mt-2 text-lg">
              <span className="text-xl text-black">100 units</span>
              <span className="text-2xl text-black"></span>
              <span className="text-2xl text-black"></span>
              <span className="text-2xl text-black"></span>
              <span className="text-xl text-black">1000 units</span>
            </div>

            <div className=" mt-12 flex justify-center">
              <div className="bg-[#FFF4E4] text-[#FF980E] text-xl p-2 rounded-xl">
                200 Units
              </div>
            </div>
          </div>
          <button
            className="bg-[#1d78ec] w-[90%] text-white text-lg mb-3 h-16 rounded-xl"
            onClick={() => navigate("/calculate-karma")}
          >
            Calculate the carbon footprint
          </button>
        </div>
      </div>
    </div>
  );
}

export default Electricity;
