import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../../assets/images/header-blue.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isActive = (path) => location.pathname === path;
  const isOffersActive = ["/offers", "/BrandDetail", "/MediaDetail", "/TradingDetail"].includes(location.pathname);

  const linkClass = (path) =>
    isActive(path) ? "text-[#4F5665] font-semibold" : "text-[#02002E]";

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isHome ? "bg-[#CFD8EB]" : "bg-white shadow-md"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center h-20">
        <Link to="/" className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-10 md:h-14 lg:h-16 w-auto object-contain" />
        </Link>
        <div className="hidden md:flex items-center gap-4 lg:gap-8 font-medium text-sm lg:text-base">
          <Link to="/about" className={linkClass("/about")}>Who We Are</Link>

          <div 
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => navigate("/offers")}
              className={`flex items-center gap-1 transition-colors ${isOffersActive ? "text-[#4F5665] font-semibold" : "text-[#02002E] hover:text-blue-700"}`}
            >
              <span className="whitespace-nowrap">What we offer</span> 
              <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-white text-gray-800 shadow-xl rounded-lg w-48 py-2 border border-gray-100">
                <Link to="/BrandDetail" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Branding Page</Link>
                <Link to="/TradingDetail" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Trading Page</Link>
                <Link to="/MediaDetail" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Media Page</Link>
              </div>
            )}
          </div>

          <Link to="/blog" className={linkClass("/blog")}>Blog</Link>
          <Link to="/career" className={linkClass("/career")}>Career</Link>
          <Link to="/contact" className={linkClass("/contact")}>Contact</Link>

          <Link
            to="/contact"
            className="bg-[#2b4cbd] text-white px-4 lg:px-6 py-2 rounded-sm font-semibold whitespace-nowrap hover:bg-blue-800 transition-all"
          >
            Reach Us
          </Link>
        </div>

        {/* Mobile/Tablet Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#02002E] p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4 font-medium">
            <Link to="/about" onClick={() => setIsOpen(false)}>Who We Are</Link>
            <div className="flex flex-col">
              <div className="flex justify-between items-center py-1" onClick={() => setServicesOpen(!servicesOpen)}>
                <span className={isOffersActive ? "text-blue-700" : ""}>What we offer</span>
                <ChevronDown size={20} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </div>
              {servicesOpen && (
                <div className="pl-4 mt-2 flex flex-col space-y-4 border-l-2 border-blue-500 ml-1 py-2">
                  <Link to="/BrandDetail" onClick={() => setIsOpen(false)}>Branding Page</Link>
                  <Link to="/TradingDetail" onClick={() => setIsOpen(false)}>Trading Page</Link>
                  <Link to="/MediaDetail" onClick={() => setIsOpen(false)}>Media Page</Link>
                </div>
              )}
            </div>
            <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/career" onClick={() => setIsOpen(false)}>Career</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/contact" className="bg-[#2b4cbd] text-white text-center py-4 rounded-sm font-bold" onClick={() => setIsOpen(false)}>
              Reach Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;