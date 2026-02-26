import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const JobBoard = () => {
  const [activeTab, setActiveTab] = useState('All positions');

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
        <h1 className="text-4xl md:text-5xl font-playfair text-[#3E5C9A] text-center mb-16">
          We have 17 open positions now!
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Left Sidebar Filter */}
          <aside className="w-full md:w-64 bg-white p-6 shadow-sm rounded-sm shrink-0">
            <nav className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveTab(cat.name)}
                  className={`w-full flex justify-between items-center px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === cat.name 
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </nav>
            <div className="mt-8 pt-8 border-t">
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                We are always seeking talented people. In case you cannot find your desired position here, please send us your LinkedIn profile and give us your interest information. We will be in touch.
              </p>
              <button className="w-full py-2 px-4 border border-gray-300 text-xs font-semibold rounded-full hover:bg-gray-50 transition-colors">
                Share your LinkedIn profile
              </button>
            </div>
          </aside>

          {/* Right Content Area - Fixed Height & Scrollable */}
          <main 
            className="flex-1 w-full space-y-4 overflow-y-auto pr-2 custom-scrollbar"
            style={{ height: '700px' }} // Fixed height as requested
          >
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white p-8 shadow-sm rounded-sm group hover:shadow-md transition-shadow relative">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{job.title}</h3>
                
                <div className="flex gap-2 mb-6">
                  {job.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {job.desc}
                </p>

                <div className="flex justify-end">
                  <button className="bg-[#2D3154] text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#1e213a] transition-colors">
                    See positions <HiOutlineArrowNarrowRight />
                  </button>
                </div>
              </div>
            ))}

            {/* Load More Button */}
            <div className="flex justify-center py-8">
                <button className="px-8 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-white transition-colors">
                    Show more...
                </button>
            </div>
          </main>
        </div>

        {/* Footer Contact */}
        <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm my-6">
                If your experts that not match with current Opening Positions, send your resume to and portfolio to
            </p>
            <a href="mailto:hr@ayfiz.com" className="text-primary text-lg font-bold italic hover:underline">
                hr@ayfiz.com
            </a>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3E5C9A;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default JobBoard;