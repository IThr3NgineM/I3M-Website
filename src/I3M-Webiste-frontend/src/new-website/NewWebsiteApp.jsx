import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../new-website/components/Header";
import HomeSection from "../new-website/pages/HomeSection";
import ProductPage from "../new-website/pages/ProductPage";

const NewWebsiteApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="product" element={<ProductPage />} />
      </Routes>
    </>
  );
};

export default NewWebsiteApp;
