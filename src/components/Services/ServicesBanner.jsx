import Banner from "../Common/Banner";
import CareerImage from "../../assets/images/Offer.png";

const ServicesBanner = () => {
  return (
    <>
      <Banner title="What we Offer" bgImage={CareerImage} breadcrumb="Services" />
    </>
  );
};

export default ServicesBanner;
