import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../new-website/components/Header";
import HomeSection from "../new-website/pages/HomeSection";

const NewWebsiteApp = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeSection />} />
      </Routes>
    </Router>
  );
};

export default NewWebsiteApp;
