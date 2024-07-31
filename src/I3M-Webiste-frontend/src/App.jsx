import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navabar";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/About";
import Feature from "./pages/Feature";
import Contact from "./pages/Contact";
import Roadmap from "./pages/Roadmap";
import FAQS from "./pages/FAQS";
import Footer from "./components/Footer";
import NewWebsiteApp from "./new-website/NewWebsiteApp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/faq" element={<FAQS />} />
        <Route path="/new-website/*" element={<NewWebsiteApp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
