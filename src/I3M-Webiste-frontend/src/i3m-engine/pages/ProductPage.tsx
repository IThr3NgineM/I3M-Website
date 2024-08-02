import React from "react";
import videoSrc from "../../new-website/assets/CardVideo3.mp4";
import { EvervaultCard } from "../../new-website/components/ui/evervault-card";
import engineImage from "../../new-website/assets/Game2.jpg"; 

const ProductPage = () => {
  return (
    <div className="product-page">
      {/* I3M Engine Section */}
      <div className="i3m-engine-section bg-i3m-dark text-white p-10">
        <h1 className="text-5xl font-bold text-center">I3M Engine</h1>
        <p className="text-lg text-center mt-4">
          Powering the next generation of virtual worlds
        </p>

        {/* Video and Explanation Section */}
        <div className="video-section my-20 flex flex-col md:flex-row items-center">
          <video controls className="rounded-lg shadow-lg md:w-1/2 md:mr-8 mb-6 md:mb-0">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="md:w-1/2 text-lg text-white">
            <p>
              The I3M Engine offers unparalleled power and flexibility, enabling developers to create highly detailed, immersive 3D environments. Whether you're building a game, a simulation, or a virtual marketplace, the I3M Engine provides the tools you need to bring your vision to life.
            </p>
            <p className="mt-4">
              With support for advanced physics, real-time rendering, and a comprehensive suite of development tools, the I3M Engine is the backbone of the I3M ecosystem. Explore the possibilities and push the boundaries of what’s possible in virtual worlds.
            </p>
          </div>
        </div>

        {/* Assets Section */}
        <div className="assets-section my-20">
          <h2 className="text-3xl font-bold text-center text-i3m-pink mb-10">
            I3M Engine Assets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EvervaultCard text="Asset 1" className="h-48" />
            <EvervaultCard text="Asset 2" className="h-48" />
            <EvervaultCard text="Asset 3" className="h-48" />
           
          </div>
        </div>

        {/* Offerings Section */}
        <div className="offerings-section my-20">
          <h2 className="text-3xl font-bold text-center text-i3m-pink mb-10">
            What I3M Engine Offers
          </h2>
          <div className="max-w-6xl mx-auto text-lg text-white">
            <p>
              The I3M Engine provides a comprehensive set of tools and features designed to help developers build the next generation of virtual worlds. From real-time rendering and physics simulation to a powerful scripting language, the I3M Engine has everything you need to create immersive, interactive experiences.
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Advanced Rendering Capabilities</li>
              <li>Physics Simulation</li>
              <li>Comprehensive Asset Management</li>
              <li>Support for Virtual and Augmented Reality</li>
              <li>Extensible Architecture</li>
            </ul>
          </div>
        </div>
      </div>

      {/* I3M Chain Bridge Section */}
      <div className="i3m-chain-bridge-section bg-i3m-dark text-white p-10">
        <h1 className="text-5xl font-bold text-center">I3M Chain Bridge</h1>
        <p className="text-lg text-center mt-4">
          Connecting virtual worlds through blockchain technology
        </p>

        {/* Explanation Section */}
        <div className="my-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-lg text-white">
            <p>
              The I3M Chain Bridge enables seamless interoperability between different blockchain networks and virtual worlds. It provides the tools to transfer assets, data, and identities securely across various platforms.
            </p>
            <p className="mt-4">
              With its robust security features and easy integration, the I3M Chain Bridge is an essential component for developers looking to create interconnected virtual environments.
            </p>
          </div>
          <img
            src={engineImage} 
            alt="I3M Chain Bridge"
            className="rounded-lg shadow-lg md:w-1/2 md:ml-8 mb-6 md:mb-0"
          />
        </div>
      </div>

      {/* I3M Forge Section */}
      <div className="i3m-forge-section bg-i3m-dark text-white p-10">
        <h1 className="text-5xl font-bold text-center">I3M Forge</h1>
        <p className="text-lg text-center mt-4">
          Crafting the future of virtual asset creation
        </p>

        {/* Explanation Section */}
        <div className="my-20 flex flex-col md:flex-row items-center">
          <img
            src={engineImage} 
            alt="I3M Forge"
            className="rounded-lg shadow-lg md:w-1/2 md:mr-8 mb-6 md:mb-0"
          />
          <div className="md:w-1/2 text-lg text-white">
            <p>
              I3M Forge is a powerful toolset for creating and managing virtual assets. Whether you are developing a new game, creating a digital marketplace, or building virtual experiences, I3M Forge provides the necessary tools to streamline your workflow.
            </p>
            <p className="mt-4">
              With its intuitive interface and extensive features, I3M Forge makes it easy to create, manage, and deploy digital assets across multiple platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
