import React from "react";
import bgImage from "../../assets/images/careerblog.png";

const WorkTogether = () => {
  return (
    <section
      className="max-w-7xl mx-auto bg-cover bg-center rounded-md  bg-no-repeat py-16 px-6 md:py-24  mt-8"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-5xl mx-auto text-center text-white">
        
        <h2 className="text-2xl md:text-4xl font-bold font-playfair">
          Let's Work Together
        </h2>

        
        <p className="my-4 text-sm md:text-lg max-w-2xl font-normal mx-auto opacity-90">
          Whether you’re a fresher or an experienced professional, explore
          opportunities to grow, learn, and lead.
        </p>

       
        <button className="mt-6 bg-white
         text-primary px-6 py-2 rounded-md text-sm md:text-base font-normal hover:bg-gray-200 transition">
          Ask us any Questions
        </button>
      </div>
    </section>
  );
};

export default WorkTogether;