
import React from 'react';

const reviews = [
  {
    name: "Aisha K.",
    gender: 'female',
    review: "I was so self-conscious about my dark lips. I've been using AshAway for a month and the difference is insane! My lips feel so soft and look so much brighter.",
    avatar: "https://picsum.photos/seed/female1/100/100"
  },
  {
    name: "Rohan S.",
    gender: 'male',
    review: "Honestly didn't think a lip balm could do much. I was wrong. My lips were always dry and dark. This stuff actually works. They feel healthier and look better.",
    avatar: "https://picsum.photos/seed/male1/100/100"
  },
  {
    name: "Priya M.",
    gender: 'female',
    review: "The confidence boost is real. I can finally wear lighter lipstick shades again. AshAway is part of my daily routine now. Highly recommend!",
    avatar: "https://picsum.photos/seed/female2/100/100"
  },
    {
    name: "Karan V.",
    gender: 'male',
    review: "I'm a chain smoker and my lips paid the price. A friend suggested this and it's been a game-changer. Less chapping and they definitely look less...ashy. Good product.",
    avatar: "https://picsum.photos/seed/male2/100/100"
  }
]

export const ReviewsSection: React.FC = () => {
  return (
    <div className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Don't Just Take Our Word For It</h2>
            <p className="text-lg text-gray-400 mt-2">Hear from real smokers who transformed their lips.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
                 <div key={index} className="bg-[#242424] p-8 rounded-xl border border-gray-700/50 flex flex-col items-start">
                    <div className="flex items-center mb-4">
                        <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full mr-4 border-2 border-[#39FF14]" />
                        <div>
                            <h3 className="text-xl font-bold">{review.name}</h3>
                            <p className="text-sm text-gray-400">Verified Buyer</p>
                        </div>
                    </div>
                    <p className="text-gray-300 italic">"{review.review}"</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
