import { useState } from "react";
import ContactForm from "../components/Contact/ContactForm";
import ContactUsBanner from "../components/Contact/ContactUsBanner";
import LocationRow from "../components/Contact/LocationRow";

const ContactUsPage = () => {

  const [selectedMapUrl, setSelectedMapUrl] = useState(
    "https://www.google.com/maps?q=Kochi,Kerala&output=embed"
  );

  console.log("selectedMapUrl:", selectedMapUrl);   

  return (
    <>
      <ContactUsBanner />

      <LocationRow onSelectLocation={setSelectedMapUrl} />

      <ContactForm mapUrl={selectedMapUrl} />
    </>
  );
};

export default ContactUsPage;