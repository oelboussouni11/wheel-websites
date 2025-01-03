import React from 'react';
import SplineScene from './SplineScene';
import WhyChooseUs from './WhyChooseUs';
import FeaturedCollection from './featured/FeaturedCollection';
import PerformanceSpecs from './specs/PerformanceSpecs';
import ProcessSection from './manufacturing/ProcessSection';
import ReviewsSection from './reviews/ReviewsSection';
import WheelScience from './science/WheelScience';
import { useScroll } from '../hooks/useScroll';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  const { scrollY } = useScroll();
  const opacity = Math.min(scrollY / 700, 1);
  const blur = Math.min(scrollY / 150, 12);

  return (
    <div className="relative">
      <div 
        className="h-screen w-full fixed top-0 left-0 transition-all duration-300"
        style={{ 
          filter: `blur(${blur}px)`,
          opacity: 1 - opacity * 0.7
        }}
      >
        <SplineScene />
      </div>
      <div className="min-h-screen" />
      <div className="relative">
        <WhyChooseUs />
        <FeaturedCollection onNavigate={onNavigate} />
        <PerformanceSpecs />
        <ProcessSection />
        <ReviewsSection />
        <WheelScience />
      </div>
    </div>
  );
};

export default Hero;