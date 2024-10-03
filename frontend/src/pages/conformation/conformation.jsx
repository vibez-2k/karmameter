import React from 'react';

function Conformation() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-cover bg-[#ffffff] bg-[url(/images/last.png)]">
      
      {/* Transparent Video */}
      <video src="/images/tick.mp4" className=" opacity-50 w-64 h-64" autoPlay loop muted />
      
      {/* Centered Text */}
      <p className="text-xl font-semibold text-black mt-4">
        Form Submission Successful
      </p>
    </div>
  );
}

export default Conformation;
