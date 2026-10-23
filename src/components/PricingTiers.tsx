"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Crown, ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  title: string;
  desc: string;
  image: string;
  tag: string;
}

export default function PricingTiers() {
  const [eliteSlide, setEliteSlide] = useState(0);
  const [coreSlide, setCoreSlide] = useState(0);
  const [isEliteHovered, setIsEliteHovered] = useState(false);
  const [isCoreHovered, setIsCoreHovered] = useState(false);

  const eliteSlides: SlideData[] = [
    {
      title: "Curriculum Overview",
      desc: "All 12 course tracks spanning from foundation to advanced scale.",
      image: "/images/tiers/elite_curriculum.jpg",
      tag: "12 Tracks Included",
    },
    {
      title: "Weekly Live Sprints",
      desc: "Two live interactive sessions per week with founders.",
      image: "/images/tiers/elite_sprints.jpg",
      tag: "Solothon & Solignment",
    },
    {
      title: "Complete AI Suite",
      desc: "Council of Mentors, Vyas, Content Compass & Objection Crusher.",
      image: "/images/tiers/elite_ai_tools.jpg",
      tag: "4 AI Power Tools",
    },
  ];

  const coreSlides: SlideData[] = [
    {
      title: "Core Tracks",
      desc: "Four foundational tracks covering niche clarity and system creation.",
      image: "/images/tiers/core_tracks.jpg",
      tag: "4 Core Modules",
    },
    {
      title: "Weekly Live Sprints",
      desc: "Two live interactive training sessions each week.",
      image: "/images/tiers/core_sprints.jpg",
      tag: "Weekly Coaching",
    },
    {
      title: "Foundation AI Tools",
      desc: "Full access to Council of Mentors and Vyas scriptwriter.",
      image: "/images/tiers/core_tools.jpg",
      tag: "2 AI Tools",
    },
  ];

  // Auto-slide for Elite tier (every 3.8s, pauses on hover)
  useEffect(() => {
    if (isEliteHovered) return;
    const interval = setInterval(() => {
      setEliteSlide((prev) => (prev + 1) % eliteSlides.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isEliteHovered, eliteSlides.length]);

  // Auto-slide for Core tier (every 4.2s, pauses on hover, slightly staggered)
  useEffect(() => {
    if (isCoreHovered) return;
    const interval = setInterval(() => {
      setCoreSlide((prev) => (prev + 1) % coreSlides.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [isCoreHovered, coreSlides.length]);

  const handlePrevElite = () => {
    setEliteSlide((prev) => (prev === 0 ? eliteSlides.length - 1 : prev - 1));
  };

  const handleNextElite = () => {
    setEliteSlide((prev) => (prev === eliteSlides.length - 1 ? 0 : prev + 1));
  };

  const handlePrevCore = () => {
    setCoreSlide((prev) => (prev === 0 ? coreSlides.length - 1 : prev - 1));
  };

  const handleNextCore = () => {
    setCoreSlide((prev) => (prev === coreSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="pricing" className="py-24 bg-[#0c0c0c]/70 relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#06b6d4]/[0.05] rounded-full blur-[160px] pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-5xl text-center leading-tight text-[#f5f5f5]">
            Two tiers. Pick your <span className="text-[#06b6d4]">depth</span>.
          </h2>
        </div>

        {/* 2 Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: ELITE */}
          <div className="h-full relative rounded-xl bg-[#0a0a0a]/96 text-center backdrop-blur-sm p-8 md:p-10 border border-[#06b6d4]/40 shadow-[0_0_60px_-20px_rgba(6,182,212,0.3)] flex flex-col justify-between">
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#06b6d4] via-[#0284c7] to-[#0f172a] p-[1.5px] shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                  <div className="w-full h-full bg-[#0a0a0a] rounded-[14px] flex items-center justify-center">
                    <Crown className="w-7 h-7 text-[#06b6d4]" />
                  </div>
                </div>
              </div>

              <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-[#06b6d4]">
                Soloneur Elite Membership
              </div>

              <p className="mt-4 text-sm text-[#a1a1a1] leading-relaxed">
                All 12 course tracks · 2 live sessions a week · 4 AI tools · community
              </p>
            </div>
          </div>

          {/* Card 2: CORE */}
          <div className="h-full relative rounded-xl bg-[#0a0a0a]/96 text-center backdrop-blur-sm p-8 md:p-10 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-300 via-slate-400 to-slate-700 p-[1.5px] shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                  <div className="w-full h-full bg-[#0a0a0a] rounded-[14px] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-slate-300" />
                  </div>
                </div>
              </div>

              <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-[#a1a1a1]">
                Soloneur Core Membership
              </div>

              <p className="mt-4 text-sm text-[#a1a1a1] leading-relaxed">
                4 course tracks · 2 live sessions a week · 2 AI tools · community
              </p>
            </div>
          </div>

        </div>

        {/* Pricing revealed note banner */}
        <div className="mt-12 text-center">
          <p className="font-display text-2xl md:text-3xl leading-snug text-[#f5f5f5]">
            Pricing revealed <span className="text-[#06b6d4]">live</span> in the webinar.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="#apply"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-semibold bg-[#06b6d4] text-[#0a0a0a] shadow-[0_0_0_0_rgba(6,182,212,0)] hover:bg-[#38bdf8] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(6,182,212,0.65)] transition-all duration-200 h-13 px-10 text-base"
            >
              <span>Register for the webinar</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Slide Previews Section with Auto-Slide Images */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* ELITE SLIDER */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#06b6d4] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-ping" />
                ELITE
              </span>
              <span className="text-[10px] font-mono text-[#a1a1a1]/70">{eliteSlide + 1} / {eliteSlides.length}</span>
            </div>

            <div 
              onMouseEnter={() => setIsEliteHovered(true)}
              onMouseLeave={() => setIsEliteHovered(false)}
              className="group relative w-full overflow-hidden rounded-xl border border-[#06b6d4]/30 bg-[#0a0a0a] aspect-[16/9] shadow-[0_0_60px_-25px_rgba(6,182,212,0.35)]"
            >
              {/* Slide Image with smooth cross-fade animation */}
              <div key={eliteSlide} className="absolute inset-0 transition-opacity duration-700 ease-in-out">
                <Image
                  src={eliteSlides[eliteSlide].image}
                  alt={eliteSlides[eliteSlide].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-700 group-hover:scale-[1.02]"
                  priority
                />
                {/* Subtle gradient vignette to blend with dark luxury styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent pointer-events-none" />
              </div>

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#0a0a0a]/90 backdrop-blur-md text-[#06b6d4] border border-[#06b6d4]/40 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-pulse" />
                  {eliteSlides[eliteSlide].tag}
                </span>
              </div>

              {/* Prev / Next Arrows */}
              <button
                type="button"
                onClick={handlePrevElite}
                aria-label="Previous Elite slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#0a0a0a]/80 hover:bg-[#06b6d4] text-[#f5f5f5] hover:text-[#0a0a0a] border border-white/10 hover:border-[#06b6d4] flex items-center justify-center opacity-80 hover:opacity-100 backdrop-blur-sm transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNextElite}
                aria-label="Next Elite slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#0a0a0a]/80 hover:bg-[#06b6d4] text-[#f5f5f5] hover:text-[#0a0a0a] border border-white/10 hover:border-[#06b6d4] flex items-center justify-center opacity-80 hover:opacity-100 backdrop-blur-sm transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Bottom Info Bar & Pagination Dots */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col justify-end bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-[#f5f5f5] drop-shadow-md">
                      {eliteSlides[eliteSlide].title}
                    </h4>
                    <p className="text-xs text-[#a1a1a1] mt-0.5 line-clamp-1 font-light drop-shadow">
                      {eliteSlides[eliteSlide].desc}
                    </p>
                  </div>

                  {/* Pagination Dots */}
                  <div className="flex gap-1.5 items-center flex-shrink-0">
                    {eliteSlides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setEliteSlide(i)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          eliteSlide === i ? "w-6 bg-[#06b6d4]" : "w-2 bg-white/40 hover:bg-white/70"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CORE SLIDER */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-ping" />
                CORE
              </span>
              <span className="text-[10px] font-mono text-[#a1a1a1]/70">{coreSlide + 1} / {coreSlides.length}</span>
            </div>

            <div 
              onMouseEnter={() => setIsCoreHovered(true)}
              onMouseLeave={() => setIsCoreHovered(false)}
              className="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] aspect-[16/9] shadow-[0_0_60px_-25px_rgba(255,255,255,0.08)]"
            >
              {/* Slide Image with smooth cross-fade animation */}
              <div key={coreSlide} className="absolute inset-0 transition-opacity duration-700 ease-in-out">
                <Image
                  src={coreSlides[coreSlide].image}
                  alt={coreSlides[coreSlide].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-700 group-hover:scale-[1.02]"
                />
                {/* Subtle gradient vignette to blend with dark luxury styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent pointer-events-none" />
              </div>

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#0a0a0a]/90 backdrop-blur-md text-slate-300 border border-white/20 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  {coreSlides[coreSlide].tag}
                </span>
              </div>

              {/* Prev / Next Arrows */}
              <button
                type="button"
                onClick={handlePrevCore}
                aria-label="Previous Core slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#0a0a0a]/80 hover:bg-white text-[#f5f5f5] hover:text-[#0a0a0a] border border-white/10 hover:border-white flex items-center justify-center opacity-80 hover:opacity-100 backdrop-blur-sm transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNextCore}
                aria-label="Next Core slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#0a0a0a]/80 hover:bg-white text-[#f5f5f5] hover:text-[#0a0a0a] border border-white/10 hover:border-white flex items-center justify-center opacity-80 hover:opacity-100 backdrop-blur-sm transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Bottom Info Bar & Pagination Dots */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col justify-end bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-[#f5f5f5] drop-shadow-md">
                      {coreSlides[coreSlide].title}
                    </h4>
                    <p className="text-xs text-[#a1a1a1] mt-0.5 line-clamp-1 font-light drop-shadow">
                      {coreSlides[coreSlide].desc}
                    </p>
                  </div>

                  {/* Pagination Dots */}
                  <div className="flex gap-1.5 items-center flex-shrink-0">
                    {coreSlides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCoreSlide(i)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          coreSlide === i ? "w-6 bg-[#06b6d4]" : "w-2 bg-white/40 hover:bg-white/70"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center italic text-[#a1a1a1] leading-relaxed text-xs sm:text-sm">
          Soloneur provides education and tools. Results depend on your own effort and vary from person to person — we don&apos;t promise any specific income or outcome.
        </p>

      </div>
    </section>
  );
}
