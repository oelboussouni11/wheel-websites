import React from 'react';

const ProductHero = () => (
  <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80)',
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
    </div>

    <div className="relative text-center">
      <h1 className="font-display text-4xl md:text-5xl text-white mb-6 tracking-[0.2em]">
        OUR COLLECTION
      </h1>
      <p className="text-zinc-300 max-w-xl mx-auto px-4">
        Discover our range of precision-engineered wheels, 
        crafted for performance and designed for distinction.
      </p>
    </div>
  </section>
);

export default ProductHero;