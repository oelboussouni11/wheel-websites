import React, { useState } from 'react';

const FeaturedWheel = () => {
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const rotationValue = ((x / rect.width) * 360) - 180;
    setRotation(rotationValue);
  };

  return (
    <div 
      className="relative aspect-square"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation(0)}
    >
      <div 
        className="w-full h-full transition-transform duration-300"
        style={{ 
          transform: `rotate(${rotation}deg)`,
          backgroundImage: 'url(https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}

export default FeaturedWheel;