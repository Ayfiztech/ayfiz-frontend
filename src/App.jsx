import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/layout/Navbar";
import BlogViewPage from "./pages/BlogViewPage";
import Home from "./components/Home/Home";
import CareerPage from "./pages/CareerPage";
import ServicesPage from "./pages/servicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import Footer from "./components/layout/Footer";
import BrandDetailPage from "./pages/BrandDetailPage";
import MediaDetailPage from "./pages/MediaDetailPage";
import TradingDetailPage from "./pages/TradingDetailPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HomePage />
              </div>
            }
          />
          <Route path="/about" element={<div><AboutPage/></div>} />
          <Route
            path="/offers"
            element={
              <div>
                <ServicesPage />
              </div>
            }
          />

          <Route path="/services/brand" element={<div>Brand</div>} />
          <Route path="/services/media" element={<div>Media</div>} />
          <Route path="/services/it" element={<div>IT</div>} />
          <Route
            path="/blog"
            element={
              <div>
                <BlogPage />
              </div>
            }
          />
          <Route
            path="/career"
            element={
              <div>
                <CareerPage />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <ContactUsPage />
              </div>
            }
          />
          <Route
            path="/blog-View/:id"
            element={
              <div>
                <BlogViewPage />
              </div>
            }
          />
          <Route
            path="/IT"
            element={
              <div>
                <BrandDetailPage />
              </div>
            }
          />

           <Route
            path="/media"
            element={
              <div>
                < MediaDetailPage />
              </div>
            }
          />

           <Route
            path="/Trade"
            element={
              <div>
                <TradingDetailPage />
              </div>
            }
          />
        </Routes>

       
      </>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
