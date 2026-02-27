import Banner from "../../Common/Banner";
import CareerImage from "../../../assets/images/branding.png";
import OfferBlock from "../../Common/OfferBlock";

import offersImage from "../../../assets/images/Media.png";
import ContactCTA from "./ContactCTA";

const MediaDetail = () => {
  return (
    <>
      <Banner title="Offers" bgImage={CareerImage} breadcrumb="Offers" />
      <OfferBlock
      subtitle="What We Do"
      title="Media"
      image={offersImage}
      paragraphs={[
        "Our media division doesn't just create content. We build narratives. We shape perceptions. We take what makes your business genuinely great and translate it into something that lands — on every platform, in every market, with every audience that matters to you.",
        "Strategy first. Always. Because great-looking content with no direction is just noise — and the world already has enough of that."      
      ]}
      points={[
        "Content strategy built around real goals, not just engagement numbers",
        "Digital campaigns that convert — not just campaigns that look good",
        "Video and photo production that makes people feel something",
        "Social media management that keeps your brand sharp, consistent, and alive",
        "Media planning and buying that makes every single penny accountable",
        "Reporting that tells you exactly what worked, what didn't, and what's next"
      ]}
    />
    <ContactCTA/>
    </>
  );
};

export default MediaDetail;
