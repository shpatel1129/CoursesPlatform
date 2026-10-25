"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    { name: "Live Workshop", href: "/#workshop" },
    { name: "Mentorship", href: "/#pricing" },
    { name: "Curriculum", href: "/#curriculum" },
    { name: "Community", href: "/#community" },
    { name: "About", href: "/#about" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF5EB]/90 backdrop-blur-xl border-b border-[#E8CC9D]/60 shadow-[0_4px_25px_-5px_rgba(146,91,10,0.08)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* SkyAI Brand Lockup with Logo Image */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none flex-shrink-0"
            aria-label="SKY AI Mentorship"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden p-[1.5px] bg-gradient-to-br from-[#F5BD4A] via-[#D99A19] to-[#925B0A] shadow-[0_0_15px_rgba(217,154,25,0.35)] group-hover:shadow-[0_0_20px_0_rgba(217,154,25,0.55)] transition-all flex-shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src="/images/logo.png"
                  alt="SKY AI Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#161616] flex items-center leading-none">
              SKY AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#555555] hover:text-[#925B0A] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action CTA Button (Primary Gold) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#apply"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm cursor-pointer font-semibold bg-[#D99A19] text-[#FFFCF7] shadow-[0_4px_14px_rgba(217,154,25,0.3)] hover:bg-[#925B0A] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(146,91,10,0.4)] transition-all duration-200 h-9 px-4 py-2"
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
              className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-[#D99A19] text-[#FFFCF7] transition-all"
            >
              Register
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-[#E8CC9D] text-[#161616] bg-[#FFFCF7] hover:border-[#D99A19] transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-full bg-[#FFFCF7]/98 border-b border-[#E8CC9D] shadow-xl backdrop-blur-2xl px-5 sm:px-6 py-6 transition-all max-h-[calc(100vh-65px)] overflow-y-auto">
          <nav className="flex flex-col gap-2 sm:gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#555555] hover:text-[#925B0A] hover:bg-[#FAF5EB] transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-[#E8CC9D]/50 mt-2 flex flex-col gap-3">
              <Link
                href="/#apply"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-md text-center text-sm font-semibold bg-[#D99A19] text-[#FFFCF7] shadow-[0_6px_20px_rgba(217,154,25,0.35)] flex items-center justify-center gap-2 hover:bg-[#925B0A] transition-all"
              >
                <span>Register for the webinar</span>
              </Link>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] text-[#777777] pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D99A19]" /> 72-Hour Refund Policy
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#D99A19]" /> 1-Year Membership
                </span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
