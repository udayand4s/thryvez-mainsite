'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: '1000+',
    label: 'by Teachable and Hotmart creators',
    prefix: 'earned',
  },
  {
    value: '100M+',
    label: 'served on Teachable',
    prefix: 'students',
  },
  {
    value: '180',
    label: 'using Teachable',
    prefix: 'countries',
  },
];

export function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Value and Prefix */}
              <div className="mb-4">
                <div className="flex items-baseline justify-center gap-2 mb-1">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900">
                    {stat.prefix}
                  </span>
                </div>
                
                {/* Divider Line */}
                <div className="w-full h-px bg-gray-300 mx-auto"></div>
              </div>

              {/* Label */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}