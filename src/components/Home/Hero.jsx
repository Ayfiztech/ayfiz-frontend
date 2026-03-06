import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/images/header-white.png";

const HeroSection = ({youtubeVideoUrl}) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* The 'scale-150' and 'h-[100%]' on mobile forces the 16:9 
          YouTube video to stretch and cover the vertical screen.
        */}
        <iframe
          className="absolute top-1/2 left-1/2
          min-w-full min-h-full
          w-[177.77vh] h-[56.25vw]
          -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/SyRF8erJ5VY?autoplay=1&mute=1&loop=1&playlist=SyRF8erJ5VY"
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
          Vision that <span className="text-blue-500">Moves</span>
          <br />
          Business.
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
        <a href=""></a> <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
        <a href="https://www.facebook.com/ayfizabsolutes/" target="_blank"><FaFacebookF className="cursor-pointer hover:text-blue-400 transition" /></a>
        <a href="https://www.instagram.com/ayfizabsolutes" target="_blank"><FaInstagram className="cursor-pointer hover:text-blue-400 transition" /></a>
        <a href="https://www.linkedin.com/company/ayfiz" target="_blank"><FaLinkedinIn className="cursor-pointer hover:text-blue-400 transition" /></a>
      </div>
    </section>
  );
};

export default HeroSection;
