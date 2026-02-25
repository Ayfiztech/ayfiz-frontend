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
      subtitle="LOREM IPSUM"
      title="Media"
      image={offersImage}
      paragraphs={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ]}
      points={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet consectetur",
      ]}
    />
    <ContactCTA/>
    </>
  );
};

export default MediaDetail;
