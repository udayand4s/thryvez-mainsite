import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

import { Testimonials } from '@/components/testimonials';
import AiMarketingPage from '@/components/aimarkcontent';

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1">
        
        <AiMarketingPage />
        
      </main>
      <Footer />
    </div>
  );
}
