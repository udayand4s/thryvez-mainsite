'use client';

import Link from "next/link";
import { Twitter, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 font-sans">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12">

        {/* ================= LINKS GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4 md:gap-x-8 mb-16">

          {/* Courses */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Courses
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/courses" className="hover:text-white transition-colors">All Courses</Link></li>
              <li><Link href="/courses/psychology" className="hover:text-white transition-colors">Psychology 360</Link></li>
              <li><Link href="/courses/emotional-intelligence" className="hover:text-white transition-colors">Data Science with AI</Link></li>
              <li><Link href="/courses/self-growth" className="hover:text-white transition-colors">Self Growth Programs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About ThryveZ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/apply" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/mentors" className="hover:text-white transition-colors">Mentors</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Resources
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Student Stories</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Socials
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Twitter className="h-4 w-4" /> Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Link>
              </li>

              <li className="pt-4 border-t border-white/10 mt-1">
                <div className="flex flex-col gap-2 pt-2">
                  <span className="flex items-center gap-2 text-xs md:text-sm hover:text-white transition-colors">
                    <Mail className="h-3 w-3 md:h-4 md:w-4" />
                    support@thryvez.com
                  </span>
                  <span className="flex items-center gap-2 text-xs md:text-sm hover:text-white transition-colors">
                    <Phone className="h-3 w-3 md:h-4 md:w-4" />
                    +91 XXXXX XXXXX
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
          font-acherus font-extrabold tracking-tight leading-[1.05]
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
          <p className="text-xs text-gray-600 hidden md:block">
            Timings: Mon–Sat, 10AM – 7PM IST
          </p>
        </div>

      </div>
      

    </footer>
  );
}
