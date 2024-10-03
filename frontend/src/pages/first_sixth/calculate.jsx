import React from "react";
import { useNavigate } from "react-router-dom";

function Calculate() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-[#eaf0fa] flex flex-col justify-center bg-[url(/images/first.png)] items-center">
      <p className="text-[#0E70EB] mb-5 font-semibold font-playwrite  text-2xl text-center ">
        {" "}
        Know & offset your carbon footprints
      </p>
      <div className="bg-white w-[90%] rounded-2xl  ">
        <div className=" p-4 mt-2 w-full flex flex-col ">
          <div className="w-full  h-16 flex mb-5  justify-center items-center ">
            <div className="w-16 h-full flex justify-center items-center bg-[#FFF5F3] rounded-lg">
              <img src="/images/brain.png" className="w-14 " alt="" />
            </div>
            <div className="flex-1 h-full rounded-lg px-4  flex flex-col justify-center">
              <p className="font-semibold text-md ">Answer our question</p>
              <p className="text-gray-400 text-sm ">
                Lorem ipsum dolor sit amet <address></address> adipisicing elit.
                Cumque, ratione?
              </p>
            </div>
          </div>
          <div className="w-full  h-16 flex mb-5 justify-center items-center">
            <div className="w-16 h-full flex justify-center items-center bg-[#FFF5F3] rounded-lg">
              <img src="/images/foot.png" className="w-14 " alt="" />
            </div>
            <div className="flex-1 h-full rounded-lg px-4  flex flex-col justify-center">
              <p className="font-semibold text-md ">
                Know your Carbon footprint
              </p>
              <p className="text-gray-400 text-sm ">
                Lorem ipsum dolor sit amet <address></address> adipisicing elit.
                Cumque, ratione?
              </p>
            </div>
          </div>
          <div className="w-full  h-16 flex mb-3  justify-center items-center ">
            <div className="w-16 h-full flex justify-center items-center bg-[#FFF5F3] rounded-lg">
              <img src="/images/hand.png" className="w-14 " alt="" />
            </div>
            <div className="flex-1 h-full rounded-lg px-4 flex flex-col justify-center">
              <p className="font-semibold text-[14px] ">
                Offeset is following the instructions
              </p>
              <p className="text-gray-400 text-sm ">
                Lorem ipsum dolor sit amet <address></address> adipisicing elit.
                Cumque, ratione?
              </p>
            </div>
          </div>
        </div>

        <div className="w-full gap-3 mb-5  h-14 flex px-4  justify-between items-center">
          <button
            className="flex-1 h-full bg-[#E6EEFA] rounded-lg btn text-[#0E70EB]"
            onClick={() => navigate("/")}
          >
            Later
          </button>
          <button
            className="flex-1 h-full bg-[#0E70EB] rounded-lg btn text-white"
            onClick={() => navigate("/Vehical")}
          >
            calculate & offset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
