import React, { useEffect, useState } from 'react'
import AboutAyfiz from "./AboutAyfiz";
import Blog from "./Blog";
import CompanyList from "./CompanyList";
import HeroSection from "./Hero";
import IdeaForm from "./IdeaForm";
import TrendingNews from "./NewsCard";
import WhatWeOffer from "./WhatWeOffer";
import { motion } from "framer-motion"

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
  
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration:1 }
    }
  }
  return (
    <>
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <HeroSection youtubeVideoUrl={youtubeVideoUrl} />
      </motion.section>
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <WhatWeOffer />
      </motion.section>
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <AboutAyfiz aboutShort={aboutShort} />
      </motion.section>
        <CompanyList />
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <TrendingNews news={news} />
      </motion.section>
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Blog blogs={blogs} />
      </motion.section>
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <IdeaForm />
      </motion.section>
    </>
  );
};

export default Home;
