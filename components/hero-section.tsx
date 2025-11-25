'use client';

import { useEffect, useRef } from 'react';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      vx: number;
      vy: number;
      size: number;

      constructor(x: number, y: number, targetX: number, targetY: number) {
        this.x = x + (Math.random() - 0.5) * 200;
        this.y = y + (Math.random() - 0.5) * 200;
        this.targetX = targetX;
        this.targetY = targetY;
        this.vx = 0;
        this.vy = 0;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        this.vx += dx * 0.01;
        this.vy += dy * 0.01;
        this.vx *= 0.85;
        this.vy *= 0.85;
        this.x += this.vx;
        this.y += this.vy;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const zSize = Math.min(canvas.width, canvas.height) * 0.4;

    const createZShape = () => {
      const points: [number, number][] = [];
      const thickness = zSize * 0.15;

      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        points.push([centerX - zSize / 2 + t * zSize, centerY - zSize / 2]);
        points.push([centerX - zSize / 2 + t * zSize, centerY - zSize / 2 + thickness]);
      }

      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const x = centerX + zSize / 2 - t * zSize;
        const y = centerY - zSize / 2 + t * zSize;
        points.push([x, y]);
        points.push([x - thickness * 0.7, y + thickness * 0.7]);
      }

      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        points.push([centerX - zSize / 2 + t * zSize, centerY + zSize / 2]);
        points.push([centerX - zSize / 2 + t * zSize, centerY + zSize / 2 - thickness]);
      }

      return points;
    };

    const zPoints = createZShape();
    zPoints.forEach(([x, y]) => {
      particles.push(new Particle(centerX, centerY, x, y));
    });

    let mouseX = centerX;
    let mouseY = centerY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.x -= (dx / distance) * force * 5;
          particle.y -= (dy / distance) * force * 5;
        }

        particle.update();
        particle.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Over 50,000+ Students Learning
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Learn New Skills
              <span className="block text-primary mt-2">Anytime, Anywhere</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Join thousands of students learning from industry experts. Master in-demand skills and advance your career with our comprehensive courses.
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-lg">
              <canvas
                ref={canvasRef}
                className="w-full h-full bg-black rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
