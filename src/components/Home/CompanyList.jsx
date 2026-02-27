import React from "react";
import comp1 from "../../assets/images/comp1.png";
import comp2 from "../../assets/images/comp2.png";
import comp3 from "../../assets/images/comp3.png";
import comp4 from "../../assets/images/comp4.png";
import comp5 from "../../assets/images/comp5.png";
import comp6 from "../../assets/images/comp6.png";

const LogoStrip = () => {
  const logos = [comp1, comp2, comp3, comp4, comp5, comp6];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="w-full">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="mx-8 flex-shrink-0">
              <img
                src={logo}
                alt="company logo"
                className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;