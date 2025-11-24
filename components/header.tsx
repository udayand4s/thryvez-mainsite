'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GraduationCap, Search, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Header() {
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Thryvez</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors">
                Courses
              </Link>
              <Link href="/categories" className="text-sm font-medium hover:text-primary transition-colors">
                Categories
              </Link>
              <Link href="/instructors" className="text-sm font-medium hover:text-primary transition-colors">
                Instructors
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
            </nav>
          </div>

          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full pl-10"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden sm:inline-flex"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost">Sign In</Button>
              <Button>Sign Up</Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
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
          <div className="md:hidden py-4 border-t animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="w-full pl-10"
                />
              </div>
              <nav className="flex flex-col gap-2">
                <Link href="/courses" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors">
                  Courses
                </Link>
                <Link href="/categories" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors">
                  Categories
                </Link>
                <Link href="/instructors" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors">
                  Instructors
                </Link>
                <Link href="/about" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors">
                  About
                </Link>
              </nav>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Button variant="ghost" className="justify-start">Sign In</Button>
                <Button className="justify-start">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
