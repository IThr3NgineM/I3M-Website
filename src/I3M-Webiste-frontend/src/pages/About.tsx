"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import aboutImage from "../assets/IThreeM.png";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import Avatar3 from "../assets/avatar3.png";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";
import { BackgroundBeams } from "../components/ui/background-beams";

interface BuyProps {
  handleConnectWallet: () => void;
}

const About: React.FC<BuyProps> = ({ handleConnectWallet }) => {
  return (
    <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-i3m-dark">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white text-center font-rem">
          About{" "}
          <span className="text-i3m-pink font-rem font-extrabold">I3M</span>
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-10">
          <div className="w-full md:w-1/2 pr-8">
            <div className="mt-10">
              <motion.h3
                className="text-2xl font-bold text-i3m-purple font-rem"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Our Story
              </motion.h3>
              <motion.p
                className="mt-4 text-lg text-gray-300 font-rem"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                I3M began with a vision to democratize the creation of 3D
                virtual worlds. We aim to enable developers to build, share, and
                monetize their creations in a decentralized ecosystem. By
                integrating cutting-edge technologies in 3D rendering,
                blockchain, and game development, I3M seeks to redefine the
                standards for virtual experiences and digital ownership.
              </motion.p>
              <motion.h4
                className="mt-6 text-xl font-semibold text-i3m-purple font-rem"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Development
              </motion.h4>
              <motion.p
                className="mt-2 text-lg text-gray-300 font-rem"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                Our team consists of experienced developers, blockchain experts,
                and enthusiasts of virtual reality. We leverage the Internet
                Computer Protocol (ICP) to build a secure, scalable, and
                decentralized platform that serves as the backbone of I3M. ICP's
                innovative technology ensures that our transactions are fast,
                reliable, and environmentally friendly.
              </motion.p>
              <motion.h4
                className="mt-6 text-xl font-semibold text-i3m-purple font-rem"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                Vision
              </motion.h4>
              <motion.p
                className="mt-2 text-lg text-gray-300 font-rem"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                I3M aims to become the go-to platform for creating, sharing, and
                monetizing 3D virtual worlds. Whether you're a developer, a
                gamer, or a virtual reality enthusiast, I3M offers the tools and
                ecosystem to bring your digital creations to life. Join us in
                revolutionizing the virtual world with I3M.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="w-full md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img
              src={aboutImage}
              alt="I3M Vision"
              className="w-80 h-auto rounded-lg shadow-xl relative z-10"
            />
          </motion.div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="relative z-10 py-20">
        <h2 className="text-3xl font-bold text-white text-center font-rem mb-10">
          Our{" "}
          <span className="text-i3m-pink font-rem font-extrabold">Team</span>
        </h2>
        <CardContainer containerClassName="mt-4">
          <CardBody>
            <CardItem
              className="w-80 h-96 flex flex-col items-center justify-center"
              translateX={20}
              translateY={20}
              translateZ={50}
              rotateX={20}
              rotateY={20}
              rotateZ={0}
            >
              <h3 className="text-2xl font-bold text-i3m-purple font-rem">
                Dedan Okware
              </h3>
              <img
                src={Avatar1}
                alt="Dedan Okware"
                className="w-32 h-32 mx-auto rounded-full shadow-md"
              />
              <p className="mt-4 text-gray-300">Founder & CEO</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href="https://x.com/Dedan_O_Okware"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-i3m-purple" />
                </a>
                <a
                  href="https://www.linkedin.com/in/softcysec-dedan-okware"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-i3m-purple" />
                </a>
                <a
                  href="https://github.com/SoftCysec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-i3m-purple" />
                </a>
              </div>
            </CardItem>
          </CardBody>
          <CardBody>
            <CardItem
              className="w-80 h-96 flex flex-col items-center justify-center"
              translateX={20}
              translateY={20}
              translateZ={50}
              rotateX={20}
              rotateY={20}
              rotateZ={0}
            >
              <h3 className="text-2xl font-bold text-i3m-purple font-rem">
                Juliet Wambuku
              </h3>
              <img
                src={Avatar2}
                alt="Juliet Wambuku"
                className="w-32 h-32 mx-auto rounded-full shadow-md"
              />
              <p className="mt-4 text-gray-300">Co-Founder & Chief Maverick</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href="https://x.com/JulietKiny23187?t=89v42Pj06Sl22e0-nIcdPA&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-i3m-purple" />
                </a>
                <a
                  href="https://www.linkedin.com/in/juliet-wambuku-033502222"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-i3m-purple" />
                </a>
                <a
                  href="https://github.com/Wambuku"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-i3m-purple" />
                </a>
              </div>
            </CardItem>
          </CardBody>
          <CardBody>
            <CardItem
              className="w-80 h-96 flex flex-col items-center justify-center"
              translateX={20}
              translateY={20}
              translateZ={50}
              rotateX={20}
              rotateY={20}
              rotateZ={0}
            >
              <h3 className="text-2xl font-bold text-i3m-purple font-rem">
                Winfred Muusi
              </h3>
              <img
                src={Avatar3}
                alt="Winfred Muusi"
                className="w-32 h-32 mx-auto rounded-full shadow-md"
              />
              <p className="mt-4 text-gray-300">
                Developer Relations & Community Manager
              </p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href="https://x.com/WinnyMuusi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-i3m-purple" />
                </a>
                <a
                  href="https://www.linkedin.com/in/winfred-muusi-b7062b244/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-i3m-purple" />
                </a>
                <a
                  href="https://github.com/MuusiI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-i3m-purple" />
                </a>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      {/* Contact Us Section */}
      <div className="relative z-10 mt-12 text-center">
        <h3 className="text-2xl font-bold text-i3m-purple font-rem">
          Contact Us
        </h3>
        <p className="mt-4 text-lg text-gray-300">
          Have more questions? Reach out to us at{" "}
          <a href="mailto:ithr3m@gmail.com" className="text-i3m-pink">
            support@i3m.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
