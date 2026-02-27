import AboutImage from "../../assets/images/blog6.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import Banner from "../Common/Banner";
import { motion } from "framer-motion";

const BlogView = () => {
  const fadeSlideDown = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.8, 0.25, 1], // smoother cubic-bezier
      },
    },
  };

  return (
    <section className="bg-[#EDF3FF] pb-16">
      <Banner title="Blog Post" bgImage={AboutImage} breadcrumb="Blog" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 font-poppins">
        <motion.div
          variants={fadeSlideDown}
          initial="hidden"
          animate="visible"
          className="bg-white shadow-lg p-6 sm:p-8 md:p-12"
        >
          <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4  pb-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 ">
                Blog Post
              </h2>

              <div className="flex gap-2 items-center text-sm text-gray-500">
                <FaRegCalendarAlt className="text-gray-600" />
                Sunday 22-10-2023
              </div>
            </div>

            <div className="mt-6 text-gray-600 text-base leading-8 space-y-4">
              <p>
                The IT and IT Enabled Services (ITES) sector has become the backbone of modern business operations. From startups to global enterprises, organizations are increasingly relying on technology and outsourced process support to improve efficiency, reduce costs, and deliver better customer experiences. As digital transformation accelerates across industries, IT/ITES is no longer just a support function—it is a strategic growth enabler.
              </p>
            </div>
          </>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogView;
