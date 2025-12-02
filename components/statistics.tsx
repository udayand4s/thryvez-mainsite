'use client';

import { Users, BookOpen, GraduationCap, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'Active Students',
  },
  {
    icon: BookOpen,
    value: '200+',
    label: 'Expert Courses',
  },
  {
    icon: GraduationCap,
    value: '100+',
    label: 'Industry Mentors',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Success Rate',
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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-black border-y border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-800 mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
