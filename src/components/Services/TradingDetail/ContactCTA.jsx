import React from "react";

const ContactCTA = () => {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(29,53,115,1) 0%, rgba(10,15,35,1) 70%, rgba(7,10,25,1) 100%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-white text-5xl md:text-6xl  mb-6 font-playfair">
         The world is full of opportunity. Let's go get it.
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
         Cross-border trade without the chaos — that's what we do, every single day
        </p>

        <button className="bg-[#0a1229] border border-gray-700 hover:bg-[#151f3d] text-white px-8 py-3 rounded-sm flex items-center gap-3 mx-auto transition-all duration-300 group">
          <span className="font-semibold tracking-wide">Get in touch</span>
          <span className="text-xl group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;
