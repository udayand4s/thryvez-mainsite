'use client';

import { useEffect, useRef, useState } from 'react';
import { BackgroundGradient } from './ui/background-gradient';

const stats = [
  {
    value: '1000+',
    label: 'Active learners',
    prefix: 'Students',
  },
  {
    value: '10+',
    label: 'On Thryve Z',
    prefix: 'Courses',
  },
  {
    value: '98%',
    label: 'Using our platforms',
    prefix: 'Rating',
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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
      w-[480px] h-[160px]
      bg-[#e2f310]/5
      blur-[80px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-1xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <BackgroundGradient
                className="
                rounded-3xl 
                p-10 
                bg-black 
                text-center
              "
                // ADDED p-[1px] HERE TO REDUCE OUTLINE THICKNESS
                containerClassName="
                rounded-3xl
                bg-gradient-to-br 
                from-[#2f3203]
                via-[#e2f310]/70
                to-[#2f3203]
                p-[1px] 
              "
                animate={false}
              >
                {/* Value + Prefix */}
                <div className="mb-4">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-1xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/80">
                      {stat.prefix}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-[2px] bg-[#e2f310]/70 mx-auto" />

                </div>

                {/* Label */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed px-2">
                  {stat.label}
                </p>
              </BackgroundGradient>
            </div>
          ))}

        </div>
      </div>
    </section>

  );
}