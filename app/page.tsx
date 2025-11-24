import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeaturedCourses } from '@/components/featured-courses';
import { Categories } from '@/components/categories';
import { HowItWorks } from '@/components/how-it-works';
import { Statistics } from '@/components/statistics';
import { Testimonials } from '@/components/testimonials';
import { Instructors } from '@/components/instructors';
import { Newsletter } from '@/components/newsletter';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Categories />
        <FeaturedCourses />
        <HowItWorks />
        <Statistics />
        <Instructors />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
