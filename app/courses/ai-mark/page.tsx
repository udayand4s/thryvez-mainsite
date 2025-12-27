import { Footer } from '@/components/footer';

import AiMarketingPage from '@/components/aimarkcontent';

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-1">
        
        <AiMarketingPage />
        
      </main>
      <Footer />
    </div>
  );
}
