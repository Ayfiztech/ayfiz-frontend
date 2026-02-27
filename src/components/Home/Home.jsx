import AboutAyfiz from "./AboutAyfiz";
import Blog from "./Blog";
import CompanyList from "./CompanyList";
import HeroSection from "./Hero";
import IdeaForm from "./IdeaForm";
import TrendingNews from "./NewsCard";
import WhatWeOffer from "./WhatWeOffer";

const Home = () => {
  return (
    <>
    <HeroSection/>
      <WhatWeOffer />
      <AboutAyfiz />
        <CompanyList />
      <TrendingNews />
      <Blog />
    
      <IdeaForm />
    </>
  );
};

export default Home;
