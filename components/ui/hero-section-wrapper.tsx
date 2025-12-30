'use client';

import { Boxes } from '@/components/ui/background-boxes';

export function HeroSectionWrapper({
  children,
  muted = false,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 [mask-image:radial-gradient(white,transparent)]" />
        <Boxes />
      </div>

      {/* Optional dimming for non-hero sections */}
      {muted && (
        <div className="absolute inset-0 bg-black/60 z-[1]" />
      )}

      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
