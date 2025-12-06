"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
       {/* 🌌 Animated nebula glow (green + teal) */}
<div className="absolute inset-0 pointer-events-none">
  
  {/* Deep cosmic base */}
  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,20,40,0.8)] via-black to-[rgba(10,20,40,0.8)]" />

  {/* Nebula blob 1 — neon green */}
  <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-[#E2F310]/50 blur-[140px] rounded-full animate-pulse-slow" />

  {/* Nebula blob 2 — teal (instead of blue) */}
  <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[rgba(0,255,200,0.50)] blur-[160px] rounded-full animate-pulse-slow-delayed" />

  {/* Nebula filament sweep */}
  <div className="absolute bottom-0 left-1/3 w-[700px] h-[300px] bg-[#E2F310]/30 blur-[120px] rotate-12 animate-nebula-flow" />
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
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was amazingggg!! I really enjoyed this time. It really helped me to understand psychology on a deeper and from a different perspective. I would 100% recommend people to at least once in their lifetime - attend this course to understand mental health. Its something that cannot be neglected and this course really taught me to see people from their shoes. ",
    name: "Shekhina Yakub Khan",
    title: "Symbiosis medical College for women 2030",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
