import React from "react";
import { TracingBeam } from "../components/ui/tracing-beam";
import { LampContainer } from "../components/ui/lampDemo";

const features = [
  {
    title: "I3M-Engine-Core",
    description:
      "The heart of the I3M project, this repository includes the core functionalities of the game engine, such as rendering, physics, and input systems. It is designed to provide a robust foundation for building immersive 3D experiences.",
    points: [
      "Advanced rendering pipeline using Three.js and WebGL, physics engine integration with Cannon.js for realistic simulations, input system supporting various devices and custom keybindings, and compatibility with ICP for decentralized data management and interactions.",
    ],
  },
  {
    title: "I3M-Chain-Bridge",
    description:
      "Facilitates seamless integration between the game engine and the ICP blockchain, enabling features like token transactions, smart contracts, and digital asset management.",
    points: [
      "Secure blockchain interactions, digital asset tokenization for ownership, and smart contract support for in-game transactions",
    ],
  },
  {
    title: "I3M-Forge",
    description:
      "A comprehensive toolkit and SDK for developers, featuring tools for asset creation, scene setup, and game development workflows.",
    points: [
      "User-friendly interface for asset management, integration with popular 3D model formats, and extensive developer documentation.",
    ],
  },
  {
    title: "I3M-UI-Framework",
    description:
      "Provides a library for building game UIs, facilitating the creation of menus, HUDs, and interactive elements.",
    points: [
      "Customizable UI components, responsive design support, and seamless rendering engine integration..",
    ],
  },
];

const Features = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-i3m-dark text-white">
      <h2 className="text-3xl font-bold text-center text-i3m-pink mb-10">
        Core Components
      </h2>
      <TracingBeam className="mb-6">
        {features.map((feature, index) => (
          <LampContainer key={index}>
            <div className="p-6 bg-i3m-dark border border-white rounded-lg shadow-lg mb-0"> 
              <h3 className="text-xl font-bold text-i3m-purple mb-2">
                {feature.title}
              </h3>
              <p className="text-white mb-4">{feature.description}</p>
              <ul className="text-white list-disc list-inside">
                {feature.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </LampContainer>
        ))}
      </TracingBeam>
    </div>
  );
};

export default Features;
