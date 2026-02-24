// ServiceCard.jsx
import React from "react";

const ServiceCard = ({
  label = "",
  title = "",
  description = "",
  buttonText = "View More",
  onClick,
}) => {
  return (
    <div className="max-w-full ">
      
      
      <p className=" text-lg font-semibold tracking-widest text-primary uppercase font-playfair italic">
        {label}
      </p>

     
      <h2 className="mt-2 text-2xl md:text-4xl font-bold text-primary-dark font-playfair">
        {title}
      </h2>

     
      <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
        {description}
      </p>

     
      <button
        onClick={onClick}
        className="mt-6 bg-[#1B4398] text-white px-6 md:px-8 py-3 text-sm md:text-base font-semibold hover:bg-[#163a7d] transition duration-300"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ServiceCard;