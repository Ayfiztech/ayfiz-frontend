// HeroSection.jsx
import React from "react";
import bgimage from "../../assets/images/offerbg.png"; // 🔥 add your bg image

import LApplication from "../../assets/images/offerblog.png"; // 🔥 add your bg image
import ServiceCard from "../Common/ServiceCard";
import { motion } from "framer-motion";

const HeroSection = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="container mx-auto mt-16 p-2 pt-16 max-sm:mt-2 max-sm:pt-4 lg:px-4">
        <div className="grid gap-x-12 md:grid-cols-2 lg:grid-cols-2 lg:items-center">
          {" "}
          <motion.div
            className="max-sm:order-2"
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
          >
            <div className="max-w-full ">
              <p className=" text-xs font-semibold tracking-widest text-[#111D15] uppercase font-playfair ">
                Ayfiz Solutions
              </p>

              <h2 className="mt-2 text-2xl md:text-4xl font-bold text-primary-dark font-playfair">
                You have a story worth telling. Let's make sure the world hears it.
              </h2>

              <p className="mt-4 text-sm md:text-base text-white leading-relaxed">
                Media that moves people — and moves businesses forward.
              </p>

              <button
                // onClick={onClick}
                className="mt-6 bg-[#1B4398] text-white px-6 md:px-8 py-3 text-sm md:text-base font-normal hover:bg-[#163a7d] transition duration-300"
              >
                Ger in Touch
              </button>
            </div>
          </motion.div>
          <div aria-hidden="true" className="mt-10 max-sm:order-1 lg:mt-0">
            <motion.div
              aria-hidden="true"
              className="mt-10 max-sm:order-1 lg:mt-0"
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="inline-block  py-5 max-sm:px-1 max-sm:py-2"
              >
                <img src={LApplication} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
