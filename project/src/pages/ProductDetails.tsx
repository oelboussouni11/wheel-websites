import React, { useState } from 'react';
import { ArrowLeft, Shield, Truck, RefreshCw } from 'lucide-react';
import ColorSelector from '../components/products/details/ColorSelector';
import SizeSelector from '../components/products/details/SizeSelector';
import SpecsTable from '../components/products/details/SpecsTable';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductDetailsProps {
  onNavigate: (page: string) => void;
  productId?: number;
}

const ProductDetails = ({ onNavigate, productId }: ProductDetailsProps) => {
  const product = products.find(p => p.id === productId);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('');
  
  if (!product) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <p className="text-white">Product not found</p>
        <button 
          onClick={() => onNavigate('products')}
          className="text-blue-400 hover:text-blue-300 mt-4"
        >
          Return to products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1, selectedColor, selectedSize);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back button */}
        <button
          onClick={() => onNavigate('products')}
          className="group flex items-center space-x-2 text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg" />
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="text-white/60 mb-2">{product.brand}</div>
              <h1 className="font-display text-3xl text-white mb-4">{product.name}</h1>
              <p className="text-zinc-400 leading-relaxed">{product.description}</p>
            </div>

            {/* Price */}
            <div className="inline-flex bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-lg">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 flex items-baseline space-x-1">
                <span className="text-lg text-white/60">$</span>
                <span className="text-2xl font-light text-white">{product.price}</span>
              </div>
            </div>

            {/* Selectors */}
            <div className="space-y-12">
              <ColorSelector value={selectedColor} onChange={setSelectedColor} />
              <SizeSelector 
                sizes={product.sizes.split(' - ')} 
                value={selectedSize}
                onChange={setSelectedSize}
              />
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="group relative w-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg opacity-75 group-hover:opacity-100 blur transition-all duration-500" />
              <div className="relative bg-zinc-900 rounded-lg px-8 py-4 flex items-center justify-center space-x-3 transition-all duration-500 group-hover:bg-opacity-90">
                <span className="font-display text-white tracking-wider">ADD TO CART</span>
              </div>
            </button>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: Shield, label: 'Lifetime Warranty' },
                { icon: Truck, label: 'Free Shipping' },
                { icon: RefreshCw, label: '30-Day Returns' }
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <Icon size={24} className="mx-auto mb-2 text-white/60" strokeWidth={1.5} />
                  <div className="text-sm text-white/60">{label}</div>
                </div>
              ))}
            </div>

            {/* Specifications */}
            <SpecsTable style={product.style} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;