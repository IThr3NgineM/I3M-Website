import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import FloatingLink from '../components/Floatinglink';
import Logo from '../assets/IThreeM.png'; 

const Navbar = () => {
  return (
    <nav className="bg-i3m-dark text-white p-4">
      <div className="container mx-auto flex justify-center items-center relative">
        <div className="absolute left-0">
          <img src={Logo} alt="I3M Logo" className="h-10" /> {/* Adjust the height as needed */}
        </div>
        <ul className="hidden md:flex space-x-4 justify-center items-center">  {/* Responsive: show 2D nav on larger screens */}
          <li><Link to="/" className="hover:text-i3m-pink transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-i3m-pink transition-colors">About</Link></li>
          <li><Link to="/features" className="hover:text-i3m-pink transition-colors">Features</Link></li>
          <li><Link to="/contact" className="hover:text-i3m-pink transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div className="md:hidden flex justify-center">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingLink to="/">Home</FloatingLink>
          <FloatingLink to="/about">About</FloatingLink>
          <FloatingLink to="/features">Features</FloatingLink>
          <FloatingLink to="/contact">Contact</FloatingLink>
        </Canvas>
      </div>
    </nav>
  );
};

export default Navbar;
