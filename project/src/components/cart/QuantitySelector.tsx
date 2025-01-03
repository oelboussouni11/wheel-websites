import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector = ({ 
  value, 
  onChange, 
  min = 1, 
  max = 10 
}: QuantitySelectorProps) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleDecrease}
        disabled={value <= min}
        className="p-1 text-white/60 hover:text-white disabled:opacity-50 disabled:hover:text-white/60"
      >
        <Minus size={14} />
      </button>
      <span className="w-8 text-center text-white text-sm">{value}</span>
      <button
        onClick={handleIncrease}
        disabled={value >= max}
        className="p-1 text-white/60 hover:text-white disabled:opacity-50 disabled:hover:text-white/60"
      >
        <Plus size={14} />
      </button>
    </div>
  );
};

export default QuantitySelector;