import React from "react";
import {
  FaDiscord,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import communityVideo from "../assets/community.mp4";
import communityImage from "../assets/community.png";
import communityImage1 from "../assets/Community1.png";
import communityImage2 from "../assets/Community2.png";
import { StarsBackground } from "../../i3m-engine/components/ui/stars-background";
import { ShootingStars } from "../../i3m-engine/components/ui/shooting-stars";

const CommunityPage = () => {
  return (
    <div className="resources-page relative overflow-hidden bg-i3m-dark text-white">
      {/* Starry Background */}
      {/* Shooting Stars */}
      <ShootingStars className="z-10" />

      {/* Starry Background */}
      <StarsBackground className="z-0" />
      {/* Hero Section */}
      <section className="hero-section bg-i3m-dark text-white text-center py-20 relative z-10">
        <h1 className="text-5xl font-bold">Join the I3M Community</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Connect with fellow game developers, share ideas, and stay updated on
          the latest in 3D and blockchain technology. Join our thriving
          community today!
        </p>
      </section>

      {/* Social Media Links */}
      <section className="social-media-links my-20 relative z-10 bg-i3m-dark">
        <h2 className="text-4xl font-bold text-center text-i3m-pink mb-10">
          Connect with Us
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <a
            href="https://tr.ee/fno9Eg6CTi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card p-4 shadow-lg rounded-lg text-center bg-i3m-dark text-white"
          >
            <FaDiscord size={50} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold">Discord</h3>
            <p className="text-lg mt-2">
              Join our Discord server to chat with other developers.
            </p>
          </a>

          <a
            href="https://tr.ee/oXjUi1aGXb"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card p-4 shadow-lg rounded-lg text-center bg-i3m-dark text-white"
          >
            <FaWhatsapp size={50} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold">WhatsApp</h3>
            <p className="text-lg mt-2">
              Stay connected with our WhatsApp group.
            </p>
          </a>

          <a
            href="https://tr.ee/kLYBays3N_"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card p-4 shadow-lg rounded-lg text-center bg-i3m-dark text-white"
          >
            <FaLinkedin size={50} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold">LinkedIn</h3>
            <p className="text-lg mt-2">
              Follow us on LinkedIn for professional updates.
            </p>
          </a>

          <a
            href="https://tr.ee/zG0X-oiXzB"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card p-4 shadow-lg rounded-lg text-center bg-i3m-dark text-white"
          >
            <FaTwitter size={50} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold">X (Twitter)</h3>
            <p className="text-lg mt-2">
              Follow us on X for the latest news and updates.
            </p>
          </a>

          <a
            href="https://www.youtube.com/@ithr3m"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card p-4 shadow-lg rounded-lg text-center bg-i3m-dark text-white"
          >
            <FaYoutube size={50} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold">YouTube</h3>
            <p className="text-lg mt-2">
              Join our YouTube to get to Learn and get insights about iThreeM.
            </p>
          </a>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="community-highlights my-20 relative z-10 bg-i3m-dark">
        <h2 className="text-4xl font-bold text-center text-i3m-pink mb-10">
          Community Highlights
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="highlight-card p-4 shadow-lg rounded-lg bg-i3m-purple">
            <img
              src={communityImage}
              alt="Community Event"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">Event: Education Hackathon</h3>
            <p className="text-lg my-4">
              Our Founder had the chance of been invited to Kabarak to speak on
              the shaping on the Financial Projections
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Learn More →
            </button>
          </div>

          <div className="highlight-card p-4 shadow-lg rounded-lg bg-i3m-purple">
            <img
              src={communityImage1}
              alt="Community Event"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">Event: StartUps on ICP </h3>
            <p className="text-lg my-4">
              We had a chance to be speak on X space on Challenges people
              experience when starting a start up and how e overcame and how to
              handle the challenges .
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Learn More →
            </button>
          </div>

          <div className="highlight-card p-4 shadow-lg rounded-lg bg-i3m-purple">
            <img
              src={communityImage2}
              alt="Community Event"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">
              Event:Building Solutions on ICP
            </h3>
            <p className="text-lg my-4">
              I3M had the chance to tell the story on what we were building and
              how it will help the targeted user and also what problems the
              current targeted user are facing.
            </p>
            <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* Embedded Video Section */}
      <section className="video-section my-20 relative z-10 bg-i3m-dark">
        <h2 className="text-4xl font-bold text-center text-i3m-pink mb-10">
          Community Spotlight
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 mix-blend-overlay">
            <div className="bg-i3m-purple opacity-60 absolute inset-0"></div>
            <div className="bg-i3m-pink opacity-40 absolute inset-0"></div>
            <div className="bg-i3m-dark opacity-30 absolute inset-0"></div>
          </div>
          <video
            src={communityVideo}
            controls
            className="w-full rounded-lg shadow-lg relative z-10"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action bg-i3m-dark text-white text-center py-20 relative z-10">
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
