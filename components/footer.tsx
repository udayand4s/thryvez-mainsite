import Link from "next/link";
import { Twitter, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative min-h-screen bg-black text-white border-t border-white/10 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* Top: Logo / Brand */}
        <div className="mb-20">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Thryve<span className="text-[#E2F310]"> Z</span>
            </h1>
          </Link>
          <p className="mt-6 max-w-xl text-white/50 text-base leading-relaxed">
            Thryve Z is a learning-first platform focused on psychology,
            self-awareness, and real-world application — guided by
            mentors who genuinely care about your growth.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">

          {/* Courses */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Courses
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="/courses" className="hover:text-white">All Courses</Link></li>
              <li><Link href="/courses/psychology" className="hover:text-white">Psychology 360</Link></li>
              <li><Link href="/courses/emotional-intelligence" className="hover:text-white">Data Science with AI</Link></li>
              <li><Link href="/courses/self-growth" className="hover:text-white">Self Growth Programs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="/about" className="hover:text-white">About ThryveZ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/apply" className="hover:text-white">Apply to Work With Us</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Learn
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
              <li><Link href="/testimonials" className="hover:text-white">Student Stories</Link></li>
              <li><Link href="/community" className="hover:text-white">Community</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>support@thryvez.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>+91 XXXXX XXXXX</span>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Timings
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Monday – Saturday<br />
              10:00 AM – 7:00 PM IST
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} ThryveZ. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
            >
              <Twitter className="h-4 w-4 text-white/60" />
            </Link>
            <Link
              href="#"
              className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
            >
              <Linkedin className="h-4 w-4 text-white/60" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
