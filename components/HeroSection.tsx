
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-grid-gray-700/[0.2] relative">
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#121212] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-6 z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4">
          Detox Your Lips<span className="text-[#39FF14]">.</span>
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-400">
          AshAway the Damage.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-6 mb-10">
          The ultimate lip repair balm for smokers. Restore natural color, heal cracks, and get your confidence back.
        </p>
        <div id="cta" className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#39FF14] text-black font-bold py-4 px-10 rounded-full text-lg w-full sm:w-auto hover:scale-105 transform transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(57,255,20,0.5)]">
            Try for ₹199
          </button>
          <button className="bg-gray-700 text-white font-bold py-4 px-10 rounded-full text-lg w-full sm:w-auto hover:bg-gray-600 transform transition-all duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
