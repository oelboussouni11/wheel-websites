import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface ReviewDisplayProps {
  review: Review;
  isActive: boolean;
  position: number;
}

const ReviewDisplay = ({ review, isActive, position }: ReviewDisplayProps) => {
  // Calculate transform and opacity based on position
  const getStyles = () => {
    const baseStyles = {
      transform: 'translateX(0%)',
      opacity: 0,
      zIndex: 0,
      visibility: 'hidden' as const,
    };

    if (!isActive && Math.abs(position) > 1) {
      return baseStyles;
    }

    const styles = {
      transform: `translateX(${position * 100}%) scale(${isActive ? 1 : 0.8})`,
      opacity: isActive ? 1 : 0.5,
      zIndex: isActive ? 20 : 10,
      visibility: 'visible' as const,
    };

    return styles;
  };

  return (
    <div
      className="absolute inset-0 transition-all duration-500 flex items-center justify-center"
      style={getStyles()}
    >
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative">
          {/* Quote mark background */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-white/5 font-serif">
            "
          </div>

          {/* Content */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-lg p-8 text-center">
            {/* Rating */}
            <div className="flex justify-center space-x-1 mb-6">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className="text-white/80 fill-white/80" 
                  strokeWidth={1} 
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-white/90 text-xl font-light leading-relaxed mb-8">
              "{review.content}"
            </p>

            {/* Reviewer */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-display text-white tracking-wider">
                  {review.name}
                </div>
                <div className="text-zinc-400">
                  {review.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDisplay;