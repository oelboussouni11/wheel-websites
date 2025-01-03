import React from 'react';
import { Circle } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center space-x-3 group">
    <div className="relative">
      {/* Outer ring */}
      <Circle 
        className="h-9 w-9 text-white transition-all duration-500 group-hover:rotate-180" 
        strokeWidth={1}
      />
      {/* Inner ring */}
      <Circle 
        className="h-6 w-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:rotate-[-180deg]" 
        strokeWidth={1}
      />
      {/* Spokes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 h-[18px] w-[1px] bg-white/50 group-hover:bg-white transition-all duration-500"
          style={{
            transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
            transformOrigin: 'center',
          }}
        />
      ))}
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-150" />
    </div>
    <span className="text-xl text-white font-display tracking-[0.2em] uppercase">
      Beom
    </span>
  </div>
);

export default Logo;