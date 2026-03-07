import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ image, title, date, excerpt }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/blog");
  };

  return (
    <div className="flex flex-col bg-[#1A1A1A] h-full overflow-hidden transition-all duration-300 hover:bg-[#222222] group">
      
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-4 leading-tight min-h-[3.5rem]">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
          {excerpt}
        </p>

        <div className="mt-auto">
          <button
            onClick={handleReadMore}
            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-xs font-bold transition-transform active:scale-95"
          >
            Read more <HiOutlineArrowNarrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch(
          "https://demo.ayfiz.com/ayfiz/api/success-stories"
        );
        const data = await res.json();

        const formattedData = data.success_stories.map((item) => {
          
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = item.content;
          const plainText = tempDiv.textContent || "";

          return {
            id: item.post_id,
            title: item.title,
            image: item.featured_image,
            excerpt: plainText,
            date: item.publish_date
              ? new Date(item.publish_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : null,
          };
        });

        setBlogs(formattedData);
      } catch (error) {
        console.error("Error fetching success stories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-white mb-4">
            Stories by Ayfizian!
          </h2>
          <p className="text-gray-400 font-playfair italic">
            Read more on our blog
          </p>
        </header>

        {/* Loading */}
        {loading ? (
          <div className="text-center text-gray-400">Loading stories...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;