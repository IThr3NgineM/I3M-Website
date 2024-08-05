import React from "react";
import { FaDiscord, FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";
import communityVideo from "../assets/CardVideo3.mp4"; 
import communityImage from "../assets/Game5.jpg"; 

const CommunityPage = () => {
  return (
    <div className="community-page">
      {/* Hero Section */}
      <section className="hero-section bg-i3m-dark text-white text-center py-20">
        <h1 className="text-5xl font-bold">Join the I3M Community</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Connect with fellow game developers, share ideas, and stay updated on
          the latest in 3D and blockchain technology. Join our thriving
          community today!
        </p>
      </section>

      {/* Social Media Links */}
      <section className="social-media-links my-20">
        <h2 className="text-4xl font-bold text-center mb-10">Connect with Us</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <a
            href="https://tr.ee/fno9Eg6CTi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card p-4 shadow-lg rounded-lg text-center bg-i3m-dark text-white"
          >
            <FaDiscord size={50} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold">Discord</h3>
            <p className="text-lg mt-2">Join our Discord server to chat with other developers.</p>
          </a>

          <a
            href="https://tr.ee/oXjUi1aGXb"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card p-4 shadow-lg rounded-lg text-center bg-i3m-dark text-white"
          >
            <FaWhatsapp size={50} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold">WhatsApp</h3>
            <p className="text-lg mt-2">Stay connected with our WhatsApp group.</p>
          </a>

          <a
            href="https://tr.ee/kLYBays3N_"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card p-4 shadow-lg rounded-lg text-center bg-i3m-dark text-white"
          >
            <FaLinkedin size={50} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold">LinkedIn</h3>
            <p className="text-lg mt-2">Follow us on LinkedIn for professional updates.</p>
          </a>

          <a
            href="https://tr.ee/zG0X-oiXzB"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card p-4 shadow-lg rounded-lg text-center bg-i3m-dark text-white"
          >
            <FaTwitter size={50} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold">X (Twitter)</h3>
            <p className="text-lg mt-2">Follow us on X for the latest news and updates.</p>
          </a>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="community-highlights my-20">
        <h2 className="text-4xl font-bold text-center mb-10">Community Highlights</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="highlight-card p-4 shadow-lg rounded-lg bg-white">
            <img
              src={communityImage}
              alt="Community Event"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">Recent Event: I3M Hackathon</h3>
            <p className="text-lg my-4">
              Our recent hackathon brought together developers from around the
              world to create innovative solutions using I3M's tools.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Learn More →
            </button>
          </div>

          {/* Add more highlight cards here if needed */}
        </div>
      </section>

      {/* Embedded Video Section */}
      <section className="video-section my-20">
        <h2 className="text-4xl font-bold text-center mb-10">Community Spotlight</h2>
        <div className="max-w-4xl mx-auto">
          <video
            src={communityVideo}
            controls
            className="w-full rounded-lg shadow-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action bg-i3m-dark text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Get Involved Today!</h2>
        <p className="text-lg mb-10">
          Don't miss out on the latest news, events, and discussions. Join the
          I3M community and be part of the future of gaming and blockchain
          technology.
        </p>
        <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-8 rounded-lg transition-colors">
          Join Our Discord →
        </button>
      </section>
    </div>
  );
};

export default CommunityPage;
