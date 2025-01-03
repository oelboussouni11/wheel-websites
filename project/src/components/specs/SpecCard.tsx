import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SpecCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

const SpecCard = ({ icon: Icon, title, value, description }: SpecCardProps) => (
  <div className="group p-6 bg-black/30 border border-white/5 rounded-lg hover:border-white/10 transition-all duration-500">
    <Icon className="h-8 w-8 text-white/60 mb-4 group-hover:text-white transition-colors" strokeWidth={1} />
    <h3 className="font-display text-sm text-white/80 mb-3 tracking-wider group-hover:text-white transition-colors">
      {title}
    </h3>
    <div className="text-2xl text-white mb-2 font-light">
      {value}
    </div>
    <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
      {description}
    </p>
  </div>
)

export default SpecCard;