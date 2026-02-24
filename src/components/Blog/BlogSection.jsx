import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// import your images
import im1 from "../../assets/images/blog1.jpg";
import im2 from "../../assets/images/blog2.jpg";
import im3 from "../../assets/images/blog3.jpg";
import im4 from "../../assets/images/blog4.jpg";
import im5 from "../../assets/images/blog5.jpg";
import im6 from "../../assets/images/blog6.jpg";

const BlogSection = () => {

  const blogs = [
    {
      heading: "Blog Post",
      label:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "22 Oct 2023",
      image: im1,
      path: "/blog-view",
    },
    {
      heading: "Blog Post",
      label:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "22 Oct 2023",
      image: im2,
      path: "/blog-view",
    },
    {
      heading: "Blog Post",
      label:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "22 Oct 2023",
      image: im3,
      path: "/blog-view",
    },
    {
      heading: "Blog Post",
      label:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "22 Oct 2023",
      image: im4,
      path: "/blog-view",
    },
    {
      heading: "Blog Post",
      label:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "22 Oct 2023",
      image: im5,
      path: "/blog-view",
    },
    {
      heading: "Blog Post",
      label:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "22 Oct 2023",
      image: im6,
      path: "/blog-view",
    },
  ];

  return (
    <section className="bg-[#F0F3F9] py-12">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <Link to={blog.path} key={index}>
              <div               className="overflow-hidden  border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-xl"
>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <img
                    src={blog.image}
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
      </div>
    </section>
  );
};

export default BlogSection;