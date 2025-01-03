import React, { useEffect, useRef } from 'react';

const Loading = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 200;
    canvas.height = 200;

    // Particle class for tire tread effect
    class Particle {
      x: number;
      y: number;
      radius: number;
      angle: number;
      distance: number;
      speed: number;

      constructor() {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * 2 + 1;
        this.distance = 70 + Math.random() * 15;
        this.speed = 0.02 + Math.random() * 0.02;
        this.updatePosition();
      }

      updatePosition() {
        this.x = canvas.width / 2 + Math.cos(this.angle) * this.distance;
        this.y = canvas.height / 2 + Math.sin(this.angle) * this.distance;
      }

      update() {
        this.angle += this.speed;
        this.updatePosition();
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }
    }

    // Create particles
    const particles = Array.from({ length: 40 }, () => new Particle());

    // Animation
    let rotation = 0;
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw outer glow
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        60,
        canvas.width / 2,
        canvas.height / 2,
        90
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Save context for rotation
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rotation);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      // Draw tire
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 70, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw inner circle
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw spokes
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI * 2) / 6;
        ctx.beginPath();
        ctx.moveTo(
          canvas.width / 2 + Math.cos(angle) * 25,
          canvas.height / 2 + Math.sin(angle) * 25
        );
        ctx.lineTo(
          canvas.width / 2 + Math.cos(angle) * 65,
          canvas.height / 2 + Math.sin(angle) * 65
        );
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      rotation += 0.02;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="fixed inset-0 bg-zinc-900 flex flex-col items-center justify-center z-50">
      <canvas
        ref={canvasRef}
        className="mb-12"
      />
      <div className="relative">
        <div className="font-display tracking-[0.3em] text-white/80 text-sm">
          BEOM WHEELS
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
    </div>
  );
};

export default Loading;