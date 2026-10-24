"use client";

import React from "react";
import Link from "next/link";
import AmbientBackground from "./AmbientBackground";
import { ArrowRight, Star, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#0a0a0a]">
      {/* Soloneur Ambient background with grid, cyan beams, orbs, and embers */}
      <AmbientBackground variant="section" intensity="normal" />

      {/* Radial Electric Cyan crown glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(6, 182, 212, 0.14) 0%, rgba(10, 10, 10, 0) 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">
          
          {/* Soloneur Pill Badge */}
          <div className="hero-badge max-w-full text-center">
            <span className="hero-badge-dot flex-shrink-0" />
            <span className="truncate">AI-first business education</span>
          </div>

          {/* Soloneur Headline */}
          <h1 className="mt-6 sm:mt-8 font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.05] tracking-tight text-[#f5f5f5] text-balance break-words">
            Build <span className="text-[#06b6d4]">AI-powered</span> income streams of your own.
          </h1>

          {/* Soloneur Subtitle */}
          <p className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-[#a1a1a1] max-w-2xl leading-relaxed font-light">
            SkyAI Automation gives you the skills, the AI tools, and the system to start and grow an online business — solo, from zero.
          </p>

          {/* Soloneur Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center w-full sm:w-auto">
            <Link
              href="#apply"
              className="inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap cursor-pointer rounded-md text-sm sm:text-base font-semibold bg-[#06b6d4] text-[#0a0a0a] shadow-[0_0_0_0_rgba(6,182,212,0)] hover:bg-[#38bdf8] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(6,182,212,0.65)] transition-all duration-200 h-12 sm:h-13 px-6 sm:px-10 py-3 text-center"
            >
              <span>Register for the webinar</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>

            <Link
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap font-medium cursor-pointer rounded-md text-sm sm:text-base border border-[#06b6d4]/40 text-[#f5f5f5] hover:border-[#06b6d4] hover:text-[#06b6d4] hover:bg-[#06b6d4]/[0.05] transition-all duration-200 h-12 sm:h-13 px-6 sm:px-10 py-3 text-center"
            >
              <span>Explore the curriculum</span>
            </Link>
          </div>

          {/* Soloneur Footnote */}
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-[#a1a1a1]/80">
            Built for India&apos;s solo builders, creators, and first-time founders.
          </p>

        </div>
      </div>
    </section>
  );
}
