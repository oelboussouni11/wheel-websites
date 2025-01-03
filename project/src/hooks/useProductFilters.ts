import { useState, useMemo } from 'react';
import { Product, Filters } from '../types/product';
import { products } from '../data/products';

export const useProductFilters = () => {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    sizes: [],
    priceRange: [1000, 5000],
    styles: []
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filter by search
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch = 
          product.brand.toLowerCase().includes(searchTerm) ||
          product.name.toLowerCase().includes(searchTerm);
        if (!matchesSearch) return false;
      }

      // Filter by size
      if (filters.sizes.length > 0) {
        const productSizes = product.sizes.split(' - ');
        const hasMatchingSize = filters.sizes.some(size => 
          productSizes.includes(size)
        );
        if (!hasMatchingSize) return false;
      }

      // Filter by price
      const productPrice = parseInt(product.price.replace(',', ''));
      if (productPrice < filters.priceRange[0] || productPrice > filters.priceRange[1]) {
        return false;
      }

      // Filter by style
      if (filters.styles.length > 0 && !filters.styles.includes(product.style)) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return { filters, setFilters, filteredProducts };
};