import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/layout/Navbar";
import BlogViewPage from "./pages/BlogViewPage";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<div><Home/></div>} />
          <Route path="/about" element={<div>About</div>} />
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
          <Route path="/career" element={<div>Career</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
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
    </Router>
  );
}

export default App;
