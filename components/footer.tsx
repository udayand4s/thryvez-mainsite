import Link from 'next/link';
import { Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">Thryvez<span className="text-white/60"></span></span>
            </Link>
            <p className="text-sm text-white/50 mb-6 max-w-sm">
              Accelerate your career with expert-led courses and an exclusive community of growth leaders.
            </p>
            <div className="flex items-center gap-3">
              <Link href="#" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="h-4 w-4 text-white/60" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="h-4 w-4 text-white/60" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Learn</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="/courses" className="hover:text-white transition-colors">All Courses</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Growth Strategy</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Product Management</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-[#E2F310]/90">
          <p>&copy; {new Date().getFullYear()} Thryvez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
