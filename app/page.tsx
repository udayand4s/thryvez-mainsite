'use client';

import { useEffect, useState } from 'react';
import VerticalLoader from '@/components/vertical-loader';

import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeaturedCourses } from '@/components/featured-courses';
import { Statistics } from '@/components/statistics';
import { Testimonials } from '@/components/testimonials';
import { Newsletter } from '@/components/newsletter';
import { FAQ } from '@/components/faq';
import { LearningProblems } from '@/components/LearningProblems';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('homeLoaded');

    if (hasLoaded) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('homeLoaded', 'true');
      }, 2000); // adjust loader duration
    }
  }, []);

  if (loading) return <VerticalLoader />;

  return (
    <div className="min-h-screen flex flex-col bg-black">

      <main className="flex-1">
        <HeroSection />
        <Statistics />
        <LearningProblems />
        <FeaturedCourses />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
