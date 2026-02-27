import React from "react";

const ValueCard = ({ number, title, subtitle, Icon, color = "border-gray-400", textColor = "text-gray-400" }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-xl shadow-gray-200/50 border-l-4 ${color} flex flex-col gap-2 min-h-[160px] transition-all duration-300 hover:-translate-y-2 group`}>
      {/* Top Row: Number and Icon */}
      <div className="flex justify-between items-start">
        <span className={`text-sm font-bold ${textColor}`}>
          {number}
        </span>
        {/* Icon renders here */}
        {Icon && <Icon className={`text-2xl ${textColor} opacity-80 group-hover:scale-110 transition-transform duration-300`} />}
      </div>
      
      {/* Main Title */}
      <h3 className="text-gray-800 text-3xl font-extrabold leading-tight font-serif mt-2">
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