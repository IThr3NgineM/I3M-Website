import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeSection from "./pages/HomeSection";

const NewWebsiteApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeSection />} />
      </Routes>
    </>
  );
};

export default NewWebsiteApp;
