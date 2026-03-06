import React from 'react';
import bgImage from '../../assets/images/404.png'; 

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#1a222c] flex items-center justify-center p-8 relative overflow-hidden">
      
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }}
      ></div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
    
        <div className="text-center md:text-left space-y-10">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mt-12">
            Ooops No Page <br /> Found!!
          </h1>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="inline-block bg-[#2e47a5] hover:bg-[#3b58cc] text-white px-10 py-4 rounded-full font-semibold uppercase tracking-widest text-sm transition-colors duration-300 shadow-xl"
          >
            Back to Home
          </button>
        </div>

        <div className="flex justify-center items-center">
          <img 
            src={bgImage} 
            alt="Page not found illustration" 
            className="w-full h-auto max-w-xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] float-animation"
          />
        </div>

      </div>
    </div>
  );
};

export default NotFound;