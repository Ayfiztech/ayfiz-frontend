import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const slideDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Banner = ({ title, bgImage, breadcrumb }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideDown}
      className="relative w-full overflow-hidden"
    >
      <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full ">
        <img
          src={bgImage}
          alt={title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className=" font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-playfair">
            {title}
          </h1>

          <nav className="mt-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm sm:text-base md:text-lg lg:text-xl">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </a>
              </li>

              <li className="flex items-center space-x-2">
                <FaChevronRight className="text-xs sm:text-sm" />
                <span className="font-medium text-white">
                  {breadcrumb}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;