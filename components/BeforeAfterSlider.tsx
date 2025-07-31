
import React, { useState, useRef, CSSProperties } from 'react';
import { ArrowLeftRightIcon } from './Icons';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };
  
  const sliderStyle = {
    '--slider-pos': `${sliderPos}%`,
  } as CSSProperties;

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">See the Difference for Yourself</h2>
          <p className="text-lg text-gray-400 mt-2">Slide to reveal the healing power of AshAway.</p>
        </div>

        <div ref={containerRef} className="relative w-full max-w-4xl mx-auto aspect-[4/3] rounded-2xl overflow-hidden group" style={sliderStyle}>
          {/* After Image (Bottom Layer) */}
          <img src={after} alt="After using lip balm" className="absolute inset-0 w-full h-full object-cover" />
          
          {/* Before Image (Top Layer, clipped) */}
          <div className="absolute inset-0 w-full h-full" style={{ clipPath: 'inset(0 calc(100% - var(--slider-pos)) 0 0)' }}>
             <img src={before} alt="Before using lip balm" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Slider line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.7)] pointer-events-none" 
            style={{ left: `calc(var(--slider-pos) - 2px)` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 bg-[#39FF14] h-10 w-10 rounded-full flex items-center justify-center text-black border-4 border-[#121212]">
              <ArrowLeftRightIcon />
            </div>
          </div>
          
          {/* Input Range */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPos} 
            onChange={handleSliderChange} 
            className="slider-input absolute inset-0 w-full h-full opacity-0"
            aria-label="Before and after image slider"
          />
        </div>
      </div>
    </div>
  );
};
