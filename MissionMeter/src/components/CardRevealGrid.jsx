import React from 'react';
import RevealCard from './RevealCard';

const cards = [
  {
    title: 'Aim',
    content:
      'To revolutionize how space missions and high-investment projects are financially planned, tracked, and optimized with intelligence, precision, and clarity.'
  },
  {
    title: 'Mission',
    content:
      'To revolutionize how space missions and high-investment projects are financially planned, tracked, and optimized with intelligence, precision, and clarity.'
  },
  {
    title: 'Vision',
    content:
      'To become the global standard for financial planning in space and large-scale technical missions, and eventually scale MissionMeter into a universal engine for managing costs across industries like infrastructure, logistics, and defense.'
  }
];

export default function RevealCardGrid() {
  return (
    <div id="AimMission" className="py-10 px-6 md:px-16 min-h-screen mt-10">
      <h2 className="text-6xl font-bold text-center text-indigo-700 mb-10">
        Our Purpose
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cards.map((card, idx) => (
          <RevealCard key={idx} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
}
