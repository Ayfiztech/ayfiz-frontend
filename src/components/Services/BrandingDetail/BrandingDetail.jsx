import Banner from "../../Common/Banner";
import CareerImage from "../../../assets/images/branding.png";
import OfferBlock from "../../Common/OfferBlock";

import offersImage from "../../../assets/images/Offers.png";
import ContactCTA from "./ContactCTA";

const BrandingDetail = () => {
  return (
    <>
      <Banner title="Offers" bgImage={CareerImage} breadcrumb="Offers" />
      <OfferBlock
      subtitle="What We Do"
      title="IT & ITES"
      image={offersImage}
      paragraphs={[
        "We built our IT and ITES division specifically for businesses that are tired of technology that works against them.",
        "We come in, understand how your business actually operates, and build the digital infrastructure that makes everything run the way it always should have — clean, fast, scalable, and completely under control.",
        "No jargon. No overcomplicated solutions. Just technology that works — and a team that makes sure it keeps working.",
      ]}
      points={[
        "Custom software built around your business — not the other way around",
        "Business process outsourcing that cuts costs without cutting quality",
        "Digital transformation that moves at your pace, not ours",
        "24/7 managed IT services — problems solved before you notice them",
        "Enterprise solutions that scale as fast as your ambition does",
        "A team that speaks your language — business first, tech second"
      ]}
    />
    <ContactCTA/>
    </>
  );
};

export default BrandingDetail;
