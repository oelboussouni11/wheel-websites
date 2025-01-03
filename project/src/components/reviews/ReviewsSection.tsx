import React, { useState, useCallback } from 'react';
import { useInView } from '../../hooks/useInView';
import { reviews } from '../../data/reviews';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReviewCard from './ReviewCard';
import ReviewsProgress from './ReviewsProgress';

const ReviewsSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl text-white mb-4 tracking-[0.2em]">
              DRIVER REVIEWS
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Real experiences from professional drivers and enthusiasts
            </p>
            <div className="w-24 h-[1px] bg-white/20 mx-auto mt-8" />
          </div>

          {/* Reviews Display */}
          <div className="relative">
            <div className="flex items-center">
              <button 
                onClick={handlePrev}
                className="relative group p-4"
                aria-label="Previous review"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg" />
                <div className="relative flex items-center space-x-1 text-white/60 group-hover:text-white transition-colors">
                  <ArrowLeft 
                    size={24} 
                    strokeWidth={1}
                    className="group-hover:-translate-x-1 transition-transform duration-300" 
                  />
                  <span className="text-sm font-display tracking-wider opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    PREV
                  </span>
                </div>
              </button>

              <div className="flex-1 px-8">
                {reviews.map((review, idx) => (
                  <div 
                    key={review.id}
                    className={`${idx === activeIndex ? 'block' : 'hidden'}`}
                  >
                    <ReviewCard review={review} isActive={idx === activeIndex} />
                  </div>
                ))}
              </div>

              <button 
                onClick={handleNext}
                className="relative group p-4"
                aria-label="Next review"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-lg" />
                <div className="relative flex items-center space-x-1 text-white/60 group-hover:text-white transition-colors">
                  <span className="text-sm font-display tracking-wider opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    NEXT
                  </span>
                  <ArrowRight 
                    size={24} 
                    strokeWidth={1}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </button>
            </div>

            <ReviewsProgress 
              total={reviews.length} 
              current={activeIndex} 
              onChange={setActiveIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;