import React, { useState, useEffect } from "react";
import Banner from "../Common/Banner";
import CareerImage from "../../assets/images/career.png";
import JobFilterCard from "./JobFilterCard";
import { motion } from "framer-motion";
import JobCard from "../Common/JobCard";
import DetailedJobCard from "../Common/DetailedJobCard";
import WorkTogether from "./WorkTogether";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost/ayfiz";

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
};

const mapCareerToJob = (c) => {
  const locationStr = c.location || "";
  const locations = locationStr ? locationStr.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const specifications = c.interview_process
    ? c.interview_process.split(/\n/).map((s) => s.trim()).filter(Boolean)
    : [];
  return {
    id: c.career_id,
    title: c.job_title,
    department: c.department || "",
    level: c.experience_required || c.department || "",
    locations,
    responsibilities: stripHtml(c.job_description),
    specifications,
    employmentType: c.work_type || "Full-time",
    workplaceType: c.work_mode || "Onsite",
    salary: "As per company norms",
    experienceRequired: c.experience_required || "",
    jobLocation: locationStr || "—",
    applyLinkOrEmail: c.apply_link_or_email,
  };
};

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

  const [allJobs, setAllJobs] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    locations: [],
    departments: [],
    experience_levels: [],
  });
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    category: "",
    experienceLevel: "",
  });
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/careers`);
        if (!res.ok) throw new Error("Failed to load careers");
        const data = await res.json();
        const jobs = (data.careers || []).map(mapCareerToJob);
        setAllJobs(jobs);
        setFilterOptions({
          locations: data.locations || [],
          departments: data.departments || [],
          experience_levels: data.experience_levels || [],
        });
        if (jobs.length > 0) setSelectedJob(jobs[0]);
      } catch (err) {
        setError(err.message);
        setAllJobs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  const jobsData = React.useMemo(() => {
    return allJobs.filter((job) => {
      const matchSearch =
        !filters.search ||
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        (job.responsibilities && job.responsibilities.toLowerCase().includes(filters.search.toLowerCase()));
      const matchLocation =
        !filters.location ||
        job.jobLocation.toLowerCase().includes(filters.location.toLowerCase()) ||
        job.locations.some((loc) => loc.toLowerCase().includes(filters.location.toLowerCase()));
      const matchCategory =
        !filters.category || job.department === filters.category || job.title.toLowerCase().includes(filters.category.toLowerCase());
      const matchExperience =
        !filters.experienceLevel || job.experienceRequired === filters.experienceLevel || job.level === filters.experienceLevel;
      return matchSearch && matchLocation && matchCategory && matchExperience;
    });
  }, [allJobs, filters]);

  useEffect(() => {
    setSelectedJob((prev) => {
      if (jobsData.length === 0) return null;
      if (!prev || !jobsData.some((j) => j.id === prev.id)) return jobsData[0];
      return prev;
    });
  }, [jobsData]);

  return (
    <>
      <Banner title="Career" bgImage={CareerImage} breadcrumb="Career" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 font-poppins">
        <motion.div variants={fadeSlideDown} initial="hidden" animate="visible">
          {" "}
          <JobFilterCard
            locations={filterOptions.locations}
            departments={filterOptions.departments}
            experienceLevels={filterOptions.experience_levels}
            search={filters.search}
            location={filters.location}
            category={filters.category}
            experienceLevel={filters.experienceLevel}
            onFilterChange={setFilters}
          />
        </motion.div>
      </div>

      <div className=" min-h-screen p-4 mt-8">
        {loading && (
          <div className="max-w-7xl mx-auto flex justify-center py-12">
            <p className="text-gray-500">Loading careers...</p>
          </div>
        )}
        {error && (
          <div className="max-w-7xl mx-auto flex justify-center py-12">
            <p className="text-red-500">{error}</p>
          </div>
        )}
        {!loading && !error && (
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className=" -[700px] overflow-y-auto space-y-4">
              {jobsData.length === 0 ? (
                <p className="text-gray-500">No openings at the moment.</p>
              ) : (
                jobsData.map((job) => (
                  <div
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className={`cursor-pointer transition ${
                      selectedJob?.id === job.id
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
                ))
              )}
            </div>

            <div className="bg-gray-100 rounded-xl p-4 h-[700px] overflow-y-auto">
              {selectedJob ? (
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
                  onApply={() => {
                    if (selectedJob.applyLinkOrEmail) {
                      if (selectedJob.applyLinkOrEmail.startsWith("http")) {
                        window.open(selectedJob.applyLinkOrEmail, "_blank");
                      } else {
                        window.location.href = `mailto:${selectedJob.applyLinkOrEmail}`;
                      }
                    } else {
                      alert("Apply for " + selectedJob.title);
                    }
                  }}
                />
              ) : (
                <p className="text-gray-500 p-6">Select a job to view details.</p>
              )}
            </div>
          </div>
        )}

        <WorkTogether />
      </div>
    </>
  );
};

export default CareerBanner;
