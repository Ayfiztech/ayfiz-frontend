import { motion } from "framer-motion";
import BlogImage from "../../assets/images/blog6.jpg";
import Banner from "../Common/Banner";
import AboutSection from "./AboutUs";
import LifeAtAyfiz from "./Carousel";
import CoreValues from "./CoreValues";
import HeroGridSection from "./HeroGridSection";
import QuoteCard from "./QuoteCard";

const AboutBanner = () => {
  return (
    <>
     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Banner title="Who We Are?" bgImage={BlogImage} breadcrumb="About" />
      </motion.div>

      <FadeIn>
        <AboutSection />
      </FadeIn>

      <FadeIn>
        <HeroGridSection />
      </FadeIn>

      <FadeIn>
        <CoreValues />
      </FadeIn>

      <FadeIn>
        <QuoteCard />
      </FadeIn>

      <FadeIn>
        <LifeAtAyfiz />
      </FadeIn>
    </>
  );
};

const FadeIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default AboutBanner;
