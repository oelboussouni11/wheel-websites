import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import QuantitySelector from './QuantitySelector';

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

const CartDropdown = ({ isOpen, onClose, onNavigate }: CartDropdownProps) => {
  const { items, removeFromCart, updateQuantity } = useCart();

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => {
    return sum + (parseFloat(item.price.replace(',', '')) * item.quantity);
  }, 0);

  const handleCheckout = () => {
    onClose();
    onNavigate('checkout');
  };

  return (
    <div className="absolute top-full right-0 mt-2 w-96 bg-zinc-900 border border-white/10 rounded-lg shadow-xl z-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <h3 className="font-display text-sm tracking-wider text-white">CART</h3>
        <button 
          onClick={onClose}
          className="text-white/60 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Cart Items */}
      <div className="max-h-96 overflow-y-auto">
        {items.length === 0 ? (
          <div className="p-4 text-center text-white/60">
            Your cart is empty
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {items.map((item) => (
              <div 
                key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                className="p-4 flex gap-4"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="text-white font-medium">{item.name}</h4>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-white/40 hover:text-white/60 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  {(item.selectedColor || item.selectedSize) && (
                    <div className="text-sm text-white/60 mb-1">
                      {item.selectedColor && (
                        <span className="capitalize">{item.selectedColor}</span>
                      )}
                      {item.selectedSize && (
                        <span> - {item.selectedSize}</span>
                      )}
                    </div>
                  )}
                  <div className="flex justify-between items-center mt-2">
                    <QuantitySelector
                      value={item.quantity}
                      onChange={(value) => updateQuantity(item.id, value)}
                    />
                    <div className="text-white">${item.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {items.length > 0 && (
        <div className="p-4 border-t border-white/10 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-white/60">Total</span>
            <span className="text-white font-medium">${total.toLocaleString()}</span>
          </div>
          <button 
            onClick={handleCheckout}
            className="w-full bg-white text-black font-display tracking-wider py-2 rounded-lg hover:bg-white/90 transition-colors"
          >
            CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;