import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Fueltype() {
    const navigate = useNavigate();


    const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="w-full h-full bg-red-400">
    <div className="w-full h-full bg-white">
      <div className="flex flex-col h-full justify-between items-center">
        <div className="mb-3">
        <p className="text-center text-xl text-black">
          Type of fuel do you use?
        </p>
          <div className="w-full justify-center py-3 px-8 flex gap-8 mt-4">
            <div
              className={`w-36 h-32 rounded-xl cursor-pointer flex flex-col justify-center items-center gap-5 bg-[#FFF4F3] ${
                selected === 0 ? "border-2 border-[#EB7E74]" : ""
              }`}
              onClick={() => handleClick(0)}
            >
              <img src="/images/pump.png" className="w-14" alt="" />
              <p className="text-black mb-4">Cycle/Walk</p>
            </div>
            <div
              className={`w-36 h-32 rounded-xl cursor-pointer flex flex-col justify-center items-center gap-5 bg-[#FFF4E6] ${
                selected === 1 ? "border-2 border-[#FFBA63]" : ""
              }`}
              onClick={() => handleClick(1)}
            >
              <img src="/images/plug.png" className="w-10" alt="" />
              <p className="text-black mb-2">Two wheeler</p>
            </div>
          </div>

        </div>

        <div className="flex w-full p-3 gap-4">

          <button
            className="bg-[#dee9f9] w-[90%]  text-lg text-[#1d78ec] mb-3 h-16 rounded-xl"
            onClick={() => navigate(-1)}
            >
            Back
          </button>
        <button className="bg-[#1d78ec] w-[90%] text-white text-lg mb-3 h-16 rounded-xl" onClick={() => navigate("/vehical/kilometers")} >
          Next
        </button>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Fueltype