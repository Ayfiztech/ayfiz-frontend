import React from "react";
import { FaSearch } from "react-icons/fa";

const JobFilterCard = ({
  locations = [],
  departments = [],
  experienceLevels = [],
  search = "",
  location: locationFilter = "",
  category = "",
  experienceLevel = "",
  onFilterChange,
}) => {
  const handleChange = (name, value) => {
    onFilterChange?.((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    onFilterChange?.({
      search: "",
      location: "",
      category: "",
      experienceLevel: "",
    });
  };

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search for jobs..."
              value={search}
              onChange={(e) => handleChange("search", e.target.value)}
              className="w-full rounded-md bg-gray-200 py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
          <div className="w-full md:w-auto">
            <label className="block text-sm text-gray-600 mb-1">
              Experience Level
            </label>
            <select
              value={experienceLevel}
              onChange={(e) => handleChange("experienceLevel", e.target.value)}
              className="w-full md:w-48 bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Experience Level</option>
              {experienceLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-auto">
            <label className="block text-sm text-gray-600 mb-1">
              Location
            </label>
            <select
              value={locationFilter}
              onChange={(e) => handleChange("location", e.target.value)}
              className="w-full md:w-48 bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-auto">
            <label className="block text-sm text-gray-600 mb-1">
              Categories
            </label>
            <select
              value={category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="w-full md:w-48 bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-auto mt-2 md:mt-6">
            <button
              type="button"
              onClick={handleClear}
              className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md transition duration-300"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilterCard;