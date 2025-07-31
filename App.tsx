
import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LipAnimation } from './components/LipAnimation';
import { ProductSection } from './components/ProductSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { AnimatedSection } from './components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="bg-[#121212] min-h-screen">
      <Header />
      <main>
        <HeroSection />
        
        <AnimatedSection className="py-12 md:py-20">
          <LipAnimation />
        </AnimatedSection>
        
        <AnimatedSection id="product">
          <ProductSection />
        </AnimatedSection>

        <AnimatedSection id="results">
          <BeforeAfterSlider 
            before="https://picsum.photos/seed/before/800/600"
            after="https://picsum.photos/seed/after/800/600"
          />
        </AnimatedSection>

        <AnimatedSection id="reviews">
          <ReviewsSection />
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-black bg-opacity-20">
            <div className="container mx-auto px-6 text-center">
                 <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Ready for a Change?</h2>
                 <p className="text-gray-300 max-w-2xl mx-auto mb-8">Join thousands who have reclaimed their confidence. Your lip detox journey starts now.</p>
                 <button className="bg-[#39FF14] text-black font-bold py-3 px-8 rounded-full text-lg hover:scale-105 transform transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(57,255,20,0.5)]">
                    Start Your Lip Detox
                </button>
            </div>
        </AnimatedSection>

      </main>
      <Footer />
    </div>
  );
};

export default App;
