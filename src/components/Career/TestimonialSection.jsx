import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://demo.ayfiz.com/ayfiz/api/testimonials" 
        );
        const data = await response.json();
        setTestimonials(data.testimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  //  Auto rotate every 2 seconds
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials]);

  if (testimonials.length === 0) {
    return <div className="text-center py-20">Loading testimonials...</div>;
  }

  //  Calculate indexes dynamically
  const main = testimonials[currentIndex];
  const side1 =
    testimonials[(currentIndex + 1) % testimonials.length];
  const side2 =
    testimonials[(currentIndex + 2) % testimonials.length];

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

        <div className="flex flex-col md:flex-row items-center justify-center relative z-10">

          {/* Main Image */}
          <div className="w-full md:w-1/3 z-20 shadow-2xl transform md:translate-x-12">
            <img
              src={main.profile_image}
              alt={main.client_name}
              className="w-full h-[400px] object-cover transition-all duration-700"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 bg-white p-8 md:p-16 shadow-xl pt-12 md:pt-16 mt-[-40px] md:mt-0">
            <FaQuoteLeft className="text-gray-200 text-4xl mb-6" />
            <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
              {main.feedback}
            </p>

            <div>
              <h4 className="text-xl font-bold text-gray-900">
                {main.client_name}
              </h4>
              <p className="text-gray-500 mb-4">
                {main.company_name}
              </p>
              <a
                href={main.linkedin_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <FaLinkedin className="text-primary" />
                LinkedIn profile
              </a>
            </div>
          </div>

          {/* Side Images */}
          <div className="hidden md:flex w-1/6 h-[350px] gap-1 ml-4 overflow-hidden opacity-80">
            <img
              src={side1.profile_image}
              alt={side1.client_name}
              className="w-1/2 h-full object-cover grayscale transition-all duration-700"
            />
            <img
              src={side2.profile_image}
              alt={side2.client_name}
              className="w-1/2 h-full object-cover grayscale transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;