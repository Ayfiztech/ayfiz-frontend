import { useEffect, useState } from "react";
import LocationCard from "../Common/LocationCard";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost/ayfiz";

const LocationRow = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/locations`);
        if (!res.ok) throw new Error("Failed to load locations");
        const data = await res.json();
        setLocations(data.locations || []);
      } catch (err) {
        setError(err.message);
        setLocations([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);

  const imageUrl = (path) =>
    path ? `${API_BASE}/storage/app/public/${path}` : null;

  const formatAddress = (loc) => {
    const parts = [loc.address, loc.city, loc.state_region, loc.country, loc.postal_code].filter(Boolean);
    return parts.join(", ") || loc.address || "";
  };

  const mapUrl = (loc) => {
    return loc.map_url ? loc.map_url : null;
  };

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center min-h-[200px]">
        <p className="text-gray-500">Loading locations...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 flex justify-center items-center min-h-[200px]">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div
        className="grid gap-6 items-center
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3"
      >
        {locations.map((item) => (
          <LocationCard
            key={item.location_id}
            image={imageUrl(item.image)}
            title={item.name}
            description={item.opening_hours || ""}
            address={formatAddress(item)}
            mapUrl={mapUrl(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationRow;
