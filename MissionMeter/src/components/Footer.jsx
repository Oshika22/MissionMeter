// src/components/Footer.jsx

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="w-full rounded-t-3xl bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-8 px-6 sm:px-12 mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Team Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Team: CodeCrafters</h2>
          <p className="text-sm text-gray-300">Member: Oshika Sharma</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 justify-center">
          <a href="https://github.com/Oshika22/MissionMeter" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110 hover:text-pink-400">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/oshika-sharma-a1120529a/" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110 hover:text-blue-400">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="mailto:oshika004@gmail.com" className="transition hover:scale-110 hover:text-red-400">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110 hover:text-pink-500">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
