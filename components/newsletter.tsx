'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E2F310]/90 mb-6">
            Ready to accelerate your growth?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Join our newsletter for exclusive insights, early access to courses, and community updates.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
              required
            />
            <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-white/90 font-semibold whitespace-nowrap group">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
}
