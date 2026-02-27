import React from "react";
import ill from "../../assets/images/ill.png";

const IdeaForm = () => {
  return (
    <section className="relative w-full flex flex-col lg:flex-row overflow-hidden bg-white">
      
      {/* RIGHT BLUE BACKGROUND (full height on desktop) */}
      <div className="hidden lg:block absolute right-0 top-0 w-[32%] h-full bg-[#2F4B9A]" />

      {/* LEFT SIDE */}
      <div className="relative w-full lg:w-[58%]  px-6 sm:px-12 lg:pl-28 lg:pr-16 py-16 flex items-center">
        <div className="max-w-xl w-full">
          
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-black leading-tight">
            Have an <span className="text-[#2F4B9A]">Idea?</span>
          </h1>

          <p className="text-gray-500 mt-6 mb-10 leading-relaxed text-sm sm:text-base">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing.
            Eu leo molestie vel, ornare non id blandit netus.
          </p>

          {/* FORM */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name *"
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2F4B9A] bg-transparent"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Phone number *"
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2F4B9A] bg-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2F4B9A] bg-transparent"
              />
            </div>

            <input
              type="text"
              placeholder="Start up name"
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2F4B9A] bg-transparent"
            />

            <select className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#2F4B9A] bg-transparent">
              <option>Share Your Idea</option>
            </select>

            <div className="border border-gray-300 px-4 py-3 flex justify-between items-center text-gray-400 cursor-pointer">
              <span>Upload your pitch deck</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </div>

            <button className="w-full bg-[#2F4B9A] text-white py-4 font-semibold tracking-wide hover:bg-[#253d7a] transition">
              SEND
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="flex flex-wrap gap-10 mt-14 text-xs text-gray-600">
            <div className="flex items-start gap-3">
              <span className="text-lg">📞</span>
              <div>
                <p className="font-bold text-black">PHONE</p>
                <p>XXXXXXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-lg">📠</span>
              <div>
                <p className="font-bold text-black">FAX</p>
                <p>XXXXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-lg">✉️</span>
              <div>
                <p className="font-bold text-black">EMAIL</p>
                <p>xxxxx@xxxx.eu</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative hidden lg:flex w-[52%] items-end justify-center">
        <img
          src={ill}
          alt="Illustration"
          className="absolute bottom-0 w-[115%] max-w-none object-contain"
        />
      </div>

      {/* MOBILE IMAGE (below form) */}
      <div className="lg:hidden bg-[#2F4B9A] flex justify-center items-end pt-10">
        <img
          src={ill}
          alt="Illustration"
          className="w-[90%] object-contain"
        />
      </div>
    </section>
  );
};

export default IdeaForm;