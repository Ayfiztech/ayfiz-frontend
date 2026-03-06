import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AboutImage from "../../assets/images/blog6.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import Banner from "../Common/Banner";
import { motion } from "framer-motion";

const API_BASE = "https://demo.ayfiz.com/ayfiz/api";

const BlogView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${API_BASE}/get-blog/${id}`);
        if (!response.ok) throw new Error("Post not found");
        const data = await response.json();
        setPost(data.post ?? null);
      } catch (err) {
        setError(err.message);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const fadeSlideDown = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  if (loading) {
    return (
      <section className="bg-[#EDF3FF] pb-16">
        <Banner title="Blog" bgImage={AboutImage} breadcrumb="Blog" />
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          Loading...
        </div>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section className="bg-[#EDF3FF] pb-16">
        <Banner title="Blog" bgImage={AboutImage} breadcrumb="Blog" />
        <div className="max-w-6xl mx-auto px-4 py-20 text-center text-gray-600">
          {error || "Post not found."}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#EDF3FF] pb-16">
      <Banner
        title={post.title}
        bgImage={post.featured_image || AboutImage}
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

          {post.featured_image && (
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-64 sm:h-80 object-cover rounded-lg my-6"
            />
          )}

          <div
            className="mt-6 text-gray-600 text-base leading-8 space-y-4 prose prose-p:mb-4 [&_p]:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogView;
