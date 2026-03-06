import { useEffect, useState } from "react";
import LocationCard from "../Common/LocationCard";

const LocationRow = ({ onSelectLocation }) => {
  const [locations, setLocations] = useState([]); //  initialize as empty array
  const [loading, setLoading] = useState(true);
  const [activeLocationId, setActiveLocationId] = useState(null);
  console.log("LocationRow received:", onSelectLocation);
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          "https://demo.ayfiz.com/ayfiz/api/locations"
        );

        const data = await response.json();
        console.log(data.locations);
        setLocations(data.locations);

      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading locations...</div>;
  }

  return (
    <div className="p-6">
      <div
        className="grid gap-6 items-center
                   grid-cols-1 
                   sm:grid-cols-2 
                   lg:grid-cols-3"
      >
        {locations.map((item) => {
          console.log("Item map_url:", item.map_url);

          return (
            <LocationCard
              key={item.location_id}
              image={item.image}
              title={item.name}
              description={item.address}
              address={`${item.city}, ${item.state_region}`}
              mapUrl={item.map_url}
              onSelectLocation={onSelectLocation}
              locationId={item.location_id}
              activeLocationId={activeLocationId}
              setActiveLocationId={setActiveLocationId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LocationRow;