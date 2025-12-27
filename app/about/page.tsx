import { Footer } from '@/components/footer';
import { AboutContent } from '@/components/about-content';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-1">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
