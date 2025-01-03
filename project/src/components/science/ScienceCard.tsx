import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ScienceCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

const ScienceCard = ({ icon: Icon, title, value, description }: ScienceCardProps) => (
  <div className="group relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-black/40 border border-white/5 rounded-lg p-6 hover:border-white/10 transition-all duration-500">
      <Icon className="h-8 w-8 text-white/60 mb-4 group-hover:text-white transition-colors" strokeWidth={1} />
      <h3 className="font-display text-sm text-white/80 mb-2 tracking-wider group-hover:text-white transition-colors">
        {title}
      </h3>
      <div className="text-2xl text-white mb-2 font-light">
        {value}
      </div>
      <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
        {description}
      </p>
    </div>
  </div>
);

export default ScienceCard;