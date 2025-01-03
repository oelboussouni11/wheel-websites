import React from 'react';

interface ColorSelectorProps {
  value: string;
  onChange: (color: string) => void;
}

const colors = [
  { 
    id: 'black', 
    label: 'Gloss Black', 
    color: 'bg-zinc-900',
    gradient: 'from-zinc-800 to-zinc-950'
  },
  { 
    id: 'silver', 
    label: 'Brushed Silver', 
    color: 'bg-zinc-300',
    gradient: 'from-zinc-200 to-zinc-400'
  },
  { 
    id: 'bronze', 
    label: 'Satin Bronze', 
    color: 'bg-amber-600',
    gradient: 'from-amber-500 to-amber-700'
  },
  { 
    id: 'gunmetal', 
    label: 'Gunmetal', 
    color: 'bg-zinc-600',
    gradient: 'from-zinc-500 to-zinc-700'
  }
];

const ColorSelector = ({ value, onChange }: ColorSelectorProps) => (
  <div className="space-y-6">
    <div className="font-display text-sm tracking-wider text-white/80">FINISH</div>
    <div className="grid grid-cols-4 gap-8">
      {colors.map(({ id, label, gradient }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className="group relative"
        >
          {/* Enhanced color swatch */}
          <div className="relative">
            {/* Glow effect */}
            <div className={`absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${gradient} blur-lg`} />
            
            {/* Color circle */}
            <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${gradient} ${
              value === id 
                ? 'ring-2 ring-white/80 ring-offset-4 ring-offset-zinc-900 scale-110' 
                : 'ring-1 ring-white/20 hover:ring-white/40'
            } transform transition-all duration-300 group-hover:scale-105`}>
              {/* Inner highlight */}
              <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-50" />
            </div>

            {/* Selection indicator */}
            {value === id && (
              <div className="absolute inset-0 rounded-full">
                <div className="absolute -inset-1 rounded-full border-2 border-white/20 animate-ping" />
              </div>
            )}
          </div>

          {/* Label */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className={`text-xs font-medium ${
              value === id 
                ? 'text-white' 
                : 'text-white/60 group-hover:text-white/80'
            } transition-colors duration-300`}>
              {label}
            </span>
          </div>
        </button>
      ))}
    </div>
  </div>
);

export default ColorSelector;