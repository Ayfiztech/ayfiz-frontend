import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isHome ? "bg-blue-700 text-white" : "bg-white text-gray-800 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-playfair">
          AYFIZ
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/about">About Us</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1">
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

          <Link to="/blog">Blog</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact Us</Link>

          <Link
            to="/contact"
            className={`px-5 py-2 rounded ${
              isHome
                ? "bg-white text-blue-700"
                : "bg-blue-700 text-white"
            }`}
          >
            Reach Us
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800 px-6 pb-6 space-y-4 shadow-lg">
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>

          <div>
            <p className="font-semibold">Services</p>
            <div className="pl-4 mt-2 space-y-2">
              <Link to="/services/brand" onClick={() => setIsOpen(false)}>Brand</Link>
              <Link to="/services/media" onClick={() => setIsOpen(false)}>Media</Link>
              <Link to="/services/it" onClick={() => setIsOpen(false)}>IT</Link>
            </div>
          </div>

          <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/career" onClick={() => setIsOpen(false)}>Career</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>

          <Link
            to="/contact"
            className="block bg-blue-700 text-white text-center py-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Reach Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;