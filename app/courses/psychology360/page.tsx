import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

import { Testimonials } from '@/components/testimonials';
import Psychology360Page from '@/components/psycontent';

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1">
        
        <Psychology360Page />
        
      </main>
      <Footer />
    </div>
  );
}
