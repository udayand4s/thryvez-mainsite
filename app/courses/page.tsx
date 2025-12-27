import { Footer } from '@/components/footer';
import { CoursesContent } from '@/components/courses-content';

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-1">
        
        <CoursesContent />
        
      </main>
      <Footer />
    </div>
  );
}
