import React from "react";
import BlogBanner from "../components/Blog/BlogBanner";
import BlogSection from "../components/Blog/BlogSection";
import ServicesBanner from "../components/Services/ServicesBanner";
import Branding from "../components/Services/Branding";
import Trading from "../components/Services/Trading";
import Media from "../components/Services/Media";
import HeroSection from "../components/Services/Hero";

const ServicesPage = () => {
  return (
    <div>
      <ServicesBanner />
      <Branding/>
      <Trading/>
      <Media/>
    <HeroSection/>
    </div>
  );
};

export default ServicesPage;
