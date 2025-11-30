'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
  {/* Dark golden → sky blue vertical cinematic gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0e1114] via-[#2f3c49] to-[#a78866]" />

  {/* Large soft golden cloud */}
  <div className="absolute -top-1/3 right-0 w-[90%] h-[90%] rounded-full bg-[#d8b28a]/30 blur-3xl" />

  {/* Soft white sunlight layer */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_70%)]" />
</div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-white/70">Over 50,000+ Students Learning</span>
            </div>
          </div>

          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-white \">India's next gen</span>
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              Virtual Creative Lab
            </span>
          </h1>

          <p className={`text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Join thousands of professionals mastering in-demand skills. Learn from industry experts and accelerate your career growth.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-base group">
              Explore Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className={`mt-16 flex flex-col items-center gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xs text-white/40 uppercase tracking-widest">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {['Google', 'Meta', 'Amazon', 'Microsoft', 'Netflix'].map((company) => (
                <span key={company} className="text-white/30 font-semibold text-lg hover:text-white/50 transition-colors">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
