import React from 'react';
import { useInView } from '../../hooks/useInView';
import ScienceCard from './ScienceCard';
import { scienceData } from './scienceData';
import TechnicalSpecs from './TechnicalSpecs';

const WheelScience = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-32 bg-zinc-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.05),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4 tracking-[0.2em]">
              WHEEL SCIENCE
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Advanced engineering and precision manufacturing combine to create 
              the perfect balance of performance and aesthetics.
            </p>
            <div className="w-24 h-[1px] bg-white/20 mx-auto mt-8" />
          </div>

          {/* Science Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {scienceData.map((item, index) => (
              <div
                key={item.title}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <ScienceCard {...item} />
              </div>
            ))}
          </div>

          {/* Technical Specifications */}
          <TechnicalSpecs isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

export default WheelScience;