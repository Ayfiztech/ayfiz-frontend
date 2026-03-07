import React from "react";
import TeamImage from "../../assets/images/team-working.png"; 
import { useNavigate } from "react-router-dom";

export default function AboutAyfiz({aboutShort}) {
  const navigate = useNavigate()

  const aboutUsClick = () =>{
    navigate('/about')
  }
   const contactUsClick = () =>{
    navigate('/contact')
  }
  return (
    <section className="relative bg-white py-12 lg:py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Right Image Section - Now first on Mobile/Tablet */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          {/* Left Blue Triangle */}
          <div 
            className="absolute -left-4 lg:-left-6 top-10 bottom-10 w-3 lg:w-4 bg-[#2a4d95]" 
            style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}
          ></div>

          {/* The Main Image */}
          <div className="w-full h-[300px] md:h-[450px] overflow-hidden shadow-2xl">
            <img
              src={TeamImage}
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Blue Triangle */}
          <div 
            className="absolute -right-4 lg:-right-6 top-0 bottom-0 w-3 lg:w-4 bg-[#2a4d95]" 
            style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
          ></div>
        </div>

        {/* Left Content - Now second on Mobile/Tablet */}
        <div className="relative z-10 order-2 lg:order-1">
          <div className="mb-6 lg:mb-8">
            <h2 className="text-[#1a2b56] font-bold text-2xl lg:text-3xl mb-2 font-serif">
              About Ayfiz
            </h2>
            <div className="w-12 h-[3px] bg-red-400"></div>
          </div>

          <h3 className="text-[#4a69a7] text-3xl lg:text-4xl font-medium leading-tight mb-6 lg:mb-8 font-serif max-w-md">
            Accelerating digital potential
          </h3>

          <div className="space-y-4 lg:space-y-6 text-gray-600 text-sm md:text-base max-w-lg">
            <p>
              {aboutShort}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-10">
            <button onClick={aboutUsClick} className="bg-[#2a4d95] text-white px-10 py-3 rounded-2xl hover:bg-[#1e3a75] transition-all font-bold text-sm text-center">
              Who we are
            </button>
            <button onClick={contactUsClick} className="border-2 border-[#2a4d95] text-[#2a4d95] px-10 py-3 rounded-2xl hover:bg-blue-50 transition-all font-bold text-sm text-center">
              Reach Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}