import React from 'react';

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col h-full">
      
      {/* Image section */}
      <div className="h-56 md:h-64 w-full overflow-hidden rounded-xl mb-4 shadow-sm">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Text & content */}
      <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      <a 
        href="/blog" 
        className="text-blue-900 font-semibold flex items-center gap-1 hover:underline mt-auto"
      >
        → Your More
      </a>
    </div>
  );
};

export default BlogCard;
