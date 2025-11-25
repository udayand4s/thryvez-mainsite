import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeaturedCourses } from '@/components/featured-courses';
import { Statistics } from '@/components/statistics';
import { Testimonials } from '@/components/testimonials';
import { Instructors } from '@/components/instructors';
import { Newsletter } from '@/components/newsletter';
import { ModernLearner } from '@/components/modern-learner';
import { ScrollTransition } from '@/components/scroll-transition';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ScrollTransition />
        <Statistics />
        <ModernLearner />
        <FeaturedCourses />
        <Instructors />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
