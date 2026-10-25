import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const SUPPORT_EMAIL = "skymentorshipsupport@gmail.com";

// Home page section anchors linked under Curriculum Tracks as requested
const homePageSections = [
  { label: "Live AI Workshop", href: "/#workshop" },
  { label: "Agentic AI Mentorship", href: "/#pricing" },
  { label: "8-Week Curriculum Tracks", href: "/#curriculum" },
  { label: "Why I Started SKY", href: "/#about" },
  { label: "VIP Community", href: "/#community" },
  { label: "Frequently Asked Questions", href: "/#faq" },
  { label: "Register for Webinar", href: "/#apply" },
];

export default function Footer() {
  return (
    <footer className="bg-[#FAF5EB] text-[#555555] border-t-2 border-[#E8CC9D] pt-12 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 sm:pb-12">

          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden p-[1.5px] bg-gradient-to-br from-[#F5BD4A] via-[#D99A19] to-[#925B0A] shadow-[0_0_12px_rgba(217,154,25,0.4)] flex-shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/logo.png"
                    alt="SKY AI Automation Logo"
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-[#161616] leading-none">
                SKY AI Automation
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-sm font-light mt-1">
              The curriculum, AI tools, and community for India&apos;s solo builders, creators, and first-time founders. Solo, with a system.
            </p>

            <div className="pt-2">
              <span className="text-xs text-[#925B0A] font-semibold bg-[#FFFCF7] px-3 py-1.5 rounded-md border border-[#E8CC9D] inline-flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#D99A19] animate-pulse" />
                SKY Agentic AI Mentorship
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#925B0A]">Navigation</h4>
            <ul className="flex flex-col gap-2.5 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-[#D99A19] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#workshop" className="hover:text-[#D99A19] transition-colors">Live Workshop</Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#D99A19] transition-colors">Mentorship Program</Link>
              </li>
              <li>
                <Link href="/#curriculum" className="hover:text-[#D99A19] transition-colors">Curriculum Tracks</Link>
              </li>
              <li>
                <Link href="/#community" className="hover:text-[#D99A19] transition-colors">Community</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#D99A19] transition-colors">About Shrikant</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#D99A19] transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Curriculum Tracks: Home Page Sections linked here as requested */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#925B0A]">Curriculum Tracks</h4>
            <ul className="flex flex-col gap-2.5 text-xs font-medium">
              {homePageSections.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#D99A19] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#925B0A]">Legal &amp; Policies</h4>
            <ul className="flex flex-col gap-2.5 text-xs font-medium">
              <li>
                <Link href="/privacy" className="hover:text-[#D99A19] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#D99A19] transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-[#D99A19] transition-colors">Refund &amp; Cancellation</Link>
              </li>
              <li>
                <Link href="/#apply" className="hover:text-[#D99A19] transition-colors">Apply to Join</Link>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-[11px] text-[#777777]">Support &amp; enquiries</p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-xs text-[#925B0A] hover:text-[#D99A19] hover:underline font-semibold inline-flex items-center gap-1 mt-1 break-all"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" /> {SUPPORT_EMAIL}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 border-t border-[#E8CC9D]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>© {new Date().getFullYear()} SKY AI Automation Systems &amp; Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#161616] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#161616] transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-[#161616] transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}