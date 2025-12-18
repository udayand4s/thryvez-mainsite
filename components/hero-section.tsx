'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* === NEON BLOBS === */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#E2F310] opacity-90 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[550px] h-[550px] bg-[#E2F310] opacity-90 blur-[220px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* === TEXT CONTENT === */}
        <div className="max-w-4xl py-20 lg:py-28">
          <div className="inline-flex items-center gap-3 mb-1">
            <Image
              src="/logo1.png"
              alt="Thryve Z Logo"
              width={270}
              height={72}
              priority
              className="object-contain"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-[#e2f310]">India&apos;s next gen</span>
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              Virtual Creative Lab
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mb-10">
            A digital space where young creatives build bold skills, think originally,
            and craft their own identity — not by memorising, but by doing.
          </p>

          {/* === CTA === */}
          <div className="flex items-start gap-6 mb-14">
            <Link href="/courses">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-semibold px-6 py-6 text-base group"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* === TRUSTED BY === */}
          <div className="flex flex-col gap-4">
            <p className="text-xs text-white/40 uppercase tracking-widest">
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

        {/* === MOCKUP === */}
        <div className="flex justify-center lg:justify-end lg:pr-10 mt-10 lg:-mt-16">
          <Image
            src="/mockup.webp"
            alt="App preview"
            width={420}
            height={840}
            priority
            className="w-[260px] sm:w-[320px] lg:w-[420px] drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]"
          />
        </div>

      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
