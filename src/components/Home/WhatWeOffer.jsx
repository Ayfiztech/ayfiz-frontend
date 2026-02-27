import React, { useState } from "react";

const WhatWeOffer = () => {
  const [active, setActive] = useState(1);

  const services = [
    {
      title: "IT",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "TRADING",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    },
    {
      title: "MEDIA",
      image:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        What we Offers?
      </h2>

      <div className="flex gap-6 h-[320px]">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`relative rounded-2xl cursor-pointer overflow-hidden
            transition-all duration-500 ease-in-out
            ${active === index ? "flex-[3]" : "flex-[1]"}`}
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-900/50" />

            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3
                className={`text-white font-bold tracking-wider transition-all duration-300
                ${active === index ? "text-4xl" : "text-2xl"}`}
              >
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;