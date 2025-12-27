import { Footer } from '@/components/footer';
import { SimulationContent } from '@/components/simulation-content';

export default function SimulationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-1">
        <SimulationContent />
      </main>
      <Footer />
    </div>
  );
}

