import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../types/product';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
  onNavigate?: (page: string, id?: number) => void;
}

const ProductCard = ({ product, onNavigate }: ProductCardProps) => (
  <div className="group relative bg-zinc-900/50 rounded-lg overflow-hidden border border-white/5">
    {/* Image */}
    <div className="aspect-square overflow-hidden">
      <div 
        className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
        style={{ backgroundImage: `url(${product.image})` }}
      />
    </div>
    
    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
      <div className="text-sm text-white/60 mb-1">{product.brand}</div>
      <h3 className="font-display text-xl text-white mb-2">{product.name}</h3>
      <p className="text-white/70 text-sm mb-4">{product.description}</p>
      <div className="text-white/60 text-sm mb-4">Available in {product.sizes}</div>
      
      {/* Price and Actions */}
      <div className="flex items-center justify-between">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          ${product.price}
        </div>
        <div className="flex items-center space-x-4">
          <AddToCartButton product={product} />
          <button 
            onClick={() => onNavigate?.('product-details', product.id)}
            className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
          >
            <span>Details</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;