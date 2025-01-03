import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const FooterSocial = () => (
  <div className="mt-8 flex justify-center">
    <div className="flex space-x-6">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="group relative"
          aria-label={label}
        >
          {/* Enhanced glow effect */}
          <div className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 blur-xl" />
          
          {/* Bright ring on hover */}
          <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-sm" />
          
          {/* Icon container */}
          <div className="relative p-2 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Icon 
              size={20} 
              strokeWidth={1.5}
              className="text-zinc-400 group-hover:text-white transition-all duration-300" 
            />
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default FooterSocial;