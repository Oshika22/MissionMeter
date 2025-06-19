// src/components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MissionMeterLogoC } from '../assets/images';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-indigo-950 bg-opacity-90 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <motion.div
          className="text-2xl text-white cursor-pointer flex justify-center items-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <img
            src={MissionMeterLogoC}
            alt="Hero Illustration"
            className="h-12  drop-shadow-2xl animate-float"
          />
          <Link to="/" className='text-indigo-500 font-newsreader'>MissionMeter</Link>
        </motion.div>

        <div className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <nav className="hidden md:flex gap-8 text-white text-lg">
          <Link to="/" className="hover:text-indigo-500 font-semibold">Home</Link>
          <Link to="/predictor" className="hover:text-indigo-500 font-semibold">Budget</Link>
          <Link to="/Chatbot" className="hover:text-indigo-500 font-semibold">Chatbot</Link>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col items-center bg-[#302b63] py-4 gap-4 text-white text-lg"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
        >
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/problem" onClick={toggleMenu}>Problem</Link>
          <Link to="/solution" onClick={toggleMenu}>Solution</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;