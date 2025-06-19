import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function RatingComponent({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = (value) => {
    setRating(value);
    setSubmitted(true);
    if (onSubmit) onSubmit(value);
  };

  return (
    <div className="flex flex-cols items-center justify-center text-center mt-6 mb-10">
      <div className='bg-slate-50 border border-indigo-500 p-4 rounded-lg w-[300px]'>
        <h3 className="text-xl font-semibold mb-6 text-center text-indigo-700">
          {submitted ? 'Thanks for your feedback!' : 'Rate Your Experience'}
        </h3>
        <div className="flex justify-center space-x-1">
          {[...Array(5)].map((_, i) => {
            const value = i + 1;
            return (
              <button
                key={value}
                type="button"
                onClick={() => handleClick(value)}
                onMouseEnter={() => setHovered(value)}
                onMouseLeave={() => setHovered(null)}
                className="focus:outline-none"
              >
                <FaStar
                  size={28}
                  className={`transition-colors duration-200 ${
                    (hovered || rating) >= value ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              </button>
            );
          })}
        </div>
        {submitted && (
          <p className="mt-2 text-sm text-green-600">You rated this {rating} star{rating > 1 ? 's' : ''}.</p>
        )}
      </div>
    </div>
  );
}
