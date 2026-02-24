import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import news from "../assets/images/NewsLetter.png";

const NewsLetter = () => {
  const [showModal, setShowModal] = useState(false);
  const [hasClosedModal, setHasClosedModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const triggerPoint = document.documentElement.scrollHeight / 1.3;

      if (scrollPosition >= triggerPoint && !hasClosedModal) {
        setShowModal(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasClosedModal]);

  const closeModal = () => {
    setShowModal(false);
    setHasClosedModal(true);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-lg bg-white  shadow-2xl p-6 sm:p-8 animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
            >
              ✕
            </button>

            <div className="flex justify-center">
              <img src={news} alt="Newsletter" className="w-16 sm:w-16" />
            </div>

            <div className="text-center mt-6">
              <h3 className="font-Playfair text-2xl sm:text-3xl font-semibold text-primary-dark font-playfair">
                Subscribe Newsletter
              </h3>

              <p className="mt-3  text-sm text-gray-500 leading-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row mb-4">
              <div className="relative w-full">
                <MdOutlineEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border-b border-gray-300  py-2 pl-10 pr-3
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                className="flex items-center justify-center gap-1 bg-primary hover:bg-primary-dark
               text-white px-6 py-2 transition duration-300"
              >
                SUBMIT
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsLetter;
