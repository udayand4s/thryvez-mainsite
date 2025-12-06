'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Shreesh',
    role: 'GTM & Strategy',
    company: 'sarvam.ai',
    memberSince: '2024',
    content: "The real value of ThryvezX is the community. Every conversation sharpens my thinking. It's like having 100+ leaders on speed dial.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Priya',
    role: 'Product Lead',
    company: 'Razorpay',
    memberSince: '2023',
    content: 'The frameworks and mental models I learned here completely transformed how I approach product decisions. Game-changing.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Arjun',
    role: 'Founder & CEO',
    company: 'StartupX',
    memberSince: '2024',
    content: 'Found my co-founder, my first 10 customers, and my go-to advisors all through this community. Invaluable network.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex(prev => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 overflow-hidden"
    >

      {/* 🌌 Animated nebula glow (green + teal) */}
<div className="absolute inset-0 pointer-events-none">
  
  {/* Deep cosmic base */}
  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,20,40,0.5)] via-black to-[rgba(10,20,40,0.5)]" />

  {/* Nebula blob 1 — neon green */}
  <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-[#E2F310]/30 blur-[140px] rounded-full animate-pulse-slow" />

  {/* Nebula blob 2 — teal (instead of blue) */}
  <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[rgba(0,255,200,0.30)] blur-[160px] rounded-full animate-pulse-slow-delayed" />

  {/* Nebula filament sweep */}
  <div className="absolute bottom-0 left-1/3 w-[700px] h-[300px] bg-[#E2F310]/15 blur-[120px] rotate-12 animate-nebula-flow" />
</div>

<style jsx>{`
  .animate-pulse-slow {
    animation: pulseSlow 6s ease-in-out infinite;
  }
  .animate-pulse-slow-delayed {
    animation: pulseSlow 7s ease-in-out infinite 1.5s;
  }
  .animate-nebula-flow {
    animation: nebulaFlow 12s ease-in-out infinite;
  }

  @keyframes pulseSlow {
    0%, 100% { opacity: 0.22; transform: scale(1); }
    50% { opacity: 0.32; transform: scale(1.08); }
  }

  @keyframes nebulaFlow {
    0%, 100% { opacity: 0.08; transform: translateX(0) scale(1); }
    50% { opacity: 0.18; transform: translateX(40px) scale(1.06); }
  }
`}</style>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`
            grid lg:grid-cols-2 gap-12 items-center transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {/* LEFT — Text */}
          <div className="space-y-6 sm:space-y-8 relative">
            <div className="text-4xl sm:text-5xl text-white/20 font-serif">"</div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {activeTestimonial.content}
            </h2>

            <div className="space-y-1">
              <p className="text-white/60 text-lg italic">
                {activeTestimonial.name}, {activeTestimonial.role}
              </p>
              <p className="text-white/40 text-sm">
                Member since {activeTestimonial.memberSince}
              </p>
            </div>

            <div className="pt-4">
              <p className="text-white font-semibold text-xl">
                {activeTestimonial.company}
              </p>
            </div>

            <div className="flex gap-2 pt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    h-1.5 rounded-full transition-all duration-300
                    ${index === activeIndex
                      ? 'w-8 bg-[#E2F310]'
                      : 'w-4 bg-[#E2F310]/30 hover:bg-[#E2F310]/50'}
                  `}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — Smaller Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden w-[74%] mx-auto">
              <img
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
