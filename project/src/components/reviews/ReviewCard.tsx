import React from 'react';
import { Star } from 'lucide-react';
import { Review } from './types';

interface ReviewCardProps {
  review: Review;
  isActive: boolean;
}

const ReviewCard = ({ review, isActive }: ReviewCardProps) => (
  <div 
    className={`transition-all duration-700 ${
      isActive 
        ? 'opacity-100 scale-100' 
        : 'opacity-0 scale-95'
    }`}
  >
    <div className="relative">
      <div className="absolute -inset-1">
        <div className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
      </div>
      
      <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-r from-blue-600 to-purple-600 opacity-50" />
              <img 
                src={review.image} 
                alt={review.name}
                className="relative w-16 h-16 rounded-full object-cover border-2 border-white/10"
              />
            </div>
            <div>
              <h3 className="font-display text-white tracking-wider">{review.name}</h3>
              <p className="text-zinc-400 text-sm">{review.role}</p>
            </div>
          </div>
          <div className="flex space-x-1">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className="text-white/80 fill-white/80" 
                strokeWidth={1}
              />
            ))}
          </div>
        </div>
        
        <blockquote className="relative">
          <span className="absolute -top-4 -left-2 text-4xl text-white/10">"</span>
          <p className="text-white/90 text-lg leading-relaxed pl-4">
            {review.content}
          </p>
        </blockquote>
      </div>
    </div>
  </div>
);

export default ReviewCard;