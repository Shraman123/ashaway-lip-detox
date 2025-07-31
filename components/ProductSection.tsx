
import React from 'react';
import { LeafIcon, ShieldIcon, SparkleIcon, SunIcon } from './Icons';

const features = [
  {
    icon: <LeafIcon />,
    title: "Natural Detoxifiers",
    description: "Lemon & beetroot extracts gently exfoliate and reduce pigmentation."
  },
  {
    icon: <SparkleIcon />,
    title: "Deep Hydration",
    description: "Shea Butter and Vitamin E provide intense moisture, healing cracked lips."
  },
  {
    icon: <ShieldIcon />,
    title: "Nicotine Barrier",
    description: "Forms a protective layer to shield lips from further staining and damage."
  },
  {
    icon: <SunIcon />,
    title: "SPF 15 Protection",
    description: "Protects your healing lips from harmful UV rays, preventing darkening."
  }
]

export const ProductSection: React.FC = () => {
  return (
    <div className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Powerful Ingredients, Real Results</h2>
            <p className="text-lg text-gray-400 mt-2">Crafted with care to reverse the signs of smoking.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#242424] p-8 rounded-xl border border-gray-700/50 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-[#39FF14] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
