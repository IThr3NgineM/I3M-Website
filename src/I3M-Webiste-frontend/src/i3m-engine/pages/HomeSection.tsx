import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import heroVideo1 from "../../i3m-engine/assets/HeroVideo1.mp4";
import heroVideo2 from "../../i3m-engine/assets/HeroVideo2.mp4";
import heroImage1 from "../../i3m-engine/assets/Game6.png";
import heroImage2 from "../../i3m-engine/assets/Game7.png";
import editorImage from "../../i3m-engine/assets/EditorImage.jpg";
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faApple, faLinux } from '@fortawesome/free-brands-svg-icons';
import {faDownload, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave, faLock, faCogs } from '@fortawesome/free-solid-svg-icons'; 
import solutionImage from "../../i3m-engine/assets/Finance.png";

Modal.setAppElement('#root'); 

const EngineHomeSection = () => {
  const heroItems = [
    { type: "video", src: heroVideo1 },
    { type: "video", src: heroVideo2 },
    { type: "image", src: heroImage1 },
    { type: "image", src: heroImage2 },
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
   const { ref: editorRef, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5, 
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % heroItems.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, [heroItems.length]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-section space-y-20 bg-i3m-dark">
      {/* Hero Section */}
      <div className="hero-section h-screen relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItemIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            {heroItems[currentItemIndex].type === "video" ? (
              <video
                src={heroItems[currentItemIndex].src}
                autoPlay
                loop
                muted
                className="object-cover w-full h-full"
                onError={() => console.error(`Error loading video: ${heroItems[currentItemIndex].src}`)}
              ></video>
            ) : (
              <img
                src={heroItems[currentItemIndex].src}
                alt={`Hero ${currentItemIndex}`}
                className="object-cover w-full h-full"
                onError={() => console.error(`Error loading image: ${heroItems[currentItemIndex].src}`)}
              />
            )}
            {/* Overlay with I3M colors */}
            <div className="absolute inset-0 mix-blend-overlay">
              <div className="bg-i3m-purple opacity-60 absolute inset-0"></div>
              <div className="bg-i3m-pink opacity-40 absolute inset-0"></div>
              <div className="bg-i3m-dark opacity-30 absolute inset-0"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute z-50 text-left text-white p-20 top-1/3 left-10">
          <h1 className="text-5xl font-bold">🎮 I3M Engine ⚙️</h1>
          <p className="mt-4 text-lg">Explore the Future of Gaming and Virtual Worlds</p>
          <button
            className="mt-6 bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded shadow flex items-center"
            onClick={openModal}
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download
          </button>
        </div>
      </div>

      {/* Modal for Download Options */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Download Options"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70"
      >
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full relative">
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            className="absolute top-4 right-4 cursor-pointer text-i3m-dark"
            onClick={closeModal}
          />
          <h2 className="text-3xl font-bold text-center text-i3m-purple mb-6">Select Your Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faWindows} size="4x" className="text-blue-600 mb-4" />
              <p className="text-lg font-bold">Windows</p>
              <button className="mt-4 bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded shadow">
                Download EXE
              </button>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faApple} size="4x" className="text-gray-800 mb-4" />
              <p className="text-lg font-bold">macOS</p>
              <button className="mt-4 bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded shadow">
                Download DMG
              </button>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faLinux} size="4x" className="text-yellow-600 mb-4" />
              <p className="text-lg font-bold">Linux</p>
              <button className="mt-4 bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded shadow">
                Download DEB
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Card Section */}
      <div className="card-section my-20 sm:px-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={solutionImage} alt="I3M Solutions" className="w-3/4 h-auto" />
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-1/2 text-white px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-i3m-purple">I3M Solutions</h2>
            <div className="space-y-6">
              {/* Decentralized Platform */}
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCogs} size="2x" className="text-i3m-pink mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-i3m-pink">Decentralized Platform</h3>
                  <p className="text-lg">I3M provides a fully decentralized platform that ensures autonomy and freedom in the virtual world.</p>
                </div>
              </div>
              {/* True Ownership of Digital Assets */}
              <div className="flex items-center">
                <FontAwesomeIcon icon={faLock} size="2x" className="text-i3m-pink mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-i3m-pink">True Ownership of Digital Assets</h3>
                  <p className="text-lg">With I3M, you maintain complete ownership of your digital assets, secured by blockchain technology.</p>
                </div>
              </div>
              {/* Low-Cost Development */}
              <div className="flex items-center">
                <FontAwesomeIcon icon={faMoneyBillWave} size="2x" className="text-i3m-pink mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-i3m-pink">Low-Cost Development</h3>
                  <p className="text-lg">I3M offers a cost-effective solution for developing and managing virtual environments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editor Section */}
        <div className="editor-section my-20" ref={editorRef}>
        <h2 className="text-3xl font-bold text-center text-i3m-pink mb-10">
          {inView ? "Explore the I3M Editor" : "I3M Editor Overview"}
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 px-2">
          {inView ? (
            <div className="w-full md:w-1/2">
              <div className="rounded-lg shadow-lg w-full h-96 bg-i3m-dark flex justify-center items-center">
                <p className="text-3xl font-bold text-i3m-pink">I3M Editor in Action</p>
              </div>
            </div>
          ) : (
            <img src={editorImage} alt="I3M Editor Overview" className="rounded-lg shadow-lg w-full md:w-1/2" />
          )}
          <div className="md:w-1/2 text-lg text-white space-y-4 px-2">
            <p>
              The I3M Editor is an innovative, robust, and user-friendly platform designed to empower creators, developers, and enthusiasts in the virtual world space. With the I3M Editor, you are not just limited to using predefined templates or tools; instead, you have the full freedom to design and customize every aspect of your virtual environment, whether it's for gaming, simulations, educational purposes, or social interactions.
            </p>
        
          </div>
        </div>
      </div>
    </div>
  );
};
export default EngineHomeSection;
