import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FaLinkedin, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "James Olson",
    role: "Product Designer",
    quote: "I do admire the company culture and, I like that. Visioncraft is truly the place where good attitudes have blended with proficiency. If you're going to craft something great and you have a strong eagerness to do that, Visioncraft will remove all hassles in your journey.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500",
    sideImages: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    ]
  },
  // Add more testimonial objects here (up to 6)
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-[#F7F9FC] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-primary mb-4">
            Don't just take our word for it!
          </h2>
          <p className="text-gray-500 text-xl font-playfair">
            See the feedback from your teammates.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-center relative z-10">
            
            {/* Main Featured Image */}
            <div className="w-full md:w-1/3 z-20 shadow-2xl transform md:translate-x-12">
              <img 
                src={current.image} 
                alt={current.name}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Content Card */}
            <div className="w-full md:w-1/2 bg-white p-8 md:p-16 shadow-xl pt-12 md:pt-16 mt-[-40px] md:mt-0">
              <FaQuoteLeft className="text-gray-200 text-4xl mb-6" />
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                {current.quote}
              </p>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900">{current.name}</h4>
                <p className="text-gray-500 mb-4">{current.role}</p>
                <a href="#" className="flex items-center gap-2  text-sm hover:underline">
                  <FaLinkedin  className='text-primary'/> LinkedIn profile
                </a>
              </div>
            </div>

            
            <div className="hidden md:flex w-1/6 h-[350px] gap-1 ml-4 overflow-hidden opacity-80">
                {current.sideImages.map((img, i) => (
                    <img key={i} src={img} className="w-1/2 h-full object-cover grayscale hover:grayscale-0 transition-all" />
                ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto border-t pt-8">
            <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm">{currentIndex + 1}/6 Testimonials</span>
                <div className="w-32 h-1 bg-gray-200">
                    <div 
                        className="h-full bg-black transition-all duration-300" 
                        style={{ width: `${((currentIndex + 1) / 6) * 100}%` }}
                    />
                </div>
            </div>

            <button 
              onClick={nextSlide}
              className="flex items-center gap-2 text-gray-900 font-medium group hover:text-blue-600 transition-colors mt-6 md:mt-0"
            >
              Next <HiOutlineArrowNarrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;