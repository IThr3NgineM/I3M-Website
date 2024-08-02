import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../new-website/components/Header";
import HomeSection from "../new-website/pages/HomeSection";
import ProductPage from "../new-website/pages/ProductPage";
import SolutionPage from "../new-website/pages/SolutionPage";

const NewWebsiteApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="solution" element={<SolutionPage />} />
      </Routes>
    </>
  );
};

export default NewWebsiteApp;
