import React from 'react';
import { useInView } from '../../hooks/useInView';
import { Weight, Ruler, Gauge, Shield } from 'lucide-react';
import SpecCard from './SpecCard';

const PerformanceSpecs = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const specs = [
    {
      icon: Weight,
      title: "LIGHTWEIGHT DESIGN",
      value: "8.5 kg",
      description: "Up to 45% lighter than conventional wheels"
    },
    {
      icon: Ruler,
      title: "LOAD RATING",
      value: "850 kg",
      description: "Exceeding industry standards for safety"
    },
    {
      icon: Gauge,
      title: "ROTATIONAL MASS",
      value: "-32%",
      description: "Reduced rotational inertia for better performance"
    },
    {
      icon: Shield,
      title: "STRENGTH TEST",
      value: "13,000 Nm",
      description: "Surpassing TÜV certification requirements"
    }
  ];

  return (
    <section ref={ref} className="relative py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4 tracking-[0.2em]">
              PERFORMANCE METRICS
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Every wheel is rigorously tested to ensure optimal performance
              and safety under the most demanding conditions.
            </p>
            <div className="w-24 h-[1px] bg-white/20 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <div
                key={spec.title}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <SpecCard {...spec} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSpecs;