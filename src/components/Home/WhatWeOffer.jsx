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
    // Future cards can be added here 👇
    // { title: "NEW", image: "url" },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-semibold text-center mb-12 text-primary-dark font-playfair">
        What we Offer?
      </h2>

      {/* Cards Container */}
      <div
        className="
        flex gap-6 h-[320px]
        overflow-x-auto md:overflow-visible
        snap-x snap-mandatory md:snap-none
        scroll-smooth
        "
      >
        {services.map((service, index) => (
          <div
            key={index}
            onClick={(e) => {
              setActive(index);
              e.currentTarget.scrollIntoView({
                behavior: "smooth",
                inline: "center",
              });
            }}
            className={`
              relative rounded-2xl cursor-pointer overflow-hidden
              transition-all duration-500 ease-in-out
              flex-shrink-0
              w-[250px] md:w-auto
              snap-center
              ${
                active === index
                  ? "md:flex-[3] scale-105"
                  : "md:flex-[1] scale-95"
              }
            `}
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-900/50" />

            {/* Title Position Logic */}
            <div
              className={`absolute inset-0 flex px-6
              ${
                active === index
                  ? "items-center justify-center"
                  : index % 3 === 0
                  ? "items-start justify-center pt-10"
                  : index % 3 === 1
                  ? "items-center justify-center"
                  : "items-end justify-center pb-10"
              }`}
            >
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