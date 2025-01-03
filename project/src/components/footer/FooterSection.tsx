import React from 'react';
import FooterNav from './FooterNav';
import FooterSocial from './FooterSocial';
import FooterNewsletter from './FooterNewsletter';
import Logo from '../Logo';

const FooterSection = () => (
  <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/5">
    {/* Gradient background effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
    
    <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Brand Column - Always visible */}
        <div className="lg:col-span-4 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Logo />
          </div>
          <p className="mt-6 text-zinc-400 leading-relaxed max-w-md mx-auto lg:mx-0">
            Precision-engineered performance wheels, crafted for those who demand 
            excellence in every turn.
          </p>
          <FooterSocial />
        </div>

        {/* Navigation - Hidden on mobile */}
        <div className="hidden lg:block lg:col-span-4">
          <FooterNav />
        </div>

        {/* Newsletter - Visible on all devices */}
        <div className="lg:col-span-4">
          <FooterNewsletter />
        </div>
      </div>

      {/* Bottom Bar - Simplified on mobile */}
      <div className="mt-12 lg:mt-16 pt-8 border-t border-white/5">
        <div className="flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:justify-between">
          {/* Copyright - Always visible */}
          <div className="text-zinc-500 text-sm text-center lg:text-left">
            © {new Date().getFullYear()} Beom Wheels. All rights reserved.
          </div>
          
          {/* Made with love - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-2 text-sm">
            <span className="text-zinc-500">Made with</span>
            <span className="inline-block animate-pulse text-pink-500">♥</span>
            <span className="text-zinc-500">by</span>
            <a 
              href="https://dynamic-heliotrope-816144.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group"
            >
              <span className="relative z-10 px-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-500">
                Beom Agency
              </span>
              <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-lg" />
            </a>
          </div>

          {/* Legal links - Compact on mobile */}
          <div className="flex space-x-4 lg:space-x-6 text-xs lg:text-sm">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;