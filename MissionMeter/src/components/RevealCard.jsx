import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RevealCard({ title, content }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.div
      onClick={() => setRevealed(!revealed)}
      whileHover={{ scale: 1.015 }}
      className="relative bg-pink-50 rounded-2xl p-8 min-h-[300px] md:min-h-[350px] cursor-pointer transition-shadow duration-300 shadow-xl hover:shadow-indigo-200"
    >
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center h-full"
          >
            <span className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              {title}
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">{title}</h3>
            <p className="text-md md:text-lg text-gray-700 leading-relaxed">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
