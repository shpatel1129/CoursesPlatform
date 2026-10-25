"use client";

import React from "react";
import Link from "next/link";
import AmbientBackground from "./AmbientBackground";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#FAF5EB]">
      {/* Original ambient background with grid, rotating beams, orbs, embers, and scan line */}
      <AmbientBackground variant="hero" intensity="normal" />

      {/* Radial Warm Gold crown glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(245, 189, 74, 0.28) 0%, rgba(217, 154, 25, 0.1) 40%, rgba(250, 245, 235, 0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">
          
          {/* Soloneur Pill Badge */}
          <div className="hero-badge max-w-full text-center">
            <span className="hero-badge-dot flex-shrink-0" />
            <span className="truncate">AI-first business education</span>
          </div>

          {/* Soloneur Headline with Gold Metallic Highlight */}
          <h1 className="mt-6 sm:mt-8 font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.05] tracking-tight text-[#161616] text-balance break-words font-bold">
            Build <span className="bg-gradient-to-r from-[#925B0A] via-[#D99A19] to-[#F5BD4A] bg-clip-text text-transparent">AI-powered</span> income streams of your own.
          </h1>

          {/* Soloneur Subtitle */}
          <p className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-[#555555] max-w-2xl leading-relaxed font-light">
            SKY AI Automation gives you the skills, the AI tools, and the system to start and grow an online business solo, from zero.
          </p>

          {/* Buttons in Gold Palette */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center w-full sm:w-auto">
            <Link
              href="#apply"
              className="inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap cursor-pointer rounded-md text-sm sm:text-base font-semibold bg-[#D99A19] text-[#FFFCF7] shadow-[0_4px_16px_rgba(217,154,25,0.35)] hover:bg-[#925B0A] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(146,91,10,0.45)] transition-all duration-200 h-12 sm:h-13 px-6 sm:px-10 py-3 text-center"
            >
              <span>Register for the webinar</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>

            <Link
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap font-medium cursor-pointer rounded-md text-sm sm:text-base border border-[#E8CC9D] bg-[#FFFCF7] text-[#161616] hover:border-[#D99A19] hover:text-[#925B0A] hover:bg-[#FAF5EB] transition-all duration-200 h-12 sm:h-13 px-6 sm:px-10 py-3 text-center"
            >
              <span>Explore the curriculum</span>
            </Link>
          </div>

          {/* Footnote */}
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-[#777777]">
            Built for India&apos;s solo builders, creators, and first-time founders.
          </p>

        </div>
      </div>
    </section>
  );
}
