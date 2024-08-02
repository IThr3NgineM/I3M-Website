import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/IThreeM.png";
import { FaSearch, FaBars, FaUser } from "react-icons/fa";

const EngineHeader = () => {
  const [activeMenu, setActiveMenu] = useState<string>("");

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu("");
  };

  return (
    <header className="bg-i3m-dark text-white p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex items-center">
          <Link to="/i3m-engine"> {/* Link to the homepage */}
            <img src={Logo} alt="I3M Logo" className="h-10" />
          </Link>
        </div>
        <nav className="hidden md:flex flex-grow justify-center space-x-10 items-center">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
           <Link
              to="product"
              className="hover:text-i3m-pink transition-colors"
            >
            Product
            </Link>
          </div>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="solution"
              className="hover:text-i3m-pink transition-colors"
            >
              Solutions
            </Link>
            
          </div>
          {/* Add more menu items similarly */}
          <Link
            to="resources"
            className="hover:text-i3m-pink transition-colors"
          >
            Resources
          </Link>
          <Link
            to="community"
            className="hover:text-i3m-pink transition-colors"
          >
            Community
          </Link>
          <Link to="learn" className="hover:text-i3m-pink transition-colors">
            Learn
          </Link>
          <Link to="support" className="hover:text-i3m-pink transition-colors">
            Support
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Plans and Pricing
          </button>
          <div className="hidden md:flex items-center space-x-4">
            <FaSearch className="cursor-pointer" />
            <FaUser className="cursor-pointer" />
            <FaBars className="cursor-pointer md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default EngineHeader;
