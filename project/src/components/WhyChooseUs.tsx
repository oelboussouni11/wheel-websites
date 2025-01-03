import React from 'react';
import { useInView } from '../hooks/useInView';
import { FeatureGrid } from './features/FeatureGrid';

const WhyChooseUs = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center">
      {/* Dark overlay with increased opacity */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      <div className="relative w-full max-w-6xl mx-auto px-4 py-16 md:py-0">
        <h2 className={`font-display text-2xl md:text-3xl text-white text-center mb-16 md:mb-24 tracking-[0.2em] transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          THE BEOM EXPERIENCE
        </h2>
        <FeatureGrid isInView={isInView} />
      </div>
    </section>
  );
};

export default WhyChooseUs;