import React from "react";
import { Routes, Route } from "react-router-dom";

import VehicalChoose from "./vehicalChoose";
import VehicalCount from "./vehicalcount";
import Fueltype from "./fueltype";
import Kilometers from "./kilometers";

function Vehical() {
  return (
    <div className="w-full h-full bg-cover bg-no-repeat bg-center bg-[url(/images/second.png)]">
      <div className="w-full h-[50%] pt-5 flex flex-col items-end justify-between bg-contain bg-no-repeat bg-center bg-[url(/images/second.png)]">
        <div className="w-full h-6 flex justify-center gap-2">
          <img src="/images/triangle.png" className="w-5 rotate-180" alt="" />
          <p className="font-semibold text-black text-lg">15.09 ton CO2</p>
        </div>
        <div className="w-full h-14 rounded-t-3xl bg-white relative">
          <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full">
            <div
              className="radial-progress absolute text-[#fff7ec]"
              style={{ "--value": 100 }}
              role="progressbar"
            >
              1/4
            </div>
            <div
              className="radial-progress text-[#fea062]"
              style={{ "--value": 10 }}
              role="progressbar"
            >
              1/4
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[50%] bg-white ">
        <Routes>
          {/* Default route that loads VehicalChoose by default */}
          <Route index element={<VehicalChoose />} />
          <Route path="vehical-Count" element={<VehicalCount />} />
          <Route path="fuel-type" element={<Fueltype/>} />
          <Route path="kilometers" element={<Kilometers/>} />
        </Routes>
      </div>
    </div>
  );
}

export default Vehical;
