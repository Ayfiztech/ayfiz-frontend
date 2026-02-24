import React from "react";

const DetailedJobCard = ({
  title,
  level,
  locations = [],
  responsibilities,
  specifications = [],
  employmentType,
  workplaceType,
  salary,
  experienceRequired,
  jobLocation,
  onApply,
}) => {
  return (
    <div className="w-full">
      <div className=" p-6 sm:p-8 ">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          {title}
        </h2>

        <div className="flex flex-wrap gap-2 mt-3">
          {level && (
            <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md">
              {level}
            </span>
          )}
          {locations.map((loc, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md"
            >
              {loc}
            </span>
          ))}
        </div>

        {responsibilities && (
          <div className="mt-6">
            <h3 className="font-medium text-gray-800 mb-2">
              Primary Responsibility:
            </h3>
            <p className="text-sm text-gray-600 leading-6">
              {responsibilities}
            </p>
          </div>
        )}

        {specifications.length > 0 && (
          <div className="mt-6">
            <h3 className="font-medium text-gray-800 mb-2">
              Job Specification:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 leading-6">
              {specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 space-y-3 text-sm text-gray-700">
          {employmentType && (
            <p>
              <span className="font-medium">Employment Type:</span>{" "}
              {employmentType}
            </p>
          )}
          {workplaceType && (
            <p>
              <span className="font-medium">Work place Type:</span>{" "}
              {workplaceType}
            </p>
          )}
          {salary && (
            <p>
              <span className="font-medium">Salary:</span> {salary}
            </p>
          )}
          {experienceRequired && (
            <p>
              <span className="font-medium">Experience Required:</span>{" "}
              {experienceRequired}
            </p>
          )}
          {jobLocation && (
            <p>
              <span className="font-medium">Job Location:</span> {jobLocation}
            </p>
          )}
        </div>

        <div className="mt-8">
          <button
            onClick={onApply}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md transition duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedJobCard;
