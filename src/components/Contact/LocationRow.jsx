import bgImg3 from "../../assets/images/cont3.png";
import LocationCard from "../Common/LocationCard";
import bgImg2 from "../../assets/images/cont2.png";
import bgImg1 from "../../assets/images/cont1.png";

const locations = [
  {
    image: bgImg3,
    title: "Ernakulam",
    description: "This is the address",
    address: "Ernakulam, Kerala",
    mapUrl: "https://www.google.com/maps?q=Ernakulam",
  },
  {
    image: bgImg2,
    title: "Delhi",
    description: "Main Office Location",
    address: "Kochi, Kerala",
    mapUrl: "https://www.google.com/maps?q=Kochi",
  },
  {
    image: bgImg1,
    title: "Jammu and Kashmir",
    description: "Jammu and Kashmir",
    address: "Trivandrum, Kerala",
    mapUrl: "https://www.google.com/maps?q=Trivandrum",
  },
];
const LocationRow = () => {
  return (
    <div className="p-6">
      <div
        className="grid gap-6 items-center
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3"
      >
        {locations.map((item, index) => (
          <LocationCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            address={item.address}
            mapUrl={item.mapUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationRow;
