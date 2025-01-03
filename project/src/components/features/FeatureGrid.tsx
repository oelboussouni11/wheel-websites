import React from 'react';
import { FeatureCard } from './FeatureCard';
import { featuresList } from './featuresList';

interface FeatureGridProps {
  isInView: boolean;
}

export const FeatureGrid = ({ isInView }: FeatureGridProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
    {featuresList.map((feature, index) => (
      <FeatureCard
        key={feature.title}
        {...feature}
        className={`transition-all duration-700 ${
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      />
    ))}
  </div>
);