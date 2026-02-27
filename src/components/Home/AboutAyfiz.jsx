import React from "react";

export default function AboutAyfiz() {
  return (
    <section className="relative overflow-hidden bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="z-10">
          <h4 className="text-gray-800 font-semibold text-lg mb-3 relative inline-block">
            About Ayfiz
            <span className="block w-10 h-[2px] bg-red-500 mt-1"></span>
          </h4>

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug mb-4">
            Lorem Ipsum has been the industry's standard
          </h1>

          <p className="text-gray-600 mb-3 max-w-md">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown
          </p>

          <p className="text-gray-600 mb-6 max-w-md">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
              Lorem Ipsum Has
            </button>

            <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded-full hover:bg-blue-50 transition">
              Lorem has Bee
            </button>
          </div>
        </div>

        {/* Right Shape */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute right-[-150px] lg:right-[-200px] w-[420px] h-[420px] md:w-[520px] md:h-[520px] bg-blue-800 rounded-full flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-semibold tracking-wider">
                AYFIZ
              </div>
              <div className="text-sm tracking-[4px] opacity-80">
                ABSOLUTES
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}