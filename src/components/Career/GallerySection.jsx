import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const GallerySection = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Candid. Unfiltered. Just another day at Ayfiz.
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px] md:auto-rows-[150px]">
          
          {/* Large Left Image - Takes 6 columns and 3 rows */}
          <div className="md:col-span-6 md:row-span-3 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
              alt="Office space" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Top Center Image - Takes 3 columns and 1 row */}
          <div className="md:col-span-3 md:row-span-1 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" 
              alt="Colleague" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Large Right Image - Takes 3 columns and 3 rows */}
          <div className="md:col-span-3 md:row-span-3 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
              alt="Team meeting" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Middle Center Vertical Image - Takes 3 columns and 2 rows */}
          <div className="md:col-span-3 md:row-span-2 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72" 
              alt="Break area" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Bottom Row Left - Takes 3 columns and 1 row */}
          <div className="md:col-span-3 md:row-span-1 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" 
              alt="Solo work" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Bottom Row Middle Left - Takes 3 columns and 1 row */}
          <div className="md:col-span-3 md:row-span-1 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" 
              alt="Conversation" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Explore More Card - Bottom Right */}
          <div className="md:col-span-3 md:row-span-1 bg-[#1A1A1A] p-6 flex flex-col justify-end group cursor-pointer hover:bg-[#252525] transition-colors">
            <p className="text-gray-300 text-sm mb-2">Explore more</p>
            <HiOutlineArrowNarrowRight className="text-2xl transition-transform group-hover:translate-x-2" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default GallerySection;