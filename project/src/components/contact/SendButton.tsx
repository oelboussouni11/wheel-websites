import React from 'react';
import { Send } from 'lucide-react';

const SendButton = () => (
  <button
    type="submit"
    className="group relative"
  >
    {/* Gradient border effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg opacity-75 group-hover:opacity-100 blur transition-all duration-500" />
    
    {/* Button content */}
    <div className="relative bg-zinc-900 rounded-[7px] px-5 py-2 transition-all duration-500 group-hover:bg-opacity-90">
      <div className="flex items-center space-x-2">
        <span className="font-display text-[13px] text-white/90 tracking-wider group-hover:text-white transition-colors">
          SEND MESSAGE
        </span>
        <Send 
          size={13}
          className="text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" 
          strokeWidth={1.5}
        />
      </div>
    </div>
  </button>
);

export default SendButton;