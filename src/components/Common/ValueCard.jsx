import React from 'react';

const ValueCard = ({ number, title, subtitle, color = "border-gray-400", textColor = "text-gray-400" }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-xl shadow-gray-200/50 border-l-4 ${color} flex flex-col gap-2 min-h-[160px] transition-all duration-300 hover:-translate-y-2`}>
      {/* Number */}
      <span className={`text-sm font-bold ${textColor}`}>
        {number}
      </span>
      
      {/* Main Title */}
      <h3 className="text-gray-800 text-xl font-extrabold leading-tight font-serif">
        {title}
      </h3>
      
      {/* Subtitle / Hashtag */}
      <p className={`text-[10px] uppercase tracking-widest font-bold ${textColor} opacity-70`}>
        {subtitle}
      </p>
    </div>
  );
};

export default ValueCard;