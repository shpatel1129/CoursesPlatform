"use client";

import React from "react";
import Link from "next/link";
import AmbientBackground from "./AmbientBackground";
import { ArrowRight } from "lucide-react";
import { FadeIn, Floating3D, Magnetic } from "./MotionWrapper";

export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden bg-[#FAF5EB]">
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
          
          {/* Soloneur Pill Badge with 3D Float */}
          <FadeIn delay={0.05} yOffset={16}>
            <Floating3D duration={6} yOffset={6} rotateRange={2} className="inline-block">
              <div className="hero-badge max-w-full text-center hover:scale-105 transition-transform duration-300 shadow-sm cursor-pointer">
                <span className="hero-badge-dot live-ripple-dot flex-shrink-0" />
                <span className="truncate">AI-first business education</span>
              </div>
            </Floating3D>
          </FadeIn>

          {/* Soloneur Headline with Gold Metallic Highlight */}
          <FadeIn delay={0.15} yOffset={20}>
            <h1 className="mt-6 sm:mt-8 font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.05] tracking-tight text-[#161616] text-balance break-words font-bold">
              Build <span className="bg-gradient-to-r from-[#925B0A] via-[#D99A19] to-[#F5BD4A] bg-clip-text text-transparent">AI-powered</span> income streams of your own.
            </h1>
          </FadeIn>

          {/* Soloneur Subtitle */}
          <FadeIn delay={0.25} yOffset={20}>
            <p className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-[#555555] max-w-2xl leading-relaxed font-light">
              SKY AI Automation gives you the skills, the AI tools, and the system to start and grow an online business solo, from zero.
            </p>
          </FadeIn>

          {/* Buttons in Gold Palette with Shimmer Gleam & Magnetic Pull */}
          <FadeIn delay={0.35} yOffset={20}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center w-full sm:w-auto">
              <Magnetic distance={0.25}>
                <Link
                  href="#apply"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap cursor-pointer rounded-md text-sm sm:text-base font-semibold bg-[#D99A19] text-[#FFFCF7] shadow-[0_4px_16px_rgba(217,154,25,0.35)] hover:bg-[#925B0A] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(146,91,10,0.45)] active:scale-95 transition-all duration-200 h-12 sm:h-13 px-6 sm:px-10 py-3 text-center"
                >
                  <span>Register for the webinar</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </Link>
              </Magnetic>

              <Magnetic distance={0.18}>
                <Link
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap font-medium cursor-pointer rounded-md text-sm sm:text-base border border-[#E8CC9D] bg-[#FFFCF7] text-[#161616] hover:border-[#D99A19] hover:text-[#925B0A] hover:bg-[#FAF5EB] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 h-12 sm:h-13 px-6 sm:px-10 py-3 text-center shadow-sm"
                >
                  <span>Explore the curriculum</span>
                </Link>
              </Magnetic>
            </div>
          </FadeIn>

          {/* Footnote */}
          <FadeIn delay={0.45} yOffset={16}>
            <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-[#777777]">
              Built for India&apos;s solo builders, creators, and first-time founders.
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
