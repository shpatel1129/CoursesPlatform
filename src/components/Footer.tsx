import React from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  ShieldCheck, 
  Lock, 
  Award, 
  Mail, 
  ArrowRight,
  Heart
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070a11] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-slate-800/80">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">30-Day Risk-Free Guarantee</h4>
              <p className="text-xs text-slate-400">100% money-back if you are not fully satisfied</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">256-Bit Encrypted Checkout</h4>
              <p className="text-xs text-slate-400">Enterprise bank-grade secure checkout protocols</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Verified Certificates</h4>
              <p className="text-xs text-slate-400">Industry recognized credentials for your career</p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                  Apex<span className="text-indigo-400">Skills</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 -mt-1">
                  Mastery Platform
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We empower ambitious professionals, founders, and career changers with high-impact, practical masterclasses taught by top 1% industry practitioners.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="text-xs text-slate-300 font-medium bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                10,000+ Students Enrolled
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">All Courses</Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-white transition-colors">Student Reviews</Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-white transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Our Platform</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Top Categories */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Featured Tracks</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/courses?category=Marketing" className="hover:text-white transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/courses?category=Technology" className="hover:text-white transition-colors">Full-Stack Development</Link>
              </li>
              <li>
                <Link href="/courses?category=Design" className="hover:text-white transition-colors">UI/UX Design Mastery</Link>
              </li>
              <li>
                <Link href="/courses?category=Technology" className="hover:text-white transition-colors">AI & Prompt Engineering</Link>
              </li>
              <li>
                <Link href="/courses?category=Business" className="hover:text-white transition-colors">Startup Growth Strategy</Link>
              </li>
              <li>
                <Link href="/courses?category=Career" className="hover:text-white transition-colors">High-Ticket Sales</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Guarantee */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Legal & Policies</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-white transition-colors">30-Day Refund Policy</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Student Helpdesk</Link>
              </li>
            </ul>

            <div className="pt-3">
              <p className="text-xs text-slate-500">Need help with your enrollment?</p>
              <a 
                href="mailto:support@apexskills.com" 
                className="text-xs text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 mt-1"
              >
                <Mail className="w-3.5 h-3.5" /> support@apexskills.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ApexSkills Education Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-slate-400 transition-colors">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
