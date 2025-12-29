'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Boxes } from '@/components/ui/background-boxes';

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

  function CompanyPill({ company }: { company: string }) {
    return (
      <div
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
    );
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* === NEON BLOBS === 
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#e2f310] opacity-90 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[550px] h-[550px] bg-[#e2f310] opacity-90 blur-[220px] rounded-full pointer-events-none" />
      */}
      {/* === BACKGROUND BOXES === */}
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto py-24 lg:py-32">

          {/* === MAIN CONTENT (CENTERED) === */}
          <div className="text-center flex flex-col items-center">

            {/* EYEBROW LINE */}
            <span
              className={`
                font-sans
                text-white/40
                text-xs
                uppercase
                tracking-[0.35em]
                mb-4
                transition-all duration-700 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
              `}
            >
              Learning by Building
            </span>

            {/* Line 1 */}
            <h1
              className={`
                --font-playfair
                text-white
                text-[7vw] sm:text-[5vw] lg:text-[4vw]
                leading-[1.04]
                tracking-[-0.02em]
                mb-4
                transition-all duration-700 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              A Virtual Creative Lab
            </h1>



            <h2
              className={`
                --font-playfair
                text-[#c7f000]
                text-[7vw] sm:text-[5vw] lg:text-[4vw]
                leading-[1]
                tracking-[-0.01em]
                mb-6
                transition-all duration-700 delay-100 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              Where India&apos;s Next Creators Are Built
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
              A digital space where young creatives build real skills, think independently, and learn by doing.
            </p>

            {/* CTA */}
            <div
              className={`transition-all duration-700 delay-300 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Link href="/courses">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-base group"
                >
                  Explore the Lab
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            
          </div>
          

          {/* === TRUSTED BY (INFINITE LOOP) === */}
          <div
            className={`mt-20 transition-all duration-700 delay-500 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-[15px] text-white/40 uppercase tracking-[0.3em] mb-8 text-center">
              Trusted by people building real companies
            </p>

            {/* MARQUEE WRAPPER */}
            <div className="relative w-full overflow-hidden">
              
              {/* Gradient Masks to fade edges */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

              {/* SCROLLING TRACK */}
              {/* We remove w-screen adjustments to keep it simple and robust */}
              <div className="flex w-full">
                
                {/* LIST 1 */}
                {/* Changed: Removed min-w-full, added pr-4 to create gap between lists */}
                <div className="flex shrink-0 animate-infinite-scroll items-center gap-4 pr-4">
                  {[...companies, ...companies, ...companies, ...companies].map((company, i) => (
                    <CompanyPill key={`list1-${i}`} company={company} />
                  ))}
                </div>

                {/* LIST 2 (Identical Duplicate) */}
                <div className="flex shrink-0 animate-infinite-scroll items-center gap-4 pr-4">
                  {[...companies, ...companies, ...companies, ...companies].map((company, i) => (
                    <CompanyPill key={`list2-${i}`} company={company} />
                  ))}
                </div>

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


