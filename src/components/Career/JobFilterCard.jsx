import React from "react";
import { FaSearch } from "react-icons/fa";

const JobFilterCard = () => {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-md p-6 md:p-8">
        
       
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search for jobs..."
              className="w-full rounded-md bg-gray-200 py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row items-center justify-between gap-4  flex-wrap">
        
          <div className="w-full md:w-auto">
            <label className="block text-sm text-gray-600 mb-1">
              Experience Level
            </label>
            <select className="w-full md:w-48 bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Experience Level</option>
              <option>Fresher</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
            </select>
          </div>

         
          <div className="w-full md:w-auto">
            <label className="block text-sm text-gray-600 mb-1">
              Location
            </label>
            <select className="w-full md:w-48 bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Location</option>
              <option>Remote</option>
              <option>Onsite</option>
            </select>
          </div>

        
          <div className="w-full md:w-auto">
            <label className="block text-sm text-gray-600 mb-1">
              Categories
            </label>
            <select className="w-full md:w-48 bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>IT</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </div>

          
          <div className="w-full md:w-auto mt-2 md:mt-6">
            <button className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md transition duration-300">
              View Jobs
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobFilterCard;