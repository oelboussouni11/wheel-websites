let rotation = 0;

export const drawTire = (ctx: CanvasRenderingContext2D) => {
  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radius = 12;

  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(rotation);
  
  // Outer tire
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Treads
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6;
    ctx.beginPath();
    ctx.moveTo(Math.cos(angle) * 5, Math.sin(angle) * 5);
    ctx.lineTo(Math.cos(angle) * 10, Math.sin(angle) * 10);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.stroke();
  }

  ctx.restore();
  rotation += 0.1;
};

export const drawF1Car = (ctx: CanvasRenderingContext2D) => {
  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;

  ctx.save();
  ctx.translate(centerX, centerY);

  // Car body
  ctx.beginPath();
  ctx.moveTo(-12, -4);
  ctx.lineTo(12, -4);
  ctx.lineTo(14, 0);
  ctx.lineTo(12, 4);
  ctx.lineTo(-12, 4);
  ctx.lineTo(-14, 0);
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();

  // Wheels
  ctx.beginPath();
  ctx.arc(-8, 6, 3, 0, Math.PI * 2);
  ctx.arc(8, 6, 3, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.fill();

  // Wing
  ctx.beginPath();
  ctx.moveTo(-10, -4);
  ctx.lineTo(-14, -8);
  ctx.lineTo(-8, -8);
  ctx.closePath();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.fill();

  ctx.restore();
};