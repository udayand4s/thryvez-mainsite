import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CoursesContent } from '@/components/courses-content';
import { Testimonials } from '@/components/testimonials';

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1">
        
        <CoursesContent />
        <Testimonials/>
      </main>
      <Footer />
    </div>
  );
}
