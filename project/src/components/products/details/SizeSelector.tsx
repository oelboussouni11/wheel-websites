import React from 'react';

interface SizeSelectorProps {
  sizes: string[];
  value: string;
  onChange: (size: string) => void;
}

const SizeSelector = ({ sizes, value, onChange }: SizeSelectorProps) => (
  <div className="space-y-4">
    <div className="font-display text-sm tracking-wider text-white/80">SIZE</div>
    <div className="flex flex-wrap gap-3">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onChange(size)}
          className="group relative"
        >
          {/* Hover glow effect */}
          <div className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm" />
          
          {/* Button content */}
          <div className={`relative px-6 py-2 rounded-lg border ${
            value === size
              ? 'border-white/20 bg-white/10'
              : 'border-white/10 hover:border-white/20'
          } transition-all duration-300`}>
            <span className={`text-sm ${
              value === size ? 'text-white' : 'text-white/60 group-hover:text-white/80'
            } transition-colors duration-300`}>
              {size}
            </span>
          </div>
        </button>
      ))}
    </div>
  </div>
);

export default SizeSelector;