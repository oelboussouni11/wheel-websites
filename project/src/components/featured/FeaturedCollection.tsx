import React from 'react';
import { useInView } from '../../hooks/useInView';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../products/ProductCard';
import { wheelProducts } from '../../data/wheelProducts';

interface FeaturedCollectionProps {
  onNavigate: (page: string, id?: number) => void;
}

const FeaturedCollection = ({ onNavigate }: FeaturedCollectionProps) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4 tracking-[0.2em]">
              SIGNATURE COLLECTION
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Precision-engineered wheels crafted from the finest materials. 
              Each design is a perfect blend of performance and aesthetics.
            </p>
            <div className="w-24 h-[1px] bg-white/20 mx-auto mt-8" />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wheelProducts.map((product, index) => (
              <div 
                key={product.name}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <ProductCard 
                  product={{
                    id: index + 1,
                    brand: "BEOM",
                    style: "Forged",
                    ...product
                  }} 
                  onNavigate={onNavigate}
                />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button 
              onClick={() => onNavigate('products')}
              className="group relative bg-white/10 rounded-lg transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg" />
              <div className="relative px-8 py-4 flex items-center space-x-2">
                <span className="font-display tracking-wider text-white/90 group-hover:text-white transition-colors">
                  VIEW ALL WHEELS
                </span>
                <ArrowRight 
                  size={16} 
                  className="text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" 
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;