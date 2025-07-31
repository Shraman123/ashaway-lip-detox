
import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#121212]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter">
          <a href="#" className="flex items-center gap-2">
            AshAway<span className="text-[#39FF14]">.</span>
          </a>
        </h1>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#product" className="hover:text-[#39FF14] transition-colors duration-300">Product</a>
          <a href="#results" className="hover:text-[#39FF14] transition-colors duration-300">Results</a>
          <a href="#reviews" className="hover:text-[#39FF14] transition-colors duration-300">Reviews</a>
        </nav>
        <a href="#cta" className="bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-[#39FF14] transform transition-all duration-300 ease-in-out">
          Try Now
        </a>
      </div>
    </header>
  );
};
