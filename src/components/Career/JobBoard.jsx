import React, { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const JobBoard = () => {
  const [careers, setCareers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [activeTab, setActiveTab] = useState('All positions');
  const [visibleCount, setVisibleCount] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [designation, setDesignation] = useState("");
const [linkedinLink, setLinkedinLink] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(()=>{
const fetchCareers=async()=>{
  try{
const response=await fetch( "https://demo.ayfiz.com/ayfiz/api/careers")
const data=await response.json();
setCareers(data.careers)
setDepartments(data.departments);
  }catch(error){
console.error("error fetching careers :",error)
  }
}
fetchCareers();
  },[])
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch(
      "https://demo.ayfiz.com/ayfiz/api/shared-linkedin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Designation: designation,
          linkedin_link: linkedinLink,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Profile shared successfully!");
      setDesignation("");
      setLinkedinLink("");
      setIsModalOpen(false);
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    console.error("Error submitting LinkedIn profile:", error);
    alert("Error submitting form");
  } finally {
    setIsSubmitting(false);
  }
};
   const filteredJobs =
    activeTab === "All positions"
      ? careers
      : careers.filter((job) => job.department === activeTab);
  const categories = [
    { name: 'All positions', count: 17 },
    { name: 'Engineering', count: 7 },
    { name: 'Product', count: 2 },
    { name: 'Design', count: 1 },
    { name: 'Operation', count: 4 },
    { name: 'Marketing', count: 2 },
  ];

  const jobs = [
    {
      title: "Full-Stack Developers",
      tags: ["Berlin", "Full-time"],
      desc: "Due to growing workload we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features."
    },
    {
      title: "Application developer (react native)",
      tags: ["Berlin", "Full-time"],
      desc: "Due to growing workload we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features."
    },
    {
      title: "Senior Product designer",
      tags: ["Hybrid", "Tallinn", "Full-time"],
      desc: "Since 2015 we've worked on 20+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let's talk!"
    }
  ];

  return (
    <section className="bg-[#F7F9FC] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair text-primary text-center mb-16">
          We have {careers.length} open positions now!
        </h1>

 <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-white p-6 shadow-sm rounded-sm shrink-0">
            <nav className="space-y-1">

              {/* All Tab */}
              <button
                onClick={() => setActiveTab("All positions")}
                className={`w-full text-left px-4 py-3 text-sm font-medium ${
                  activeTab === "All"
                    ? "bg-blue-50 text-blue-700 border-l-4 border-blue-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
               All positions  ({careers.length})
              </button>

              {/* Dynamic Departments */}
              {departments.map((dept) => {
                const count = careers.filter(
                  (job) => job.department === dept
                ).length;

                return (
                  <button
                    key={dept}
                    onClick={() => setActiveTab(dept)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium ${
                      activeTab === dept
                        ? "bg-blue-50 text-blue-700 border-l-4 border-blue-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {dept} ({count})
                  </button>
                );
              })}
            </nav>
             <div className="mt-8 pt-8 border-t">
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                We are always seeking talented people. In case you cannot find your desired position here, please send us your LinkedIn profile and give us your interest information. We will be in touch.
              </p>
              <button onClick={()=>setIsModalOpen(true)}
              className="w-full py-2 px-4 border border-gray-300 text-xs font-semibold rounded-full hover:bg-gray-50 transition-colors">
                Share your LinkedIn profile
              </button>
            </div>  
          </aside>

          {/* Job List */}
          <main
            className="flex-1 w-full space-y-4 overflow-y-auto pr-2"
            style={{ height: "700px" }}
          >
            {filteredJobs.slice(0, visibleCount).map((job) => (
              <div
                key={job.career_id}
                className="bg-white p-8 shadow-sm rounded-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {job.job_title}
                </h3>

                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-blue-50 text-primary text-[10px] font-bold uppercase rounded-full">
                    {job.location}
                  </span>

                  {job.experience_required && (
                    <span className="px-3 py-1 bg-blue-50 text-primary text-[10px] font-bold uppercase rounded-full">
                      {job.experience_required}
                    </span>
                  )}

                  {job.work_mode && (
                    <span className="px-3 py-1 bg-blue-50 text-primary text-[10px] font-bold uppercase rounded-full">
                      {job.work_mode}
                    </span>
                  )}
                </div>

                {/*  Render HTML safely */}
                <div
                  className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-4"
                  dangerouslySetInnerHTML={{
                    __html: job.job_description,
                  }}
                />

                <div className="flex justify-end">
                  <a
                    href={`mailto:${job.apply_link_or_email}`}
                    className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#1e213a] transition-colors"
                  >
                    Apply Now <HiOutlineArrowNarrowRight />
                  </a>
                </div>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="text-center text-gray-400 py-10">
                No positions available
              </div>
            )}
            {visibleCount < filteredJobs.length && (
  <div className="flex justify-center py-8">
    <button
      onClick={() => setVisibleCount((prev) => prev + 3)}
      className="px-8 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-white transition-colors"
    >
      Show more...
    </button>
  </div>  
)}
          </main>
        </div>
        
      </div>
      {isModalOpen && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg w-full max-w-md relative">

      <h2 className="text-xl font-bold mb-6 text-center">
        Share Your LinkedIn Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Your Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded-md"
        />

        <input
          type="text"
          placeholder="LinkedIn Link"
          value={linkedinLink}
          onChange={(e) => setLinkedinLink(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded-md"
        />

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 border rounded-md"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white px-6 py-2 rounded-md"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </section>
    
  );
  
};

export default JobBoard;