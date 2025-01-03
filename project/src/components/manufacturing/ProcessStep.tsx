import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isEven: boolean;
  isInView: boolean;
  delay: number;
}

const ProcessStep = ({ 
  icon: Icon, 
  title, 
  description, 
  index,
  isEven,
  isInView,
  delay
}: ProcessStepProps) => {
  const containerClasses = isEven
    ? 'md:flex-row'
    : 'md:flex-row-reverse';

  return (
    <div 
      className={`flex flex-col ${containerClasses} items-center mb-16 last:mb-0`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Step Number */}
      <div className="flex-1 relative">
        <div className={`absolute top-1/2 ${isEven ? 'right-0' : 'left-0'} transform -translate-y-1/2 ${isEven ? '-translate-x-16' : 'translate-x-16'} hidden md:block text-8xl font-display text-white/5`}>
          {String(index).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 group">
        <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-lg p-8 hover:border-white/10 transition-all duration-500">
          <Icon className="h-8 w-8 text-white/60 mb-4 group-hover:text-white transition-colors" strokeWidth={1} />
          <h3 className="font-display text-lg text-white mb-4 tracking-wider">
            {title}
          </h3>
          <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;