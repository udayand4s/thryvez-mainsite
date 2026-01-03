'use client';

import { useState } from "react";
import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, Clock, HouseIcon, Instagram } from "lucide-react";
import { ContactUsModal } from "@/components/contact-us-modal";



export function Footer() {


  const [contactOpen, setContactOpen] = useState(false);

  return (
    <footer className="bg-black text-white border-t border-white/10 font-sans">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12">

        {/* ================= LINKS GRID ================= */}
        {/* Adjusted grid to 4 columns on large screens and 2 on medium for symmetry */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-8 mb-16">

          {/* Courses */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs  uppercase tracking-widest text-white">
              Courses
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/courses" className="hover:text-white transition-colors">All Courses</Link></li>
              <li><Link href="/courses/psychology360" className="hover:text-white transition-colors">Psychology 360</Link></li>
              <li><Link href="/courses/clinical-psy" className="hover:text-white transition-colors">Clinical Psychology</Link></li>
              <li><Link href="/courses/ai-mark" className="hover:text-white transition-colors">AI Marketing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs  uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About ThryveZ</Link></li>
              <button
                onClick={() => setContactOpen(true)}
                className="text-white/70 hover:text-white transition"
              >
                Contact Us
              </button>
              <li><Link href="/apply" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Mentors</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs  uppercase tracking-widest text-white">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/legal/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs  uppercase tracking-widest text-white">
              Socials
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Facebook className="h-4 w-4" /> Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Instagram className="h-4 w-4" /> Instagram
                </Link>
              </li>


              <li className="pt-4 border-t border-white/10 mt-1">
                <div className="flex flex-col gap-2 pt-2">
                  <span className="flex items-center gap-2 text-xs md:text-sm hover:text-white transition-colors">
                    <Clock className="h-3 w-3 md:h-4 md:w-4" />
                    Timings: Mon–Sat, 11AM – 9PM IST
                  </span>
                  <span className="flex items-center gap-2 text-xs md:text-sm hover:text-white transition-colors">
                    <HouseIcon className="h-3 w-3 md:h-4 md:w-4" />
                    Address: Koramangala, Bangalore, Karnataka
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        
        {/* ================= BRAND ================= */}
        <div className="w-full mb-12 relative overflow-hidden">

          <h1
            className="
              w-full text-center
              text-[18vw] sm:text-[16vw] lg:text-[14vw]
              font-acherus  tracking-tight leading-[1.05]
              text-transparent
              [-webkit-text-stroke:1.2px_rgba(255,255,255,0.55)]
              [mask-image:linear-gradient(to_bottom,black_0%,black_45%,transparent_100%)]
              [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_45%,transparent_100%)]
            "
          >
            <span>Thryve&nbsp;</span>

            <span className="inline-block align-baseline">
              <span className="inline-flex items-baseline">
                <svg
                  viewBox="0 0 200 240"
                  className="
                    h-[1.15em]
                    w-auto
                    overflow-visible
                    translate-y-[0.12em]
                  "
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="zGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9fdc3a" />
                      <stop offset="50%" stopColor="#e2f310" />
                      <stop offset="100%" stopColor="#9fdc3a" />
                    </linearGradient>
                  </defs>

                  <text
                    x="50%"
                    y="1em"
                    textAnchor="middle"
                    dominantBaseline="alphabetic"
                    fontFamily="Futura Black, sans-serif"
                    fontSize="220"
                    fill="url(#zGradient)"
                    stroke="rgba(226,243,16,0.85)"
                    strokeWidth="6"
                    paintOrder="stroke fill"
                  >
                    Z
                  </text>
                </svg>
              </span>

            </span>

          </h1>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Copyright {new Date().getFullYear()} © ThryveZ Education Labs
          </p>

        </div>

      </div>
      <ContactUsModal
        open={contactOpen}
        onOpenChange={setContactOpen}
      />
      
    </footer>
    
  );
}