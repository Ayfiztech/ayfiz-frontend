import React from "react";
import { useEffect, useState } from "react";
const LogoStrip = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch(
          "https://demo.ayfiz.com/ayfiz/api/landingPageDetails"
        );
        const data = await response.json();

        const images = data.partnerships.flatMap((item) => item.images);

        setLogos(images);
      } catch (error) {
        console.log("Error fetching logos:", error);
      }
    };

    fetchPartners();
  }, []);

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