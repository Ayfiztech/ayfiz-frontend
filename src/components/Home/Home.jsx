import React, { useEffect, useState } from 'react'
import AboutAyfiz from "./AboutAyfiz";
import Blog from "./Blog";
import CompanyList from "./CompanyList";
import HeroSection from "./Hero";
import IdeaForm from "./IdeaForm";
import TrendingNews from "./NewsCard";
import WhatWeOffer from "./WhatWeOffer";

const Home = () => {
  const [aboutShort, setAboutShort] = useState(null);
  const [youtubeVideoUrl, setYoutubeVideoUrl] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://demo.ayfiz.com/ayfiz/api/landingPageDetails');
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const result = await response.json();
        setAboutShort(result.about_section.about_short);
        setYoutubeVideoUrl(result.about_section.youtube_video_url);
        setBlogs(result.blogs);
        setNews(result.news);
      } catch (err) {

      } finally {

      }
    };
    fetchData();
  }, [])
  return (
    <>
      <HeroSection youtubeVideoUrl={youtubeVideoUrl} />
      <WhatWeOffer />
      <AboutAyfiz aboutShort={aboutShort} />
      <CompanyList />
      <TrendingNews news={news} />
      <Blog blogs={blogs} />
      <IdeaForm />
    </>
  );
};

export default Home;
