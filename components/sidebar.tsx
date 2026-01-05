'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { GetStartedModal } from '@/components/get-started-modal';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { 
  Home, 
  BookOpen, 
  Gamepad2, 
  Info,
  LogIn,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Menu,
  X
} from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: BookOpen, label: 'Courses', href: '/courses' },
  { icon: Gamepad2, label: 'Simulation', href: '/simulation' },
  { icon: Info, label: 'About', href: '/about' },
];

export function Sidebar() {
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <nav className="space-y-2">
      {sidebarItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition',
              isActive
                ? 'text-white bg-white/5'
                : 'text-[#888] hover:text-white hover:bg-white/5'
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
            {isActive && <ChevronRight className="ml-auto h-3 w-3 opacity-60" />}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>

      {/* ================= MOBILE HAMBURGER ================= */}
      <div className="lg:hidden fixed top-4 left-4 z-[60]">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[280px] bg-[#050505] border-r border-[#1F1F1F] p-0"
          >
            {/* Header */}
            <div className="h-16 flex items-center justify-between px-5 border-b border-[#1F1F1F]">
              <span className="font-acherus text-lg text-white">
                Thryve <span className="font-futura">Z</span>
              </span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Nav */}
            <div className="p-4">
              <NavLinks onClick={() => setMobileOpen(false)} />
            </div>

            {/* Actions */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#1F1F1F] space-y-3">
              <Button
                onClick={() => {
                  setOpenModal(true);
                  setMobileOpen(false);
                }}
                className="w-full gap-2"
              >
                <Sparkles className="h-4 w-4" />
                Register Now
              </Button>

              <Button variant="outline" className="w-full gap-2">
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <aside 
        className={cn(
          "hidden lg:flex h-screen flex-col sticky top-0 left-0 border-r border-[#1F1F1F] bg-[#050505] z-50 transition-all duration-300 ease-in-out",
          isCollapsed ? "w-[80px]" : "w-[200px]"
        )}
      >
        {/* EXPAND/COLLAPSE BUTTON */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-9 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-[#1F1F1F] bg-[#111] text-white hover:bg-[#222] hover:text-white transition-colors"
        >
          <ChevronLeft className={cn("h-3 w-3 transition-transform duration-300", isCollapsed && "rotate-180")} />
        </button>
        
        {/* 1. LOGO SECTION */}
        <div className={cn("h-20 flex items-center border-b border-[#1F1F1F]/50 transition-all duration-300", isCollapsed ? "justify-center px-0" : "px-6")}>
          <Link href="/" className="flex items-center gap-2 group overflow-hidden">
            <div className="text-2xl tracking-tight font-acherus  transition-opacity group-hover:opacity-90 whitespace-nowrap">
              {isCollapsed ? (
                <span className="font-futura bg-clip-text text-transparent text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  Z
                </span>
              ) : (
                <>
                  <span className="text-white">Thryve </span>
                  <span className="font-futura bg-clip-text text-transparent text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    Z
                  </span>
                </>
              )}
            </div>
          </Link>
        </div>

        {/* 2. NAVIGATION LINKS */}
        <div className="flex-1 py-8 px-3 overflow-y-auto overflow-x-hidden">
          {!isCollapsed && (
            <div className="mb-4 px-2 text-[11px]  uppercase tracking-widest text-[#555] font-sans animate-in fade-in duration-300">
              Menu
            </div>
          )}
          
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  title={isCollapsed ? item.label : undefined}
                  className={cn(
                    "relative flex items-center rounded-lg text-sm font-medium transition-all duration-200 group overflow-hidden",
                    isCollapsed 
                      ? "justify-center w-10 h-10 mx-auto" 
                      : "gap-3 px-3 py-3 w-full",
                    isActive 
                      ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" 
                      : "text-[#888] hover:text-white"
                  )}
                >
                  <item.icon className={cn(
                    "transition-colors shrink-0",
                    isActive ? "text-white" : "text-[#666] group-hover:text-white",
                    isCollapsed ? "h-5 w-5" : "h-4 w-4"
                  )} />
                  
                  <span className={cn(
                    "whitespace-nowrap transition-all duration-300",
                    isCollapsed ? "w-0 opacity-0 hidden" : "w-auto opacity-100 block",
                    isActive && "pl-1"
                  )}>
                    {item.label}
                  </span>
                  
                  {isActive && !isCollapsed && (
                    <ChevronRight className="h-3 w-3 ml-auto text-white/50" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* 3. BOTTOM ACTIONS */}
        <div className="p-4 border-t border-[#1F1F1F] bg-[#050505]">
          
          {/* Register Card / Icon */}
          {!isCollapsed ? (
            // EXPANDED: Full Card
            <div className="rounded-xl bg-gradient-to-b from-[#111] to-[#080808] border border-[#1F1F1F] p-4 mb-3 relative overflow-hidden group animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-md bg-white/10 border border-white/20">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-xs  text-white tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">JOIN US</span>
                </div>

                <Button
                  size="sm"
                  onClick={() => setOpenModal(true)}
                  className="w-full h-9 bg-transparent hover:bg-transparent text-white  text-xs border border-[#333] hover:border-white/50 shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all"
                >
                  Register Now
                </Button>
              </div>
            </div>
          ) : (
             // COLLAPSED: Simple Icon Button
            <div className="mb-3 flex justify-center">
               <Button
                size="icon"
                onClick={() => setOpenModal(true)}
                className="h-10 w-10 rounded-xl bg-[#111] border border-[#1F1F1F] hover:border-white/50 hover:text-white text-white transition-all group shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              >
                <Sparkles className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Sign In Link */}
          {!isCollapsed ? (
            <Button
              className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-transparent text-white border border-[#333] hover:border-white/50 shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-200 h-10 mt-1"
            >
              <LogIn className="h-4 w-4 text-white" />
              <span className="text-xs  tracking-wide drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Sign In</span>
            </Button>
          ) : (
            <div className="flex justify-center">
              <Button
                size="icon"
                className="h-10 w-10 bg-transparent hover:bg-transparent text-white border border-[#333] hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                <LogIn className="h-4 w-4 text-white" />
              </Button>
            </div>
          )}
        </div>
      </aside>

      {/* 4. MODAL */}
      <GetStartedModal open={openModal} onOpenChange={setOpenModal} />
    </>
  );
}