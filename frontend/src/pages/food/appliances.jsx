import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Appliances() {

    const [selected, setSelected] = useState(null);

    const handleClick = (index) => {
      setSelected(index);
    };
    const navigate = useNavigate();
  return (
    
<div className="w-full h-full bg-red-400">
        <div className="w-full h-full bg-white">
          <div className="flex flex-col h-full justify-around items-center">
            <p className="text-center text-xl text-black">
              Select the appliances you use at home
            </p>
            <div className="mb-3">
              <div className="w-full justify-center flex-wrap  flex  mt-4">
                <div className="flex flex-row justify-center  items-center">
                  <div
                    className={`w-24 h-24 mr-2 rounded-xl cursor-pointer flex flex-col justify-center items-center bg-[#E4FFEE] ${
                      selected === 0 ? "border-2 border-[#87998e  ]" : ""
                    }`}
                    onClick={() => handleClick(0)}
                  >
                    <p className="text-black mb-4">fridge</p>
                  </div>
                  
                  <div
                    className={`w-24 h-24 mr-2 rounded-xl cursor-pointer flex flex-col justify-center items-center  bg-[#FFF4F3] ${
                      selected === 1 ? "border-2 border-[#cca39f]" : ""
                    }`}
                    onClick={() => handleClick(1)}
                  >
                    <p className="text-black mb-2">Both</p>
                  </div>
                  <div
                    className={`w-24 h-24 mr-2 rounded-xl cursor-pointer flex flex-col justify-center items-center  bg-[#FFF4F3] ${
                      selected === 1 ? "border-2 border-[#cca39f]" : ""
                    }`}
                    onClick={() => handleClick(1)}
                  >
                    <p className="text-black mb-2">Both</p>
                  </div>
                </div>


                <div className="flex flex-row justify-center  items-center mt-2">
                  <div
                    className={`w-24 h-24 mr-2 rounded-xl cursor-pointer flex flex-col justify-center items-center  bg-[#F9F5F7] ${
                      selected === 1 ? "border-2 border-[#EF9BC5]" : ""
                    }`}
                    onClick={() => handleClick(1)}
                  >
                    <p className="text-black mb-2">Both</p>
                  </div>
                  <div
                    className={`w-24 h-24 mr-2 rounded-xl cursor-pointer flex flex-col justify-center items-center  bg-[#FCF5FF] ${
                      selected === 1 ? "border-2 border-[#c28bda]" : ""
                    }`}
                    onClick={() => handleClick(1)}
                  >
                    <p className="text-black mb-2">Both</p>
                  </div>
                  <div
                    className={`w-24 h-24 mr-2 rounded-xl cursor-pointer flex flex-col justify-center items-center  bg-[#E4FBFF] ${
                      selected === 1 ? "border-2 border-[#729ca3]" : ""
                    }`}
                    onClick={() => handleClick(1)}
                  >
                    <p className="text-black mb-2">Both</p>
                  </div>
                </div>
                <div className="flex w-full flex-row justify-center  items-center mt-2">
                  
                  
                  <div
                    className={`w-24 h-24 mr-2 rounded-xl cursor-pointer flex flex-col justify-center items-center  bg-[#E4FBFF] ${
                      selected === 1 ? "border-2 border-[#729ca3]" : ""
                    }`}
                    onClick={() => handleClick(1)}
                  >
                    <p className="text-black mb-2">Both</p>
                  </div>
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
            <button className="bg-[#1d78ec] w-[90%] text-white text-lg mb-3 h-16 rounded-xl" onClick={() => navigate("/food/electricity")} >
              Next
            </button>
          </div>
          </div>
        </div>
      </div>  )
}

export default Appliances