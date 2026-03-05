import React from "react";
import { Clock, Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    tag: "Lorem",
    title: "LOREM LOREM LOREM",
    date: "27 August, 2024",
    time: "10 mins",
    image:
      "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?q=80&w=1200",
    size: "large",
  },
  {
    id: 2,
    tag: "Lorem",
    title: "LOREM LOREM LOREM",
    date: "27 August, 2024",
    time: "10 mins",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1200",
    size: "large",
  },
  {
    id: 3,
    tag: "Lorem",
    title: "LOREM LOREM LOREM",
    date: "27 August, 2024",
    time: "5 mins",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=600",
    size: "small",
  },
  {
    id: 4,
    tag: "Lorem",
    title: "LOREM LOREM LOREM",
    date: "27 August, 2024",
    time: "5 mins",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600",
    size: "small",
  },
  {
    id: 5,
    tag: "Lorem",
    title: "LOREM LOREM LOREM",
    date: "27 August, 2024",
    time: "5 mins",
    image:
      "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=600",
    size: "small",
  },
];

const NewsCard = ({ item }) => {
  console.log(item)
  return (
    <div
      className={`relative rounded-xl overflow-hidden group cursor-pointer ${
        item.size === "large"
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
        <span className="text-[10px] font-semibold tracking-widest bg-primary text-white px-2 py-1 rounded">
          {item.tag}
        </span>

        <h3
          className={`text-white font-semibold mt-3 leading-snug ${
            item.size === "large"
              ? "text-lg md:text-xl"
              : "text-sm md:text-base"
          }`}
        >
          {item.title}
        </h3>

        <div className="flex items-center flex-wrap text-gray-300 text-xs mt-3 gap-4">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            {item.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            {item.time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TrendingNews({news}) {
  console.log(news)
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

          <button className="text-xs md:text-sm bg-[#111c2a] text-gray-300 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition">
            VIEW ALL →
          </button>
        </div>

        {/* Top Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {news
            .filter((item) => item.size === "large")
            .map((item) => (
              <NewsCard key={item.post_id} item={item} />
            ))}
        </div>

        {/* Bottom Small Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {news
            .filter((item) => item.size === "small")
            .map((item) => (
              <NewsCard key={item.post_id} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
}
