import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/images/header-white.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* The 'scale-150' and 'h-[100%]' on mobile forces the 16:9 
          YouTube video to stretch and cover the vertical screen.
        */}
        <iframe
          className="h-full w-[177.77vh] min-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/dZWa4Cp8q8Y?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=dZWa4Cp8q8Y&modestbranding=1&playsinline=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
        {/* Dark Overlay to make text pop */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Logo above text as seen in mobile screenshot */}
        <img
          src={logo}
          alt="Ayfiz Absolutes"
          className="w-48 md:w-64 lg:w-80 mb-4"
        />

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tight -mt-8">
          Trust <span className="text-blue-500">Growth</span>
          <br />
          Commitment
        </h1>
      </div>

      {/* Social Icons - Floating Right */}
      <div
        className="
  absolute 
  bottom-6 left-1/2 -translate-x-1/2 
  flex flex-row gap-6 
  md:top-1/2 md:right-10 md:left-auto md:bottom-auto 
  md:-translate-y-1/2 md:translate-x-0 
  md:flex-col 
  z-30 text-lg md:text-xl
  "
      >
        <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
        <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />
        <FaInstagram className="cursor-pointer hover:text-blue-400 transition" />
        <FaLinkedinIn className="cursor-pointer hover:text-blue-400 transition" />
      </div>
    </section>
  );
};

export default HeroSection;
