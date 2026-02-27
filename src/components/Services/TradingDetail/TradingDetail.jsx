import Banner from "../../Common/Banner";
import CareerImage from "../../../assets/images/branding.png";
import OfferBlock from "../../Common/OfferBlock";

import offersImage from "../../../assets/images/trading.png";
import ContactCTA from "./ContactCTA";

const TradingDetail = () => {
  return (
    <>
      <Banner title="Offer" bgImage={CareerImage} breadcrumb="Offer" />
      <OfferBlock
      subtitle="What We Do"
      title="Trading"
      image={offersImage}
      paragraphs={[
        "We've spent a decade in the trenches of global trade — building the kind of networks that don't appear in directories, earning the kind of trust that doesn't come from a contract, and developing the kind of expertise that only comes from doing it over and over until you get it exactly right.",
        "When you bring us in, you're not hiring a middleman. You're plugging directly into a decade's worth of relationships, market intelligence, and cross-border experience — and putting all of it to work for your business from day one",
      ]}
      points={[
        "Supply chain management across 15+ countries, handled end to end",
        "Sourcing and procurement through relationships built over a decade",
        "Import and export that moves fast, lands clean, and causes zero drama",
        "Market entry strategy for businesses ready to go further",
        "Risk management that protects you before problems even arrive",
        "Access to a network across 4 continents — immediately",
      ]}
    />
    <ContactCTA/>
    </>
  );
};

export default TradingDetail;
