'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Mail className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest courses, updates, and special offers delivered to your inbox
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12"
              required
            />
            <Button size="lg" className="h-12 px-8 whitespace-nowrap">
              Subscribe
            </Button>
          </form>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Weekly course updates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Exclusive discounts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Learning tips & tricks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
