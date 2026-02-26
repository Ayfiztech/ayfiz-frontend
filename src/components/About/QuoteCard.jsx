import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
const QuoteCard = () => {
  return (
    <div className="w-full bg-white">
      <div className="relative w-full mx-auto bg-[#3b5998] rounded-sm overflow-hidden min-h-[200px] flex items-center justify-center">
        <div className="absolute top-0 left-0 w-12 h-12 bg-white rounded-br-full" />

        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center px-8 py-10 md:px-16 gap-6 md:gap-10">
          <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-2xl">
            <FaQuoteLeft className="text-[#f1c40f] text-3xl md:text-4xl" />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#f1c40f] font-bold mb-1 opacity-90">
              Quote
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-playfair text-white font-medium leading-tight">
              Lorem ipsum dolor sit amet
            </h2>
          </div>
        </div>

        <div className="absolute bottom-4 right-6 opacity-30 hidden sm:block">
          <div className="flex gap-[6px] transform -skew-x-[25deg]">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-[1.5px] h-10 md:h-14 bg-white" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
