import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/IThreeM.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-i3m-dark text-white p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex items-center">
          <img src={Logo} alt="I3M Logo" className="h-10" />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex flex-grow justify-center space-x-10 items-center">
          <li>
            <Link to="/" className="hover:text-i3m-pink transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-i3m-pink transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="hover:text-i3m-pink transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-i3m-pink transition-colors"
            >
              Contact
            </Link>
          </li>
          <li className="ml-auto">
          <a
                href="/i3m-engine"
                target="_blank"
                className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                View Products
              </a>
            
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-4">
            <li>
              <Link to="/" className="hover:text-i3m-pink transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-i3m-pink transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/features"
                className="hover:text-i3m-pink transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-i3m-pink transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/i3m-engine"
                target="_blank"
                className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                I3M Engine
              </a>
              </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
