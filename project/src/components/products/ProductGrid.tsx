import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';

interface ProductGridProps {
  products: Product[];
  onNavigate: (page: string, id?: number) => void;
}

const ProductGrid = ({ products, onNavigate }: ProductGridProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {products.map((product) => (
      <ProductCard 
        key={product.id} 
        product={product} 
        onNavigate={onNavigate}
      />
    ))}
  </div>
);

export default ProductGrid;