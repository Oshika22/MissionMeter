// src/components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MissionMeterLogoC } from '../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('en');

  const translations = {
    en: { home: "Home", budget: "Budget", chatbot: "Chatbot" },
    hi: { home: "मुखपृष्ठ", budget: "बजट", chatbot: "चैटबॉट" },
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => setLang(lang === 'en' ? 'hi' : 'en');

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
            className="h-12 drop-shadow-2xl animate-float"
          />
          <Link to="/" className='text-indigo-500 font-newsreader ml-2'>MissionMeter</Link>
        </motion.div>

        <div className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <nav className="hidden md:flex gap-8 text-white text-lg items-center">
          <Link to="/" className="hover:text-indigo-500 font-semibold">{translations[lang].home}</Link>
          <Link to="/predictor" className="hover:text-indigo-500 font-semibold">{translations[lang].budget}</Link>
          <Link to="/Chatbot" className="hover:text-indigo-500 font-semibold">{translations[lang].chatbot}</Link>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="ml-4 p-2 text-white hover:text-indigo-300"
            title="Switch Language"
          >
            <FontAwesomeIcon icon={faFlag} /> {lang === 'en' ? 'EN' : 'HI'}
          </button>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col items-center bg-[#302b63] py-4 gap-4 text-white text-lg"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
        >
          <Link to="/" onClick={toggleMenu}>{translations[lang].home}</Link>
          <Link to="/predictor" onClick={toggleMenu}>{translations[lang].budget}</Link>
          <Link to="/Chatbot" onClick={toggleMenu}>{translations[lang].chatbot}</Link>
          <button
            onClick={() => { toggleLanguage(); toggleMenu(); }}
            className="mt-2 p-2 text-white hover:text-indigo-300"
            title="Switch Language"
          >
            <FontAwesomeIcon icon={faFlag} /> {lang === 'en' ? 'EN' : 'HI'}
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;