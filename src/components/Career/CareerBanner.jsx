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

  const fadeSlideDown = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  return (
    <>
      <Banner title="Life at Ayfiz" bgImage={CareerImage} breadcrumb="Career" />

      <JoinTeamSection scrollToJobs={scrollToJobs} />

      <WhyWorkWithUs />
      <BenefitsGrid />
      <GallerySection />
      <TestimonialSection />

      <div>
        <motion.div variants={fadeSlideDown} initial="hidden" animate="visible">
          <HiringTimeline />

          <div ref={jobBoardRef}>
            <JobBoard />
          </div>

          <BlogSection />
          <SocialFeed />
        </motion.div>
      </div>
    </>
  );
};

export default CareerBanner;