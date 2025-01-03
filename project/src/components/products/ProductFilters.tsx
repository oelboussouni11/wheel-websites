import React from 'react';
import { Filters } from '../../types/product';

interface ProductFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

const ProductFilters = ({ filters, onChange }: ProductFiltersProps) => {
  const handleChange = (key: keyof Filters, value: string | number[] | string[]) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-8 bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/5">
      <div className="font-display text-xl text-white">FILTERS</div>
      
      {/* Size Range */}
      <div className="space-y-4">
        <h3 className="text-sm text-white/80 font-display tracking-wider">SIZE RANGE</h3>
        <div className="space-y-3">
          {['19"', '20"', '21"', '22"'].map((size) => (
            <label key={size} className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={filters.sizes.includes(size)}
                  onChange={(e) => {
                    const newSizes = e.target.checked
                      ? [...filters.sizes, size]
                      : filters.sizes.filter((s) => s !== size);
                    handleChange('sizes', newSizes);
                  }}
                  className="peer sr-only"
                />
                <div className="w-4 h-4 border border-white/10 rounded bg-white/5 peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-500 peer-checked:border-transparent transition-all duration-300" />
                <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
              </div>
              <span className="text-white/70 group-hover:text-white/90 transition-colors">{size}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <h3 className="text-sm text-white/80 font-display tracking-wider">PRICE RANGE</h3>
        <div className="space-y-4">
          {/* Price display */}
          <div className="inline-flex bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-lg">
            <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-baseline space-x-1">
              <span className="text-sm text-white/60">$</span>
              <span className="text-lg font-light text-white">{filters.priceRange[0].toLocaleString()}</span>
            </div>
          </div>

          {/* Slider */}
          <div className="relative">
            <input
              type="range"
              min={1000}
              max={5000}
              step={100}
              value={filters.priceRange[0]}
              onChange={(e) => handleChange('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
              className="w-full appearance-none h-1 rounded-full focus:outline-none"
              style={{
                background: `linear-gradient(to right, 
                  rgb(59 130 246) 0%, 
                  rgb(147 51 234) ${((filters.priceRange[0] - 1000) / (5000 - 1000)) * 100}%, 
                  rgb(63 63 70) ${((filters.priceRange[0] - 1000) / (5000 - 1000)) * 100}%, 
                  rgb(63 63 70) 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-white/40 mt-2">
              <span>$1,000</span>
              <span>$5,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Style */}
      <div className="space-y-4">
        <h3 className="text-sm text-white/80 font-display tracking-wider">STYLE</h3>
        <div className="space-y-3">
          {['Forged', 'Monoblock', 'Multi-Piece'].map((style) => (
            <label key={style} className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={filters.styles.includes(style)}
                  onChange={(e) => {
                    const newStyles = e.target.checked
                      ? [...filters.styles, style]
                      : filters.styles.filter((s) => s !== style);
                    handleChange('styles', newStyles);
                  }}
                  className="peer sr-only"
                />
                <div className="w-4 h-4 border border-white/10 rounded bg-white/5 peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-500 peer-checked:border-transparent transition-all duration-300" />
                <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
              </div>
              <span className="text-white/70 group-hover:text-white/90 transition-colors">{style}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;