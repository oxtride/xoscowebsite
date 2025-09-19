import React, { useState, useEffect } from 'react';

const RainBackground: React.FC = () => {
  const drops = Array.from({ length: 150 }, (_, i) => ({
    left: Math.random() * 100,
    opacity: Math.random() * 0.4 + 0.1,
    height: Math.random() * 10 + 5,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 1.5,
    key: i,
  }));

  return (
    <div className="rain fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {drops.map((drop) => (
        <div
          key={drop.key}
          className="drop absolute bg-white"
          style={{
            left: `${drop.left}%`,
            top: `-${drop.height}px`,
            opacity: drop.opacity,
            height: `${drop.height}px`,
            width: '0.5px',
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default RainBackground;