import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

export const FeatureCard = ({ icon: Icon, title, className = '', style }: FeatureCardProps) => (
  <div 
    className={`group backdrop-blur-sm rounded-lg transition-all duration-500 ${className}`} 
    style={style}
  >
    <div className="p-8 border border-white/10 rounded-lg bg-black/30 hover:bg-black/40 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:scale-[1.02]">
      <div className="text-white/80 group-hover:text-white transition-all duration-500">
        <Icon size={24} strokeWidth={1} className="mx-auto mb-6 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
      </div>
      <h3 className="font-sans text-sm font-light text-white/90 text-center tracking-[0.15em] uppercase group-hover:text-white transition-colors">
        {title}
      </h3>
    </div>
  </div>
);