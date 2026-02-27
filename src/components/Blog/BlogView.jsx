import { useState, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Banner from "../Common/Banner";
import { motion } from "framer-motion";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost/ayfiz";

const normalizeImageUrl = (url) => {
  if (!url) return null;
  return url;
};

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  });
};

const BlogView = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(!!postId);
  const [error, setError] = useState(null);

  const fadeSlideDown = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  useEffect(() => {
    if (!postId) {
      setLoading(false);
      return;
    }
    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/get-blog/${postId}`);
        if (!res.ok) throw new Error("Post not found");
        const data = await res.json();
        setPost(data.post);
      } catch (err) {
        setError(err.message);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  if (!postId) {
    return (
      <section className="bg-[#EDF3FF] pb-16">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center text-gray-500">
          No post selected.
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="bg-[#EDF3FF] pb-16">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center text-gray-500">
          Loading...
        </div>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section className="bg-[#EDF3FF] pb-16">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center text-red-500">
          {error || "Post not found."}
        </div>
      </section>
    );
  }

  const imageUrl = normalizeImageUrl(post.featured_image) || "https://placehold.co/1200x400/f0f3f9/999?text=Blog";

  return (
    <section className="bg-[#EDF3FF] pb-16">
      <Banner
        title={post.title}
        bgImage={imageUrl}
        breadcrumb="Blog"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 font-poppins">
        <motion.div
          variants={fadeSlideDown}
          initial="hidden"
          animate="visible"
          className="bg-white shadow-lg p-6 sm:p-8 md:p-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              {post.title}
            </h2>
            <div className="flex gap-2 items-center text-sm text-gray-500">
              <FaRegCalendarAlt className="text-gray-600" />
              <span>{formatDate(post.publish_date)}</span>
              {post.author && (
                <span className="ml-2">· {post.author}</span>
              )}
            </div>
          </div>

          <div
            className="mt-6 text-gray-600 text-base leading-8 space-y-4 prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogView;
