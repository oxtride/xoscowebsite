import React, { useState, useEffect } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollTotal > 0) {
      const scrolled = window.scrollY;
      const percentage = (scrolled / scrollTotal) * 100;
      setScrollPercentage(percentage);
    } else {
      setScrollPercentage(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60]" role="presentation">
      <div
        className="h-full bg-gradient-to-r from-white to-gray-400"
        style={{ width: `${scrollPercentage}%` }}
        role="progressbar"
        aria-valuenow={scrollPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
