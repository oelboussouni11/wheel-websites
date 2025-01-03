import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectSubjectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectSubject = ({ value, onChange }: SelectSubjectProps) => (
  <div className="relative group">
    {/* Enhanced gradient glow effect */}
    <div className="absolute -inset-[0.5px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm" />
    
    <div className="relative">
      <select
        name="subject"
        value={value}
        onChange={onChange}
        className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-10 py-2.5 text-white 
          appearance-none cursor-pointer transition-all duration-300
          focus:outline-none focus:ring-1 focus:ring-white/20 hover:border-white/20
          disabled:opacity-50 disabled:cursor-not-allowed
          font-light tracking-wide"
        required
      >
        <option value="" disabled className="bg-zinc-900 text-zinc-400">
          Select Subject
        </option>
        {[
          { value: 'sales', label: 'Sales Inquiry' },
          { value: 'support', label: 'Technical Support' },
          { value: 'custom', label: 'Custom Order' },
          { value: 'other', label: 'Other' }
        ].map(option => (
          <option 
            key={option.value} 
            value={option.value} 
            className="bg-zinc-900 text-white py-2"
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* Enhanced chevron icon with animation */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDown 
          size={16}
          className="text-white/40 group-hover:text-white/60 transition-all duration-300 
            group-hover:transform group-hover:-translate-y-[1px]" 
          strokeWidth={1.5}
        />
      </div>
    </div>
  </div>
);

export default SelectSubject;