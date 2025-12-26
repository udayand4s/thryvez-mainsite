'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  const companies = [
    "Zepto",
    "Blinkit",
    "Fortis",
    "Apollo",
    "Samsung",
  ];

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
            <h1
              className={`
                font-sans font-bold
                text-white
                text-[7vw] sm:text-[5vw] lg:text-[4vw]
                leading-[1.04]
                tracking-[-0.02em]
                mb-4
                transition-all duration-700 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              India&apos;s next gen Virtual Creative Lab
            </h1>



            <h2
              className={`
                font-sans font-bold
                text-[#c7f000]
                text-[12vw] sm:text-[8vw] lg:text-[6vw]
                leading-[1]
                tracking-[-0.01em]
                mb-6
                transition-all duration-700 delay-100 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              Thryve Z
            </h2>


            {/* DESCRIPTION */}
            <p
              className={`
                max-w-3xl mx-auto
                font-sans font-normal
                text-white/60
                text-base sm:text-lg
                leading-relaxed
                tracking-normal
                mb-10
                transition-all duration-700 delay-200 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >

              A digital space where young creatives build bold skills, think originally,
              and craft their own identity — not by memorising, but by doing.
            </p>

            
          </div>
          

          {/* === TRUSTED BY (FULL-WIDTH, COMPACT) === */}
          <div
            className={`mt-20 transition-all duration-700 delay-500 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-[15px] text-white/40 uppercase tracking-[0.3em] mb-4 text-center">
              Trusted by teams at
            </p>

            {/* FULL WIDTH STRIP */}
            <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
              <div className="flex gap-4 animate-trusted-scroll px-6">
                {[...companies, ...companies, ...companies].map((company, i) => (
                  <div
                    key={i}
                    className="
                      inline-flex items-center gap-2
                      px-4 py-2
                      rounded-xl
                      border border-white/10
                      bg-white/[0.04]
                      backdrop-blur-sm
                      text-white/60 font-medium text-sm
                      whitespace-nowrap
                      hover:text-white hover:border-[#e2f310]/50
                      transition-all
                    "
                  >
                    <span className="h-1 w-1 rounded-full bg-[#e2f310]" />
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}


