import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

// Reusable Blog Card Component
const BlogCard = ({ image, title, author, authorImg, date, excerpt }) => (
  <div className="flex flex-col bg-[#1A1A1A] h-full overflow-hidden transition-all duration-300 hover:bg-[#222222] group">
    {/* Featured Image */}
    <div className="aspect-[16/10] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>

    {/* Content Section */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-white mb-6 leading-tight min-h-[3.5rem]">
        {title}
      </h3>

      {/* Author Info */}
      <div className="flex items-center gap-3 mb-6">
        <img 
          src={authorImg} 
          alt={author} 
          className="w-10 h-10 rounded-full object-cover border border-gray-700" 
        />
        <div className="flex flex-col">
          <span className="text-gray-200 text-sm font-medium">{author}</span>
          <span className="text-gray-500 text-xs">{date}</span>
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
        {excerpt}
      </p>

      {/* CTA Button */}
      <div className="mt-auto">
        <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-xs font-bold transition-transform active:scale-95">
          Read more <HiOutlineArrowNarrowRight className="text-lg" />
        </button>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  const blogs = [
    {
      title: "How we build the Dagmarket on 6 months",
      author: "Kaur Kaljuma",
      date: "May 20th 2020",
      image: "https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=600",
      authorImg: "https://i.pravatar.cc/150?u=kaur",
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that..."
    },
    {
      title: "The last anouncement for success factory",
      author: "Raigo Tuulik",
      date: "May 20th 2020",
      image: "https://images.unsplash.com/photo-1475721027187-402ad7741c75?auto=format&fit=crop&q=80&w=600",
      authorImg: "https://i.pravatar.cc/150?u=raigo",
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that..."
    },
    {
      title: "The Role of Repetition in Conversation Design",
      author: "Jüri Siilivask",
      date: "May 20th 2020",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
      authorImg: "https://i.pravatar.cc/150?u=juri",
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that..."
    },
    {
      title: "What I Learned From Getting Hired",
      author: "Mazdak Shakiba",
      date: "May 20th 2020",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600",
      authorImg: "https://i.pravatar.cc/150?u=mazdak",
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that..."
    }
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-white mb-4">
            Stories by Ayfizian!
          </h2>
          <p className="text-gray-400 font-playfair italic">Read more on our blog</p>
        </header>

        {/* Reusable Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;