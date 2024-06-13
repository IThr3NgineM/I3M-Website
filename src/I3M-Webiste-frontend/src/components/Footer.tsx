import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="relative h-auto flex flex-col items-center justify-center bg-i3m-dark text-center text-white px-4 py-10">
      {/* Content of the footer */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {/* Socials Grid */}
        <div>
          <h2 className="text-2xl font-bold sm:text-4xl text-i3m-purple mb-4">Socials</h2>
          <div className="flex items-center gap-4 justify-center">
            <a href="https://x.com/IThr3M" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center p-1">
                <FontAwesomeIcon icon={faTwitter} className="text-white x"/>
                <h1 className="md:font-bold text-sm md:text-lg text-white">Twitter(X)</h1>
              </div>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center p-1">
                <FontAwesomeIcon icon={faGithub} className="text-white x" />
                <h1 className="md:font-bold text-sm md:text-lg text-white">Github</h1>
              </div>
            </a>
            <a href="https://www.linkedin.com/company/i-three-m" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center p-1">
                <FontAwesomeIcon icon={faLinkedin} className="text-white x" />
                <h1 className="md:font-bold text-sm md:text-lg text-white">Linkedin</h1>
              </div>
            </a>
          </div>
        </div>
        {/* Navigation Grid */}
        <div>
          <h2 className="text-2xl font-bold text-i3m-purple mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-i3m-pink transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-i3m-pink transition-colors">About</Link></li>
            <li><Link to="/features" className="hover:text-i3m-pink transition-colors">Features</Link></li>
           
          </ul>
        </div>
        {/* Additional Links Grid */}
        <div>
          <h2 className="text-2xl font-bold text-i3m-purple mb-4">Resources</h2>
          <ul className="space-y-2">
            <li><a href="https://docs.google.com/document/d/1Lw4_ysvQ8Sm6jexsRpluAPXE7YaAR58i70tl8G3h7m8/edit?usp=sharing" className="hover:text-i3m-pink transition-colors">White Paper</a></li>
            <li><a href="/terms" className="hover:text-i3m-pink transition-colors">Terms and Conditions</a></li>
            <li><a href="/faq" className="hover:text-i3m-pink transition-colors">FAQs</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-gray-500 text-sm">
        All rights reserved by{" "}
        <a href="https://dashboard.internetcomputer.org/canister/ezu5v-7qaaa-aaaam-acpbq-cai" className="text-i3m-pink font-bold">
          I3M
        </a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
