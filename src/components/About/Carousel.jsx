import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
];

const LifeAtAyfiz = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  return (
    <section className="py-16 bg-white overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <span className="text-primary    text-xs font-bold tracking-[0.2em] uppercase">Gallery</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-4">Life at Ayfiz.</h2>
        <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="mt-8 bg-[#2d4a9f] hover:bg-[#1e3370] text-white px-8 py-3 rounded-md font-medium transition-all shadow-lg shadow-blue-200">
          Join Our Team
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center gap-4 w-full px-4 overflow-hidden">
          {images.map((img, index) => {
            const isActive = index === currentIndex;
            
            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 0.9,
                  opacity: Math.abs(index - currentIndex) > 2 ? 0 : 1,
                }}
                className={`relative transition-all duration-500 ease-in-out shrink-0 
                  ${isActive ? 'w-64 h-80 z-20 shadow-2xl' : 'w-48 h-64 z-10 opacity-60'} 
                  hidden ${index >= currentIndex - 2 && index <= currentIndex + 2 ? 'md:block' : ''} 
                  ${isActive ? 'block' : 'hidden md:block'}
                `}
              >
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className={`w-full h-full object-cover shadow-md ${isActive ? 'rounded-2xl' : 'rounded-lg'}`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 mt-12">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-6 bg-primary ' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtAyfiz;