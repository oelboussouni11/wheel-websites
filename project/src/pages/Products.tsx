import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import ProductHero from '../components/products/ProductHero';
import ProductGrid from '../components/products/ProductGrid';
import ProductFilters from '../components/products/ProductFilters';
import SearchBar from '../components/products/SearchBar';
import { useProductFilters } from '../hooks/useProductFilters';

interface ProductsProps {
  onNavigate: (page: string, id?: number) => void;
}

const Products = ({ onNavigate }: ProductsProps) => {
  const { filters, setFilters, filteredProducts } = useProductFilters();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      <ProductHero />
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Search and Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <SearchBar 
              value={filters.search}
              onChange={(value) => setFilters({ ...filters, search: value })}
            />
          </div>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-between text-white hover:bg-white/10 transition-colors"
          >
            <span className="font-display tracking-wider text-sm">FILTERS</span>
            <Filter size={20} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Mobile Drawer */}
          <div className={`lg:hidden fixed inset-0 z-50 transform ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)} />
            <div className="absolute inset-y-0 left-0 w-80 bg-zinc-900 p-6 overflow-y-auto">
              <ProductFilters filters={filters} onChange={setFilters} />
            </div>
          </div>

          {/* Filters - Desktop Sidebar */}
          <div className="hidden lg:block lg:w-64">
            <ProductFilters filters={filters} onChange={setFilters} />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid products={filteredProducts} onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;