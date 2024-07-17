import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/IThreeM.png";
import BackgroundVideo from "../assets/background.mp4";
import DogVideo from "../assets/components.mp4";
import { useNavigate } from 'react-router-dom';
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const dogVideoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
    if (dogVideoRef.current) {
      dogVideoRef.current.playbackRate = 0.5;

      const handleTimeUpdate = () => {
        if (dogVideoRef.current) {
          const { currentTime, duration } = dogVideoRef.current;
          if (currentTime >= duration) {
            dogVideoRef.current.currentTime = 0;
            dogVideoRef.current.play();
          }
        }
      };

      dogVideoRef.current.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        if (dogVideoRef.current) {
          dogVideoRef.current.removeEventListener(
            "timeupdate",
            handleTimeUpdate
          );
        }
      };
    }
  }, []);

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
                className="text-5xl font-bold text-i3m-purple"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Welcome to I3M
              </motion.h1>
              <motion.h2
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-2xl font-bold text-i3m-purple mt-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Revolutionizing 3D Virtual Worlds
              </motion.h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-6 bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded shadow"
                onClick={() => navigate('/about')}
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.img
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
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-i3m-dark text-white">
        <video
          ref={dogVideoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={DogVideo}
          autoPlay
          muted
          playsInline
        ></video>

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
            <CardContainer containerClassName="mt-10">
              <CardBody>
                <CardItem
                  variants={itemVariants}
                  translateX={20}
                  translateY={20}
                  translateZ={50}
                  rotateX={20}
                  rotateY={20}
                  rotateZ={0}
                >
                  <h3 className="text-xl font-bold text-i3m-purple">
                    I3M-Engine-Core
                  </h3>
                  <p className="text-white">
                    Advanced rendering pipeline, realistic physics, custom input
                    system, and ICP compatibility.
                  </p>
                </CardItem>
              </CardBody>
              <CardBody>
                <CardItem
                  variants={itemVariants}
                  translateX={10}
                  translateY={10}
                  translateZ={30}
                  rotateX={10}
                  rotateY={10}
                  rotateZ={0}
                >
                  <h3 className="text-xl font-bold text-i3m-purple">
                    I3M-Chain-Bridge
                  </h3>
                  <p className="text-white">
                    Seamless integration with ICP for token transactions, smart
                    contracts, and asset management.
                  </p>
                </CardItem>
              </CardBody>
              <CardBody>
                <CardItem
                  variants={itemVariants}
                  translateX={10}
                  translateY={10}
                  translateZ={30}
                  rotateX={10}
                  rotateY={10}
                  rotateZ={0}
                >
                  <h3 className="text-xl font-bold text-i3m-purple">
                    I3M-Forge
                  </h3>
                  <p className="text-white">
                    Comprehensive toolkit for asset creation, scene setup, and
                    development workflows.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
