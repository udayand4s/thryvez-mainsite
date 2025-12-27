'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { GetStartedModal } from '@/components/get-started-modal';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl tracking-tight font-acherus font-bold">
                <span className="text-white">Thryve </span>
                <span className="font-futura bg-clip-text text-transparent text-white">
                  Z
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-white/80 hover:text-white transition">
                Home
              </Link>
              <Link href="/courses" className="text-sm font-medium text-white/80 hover:text-white transition">
                Courses
              </Link>
              <Link href="/about" className="text-sm font-medium text-white/80 hover:text-white transition">
                About
              </Link>
              <Link href="/simulation" className="text-sm font-medium text-white/80 hover:text-white transition">
                Simulation
              </Link>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                Sign In
              </Button>

              <Button
                size="lg"
                className="bg-[#FFFFFF] text-black hover:bg-[#cddc39]"
                onClick={() => setOpen(true)}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              <nav className="flex flex-col gap-1">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/courses', label: 'Courses' },
                  { href: '/about', label: 'About' },
                  { href: '/simulation', label: 'Simulation' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                <Button
                  variant="ghost"
                  className="justify-start text-white/80 hover:text-white hover:bg-white/5"
                >
                  Sign In
                </Button>

                <Button
                  className="justify-start bg-[#FFFFFF] text-black hover:bg-[#cddc39]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setOpen(true);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MODAL (global, outside layout issues) */}
      <GetStartedModal open={open} onOpenChange={setOpen} />
    </header>
  );
}
