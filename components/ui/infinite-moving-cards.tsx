"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const children = Array.from(scrollerRef.current.children);

    // Duplicate once (not repeatedly)
    children.forEach((child) => {
      scrollerRef.current?.appendChild(child.cloneNode(true));
    });

    setDirection();
    setSpeed();
    setReady(true);
  }, []);

  const setDirection = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );
  };

  const setSpeed = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast"
        ? "80s"
        : speed === "normal"
        ? "140s"
        : "220s",
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        // softer edge fade for dark UI
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max gap-6 py-6",
          ready && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="
              group
              relative
              w-[380px] shrink-0 rounded-2xl
              border border-white/10
              bg-gradient-to-br from-white/[0.08] to-white/[0.02]
              backdrop-blur-xl
              px-8 py-6
              shadow-lg shadow-black/30
              transition-all duration-300 ease-out
          
              hover:border-[#e2f310]/40
              hover:shadow-[0_0_30px_rgba(226,243,16,0.15)]
            "
          >
            <div
              aria-hidden
              className="
                pointer-events-none absolute inset-0 rounded-2xl
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-gradient-to-br
                from-[#e2f310]/10
                via-transparent
                to-transparent
              "
            />
        
            <blockquote className="flex flex-col h-full justify-between">
              {/* Quote */}
              <p className="text-white/90 text-sm leading-relaxed">
                “{item.quote}”
              </p>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="text-sm text-white">{item.name}</div>
                <div className="text-xs text-white/60">
                  {item.title}
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
