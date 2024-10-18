import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "../assets/IThreeM.png";
import BackgroundVideo from "../assets/backgroundvideo.mp4";
import CoreImage1 from "../i3m-engine/assets/Game4.jpg";
import CoreImage2 from "../i3m-engine/assets/Game2.jpg";
import CoreImage3 from "../i3m-engine/assets/Game3.jpg";
import DiamondIcon from "../assets/IThreeM.png";
import { useNavigate } from "react-router-dom";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

    if (logoRef.current) {
      const rotateLogo = () => {
        if (logoRef.current) {
          logoRef.current.style.transform = `rotate(${performance.now() / 100}deg)`;
          requestAnimationFrame(rotateLogo);
        }
      };
      rotateLogo();
    }
    
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        rotate: 0,
        y: 0,
        transition: { duration: 1, type: "spring" },
      });
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className="relative overflow-hidden h-screen">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={BackgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay with Mixed Colors */}
        <div className="absolute inset-0 z-1">
          <div className="bg-i3m-purple opacity-60 absolute inset-0 mix-blend-overlay"></div>
          <div className="bg-i3m-pink opacity-40 absolute inset-0 mix-blend-overlay"></div>
          <div className="bg-i3m-dark opacity-30 absolute inset-0 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 bg-black bg-opacity-50 text-white p-4 h-full flex items-center">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-left"
            >
              <motion.h1
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Experience the Future 
              </motion.h1>
              <motion.h2
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-2xl font-bold text-white mt-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Redefining Boundaries of 3D Virtual Worlds
              </motion.h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-6 bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded shadow"
                onClick={() => navigate("/about")}
              >
                Discover More
              </motion.button>
            </motion.div>
            <motion.img
              ref={logoRef}
              src={Logo}
              alt="I3M Logo"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </div>
        </div>
      </div>

      {/* Core Components Section */}
      <div className="relative py-20 px-4 sm:px-2 lg:px-8 bg-i3m-dark text-white">
        <div className="relative z-10">
          <motion.div
            className="mt-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <h2
              className="text-3xl font-bold text-center text-i3m-purple mb-10"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Core Components
            </h2>
            <CardContainer containerClassName="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* I3M-Engine-Core */}
              <CardBody className="w-full">
                <motion.div
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  variants={itemVariants}
                >
                  <img
                    src={CoreImage1}
                    alt="I3M-Engine-Core"
                    className="w-full h-72 object-cover transition-transform duration-500 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                    <h3 className="text-2xl font-bold text-i3m-purple mb-4">
                      I3M-Engine-Core
                    </h3>
                    <p className="text-white text-xl">
                      The heart of the I3M project, this repository includes the
                      core functionalities of the game engine, such as rendering,
                      physics, and input systems.
                    </p>
                    <button
                      className="mt-4 bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded shadow"
                      onClick={() => navigate("/i3m-engine/product")}
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </CardBody>

              {/* I3M-Chain-Bridge */}
              <CardBody className="w-full">
                <motion.div
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  variants={itemVariants}
                >
                  <img
                    src={CoreImage2}
                    alt="I3M-Chain-Bridge"
                    className="w-full h-72 object-cover transition-transform duration-500 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                    <h3 className="text-2xl font-bold text-i3m-purple mb-4">
                      I3M-Chain-Bridge
                    </h3>
                    <p className="text-white text-xl">
                      Facilitates seamless integration between the game engine and
                      the ICP blockchain, enabling features like token
                      transactions, smart contracts, and digital asset management.
                    </p>
                    <button
                      className="mt-4 bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded shadow"
                      onClick={() => navigate("/i3m-engine/product")}
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </CardBody>

              {/* I3M-Forge */}
              <CardBody className="w-full">
                <motion.div
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  variants={itemVariants}
                >
                  <img
                    src={CoreImage3}
                    alt="I3M-Forge"
                    className="w-full h-72 object-cover transition-transform duration-500 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                    <h3 className="text-2xl font-bold text-i3m-purple mb-4">
                      I3M-Forge
                    </h3>
                    <p className="text-white text-xl">
                      A comprehensive toolkit and SDK for developers, featuring
                      tools for asset creation, scene setup, and game development
                      workflows.
                    </p>
                    <button
                      className="mt-4 bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded shadow"
                      onClick={() => navigate("/i3m-engine/product")}
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </div>

     
      {/* I3M Highlights Section */}
      <div className="relative py-20 bg-i3m-dark text-white">
        <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
          <h2
            className="text-3xl font-bold text-center text-i3m-purple mb-10"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Discover I3M Highlights
          </h2>
          <div className="grid grid-cols-1 sm: px-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="highlight-card bg-gradient-to-r from-i3m-purple to-i3m-pink p-8 rounded-lg shadow-lg"
              initial={{ rotate: -45, y: -100 }}
              animate={controls}
            >
              <div className="flex justify-center">
                <img
                  src={DiamondIcon}
                  alt="Icon"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-2xl font-bold text-center mt-4">
                Cutting-Edge Technology
              </h3>
              <p className="text-white text-xl  mt-4 text-center">
                Leveraging the latest in 3D rendering and blockchain technology
                to bring immersive experiences to life.
              </p>
            </motion.div>
            <motion.div
              className="highlight-card bg-gradient-to-r from-i3m-purple to-i3m-pink p-8 rounded-lg shadow-lg"
              initial={{ rotate: -45, y: -100 }}
              animate={controls}
            >
              <div className="flex justify-center">
                <img
                  src={DiamondIcon} 
                  alt="Icon"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-2xl font-bold text-center mt-4">
                Community Driven
              </h3>
              <p className="text-white text-xl mt-4 text-center">
                I3M thrives on a strong community of developers and enthusiasts
                contributing to its ecosystem.
              </p>
            </motion.div>
            <motion.div
              className="highlight-card bg-gradient-to-r from-i3m-purple to-i3m-pink p-8 rounded-lg shadow-lg"
              initial={{ rotate: -45, y: -100 }}
              animate={controls}
            >
              <div className="flex justify-center">
                <img
                  src={DiamondIcon} 
                  alt="Icon"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-2xl font-bold text-center mt-4">
                Scalable & Secure
              </h3>
              <p className="text-white text-xl mt-4 text-center">
                Built on the ICP blockchain, I3M offers unmatched scalability
                and security for digital assets.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
