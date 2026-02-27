import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost/ayfiz";

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
};

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blogs`);
        if (!res.ok) throw new Error("Failed to load blogs");
        const json = await res.json();
        const list = json.data ?? json.posts ?? json ?? [];
        setBlogs(
          list.map((post) => ({
            heading: post.title,
            label: stripHtml(post.content).slice(0, 120) + (stripHtml(post.content).length > 120 ? "..." : ""),
            date: formatDate(post.publish_date),
            image: post.featured_image || null,
            path: `/blog/${post.post_id}`,
            post_id: post.post_id,
          }))
        );
      } catch (err) {
        setError(err.message);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#F0F3F9] py-12">
        <div className="container mx-auto px-4 lg:px-12 flex justify-center py-12">
          <p className="text-gray-500">Loading blogs...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#F0F3F9] py-12">
        <div className="container mx-auto px-4 lg:px-12 flex justify-center py-12">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F0F3F9] py-12">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 py-8">No posts yet.</p>
          ) : (
            blogs.map((blog) => (
              <Link to={blog.path} key={blog.post_id ?? blog.heading}>
                <div className="overflow-hidden border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-xl">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <img
                      src={blog.image || "https://placehold.co/600x280/f0f3f9/999?text=Blog"}
                      alt={blog.heading}
                      className="h-56 w-full object-cover bg-gray-200"
                      onError={(e) => {
                        e.target.src = "https://placehold.co/600x280/f0f3f9/999?text=Blog";
                      }}
                    />
                  </motion.div>

                  <div className="p-5">
                    <h5 className="mb-2 text-lg font-normal text-gray-900 sm:text-xl lg:text-2xl">
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
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
