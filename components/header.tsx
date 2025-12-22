'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl tracking-tight font-acherus font-bold">
              <span className="text-white">Thryve </span>
              <span
                className="font-vi text-white
                bg-clip-text text-transparent"
              >
                Z
              </span>
            </div>

            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/courses" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Courses
              </Link>
              <Link href="/about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                About
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                Sign In
              </Button>
              <Button className="bg-white text-black hover:bg-white/90 font-semibold">
                Get Started
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              <nav className="flex flex-col gap-1">
                <Link 
                  href="/" 
                  className="px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/courses" 
                  className="px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Courses
                </Link>
                <Link 
                  href="/about" 
                  className="px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </nav>
              <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                <Button variant="ghost" className="justify-start text-white/80 hover:text-white hover:bg-white/5">
                  Sign In
                </Button>
                <Button className="justify-start bg-white text-black hover:bg-white/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
