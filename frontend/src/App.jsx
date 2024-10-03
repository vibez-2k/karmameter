import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculate from "./pages/first_sixth/calculate";
import Vehical from "./pages/vehical/vehical";
import Food from "./pages/food/food";
import Karmascore from "./pages/karma/karmascore";
import Survey from "./pages/survey/survay";
import Conformation from "./pages/conformation/conformation";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex bg-black ">
      <div className="hidden lg:flex flex-1 bg-[#f6f6f6]"></div>
      <div className="lg:w-1/4 w-full  bg-red-400">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Calculate />} />
            <Route path="/Vehical/*" element={<Vehical />} />
            <Route path="/food/*" element={<Food />} />
            <Route path="/calculate-karma" element={<Karmascore />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/confirmation" element={<Conformation />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="hidden lg:flex flex-1 bg-[#f6f6f6]"></div>
    </div>
  );
}

export default App;
