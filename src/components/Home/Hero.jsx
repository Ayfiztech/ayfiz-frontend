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
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* YouTube Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/dZWa4Cp8q8Y?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=dZWa4Cp8q8Y&modestbranding=1&playsinline=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-20 flex items-center  h-full px-8 lg:px-16">
        <div className="max-w-2xl">
          <img src={logo} alt="logo" className="w-56 h-auto lg:w-80" />

          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight -mt-12 ">
          Trust  <a className="text-primary">Growth</a><br/>
           Commitment 
          </h1>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-20">
        <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
        <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />
        <FaInstagram className="cursor-pointer hover:text-blue-400 transition" />
        <FaLinkedinIn className="cursor-pointer hover:text-blue-400 transition" />
      </div>
    </section>
  );
};

export default HeroSection;
