'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* === NEON BLOBS === 
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#e2f310] opacity-90 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[550px] h-[550px] bg-[#e2f310] opacity-90 blur-[220px] rounded-full pointer-events-none" />
      */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto py-24 lg:py-32">

          {/* === MAIN CONTENT (CENTERED) === */}
          <div className="text-center flex flex-col items-center">

            {/* Line 1 */}
            <p
              className={`text-lg sm:text-xl text-white/70 mb-6 transition-all duration-700 ease-out
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              India&apos;s next gen Virtual Creative Lab
            </p>

            {/* Line 2 — BRAND */}
            <h1
              className={`w-full text-center text-[18vw] sm:text-[16vw] lg:text-[14vw]
              font-acherus font-extrabold tracking-tight leading-[1.05] mb-8
              transition-all duration-1000 ease-out
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <span className="text-white">Thryve&nbsp;</span>

              <span
                className="font-futura bg-[linear-gradient(#9fdc3a,#e2f310)]
                bg-clip-text text-transparent"
              >
                Z
              </span>
            </h1>



            {/* Line 3 — Description */}
            <p
              className={`text-lg sm:text-xl text-white/60 max-w-3xl mb-12
              transition-all duration-700 delay-200 ease-out
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              A digital space where young creatives build bold skills, think originally,
              and craft their own identity — not by memorising, but by doing.
            </p>

            
          </div>

          {/* === TRUSTED BY (LEFT ALIGNED) === */}
          <div
            className={`mt-24 transition-all duration-700 delay-500 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-xs text-white/40 uppercase tracking-widest mb-6">
              Trusted by teams at
            </p>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {['Zepto', 'Blinkit', 'Fortis', 'Apollo', 'Samsung'].map((company) => (
                <span
                  key={company}
                  className="text-white/30 font-semibold text-lg hover:text-white/50 transition-colors"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
