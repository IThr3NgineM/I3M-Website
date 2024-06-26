import React from 'react';
import { motion } from 'framer-motion';
import Logo from "../assets/IThreeM.png";
import Particles from "react-tsparticles";
import type { ISourceOptions } from "tsparticles-engine";
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card'; 

const HeroSection = () => {
  const particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "#100D28",
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
        },
      },
    },
    particles: {
      color: {
        value: "#8906E6",
      },
      links: {
        color: "#FFFFFF",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  };

  return (
    <div className="bg-i3m-dark text-white p-4 relative overflow-hidden">
      {/* <Particles id="tsparticles" options={particlesOptions} /> */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 z-10">
        <div className="text-left">
          <h1 className="text-5xl font-bold text-i3m-purple" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Welcome to I3M - 3D Engine
          </h1>
          <p className="mt-3 text-white text-xl">
            Revolutionizing 3D Virtual Worlds on the Internet Computer Protocol (ICP)
          </p>
          <p className="mt-3 text-white text-xl">
            I3M is an innovative project designed to transform how we create and interact with 3D virtual worlds. Utilizing the decentralized capabilities of the Internet Computer Protocol (ICP), I3M provides a powerful, flexible, and secure 3D engine. This engine integrates robust rendering, physics, and input systems with blockchain technology to enable secure and immersive metaverse experiences.
          </p>
          <h2 className="mt-4 text-2xl font-bold text-i3m-purple" style={{ fontFamily: 'Montserrat, sans-serif' }}>Introduction</h2>
          <p className="mt-2 text-white">
            The metaverse represents the future of digital interaction, offering limitless possibilities for virtual experiences. However, existing platforms often impose limitations due to their centralized nature, lack of scalability, and inadequate security for digital assets. I3M addresses these challenges by leveraging the decentralized capabilities of ICP, providing a powerful, flexible, and secure 3D engine.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded shadow"
          >
            Learn More
          </motion.button>
        </div>
        <motion.img
          src={Logo}
          alt="I3M Logo"
          className="w-full md:w-1/2 h-auto rounded-lg shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
      </div>

      {/* 3D Cards Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center text-i3m-purple" style={{ fontFamily: 'Montserrat, sans-serif' }}>Core Components</h2>
        <CardContainer containerClassName="mt-10">
          <CardBody>
            <CardItem translateX={20} translateY={20} translateZ={50} rotateX={20} rotateY={20} rotateZ={0}>
              <h3 className="text-xl font-bold text-i3m-purple">I3M-Engine-Core</h3>
              <p className="text-white">
                The heart of the I3M project, this repository includes the core functionalities of the game engine, such as rendering, physics, and input systems. It is designed to provide a robust foundation for building immersive 3D experiences.
              </p>
              <ul className="text-white mt-2">
                <li>Advanced rendering pipeline using Three.js and WebGL.</li>
                <li>Physics engine integration with Cannon.js for realistic simulations.</li>
                <li>Input system supporting various devices and custom keybindings.</li>
                <li>Compatibility with ICP for decentralized data management and interactions.</li>
              </ul>
            </CardItem>
          </CardBody>
          <CardBody>
            <CardItem translateX={10} translateY={10} translateZ={30} rotateX={10} rotateY={10} rotateZ={0}>
              <h3 className="text-xl font-bold text-i3m-purple">I3M-Chain-Bridge</h3>
              <p className="text-white">
                Facilitates seamless integration between the game engine and the ICP blockchain, enabling features like token transactions, smart contracts, and digital asset management.
              </p>
              <ul className="text-white mt-2">
                <li>Secure blockchain interactions using Motoko and Rust.</li>
                <li>Tokenization of digital assets for true ownership.</li>
                <li>Smart contract support for in-game economies and transactions.</li>
              </ul>
            </CardItem>
          </CardBody>
          <CardBody>
            <CardItem translateX={10} translateY={10} translateZ={30} rotateX={10} rotateY={10} rotateZ={0}>
              <h3 className="text-xl font-bold text-i3m-purple">I3M-Forge</h3>
              <p className="text-white">
                A comprehensive toolkit and SDK for developers, featuring tools for asset creation, scene setup, and game development workflows.
              </p>
              <ul className="text-white mt-2">
                <li>User-friendly interface for asset management and scene composition.</li>
                <li>Integration with popular 3D model formats (GLTF/GLB).</li>
                <li>Extensive documentation and tutorials for developers.</li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default HeroSection;
