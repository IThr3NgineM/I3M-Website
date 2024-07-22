"use client";
import React from "react";
import { motion } from "framer-motion";

const roadmap = [
  {
    title: "Phase 1: Initial Development and Testing",
    duration: "In Progress",
    description:
      "Develop core engine functionalities, integrate basic ICP features, and create initial documentation and tutorials.",
  },
  {
    title: "Phase 2: Feature Expansion and Optimization",
    duration: "In Progress",
    description:
      "Expand rendering and physics capabilities, optimize performance and security, and enhance blockchain integration and smart contracts.",
  },
  {
    title: "Phase 3: Editor Development and Enhancement",
    duration: "In Progress",
    description:
      "Develop I3M Editor, integrate advanced editing features, and provide detailed tutorials and guides.",
  },
  {
    title: "Phase 4: Community Engagement and Ecosystem Building",
    duration: "Next 2 Month ",
    description:
      "Launch I3M-Academy and I3M-Community-Hub, foster community contributions and feedback, and establish partnerships.",
  },
  {
    title: "Phase 5: Commercialization and Monetization",
    duration: "1 Years",
    description:
      "Implement monetization strategies, launch marketplace for digital assets and extensions, and execute marketing campaigns.",
  },
  {
    title: "Phase 6: Future Plans",
    duration: "Future",
    description:
      "Continuous feature development, expand use cases, grow global community, and ensure sustainable ecosystem growth.",
  },
];

const Roadmap = () => {
  return (
    <div className="bg-i3m-dark text-white py-20">
      <h2 className="text-3xl font-bold text-center text-i3m-pink mb-10">
        Roadmap
      </h2>
      <div className="container mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-i3m-purple"></div>
        {roadmap.map((item, index) => (
          <motion.div
            key={index}
            className={`w-full md:w-1/2 p-4 mb-8 ${
              index % 2 === 0 ? "ml-auto" : "mr-auto"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <div className="bg-i3m-light-dark p-6 rounded-lg shadow-lg relative">
              <h3 className="text-xl font-bold text-i3m-purple mb-2">
                {item.title}
              </h3>
              <p className="text-i3m-pink mb-4">{item.duration}</p>
              <p>{item.description}</p>
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-i3m-pink rounded-full ${
                  index % 2 === 0 ? "right-full mr-2" : "left-full ml-2"
                }`}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
