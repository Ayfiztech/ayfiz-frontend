import React from "react";

const JobCard = ({ title, level, locations = [], description ,  selected = false,
  onSelect,
 }) => {
  return (
    <div className="w-full">
      <div className="bg-gray-100 border-transparent  rounded-lg p-5 sm:p-6 transition duration-300 hover:shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold ">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2 mt-3">
          {level && (
            <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md">
              {level}
            </span>
          )}

          {locations.map((location, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md"
            >
              {location}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-600 leading-6">{description}</p>
      </div>
    </div>
  );
};

export default JobCard;
