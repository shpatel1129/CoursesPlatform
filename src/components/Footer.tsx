import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Award, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070707] text-[#a1a1a1] border-t border-white/5 pt-12 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 sm:pb-12">

          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#06b6d4] via-[#0284c7] to-[#0369a1] p-[1px] shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <div className="w-full h-full bg-[#0a0a0a] rounded-[7px] flex items-center justify-center">
                  <span className="font-display text-sm font-bold text-[#06b6d4]">S</span>
                </div>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-[#f5f5f5] leading-none">
                SkyAI Automation
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#a1a1a1] leading-relaxed max-w-sm font-light mt-1">
              The curriculum, AI tools, and community for India&apos;s solo builders, creators, and first-time founders. Solo, with a system.
            </p>

            <div className="pt-2">
              <span className="text-xs text-[#a1a1a1] font-medium bg-[#0a0a0a] px-3 py-1.5 rounded-md border border-white/10 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
                SkyAI Automation Private Limited
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f5f5]">Navigation</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <Link href="/#curriculum" className="hover:text-[#06b6d4] transition-colors">Mentorship</Link>
              </li>
              <li>
                <Link href="/#workshop" className="hover:text-[#06b6d4] transition-colors">Live Workshop</Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#06b6d4] transition-colors">Tiers</Link>
              </li>
              <li>
                <Link href="/#community" className="hover:text-[#06b6d4] transition-colors">Community</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#06b6d4] transition-colors">About</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#06b6d4] transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Course Tracks */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f5f5]">Curriculum Tracks</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <Link href="/#curriculum" className="hover:text-[#06b6d4] transition-colors">Niche Clarity &amp; Positioning</Link>
              </li>
              <li>
                <Link href="/#curriculum" className="hover:text-[#06b6d4] transition-colors">Digital Products &amp; Systems</Link>
              </li>
              <li>
                <Link href="/#curriculum" className="hover:text-[#06b6d4] transition-colors">AI Influencer &amp; UGC Videos</Link>
              </li>
              <li>
                <Link href="/#curriculum" className="hover:text-[#06b6d4] transition-colors">AI Voice Calling Agents</Link>
              </li>
              <li>
                <Link href="/#curriculum" className="hover:text-[#06b6d4] transition-colors">Websites Without Code</Link>
              </li>
              <li>
                <Link href="/#curriculum" className="hover:text-[#06b6d4] transition-colors">YouTube Mastery</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f5f5]">Legal &amp; Policies</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-[#06b6d4] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#06b6d4] transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-[#06b6d4] transition-colors">Refund &amp; Cancellation</Link>
              </li>
              <li>
                <Link href="/#apply" className="hover:text-[#06b6d4] transition-colors">Apply to Join</Link>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-[11px] text-[#a1a1a1]/70">Support &amp; enquiries</p>
              <a 
                href="mailto:support@soloneur.in" 
                className="text-xs text-[#06b6d4] hover:underline font-medium inline-flex items-center gap-1 mt-1"
              >
                <Mail className="w-3.5 h-3.5" /> support@soloneur.in
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a1a1a1]/60">
          <p>© {new Date().getFullYear()} Soloatlas Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#f5f5f5] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#f5f5f5] transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-[#f5f5f5] transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
