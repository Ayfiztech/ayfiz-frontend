import React from "react";
import { motion } from "framer-motion";
import LogoImg from "../../assets/images/header-white.png";

const HeroGridSection = () => {
  // Increased count to fill 3 rows across most screens
  const portraits = Array.from({ length: 15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5, transition: { duration: 1 } }, // Dimmed background per image
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-black flex items-center">
      {/* 1. Background Grid - 5 columns, roughly 3 rows visible */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute inset-0 grid grid-cols-3 md:grid-cols-5 w-full h-full"
      >
        {portraits.map((_, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="relative aspect-[4/5] md:aspect-square overflow-hidden border-[0.5px] border-white/10"
          >
            <img
              // Using real-person placeholders to match the image vibe better than avatars
              src={`https://i.pravatar.cc/400?img=${i + 10}`}
              alt="Portrait background"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 2. Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-10" />

      {/* 3. Floating Avatar Overlays (Positioned relative to text) */}
      <div className="absolute inset-0 z-40 pointer-events-none">
    
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[22%] w-16 h-16 md:w-24 md:h-24 rounded-full border-[6px] border-[#1111af] overflow-hidden shadow-2xl"
        >
          <img
            src="https://i.pravatar.cc/150?u=pink"
            alt="Featured"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dark Small Floating Circle - Overlapping the pink one slightly */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[14%] left-[28%] w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-black overflow-hidden shadow-xl z-10"
        >
          <img
            src="https://i.pravatar.cc/150?u=dark"
            alt="Featured"
            className="w-full h-full object-cover grayscale bg-zinc-800"
          />
        </motion.div>
      </div>

      <div className="relative z-30 w-full px-6 md:px-16 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          {/* Logo */}
          <motion.img
            variants={textVariants}
            src={LogoImg}
            alt="AYFIZ"
            className="h-20 md:h-24 lg:h-32 w-auto object-contain"
          />

          <motion.h1
            variants={textVariants}
            className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold -mt-6 px-6 leading-[1.1] tracking-tight"
          >
            Lorem ipsum dolor <br />
            sit amet, adipiscing <br />
            elit..
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroGridSection;
