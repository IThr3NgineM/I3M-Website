import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import EngineHeader from "../i3m-engine/components/Header";
import EngineHomeSection from "../i3m-engine/pages/HomeSection";
import ProductPage from "../i3m-engine/pages/ProductPage";
import SolutionPage from "../i3m-engine/pages/SolutionPage";
import ResourcePage from "../i3m-engine/pages/ResourcePage";
import CommunityPage from "../i3m-engine/pages/CommunityPage";
import LearnPage from "../i3m-engine/pages/LearnPage";
import SupportPage from "../i3m-engine/pages/SupportPage";

const NewWebsiteApp = () => {
  return (
    <>
      <EngineHeader />
      <Routes>
        <Route path="/" element={<EngineHomeSection />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="solution" element={<SolutionPage />} />
        <Route path="resources" element={<ResourcePage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="support" element={<SupportPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default NewWebsiteApp;
