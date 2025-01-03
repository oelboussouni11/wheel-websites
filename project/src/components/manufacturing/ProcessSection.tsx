import React from 'react';
import { useInView } from '../../hooks/useInView';
import ProcessStep from './ProcessStep';
import { manufacturingSteps } from '../../data/manufacturingSteps';

const ProcessSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-zinc-900 to-zinc-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-px w-full top-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Header */}
          <div className="text-center mb-24">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4 tracking-[0.2em]">
              CRAFTSMANSHIP
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Every Beom wheel undergoes a meticulous manufacturing process,
              combining traditional craftsmanship with cutting-edge technology
            </p>
            <div className="w-24 h-[1px] bg-white/20 mx-auto mt-8" />
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {manufacturingSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                {...step}
                index={index + 1}
                isEven={index % 2 === 0}
                isInView={isInView}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;