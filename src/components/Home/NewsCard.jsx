import React from "react";
import { Clock, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

const NewsCard = ({ item }) => {
  console.log(item, 'itemss')
  return (
    <div
      className={`relative rounded-xl overflow-hidden group cursor-pointer ${item.size === "large"
        ? "h-[260px] md:h-[320px]"
        : "h-[200px] md:h-[220px]"
        }`}
    >
      {/* Background Image */}
      <img
        src={item.featured_image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-5 md:p-6">

        <h3
          className={`text-white font-semibold mt-3 leading-snug ${item.size === "large"
            ? "text-lg md:text-xl"
            : "text-sm md:text-base"
            }`}
        >
          {item.title}
        </h3>

        <div className="flex items-center flex-wrap text-gray-300 text-xs mt-3 gap-4">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            {item.publish_date?.split("T")[0]} 
            </div>
        </div>
      </div>
    </div>
  );
};

export default function TrendingNews({ news }) {
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/blog')
  }
  console.log(news, 'news')
  const largeNews = news.slice(0, 2);
  const smallNews = news.slice(2, 5);

   const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration:1 }
    }
  }
  return (
    <section className="w-full bg-[#0b1622] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl  font-playfair font-bold text-white my-2">
              Trending News
            </h2>
            <div className="w-12 h-1 bg-primary mb-2 mt-4 rounded-full" />
          </div>

          <button onClick={handleClick} className="text-xs md:text-sm bg-[#111c2a] text-gray-300 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition">
            VIEW ALL →
          </button>
        </div>

        {/* Top Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" onClick={handleClick}>
          {largeNews.map((item) => (
            <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <NewsCard key={item.post_id} item={item} />
            </motion.section>
          ))}
        </div>

        {/* Bottom Small Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" onClick={handleClick}>
          {smallNews.map((item) => (
            <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <NewsCard key={item.post_id} item={item} />
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}
