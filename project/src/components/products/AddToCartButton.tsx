import React from 'react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/product';
import { useCartDropdown } from '../../hooks/useCartDropdown';

interface AddToCartButtonProps {
  product: Product;
  selectedColor?: string;
  selectedSize?: string;
  className?: string;
}

const AddToCartButton = ({ 
  product, 
  selectedColor, 
  selectedSize, 
  className = '' 
}: AddToCartButtonProps) => {
  const { addToCart } = useCart();
  const { setCartOpen } = useCartDropdown();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    addToCart(product, 1, selectedColor, selectedSize);
    setCartOpen(true); // Open cart dropdown
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`group/btn bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-lg transition-colors ${className}`}
    >
      <span className="text-sm text-white">Add to Cart</span>
    </button>
  );
};

export default AddToCartButton;