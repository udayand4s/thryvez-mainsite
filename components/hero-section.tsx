'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Play, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Over 50,000+ Students Learning
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Learn New Skills
              <span className="block text-primary mt-2">Anytime, Anywhere</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Join thousands of students learning from industry experts. Master in-demand skills and advance your career with our comprehensive courses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="What do you want to learn?"
                  className="pl-12 h-12 text-base"
                />
              </div>
              <Button size="lg" className="h-12 px-8 gap-2 whitespace-nowrap">
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm text-muted-foreground">Active Courses</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Expert Instructors</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-full blur-3xl opacity-50" />
                  <Button
                    size="lg"
                    className="relative h-20 w-20 rounded-full shadow-2xl hover:scale-110 transition-transform"
                  >
                    <Play className="h-8 w-8 fill-current" />
                  </Button>
                </div>
              </div>

              <div className="absolute top-8 left-8 p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg border animate-in fade-in slide-in-from-top-4 duration-700">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Play className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">1,200+ Video Lessons</div>
                    <div className="text-xs text-muted-foreground">Learn at your pace</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg border animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg">🎓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Certificate Ready</div>
                    <div className="text-xs text-muted-foreground">Boost your career</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
