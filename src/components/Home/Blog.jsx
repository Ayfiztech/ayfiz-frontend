import React from 'react';
import blog1 from '../../assets/images/blog1.jpg';
import blog2 from '../../assets/images/blog2.jpg';
import blog3 from '../../assets/images/blog3.jpg';
import BlogCard from '../Common/BlogCard';

const Blog = () => {
  const blogs = [
    { 
      title: "The Future of IT/ITES",
      desc: "Driving Digital Transformation Through Technology and Service.",
      img: blog1 
    },
    { 
      title: "Our Trading Company Do",
      desc: "The Role of Trading Companies in Today’s Global Supply Chain.",
      img: blog2 
    },
    { 
      title: "The Rise of AI",
      desc: "Artificial Intelligence (AI) is no longer a futuristic concept confined to science fiction.",
      img: blog3 
    }
  ];

  return (
    <div className="bg-white">
      <section className="py-20 px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="mb-12 font-playfair">
          <p className="text-blue-900 font-semibold mb-1 tracking-wide">
            Blog & news —
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Blogs
          </h2>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((b, index) => (
            <BlogCard
              key={index}
              image={b.img}
              title={b.title}
              description={b.desc}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
