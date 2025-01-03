import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import CartButton from './cart/CartButton';
import NavLink from './nav/NavLink';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div onClick={() => onNavigate('home')} className="cursor-pointer">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink 
              href="#" 
              isActive={currentPage === 'home'}
              onClick={() => onNavigate('home')}
            >
              HOME
            </NavLink>
            <NavLink 
              href="#" 
              isActive={false}
              onClick={() => onNavigate('products')}
            >
              PRODUCTS
            </NavLink>
            <NavLink 
              href="#" 
              isActive={currentPage === 'contact'}
              onClick={() => onNavigate('contact')}
            >
              CONTACT
            </NavLink>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <CartButton onNavigate={onNavigate} />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative group p-2"
            >
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg" />
              {isMobileMenuOpen ? (
                <X size={24} className="relative text-white/70 group-hover:text-white transition-colors" strokeWidth={1.5} />
              ) : (
                <Menu size={24} className="relative text-white/70 group-hover:text-white transition-colors" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              {[
                { label: 'HOME', page: 'home' },
                { label: 'PRODUCTS', page: 'products' },
                { label: 'CONTACT', page: 'contact' }
              ].map(({ label, page }) => (
                <a
                  key={page}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-sm ${
                    currentPage === page
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  } rounded-lg transition-colors`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;