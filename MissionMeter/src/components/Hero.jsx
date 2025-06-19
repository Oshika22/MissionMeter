// src/components/Hero.jsx

import React from 'react'
import { motion } from 'framer-motion'
import SatelliteViewer from './SatelliteViewer'

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-12 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
      
      {/* Satellite 3D Viewer */}
      <div className="absolute top-10 right-2 w-[500px] h-[700px] sm:w-[400px] sm:h-[600px] md:w-[700px] md:h-[600px] opacity-40 pointer-events-none">
        <SatelliteViewer />
      </div>


      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        MissionMeter
      </motion.h1>

      {/* Subtext */}
      <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-gray-300 z-10 text-center">
        Measuring Missions. Managing Money. <br className="hidden sm:block" />
        A futuristic budget engine for space and beyond.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl text-lg transition-all duration-300"
        >
          Get Started
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="border border-white text-white px-6 py-3 rounded-xl text-lg hover:bg-white hover:text-black transition-all duration-300"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
