"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder } from "@babylonjs/core";
import "@babylonjs/loaders";
import aboutImage from "../assets/IThreeM.png"; // Ensure this path is correct
import ctoImage from "../assets/dedan.jpeg";
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import { PinContainer } from "../components/ui/3d-pin";
import { BackgroundBeams } from "../components/ui/background-beams"; // Ensure this path is correct

interface BuyProps {
  handleConnectWallet: () => void;
}

const About: React.FC<BuyProps> = ({ handleConnectWallet }) => {
  return (
    <div className="relative overflow-hidden py-20  px-4 sm:px-6 lg:px-8 bg-i3m-dark">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <h2 className="text-3xl font-bold text-white text-center font-rem relative z-10">
        About{" "}
        <span className="text-i3m-pink font-rem font-extrabold">I3M</span>
        </h2>
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-i3m-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-10 relative z-10">
        <div className="w-full md:w-1/2 pr-8">
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-i3m-purple font-rem">Our Story</h3>
            <p className="mt-4 text-lg text-gray-300 font-rem">
              I3M began with a vision to democratize the creation of 3D virtual worlds. We aim to enable developers to build, share, and monetize their creations in a decentralized ecosystem. By integrating cutting-edge technologies in 3D rendering, blockchain, and game development, I3M seeks to redefine the standards for virtual experiences and digital ownership.
            </p>
            <h4 className="mt-6 text-xl font-semibold text-i3m-purple font-rem">Development</h4>
            <p className="mt-2 text-lg text-gray-300 font-rem">
              Our team consists of experienced developers, blockchain experts, and enthusiasts of virtual reality. We leverage the Internet Computer Protocol (ICP) to build a secure, scalable, and decentralized platform that serves as the backbone of I3M. ICP's innovative technology ensures that our transactions are fast, reliable, and environmentally friendly.
            </p>
            <h4 className="mt-6 text-xl font-semibold text-i3m-purple font-rem">Vision</h4>
            <p className="mt-2 text-lg text-gray-300 font-rem">
              I3M aims to become the go-to platform for creating, sharing, and monetizing 3D virtual worlds. Whether you're a developer, a gamer, or a virtual reality enthusiast, I3M offers the tools and ecosystem to bring your digital creations to life. Join us in revolutionizing the virtual world with I3M.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center relative">
          <img src={aboutImage} alt="I3M Vision" className="w-80 h-auto rounded-lg shadow-xl relative z-10" />
        </div>
      </div>
      <div className="text-center mt-12 mb-12"> {/* Added mb-12 for spacing */}
        <CardContainer containerClassName="mt-4">
          <CardBody>
            <CardItem translateX={20} translateY={20} translateZ={50} rotateX={20} rotateY={20} rotateZ={0}>
              <h3 className="text-2xl font-bold text-i3m-purple font-rem">Founder and CTO</h3>
              <div className="flex flex-wrap justify-center mt-6">
                <div className="w-80 mx-4 mb-8">
                  <img src={ctoImage} alt="Team Member" className="w-full h-auto rounded-lg shadow-md" />
                  <h4 className="mt-4 text-xl font-semibold text-i3m-purple">Dedan Okware</h4>
                  <p className="mt-2 text-gray-300">Dedan Okware is a passionate and innovative software developer with a strong background in web 2, web 3 and web 3.0.</p>
                </div>
                </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
        <div className="mt-12 text-center">

          <h3 className="text-2xl font-bold text-i3m-purple font-rem">
            Contact Us
          </h3>
          <p className="mt-4 text-lg text-gray-300">
            Have more questions? Reach out to us at <a href="mailto:ithr3m@gmail.com" className="text-i3m-pink">support@i3m.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
