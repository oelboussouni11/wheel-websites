import React, { useRef, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartDropdown from './CartDropdown';
import { useCartDropdown } from '../../hooks/useCartDropdown';

interface CartButtonProps {
  onNavigate: (page: string) => void;
}

const CartButton = ({ onNavigate }: CartButtonProps) => {
  const { totalItems } = useCart();
  const { isOpen, setCartOpen } = useCartDropdown();
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setCartOpen]);

  return (
    <div ref={buttonRef} className="relative">
      <button 
        className="relative group p-2"
        onClick={() => setCartOpen(!isOpen)}
      >
        {/* Hover effect background */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg" />
        
        {/* Cart icon with animation */}
        <div className="relative text-white/70 group-hover:text-white transition-colors">
          <ShoppingCart 
            size={24} 
            strokeWidth={1.5}
            className="transform group-hover:scale-110 transition-transform duration-300" 
          />
          
          {/* Item count badge */}
          {totalItems > 0 && (
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-in fade-in duration-300">
              {totalItems}
            </div>
          )}
        </div>
      </button>

      <CartDropdown 
        isOpen={isOpen} 
        onClose={() => setCartOpen(false)} 
        onNavigate={onNavigate}
      />
    </div>
  );
};

export default CartButton;