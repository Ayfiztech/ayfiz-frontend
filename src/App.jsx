import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/layout/Navbar";
import BlogViewPage from "./pages/BlogViewPage";
import Home from "./components/Home/Home";
import CareerPage from "./pages/CareerPage";
import ServicesPage from "./pages/servicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<div><Home/></div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/offers" element={<div><ServicesPage/></div>} />

         
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
          <Route path="/career" element={<div><CareerPage/></div>} />
          <Route path="/contact" element={<div><ContactUsPage/></div>} />
          <Route
            path="/blog-View"
            element={
              <div>
                <BlogViewPage />
              </div>
            }
          />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
