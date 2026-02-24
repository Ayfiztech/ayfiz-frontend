import React, { useState } from "react";
import Banner from "../Common/Banner";
import CareerImage from "../../assets/images/career.png";
import JobFilterCard from "./JobFilterCard";
import { motion } from "framer-motion";
import JobCard from "../Common/JobCard";
import DetailedJobCard from "../Common/DetailedJobCard";

const CareerBanner = () => {
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

  const jobsData = [
    {
      id: 1,
      title: "Full Stack Developer",
      level: "Mid-Level",
      locations: ["Chennai", "Madurai"],
      responsibilities:
        "Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks...",
      specifications: [
        "Proficiency in HTML, CSS, JavaScript.",
        "Experience with Node.js and databases.",
        "Strong Git knowledge.",
      ],
      employmentType: "Full-time",
      workplaceType: "Hybrid",
      salary: "Commensurate with experience",
      experienceRequired: "Minimum 3 Years",
      jobLocation: "Chennai, Madurai, Coimbatore",
    },
    {
      id: 2,
      title: "React Developer",
      level: "Mid-Level",
      locations: ["Chennai", "Madurai"],
      responsibilities:
        "Developing and implementing front-end applications using React...",
      specifications: [
        "Strong React knowledge.",
        "State management experience.",
        "API integration skills.",
      ],
      employmentType: "Full-time",
      workplaceType: "Hybrid",
      salary: "Based on experience",
      experienceRequired: "Minimum 2 Years",
      jobLocation: "Chennai",
    },
    {
      id: 3,
      title: "Flutter Developer",
      level: "Mid-Level",
      locations: ["Chennai", "Madurai"],
      responsibilities:
        "Building cross-platform mobile applications using Flutter...",
      specifications: [
        "Flutter & Dart expertise.",
        "Firebase integration.",
        "REST API knowledge.",
      ],
      employmentType: "Full-time",
      workplaceType: "Onsite",
      salary: "Negotiable",
      experienceRequired: "Minimum 2 Years",
      jobLocation: "Madurai",
    },
  ];

  const [selectedJob, setSelectedJob] = useState(jobsData[0]);

  return (
    <>
      <Banner title="Career" bgImage={CareerImage} breadcrumb="Career" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 font-poppins">
        <motion.div variants={fadeSlideDown} initial="hidden" animate="visible">
          {" "}
          <JobFilterCard />
        </motion.div>
      </div>

      <div className=" min-h-screen p-4 mt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      
          <div className=" -[700px] overflow-y-auto space-y-4">
            {jobsData.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className={`cursor-pointer transition ${
                  selectedJob.id === job.id
                    ? "border border-blue-500 rounded-lg text-primary"
                    : ""
                }`}
              >
                <JobCard
                  title={job.title}
                  level={job.level}
                  locations={job.locations}
                  description={job.responsibilities}
                  
                />
              </div>
            ))}
          </div>

          <div className="bg-gray-100 rounded-xl p-4 h-[700px] overflow-y-auto">
            <DetailedJobCard
              title={selectedJob.title}
              level={selectedJob.level}
              locations={selectedJob.locations}
              responsibilities={selectedJob.responsibilities}
              specifications={selectedJob.specifications}
              employmentType={selectedJob.employmentType}
              workplaceType={selectedJob.workplaceType}
              salary={selectedJob.salary}
              experienceRequired={selectedJob.experienceRequired}
              jobLocation={selectedJob.jobLocation}
              onApply={() => alert("Apply for " + selectedJob.title)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerBanner;
