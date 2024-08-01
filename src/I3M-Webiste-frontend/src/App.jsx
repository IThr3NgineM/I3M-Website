import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navabar";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/About";
import Feature from "./pages/Feature";
import Contact from "./pages/Contact";
import Roadmap from "./pages/Roadmap";
import FAQS from "./pages/FAQS";
import Footer from "./components/Footer";
import NewWebsiteApp from "./i3m-engine/NewWebsiteApp";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();  // Now inside the Router context

  const isNewWebsite = location.pathname.startsWith("/i3m-engine");

  return (
    <>
      {!isNewWebsite && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/faq" element={<FAQS />} />
        <Route path="/i3m-engine/*" element={<NewWebsiteApp />} />
      </Routes>
      {!isNewWebsite && <Footer />}
    </>
  );
};

export default App;
