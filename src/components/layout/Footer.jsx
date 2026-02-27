import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../../assets/images/header-white.png";
const Footer = () => {
  return (
    <footer className="bg-[#1f2430] text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* LOGO + ABOUT */}
          <div>
            <img
              src={Logo}
              alt="AYFIZ ABSOLUTES"
              className="h-24 w-auto object-contain"
            />

            <p className="text-sm leading-relaxed mb-6">
              We look forward to creating and presenting unique ideas, solutions, and experiences that make a difference.
            </p>

            <div className="flex gap-3">
              <div className="w-9 h-9 flex items-center justify-center bg-[#2d3446] rounded-full hover:bg-blue-600 cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-9 h-9 flex items-center justify-center bg-[#2d3446] rounded-full hover:bg-pink-600 cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-9 h-9 flex items-center justify-center bg-[#2d3446] rounded-full hover:bg-red-600 cursor-pointer">
                <FaYoutube />
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">SOME US</h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">IT/ITES</li>
              <li className="hover:text-white cursor-pointer">Ayfiz Brand Studio</li>
              <li className="hover:text-white cursor-pointer">Trading</li>          
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">VOLUPTATE</h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-400" />
                <div>
                  <p>Unit 3A1 third floor Carnival Infopark phase 2</p>
                  <p>Infopark Campus Kochi India-682042</p>
                </div>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-blue-400" />
                <div>
                  <p>+91 484 4533062</p>                  
                  <p>+91 9895127233</p>
                </div>
              </div>

              <div className="flex gap-3">
                <FaPaperPlane className="mt-1 text-blue-400" />
                <div>
                  <p>Mail Us</p>
                  <p>info@ayfiz.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-white font-semibold mb-4">Subscribe to our newsletter</h3>

            <div className="flex border border-gray-500 rounded overflow-hidden mb-4">
              <input
                type="text"
                placeholder="laboris nis *"
                className="bg-transparent px-3 py-2 w-full outline-none text-sm"
              />

              <button className="bg-blue-600 px-4 flex items-center justify-center">
                <MdEmail className="text-white" />
              </button>
            </div>

            <p className="text-sm">
              Subscribe to our newsletter for updates and offers, we won't spam you.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-10 pt-4 text-center text-xs text-gray-400">
           © All Copyright 2026 by Ayfiz Solutions. Designed by Ayfiz Team. Powered by Ayfiz Solutions.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
