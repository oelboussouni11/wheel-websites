import React from 'react';

interface ReviewsProgressProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

const ReviewsProgress = ({ total, current, onChange }: ReviewsProgressProps) => (
  <div className="flex justify-center items-center space-x-3 mt-12">
    {Array.from({ length: total }).map((_, idx) => (
      <button
        key={idx}
        onClick={() => onChange(idx)}
        className={`transition-all duration-300 rounded-full ${
          idx === current
            ? 'w-12 h-1.5 bg-white'
            : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
        }`}
        aria-label={`Go to review ${idx + 1}`}
      />
    ))}
  </div>
);

export default ReviewsProgress;