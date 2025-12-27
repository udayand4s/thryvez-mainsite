import { Footer } from '@/components/footer';
import ClinicalPsychologyPage from '@/components/clinicalpsycontent';

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-1">
        
        <ClinicalPsychologyPage />
        
      </main>
      <Footer />
    </div>
  );
}
