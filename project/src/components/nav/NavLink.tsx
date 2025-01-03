import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NavLink = ({ href, children, isActive, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className="group relative px-4 py-2"
  >
    {/* Enhanced hover effect */}
    <div className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-lg" />
    
    <span className={`relative text-sm tracking-wider transition-all duration-300 ${
      isActive 
        ? 'text-white font-medium' 
        : 'text-white/70 group-hover:text-white'
    }`}>
      {children}
    </span>
    
    <div className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ${
      isActive ? 'w-full' : 'w-0 group-hover:w-full'
    }`} />
  </a>
);

export default NavLink;