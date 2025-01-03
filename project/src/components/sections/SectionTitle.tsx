import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  className = '', 
  alignment = 'left' 
}: SectionTitleProps) => (
  <div className={`text-${alignment} ${className}`}>
    <h2 className="text-5xl font-bold text-white mb-4">{title}</h2>
    <p className="text-zinc-400 text-xl">{subtitle}</p>
  </div>
);

export default SectionTitle;