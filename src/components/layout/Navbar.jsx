import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../../assets/images/header-blue.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const isHome = location.pathname === "/";
  const isActive = (path) => location.pathname === path;
  const isServicesActive = location.pathname.includes("/services");
  const linkClass = (path) =>
    isActive(path) ? "text-[#4F5665] font-semibold" : "text-[#02002E]";

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isHome ? "bg-blue-700 text-white" : "bg-white text-gray-800 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6  flex justify-between items-center">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
           className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/about" className={linkClass("/about")}>
            About Us
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 ${
                isServicesActive
                  ? "text-[#4F5665] font-semibold"
                  : "text-[#02002E]"
              }`}
            >
              Services <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-8 left-0 bg-white text-gray-800 shadow-lg rounded-lg w-40 py-2">
                <Link
                  to="/services/brand"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Brand
                </Link>
                <Link
                  to="/services/media"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Media
                </Link>
                <Link
                  to="/services/it"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  IT
                </Link>
              </div>
            )}
          </div>

          <Link to="/blog" className={linkClass("/blog")}>
            Blog
          </Link>
          <Link to="/career" className={linkClass("/career")}>
            Career
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact Us
          </Link>

          <Link
            to="/contact"
            className={`px-5 py-2 rounded ${
              isHome ? "bg-white text-primary" : "bg-primary-dark text-white"
            }`}
          >
            Reach Us
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white text-gray-800 px-6 pb-6 shadow-lg border-t border-gray-100">
          <div className="flex flex-col space-y-4 pt-4">
            <Link
              to="/about"
              className="hover:text-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            <div className="flex flex-col">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full font-semibold text-left focus:outline-none"
              >
                <span>Services</span>

                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {servicesOpen && (
                <div className="pl-4 mt-3 flex flex-col space-y-3 border-l-2 border-blue-500 animate-fadeIn">
                  <Link
                    to="/services/brand"
                    className="text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Brand
                  </Link>
                  <Link
                    to="/services/media"
                    className="text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Media
                  </Link>
                  <Link
                    to="/services/it"
                    className="text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    IT
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className="hover:text-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/career"
              className="hover:text-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Career
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>

            {/* Primary CTA Button */}
            <Link
              to="/contact"
              className="block bg-[#2b4cbd] text-white text-center py-3 rounded-md font-semibold shadow-md active:scale-95 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              Reach Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
