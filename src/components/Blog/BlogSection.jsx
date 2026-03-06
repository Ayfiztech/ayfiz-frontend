import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const POSTS_PER_PAGE = 6;

function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(POSTS_PER_PAGE);

  useEffect(() => {
    const stripHtml = (html) =>
      (html || "")
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    const formatDate = (dateStr) => {
      if (!dateStr) return "";
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    };

    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://demo.ayfiz.com/ayfiz/api/blogs"
        );
        const data = await response.json();
        const list = Array.isArray(data) ? data : (data?.blogs ?? []);
        setBlogs(
          list.map((post) => ({
            path: `/blog-View/${post.post_id}`,
            heading: post.title,
            label: stripHtml(post.content).slice(0, 120) + (stripHtml(post.content).length > 120 ? "…" : ""),
            date: formatDate(post.publish_date),
            featured_image: post.featured_image,
          }))
        );
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading blogs...</div>;
  }

  return (
    <section className="bg-[#F0F3F9] py-12">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, displayCount).map((blog, index) => (
            <Link to={blog.path} key={blog.path}>
              <div className="overflow-hidden  border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-xl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <img
                    src={blog.featured_image}
                    alt={blog.heading}
                    className="h-56 w-full object-cover"
                  />
                </motion.div>

                <div className="p-5">
                  <h5 className="mb-2 text-lg  font-normal text-gray-900 sm:text-xl lg:text-2xl">
                    {blog.heading}
                  </h5>

                  <p className="mb-3 text-sm text-[#555555] line-clamp-3">
                    {blog.label}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-[#555555]">
                    <FaRegCalendarAlt className="text-black" />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {displayCount < blogs.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setDisplayCount((c) => c + POSTS_PER_PAGE)}
              className="rounded-lg bg-[#1a1a2e] px-8 py-3 text-white transition hover:bg-[#16213e]"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogSection;
