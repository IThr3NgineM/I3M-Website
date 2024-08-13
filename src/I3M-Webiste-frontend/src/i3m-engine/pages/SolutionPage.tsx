import React from "react";
import solutionImage1 from "../assets/Game2.jpg";
import solutionImage2 from "../assets/Game3.jpg";
import solutionImage3 from "../assets/Game4.jpg";
import industryImage1 from "../assets/industryImage1.jpg"; 
import industryImage2 from "../assets/industryImage2.jpg"; 
import industryImage3 from "../assets/industryImage3.jpg"; 

const SolutionsPage = () => {
  return (
    <div className="solutions-page bg-i3m-dark text-white">
      {/* Gaming Solutions */}
      <section className="gaming-solutions py-20">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-i3m-pink">
            BEST GAME PLAYING TODAY
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-16">
            We combine tailored content with our games to entertain the 
            world's best gaming players.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card i3m-dark p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition">
            <img
              src={solutionImage1}
              alt="Create your game"
              className="w-full h-64 object-cover mb-6 rounded-xl"
            />
            <h3 className="text-2xl font-bold mb-4">Create your game</h3>
            <p className="text-lg mb-6">
              Use the I3M Engine to build unique and stunning 3D environments
              for your games.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Explore I3M Engine →
            </button>
          </div>

          <div className="card i3m-dark p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition">
            <img
              src={solutionImage2}
              alt="Multiplatform"
              className="w-full h-64 object-cover mb-6 rounded-xl"
            />
            <h3 className="text-2xl font-bold mb-4">Multiplatform</h3>
            <p className="text-lg mb-6">
              Develop once and deploy your games on multiple platforms with I3M
              Chain Bridge.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Go Multiplatform →
            </button>
          </div>

          <div className="card i3m-dark p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition">
            <img
              src={solutionImage3}
              alt="Multiplayer"
              className="w-full h-64 object-cover mb-6 rounded-xl"
            />
            <h3 className="text-2xl font-bold mb-4">Multiplayer</h3>
            <p className="text-lg mb-6">
              Implement seamless multiplayer experiences using I3M's suite of
              developer tools.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Discover Multiplayer →
            </button>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="industry-solutions py-20 bg-i3m-darker">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6 text-i3m-pink">Industry Solutions</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Powering real-time 3D experiences that transform businesses across industries.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card i3m-dark p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition">
            <img
              src={industryImage1}
              alt="Immersive training"
              className="w-full h-64 object-cover mb-6 rounded-xl"
            />
            <h3 className="text-2xl font-bold mb-4">Immersive training</h3>
            <p className="text-lg mb-6">
              Improve knowledge retention, reduce training costs, and enhance
              safety and operability by engaging your employees with immersive 3D
              training experiences.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Discover 3D Training →
            </button>
          </div>

          <div className="card i3m-dark p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition">
            <img
              src={industryImage2}
              alt="Deeper customer experiences"
              className="w-full h-64 object-cover mb-6 rounded-xl"
            />
            <h3 className="text-2xl font-bold mb-4">Deeper customer experiences</h3>
            <p className="text-lg mb-6">
              Build and manage interactive customer experiences. From product
              configurators and virtual showrooms to photoreal assets, bring your
              products to life on any platform.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Discover Sales Solutions →
            </button>
          </div>

          <div className="card i3m-dark p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition">
            <img
              src={industryImage3}
              alt="Enhanced 3D collaboration"
              className="w-full h-64 object-cover mb-6 rounded-xl"
            />
            <h3 className="text-2xl font-bold mb-4">Enhanced 3D collaboration</h3>
            <p className="text-lg mb-6">
              View 3D data and make more informed decisions in context and in real-time.
              Collaborate with multiple users remotely in one 3D environment to improve
              stakeholder communication.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Improve Collaboration →
            </button>
          </div>
        </div>
      </section>

      {/* Blockchain Solutions */}
      <section className="blockchain-solutions py-20 bg-i3m-dark">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6 text-i3m-pink">Blockchain Solutions</h2>
          <p className="text-xl max-w-3xl mx-auto">
            I3M Chain Bridge provides secure, scalable, and efficient blockchain solutions for gaming and beyond.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add more cards here similarly as above */}
        </div>
      </section>

      {/* Developer Tools */}
      <section className="developer-tools py-20 bg-i3m-darker">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6 text-i3m-pink">Developer Tools</h2>
          <p className="text-xl max-w-3xl mx-auto">
            I3M Forge equips developers with the tools needed to streamline development and integrate advanced features.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add more cards here similarly as above */}
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
