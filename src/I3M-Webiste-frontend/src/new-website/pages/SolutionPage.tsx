import React from "react";
import solutionImage1 from "../assets/EditorImage.jpg";
import solutionImage2 from "../assets/Game3.jpg";
import solutionImage3 from "../assets/Game4.jpg";
import industryImage1 from "../assets/industryImage1.jpg"; 
import industryImage2 from "../assets/industryImage2.jpg"; 
import industryImage3 from "../assets/industryImage3.jpg";

const SolutionsPage = () => {
  return (
    <div className="solutions-page bg-i3m-dark text-white">
      {/* Gaming Solutions */}
      <section className="gaming-solutions my-0 bg-i3m-dark text-white">
        <h2 className="text-4xl font-bold text-center mb-10 py-2">
          Gaming Solutions
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-20">
          I3M offers cutting-edge gaming solutions with I3M Engine, enabling
          developers to create high-performance, immersive 3D games and
          experiences with ease.
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-4 shadow-lg rounded-lg">
            <img
              src={solutionImage1}
              alt="Create your game"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">Create your game</h3>
            <p className="text-lg my-4">
              Use the I3M Engine to build unique and stunning 3D environments
              for your games.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Explore I3M Engine →
            </button>
          </div>

          <div className="card p-4 shadow-lg rounded-lg">
            <img
              src={solutionImage2}
              alt="Multiplatform"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">Multiplatform</h3>
            <p className="text-lg my-4">
              Develop once and deploy your games on multiple platforms with I3M
              Chain Bridge.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Go Multiplatform →
            </button>
          </div>

          <div className="card p-4 shadow-lg rounded-lg">
            <img
              src={solutionImage3}
              alt="Multiplayer"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">Multiplayer</h3>
            <p className="text-lg my-4">
              Implement seamless multiplayer experiences using I3M's suite of
              developer tools.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Discover Multiplayer →
            </button>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="industry-solutions my-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Industry Solutions
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-20">
          Powering real-time 3D experiences that transform businesses across industries.
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-4 shadow-lg rounded-lg">
            <img
              src={industryImage1}
              alt="Immersive training"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">Immersive training</h3>
            <p className="text-lg my-4">
              Improve knowledge retention, reduce training costs, and enhance safety and operability by engaging your employees with immersive 3D training experiences.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Discover 3D Training →
            </button>
          </div>

          <div className="card p-4 shadow-lg rounded-lg">
            <img
              src={industryImage2}
              alt="Deeper customer experiences"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">Deeper customer experiences</h3>
            <p className="text-lg my-4">
              Build and manage interactive customer experiences. From product configurators and virtual showrooms to photoreal assets, bring your products to life on any platform.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Discover Sales Solutions →
            </button>
          </div>

          <div className="card p-4 shadow-lg rounded-lg">
            <img
              src={industryImage3}
              alt="Enhanced 3D collaboration"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">Enhanced 3D collaboration</h3>
            <p className="text-lg my-4">
              View 3D data and make more informed decisions in context and in real-time. Collaborate with multiple users remotely in one 3D environment to improve stakeholder communication.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Improve Collaboration →
            </button>
          </div>
        </div>
      </section>

      {/* Blockchain Solutions */}
      <section className="blockchain-solutions my-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Blockchain Solutions
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-20">
          I3M Chain Bridge provides secure, scalable, and efficient blockchain
          solutions for gaming and beyond.
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*  cards here  */}
        </div>
      </section>

      {/* Developer Tools */}
      <section className="developer-tools my-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Developer Tools
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-20">
          I3M Forge equips developers with the tools needed to streamline
          development and integrate advanced features.
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*  cards here  */}
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
