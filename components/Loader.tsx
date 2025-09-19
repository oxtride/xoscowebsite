import React from 'react';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-1500 ease-in-out ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isLoading}
      role="status"
    >
      <div className="flex space-x-2" aria-label="Loading content">
        <div className="w-2 h-8 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '-0.3s' }}></div>
        <div className="w-2 h-8 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '-0.15s' }}></div>
        <div className="w-2 h-8 bg-white/60 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loader;
