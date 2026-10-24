"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck, 
  BookOpen
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Navigation links
  const navLinks = [
    { name: "Mentorship", href: "/#curriculum" },
    { name: "Community", href: "/#community" },
    { name: "About", href: "/#about" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
            {/* SkyAI Automation Brand Lockup with Electric Cyan Accent */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none flex-shrink-0"
            aria-label="SkyAI Automation"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#06b6d4] via-[#0284c7] to-[#0369a1] p-[1px] shadow-[0_0_20px_-4px_rgba(6,182,212,0.6)] group-hover:shadow-[0_0_25px_0_rgba(6,182,212,0.8)] transition-all flex-shrink-0">
              <div className="w-full h-full bg-[#0a0a0a] rounded-[7px] flex items-center justify-center">
                <span className="font-display text-xs sm:text-sm font-bold text-[#06b6d4]">S</span>
              </div>
            </div>

            <span className="font-display text-lg sm:text-xl tracking-tight text-[#f5f5f5] flex items-center leading-none">
              SkyAI Automation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-[#a1a1a1] hover:text-[#f5f5f5] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action CTA Button (Electric Cyan) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#apply"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm cursor-pointer font-semibold bg-[#06b6d4] text-[#0a0a0a] shadow-[0_0_0_0_rgba(6,182,212,0)] hover:bg-[#38bdf8] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(6,182,212,0.65)] transition-all duration-200 h-9 px-4 py-2"
            >
              <span>Register for the webinar</span>
              <ChevronRight className="w-3.5 h-3.5 -mr-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/#apply"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-[#06b6d4] text-[#0a0a0a] transition-all"
            >
              Register
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-white/10 text-[#f5f5f5] hover:border-[#06b6d4]/50 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-full bg-[#0a0a0a]/98 border-b border-[#06b6d4]/20 shadow-2xl backdrop-blur-2xl px-5 sm:px-6 py-6 transition-all max-h-[calc(100vh-65px)] overflow-y-auto">
          <nav className="flex flex-col gap-2 sm:gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#a1a1a1] hover:text-[#06b6d4] hover:bg-white/[0.04] transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-white/10 mt-2 flex flex-col gap-3">
              <Link
                href="/#apply"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-md text-center text-sm font-semibold bg-[#06b6d4] text-[#0a0a0a] shadow-[0_8px_24px_-8px_rgba(6,182,212,0.65)] flex items-center justify-center gap-2"
              >
                <span>Register for the webinar</span>
              </Link>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] text-[#a1a1a1] pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#06b6d4]" /> 72-Hour Refund Policy
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#06b6d4]" /> 1-Year Membership
                </span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
