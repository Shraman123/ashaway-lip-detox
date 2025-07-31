
import React from 'react';

export const LipAnimation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h3 className="text-center text-3xl md:text-4xl font-bold mb-2">Watch The Transformation</h3>
        <p className="text-center text-gray-400 mb-8">Our balm works to restore your lips' natural pinkish hue.</p>
        <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="max-w-[200px] md:max-w-[300px] w-full h-auto">
            <path d="M 10 50 C 10 20, 40 20, 100 50 C 160 20, 190 20, 190 50 C 190 80, 160 100, 100 80 C 40 100, 10 80, 10 50 Z" 
                className="lip-dark"
                stroke="#121212" strokeWidth="3"/>
            <path d="M 10 50 C 10 50, 40 50, 100 50 C 160 50, 190 50, 190 50" stroke="#121212" strokeWidth="2"/>
            <path d="M 40 40 C 40 30, 60 30, 70 40" fill="none" strokeWidth="2" className="lip-light" />
        </svg>
    </div>
  );
};
