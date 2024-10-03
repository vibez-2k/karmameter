import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Survey() {
  const [showText, setShowText] = useState(true);
  const [showForm, setShowForm] = useState(false); // State to show form after text vanishes

  useEffect(() => {
    // Show form after 6 seconds (when text finishes disappearing)
    const textTimer = setTimeout(() => {
      setShowText(false);
      setShowForm(true); // Show form after text vanishes
    }, 2000);
    
    return () => clearTimeout(textTimer);
  }, []);

  const navigate = useNavigate();


  return (
    <div className="w-full h-full relative flex bg-cover flex-col items-center bg-[#cff0fc] bg-[url(/images/forest.png)] ">
      <div className='w-full absolute top-0 h-[20%] mt-16 bg-contain bg-[url(/images/sun.png)] ' />

      {/* Animated text */}
      {showText && (
        <p className="text-black z-10 font-semibold font-playwrite text-lg text-center animation-text">
          Great job! You're making a positive contribution to preserving our green environment.
        </p>
      )}

      {/* Animated form */}
      {showForm && (
        <div className='w-[95%] flex flex-col items-center bg-white rounded-xl z-10 gap-4 p-4 border animation-form'>
          <p className='text-xl text-black font-semibold font-playwrite'>Fill out this form</p>
          <p className='font-playwrite text-center'>Our team will reach out to you to help with your tree plantation</p>

          <input type="text" className='w-full h-14 rounded-lg bg-white border-2 border-[#f0f0f0] px-3' placeholder='Your Name *' />
          <input type="text" className='w-full h-14 rounded-lg bg-white border-2 border-[#f0f0f0] px-3' placeholder='Phone Number *' />
          <input type="email" className='w-full h-14 rounded-lg bg-white border-2 border-[#f0f0f0] px-3' placeholder='Email *' />
          <input type="text" className='w-full h-14 rounded-lg bg-white border-2 border-[#f0f0f0] px-3' placeholder='Location *' />
          <input type="text" className='w-full h-14 rounded-lg bg-white border-2 border-[#f0f0f0] px-3' placeholder='How many trees you want to plant?*' />
          <input type="text" className='w-full h-14 rounded-lg mb-10 bg-white border-2 border-[#f0f0f0] px-3' placeholder='Name to be planted on behalf of? *' />

          <button className="w-full h-14 bg-[#0E70EB] border-none rounded-lg btn text-white"  onClick={() => navigate("/confirmation")}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Survey;
