import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const SUPPORT_EMAIL = "skymentorshipsupport@gmail.com";

// Home page sections, in the same order they appear on the page.
// NOTE: make sure each id below matches the `id` on that section's <section> tag.
const homeSections = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Curriculum", href: "/#curriculum" },
  { label: "Register for Webinar", href: "/#apply" },
];

export default function Footer() {
  return (
    <footer className="bg-[#070707] text-[#a1a1a1] border-t border-white/5 pt-12 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 sm:pb-12">

          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden p-[1px] bg-gradient-to-br from-[#06b6d4] via-[#0284c7] to-[#38bdf8] shadow-[0_0_15px_rgba(6,182,212,0.4)] flex-shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/logo.png"
                    alt="SkyAI Automation Logo"
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
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
                SkyAI Automation
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

          {/* Home Page Sections */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f5f5]">Explore</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              {homeSections.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#06b6d4] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
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
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-xs text-[#06b6d4] hover:underline font-medium inline-flex items-center gap-1 mt-1 break-all"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" /> {SUPPORT_EMAIL}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a1a1a1]/60">
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