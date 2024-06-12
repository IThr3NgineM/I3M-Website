import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navabar';
import HomePage from './pages/Homepage';
import AboutPage from './pages/About';
import Feature from './pages/Feature';
// import ContactPage from './pages/ContactPage';
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<Feature/>} />
        { /*<Route path="/contact" element={<ContactPage />} /> */}
        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
