import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD:src/I3M-Webiste-frontend/src/i3m-engine/NewWebsiteApp.jsx
import Header from "./components/Header";
import HomeSection from "./pages/HomeSection";
import Footer from "../components/Footer";
=======
import Header from "../new-website/components/Header";
import HomeSection from "../new-website/pages/HomeSection";
import ProductPage from "../new-website/pages/ProductPage";
>>>>>>> juliet:src/I3M-Webiste-frontend/src/new-website/NewWebsiteApp.jsx

const NewWebsiteApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="product" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default NewWebsiteApp;
