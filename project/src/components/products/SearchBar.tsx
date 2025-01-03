import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm" />
    <div className="relative flex items-center">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by brand or model..."
        className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-10 py-2.5 text-white placeholder:text-zinc-500
          focus:outline-none focus:ring-1 focus:ring-white/20 hover:border-white/20 transition-colors"
      />
      <Search 
        size={18} 
        className="absolute right-3 text-white/40 group-hover:text-white/60 transition-colors"
        strokeWidth={1.5}
      />
    </div>
  </div>
);

export default SearchBar;