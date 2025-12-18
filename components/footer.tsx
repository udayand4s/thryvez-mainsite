import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 font-sans">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12">

        {/* 1. LOGO SECTION - NEW APPROACH */}
        {/* We use w-full h-auto to let the image determine the height naturally based on width.
            This removes the vertical gap caused by fixed-height containers. */}
        <div className="w-full mb-8"> 
          <Image
            src="/logo1.png"
            alt="Thryve Z"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain" // This forces full width & auto height
            priority
          />
        </div>

        {/* 2. Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4 md:gap-x-8 mb-16">

          {/* Column 1: Courses */}
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

          {/* Column 2: Company */}
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

          {/* Column 3: Learn/Resources */}
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

           {/* Column 4: Legal */}
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

          {/* Column 5: Socials & Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Socials
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <Twitter className="h-4 w-4" /> Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Link>
              </li>
              {/* Nested Contact Info */}
              <li className="pt-4 border-t border-white/10 mt-1">
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors text-xs md:text-sm">
                        <Mail className="h-3 w-3 md:h-4 md:w-4" /> support@thryvez.com
                    </span>
                    <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors text-xs md:text-sm">
                        <Phone className="h-3 w-3 md:h-4 md:w-4" /> +91 XXXXX XXXXX
                    </span>
                  </div>
              </li>
            </ul>
          </div>

        </div>

        {/* 3. Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
             Copyright {new Date().getFullYear()} © ThryveZ Education Labs
          </p>
          <p className="text-xs text-gray-600 hidden md:block">
            Timings: Mon-Sat, 10AM - 7PM IST
          </p>
        </div>

      </div>
    </footer>
  );
}