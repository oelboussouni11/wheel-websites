export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: string;
  sizes: string;
  image: string;
  style: string;
}

export interface Filters {
  search: string;
  sizes: string[];
  priceRange: number[];
  styles: string[];
}