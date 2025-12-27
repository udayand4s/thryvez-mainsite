// components/sidebar.tsx
'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { GetStartedModal } from '@/components/get-started-modal';
import { 
  Home, 
  BookOpen, 
  Gamepad2, 
  Info,
  LogIn,
  UserPlus
} from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: BookOpen, label: 'Courses', href: '/courses' },
  { icon: Gamepad2, label: 'Simulation', href: '/simulation' },
  { icon: Info, label: 'About', href: '/about' },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // State for the Register Modal

  return (
    <>
      <div className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-0 border-r border-white/10 bg-black z-50">
        
        {/* 1. Logo Section (Ported from Header) */}
        <div className="p-6 border-b border-white/10 flex justify-center lg:justify-start">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl tracking-tight font-acherus font-bold">
              <span className="text-white">Thryve </span>
              <span className="font-futura bg-clip-text text-transparent text-white">
                Z
              </span>
            </div>
          </Link>
        </div>

        {/* 2. Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6 px-3">
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                    isActive 
                      ? "bg-white/10 text-white shadow-[0_0_20px_rgba(0,0,0,0.5)]" 
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  <item.icon className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-[#E2F310]" : "text-white/60 group-hover:text-white"
                  )} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* 3. Bottom Actions (Sign In / Register ported from Header) */}
        <div className="p-4 border-t border-white/10 space-y-3">
            <Button
              onClick={() => setOpen(true)}
              className="w-full justify-start gap-2 bg-[#FFFFFF] text-black hover:bg-[#cddc39] font-medium"
            >
              <UserPlus className="h-4 w-4" />
              Register
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-white/60 hover:text-white hover:bg-white/5"
            >
              <LogIn className="h-4 w-4" />
              Sign In
            </Button>
        </div>
      </div>

      {/* 4. Modal Component */}
      <GetStartedModal open={open} onOpenChange={setOpen} />
    </>
  );
}