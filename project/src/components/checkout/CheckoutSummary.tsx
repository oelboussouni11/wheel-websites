import React from 'react';
import { useCart } from '../../context/CartContext';
import { Shield, Truck } from 'lucide-react';

const CheckoutSummary = () => {
  const { items } = useCart();
  
  const subtotal = items.reduce((sum, item) => {
    return sum + (parseFloat(item.price.replace(',', '')) * item.quantity);
  }, 0);
  
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="space-y-6">
      <h2 className="font-display text-xl text-white tracking-wider">ORDER SUMMARY</h2>
      
      <div className="bg-white/5 border border-white/10 rounded-lg divide-y divide-white/10">
        {/* Items */}
        <div className="p-6 space-y-4">
          {items.map((item) => (
            <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-white/5">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">{item.name}</h4>
                <div className="text-sm text-white/60 mb-1">
                  {item.selectedColor && <span className="capitalize">{item.selectedColor}</span>}
                  {item.selectedSize && <span> - {item.selectedSize}</span>}
                </div>
                <div className="flex justify-between">
                  <div className="text-white/60">Qty: {item.quantity}</div>
                  <div className="text-white">${item.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="p-6 space-y-4">
          <div className="flex justify-between text-white/60">
            <span>Subtotal</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-white/60">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-white font-medium text-lg">
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>

        {/* Benefits */}
        <div className="p-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-white/60">
              <Shield size={16} />
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <Truck size={16} />
              <span className="text-sm">Free Shipping Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;