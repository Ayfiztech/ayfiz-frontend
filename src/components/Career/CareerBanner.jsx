import { motion } from "framer-motion";
import { useRef } from "react";
import CareerImage from "../../assets/images/career.png";
import Banner from "../Common/Banner";
import BenefitsGrid from "./BenefitsGrid";
import BlogSection from "./BlogCard";
import GallerySection from "./GallerySection";
import HiringTimeline from "./HiringTimeline";
import JobBoard from "./JobBoard";
import JoinTeamSection from "./JoinTeamSection";
import SocialFeed from "./SocialFeed";
import TestimonialSection from "./TestimonialSection";
import WhyWorkWithUs from "./WhyWorkWithUs";

const CareerBanner = () => {

  const jobBoardRef = useRef(null);

  const scrollToJobs = () => {
    jobBoardRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Banner title="Life at Ayfiz" bgImage={CareerImage} breadcrumb="Career" />
      </motion.div>

      <FadeIn>
        <JoinTeamSection scrollToJobs={scrollToJobs} />
      </FadeIn>

      <FadeIn>
        <WhyWorkWithUs />
      </FadeIn>

      <FadeIn>
        <BenefitsGrid />
      </FadeIn>

      <FadeIn>
        <GallerySection />
      </FadeIn>

      <FadeIn>
        <TestimonialSection />
      </FadeIn>

      <FadeIn>
        <HiringTimeline />
      </FadeIn>

      <FadeIn>
        <div ref={jobBoardRef}>
          <JobBoard />
        </div>
      </FadeIn>

      <FadeIn>
        <BlogSection />
      </FadeIn>

      <FadeIn>
        <SocialFeed />
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

export default CareerBanner;