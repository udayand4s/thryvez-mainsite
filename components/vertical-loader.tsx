'use client';

import { useEffect, useState } from 'react';

const MIN_DURATION = 2800; // ms , tweak this

export default function VerticalLoader() {
  const [progress, setProgress] = useState(0);
  const [canExit, setCanExit] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // smoother fill

    const timeout = setTimeout(() => {
      setCanExit(true);
    }, MIN_DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // hold loader until BOTH are true
  const isDone = progress === 100 && canExit;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-700 ease-in-out
        ${isDone ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}
      `}
    >
      <div className="flex flex-col items-center gap-5">
        {/* TRACK */}
        <div className="relative h-[300px] w-[3px] bg-white/10 rounded-full overflow-hidden">
          {/* BAR */}
          <div
            className="absolute bottom-0 w-full rounded-full transition-[height] duration-75"
            style={{
              height: `${progress}%`,
              background:
                'linear-gradient(to top,#f6ff9a,#e2f310,#c7e800,#9fdc3a,#e2f310,#f6ff9a)',
              boxShadow:
                '0 0 20px rgba(226,243,16,0.7), 0 0 40px rgba(226,243,16,0.4)',
            }}
          />
        </div>

        {/* TEXT */}
        <div className="text-3xl font-medium tracking-wide text-white">
          {progress}%
        </div>
      </div>
    </div>
  );
}
