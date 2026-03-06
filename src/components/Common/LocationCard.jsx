import { useState } from "react";

const LocationCard = ({
  image,
  title,
  description,
  buttonLabel = "View Location",
  address,
  mapUrl,
  onSelectLocation,
  locationId,
  activeLocationId,
  setActiveLocationId
}) => {

  const handleAddressClick = () => {
    if (mapUrl) {
      window.open(mapUrl, "_blank");
    }
  };
 const handleViewClick = () => {
  setActiveLocationId(locationId);

  if (mapUrl && onSelectLocation) {
    onSelectLocation(mapUrl);
  }
};
const showAddress = activeLocationId === locationId;
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-cover bg-center transition-all duration-300 hover:scale-[1.02]" style={{
        backgroundImage: image ? `url(${image})` : "none",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative p-6 flex flex-col justify-between h-64 text-white">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm mt-2 opacity-90">{description}</p>
        </div>

        {/* Button */}
       {!showAddress ? (
  <button
    onClick={handleViewClick}
    className="mt-4 bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-full text-sm font-medium w-fit"
  >
    {buttonLabel}
  </button>
) : (
  <div
    onClick={handleAddressClick}
    className="mt-4 bg-white text-black px-4 py-2 rounded-lg cursor-pointer text-sm font-semibold hover:bg-gray-200 transition"
  >
    {address}
  </div>
)}
      </div>
    </div>
  );
};

export default LocationCard;
