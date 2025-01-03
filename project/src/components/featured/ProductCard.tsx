import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: string;
  sizes: string;
}

const ProductCard = ({ name, description, image, price, sizes }: ProductCardProps) => (
  <div className="group relative bg-zinc-900/50 rounded-lg overflow-hidden border border-white/5">
    <div className="aspect-square overflow-hidden">
      <div 
        className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
    
    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="font-display text-xl text-white mb-2">{name}</h3>
      <p className="text-white/70 text-sm mb-4">{description}</p>
      <div className="text-white/60 text-sm mb-4">Available in {sizes}</div>
      <div className="flex items-center justify-between">
        <span className="text-white/80">From ${price}</span>
        <button className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors">
          <span>See Details</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </div>
)

export default ProductCard;