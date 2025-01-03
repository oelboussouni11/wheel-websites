import React, { useEffect, useRef } from 'react';
import { useCursor } from './CursorProvider';
import { drawTire, drawF1Car } from './cursorAnimations';

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { cursorType } = useCursor();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCursor = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      canvas.style.transform = `translate(${e.clientX - rect.width/2}px, ${e.clientY - rect.height/2}px)`;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (cursorType === 'tire') {
        drawTire(ctx);
      } else {
        drawF1Car(ctx);
      }
      
      requestAnimationFrame(animate);
    };

    canvas.width = 32;
    canvas.height = 32;
    
    document.addEventListener('mousemove', updateCursor);
    animate();

    return () => document.removeEventListener('mousemove', updateCursor);
  }, [cursorType]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed pointer-events-none z-[9999]"
      style={{ width: 32, height: 32 }}
    />
  );
};

export default CustomCursor;