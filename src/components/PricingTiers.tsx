"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, Zap } from "lucide-react";

interface SlideData {
  title: string;
  desc: string;
  image: string;
  tag: string;
}

export default function PricingTiers() {
  const [slide, setSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides: SlideData[] = [
    {
      title: "Sky Agentic AI Mentorship Program",
      desc: "A 60-day immersive experience to build a profitable AI-powered business from scratch.",
      image: "/images/1000100844.png",
      tag: "Program Overview",
    },
    {
      title: "The Sky Advantage — Why Mentorship?",
      desc: "You don't just need information — you need personal guidance, support, and a clear roadmap.",
      image: "/images/1000100841.png",
      tag: "Why Mentorship",
    },
    {
      title: "The Difference: Why We Stand Out",
      desc: "Live interactive sessions, 1-on-1 guidance & real-time doubt solving vs free content.",
      image: "/images/1000100845.png",
      tag: "The Difference",
    },
    {
      title: "Start A Legitimate AI Business",
      desc: "Build real AI automations and client systems with live mentor support and everyday tools.",
      image: "/images/1000100848.png",
      tag: "Actionable System",
    },
    {
      title: "Hope Is Not A Strategy",
      desc: "Proven step-by-step plans to deliver scalable AI services and start making money.",
      image: "/images/1000100851.png",
      tag: "Proven Strategy",
    },
  ];

  // Auto-slide every 4s, pauses when user hovers
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const handlePrev = () => {
    setSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#0c0c0c]/70 relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-[#06b6d4]/[0.05] rounded-full blur-[160px] pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/[0.06] px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#06b6d4] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flagship Mentorship</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center leading-tight text-[#f5f5f5] break-words">
            Sky Agentic AI <span className="text-[#06b6d4]">Mentorship</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#a1a1a1] max-w-xl mx-auto font-light leading-relaxed">
            A structured 60-day roadmap to build practical AI systems and acquire high-paying clients.
          </p>
        </div>

        {/* Single Featured Card (from user image) */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#0a0a0a]/95 text-center backdrop-blur-xl p-5 sm:p-10 md:p-16 border border-[#06b6d4]/40 shadow-[0_0_80px_-20px_rgba(6,182,212,0.35)] overflow-hidden">
          {/* Subtle interior glow */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#06b6d4]/10 via-[#06b6d4]/[0.02] to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* INTRODUCING */}
            <div className="text-[11px] sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.35em] font-semibold text-[#06b6d4] mb-3 sm:mb-4">
              INTRODUCING
            </div>

            {/* SKY AGENTIC AI */}
            <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#f5f5f5] tracking-tight leading-none break-words">
              SKY
            </h3>
            <h4 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#f5f5f5] tracking-tight leading-tight mt-1 break-words">
              AGENTIC AI
            </h4>

            {/* MENTORSHIP PROGRAM */}
            <div className="text-xs sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.28em] font-bold text-[#06b6d4] mt-2 sm:mt-3">
              MENTORSHIP PROGRAM
            </div>

            {/* Description */}
            <p className="mt-5 sm:mt-8 text-xs sm:text-base text-[#d1d5db] leading-relaxed max-w-xl mx-auto font-light">
              A 60-day learning journey to build practical AI skills, create useful solutions, and learn how to offer AI services to businesses.
            </p>

            {/* 60 DAYS • 8 WEEKS Badge */}
            <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#06b6d4] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#06b6d4]" />
              <span>60 DAYS • 8 WEEKS</span>
            </div>

          </div>
        </div>

        {/* Pricing revealed note banner & Register CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="font-display text-xl sm:text-2xl md:text-3xl leading-snug text-[#f5f5f5]">
            Pricing revealed <span className="text-[#06b6d4]">live</span> in the webinar.
          </p>

          <div className="mt-5 sm:mt-6 flex justify-center">
            <Link
              href="#apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap cursor-pointer rounded-md font-semibold bg-[#06b6d4] text-[#0a0a0a] shadow-[0_0_0_0_rgba(6,182,212,0)] hover:bg-[#38bdf8] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(6,182,212,0.65)] transition-all duration-200 h-12 sm:h-13 px-6 sm:px-10 text-sm sm:text-base text-center"
            >
              <span>Register for the webinar</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </div>
        </div>

        {/* Program Preview Auto-Slide Carousel */}
        <div className="mt-12 sm:mt-14">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#06b6d4] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-ping" />
              PROGRAM PREVIEW
            </span>
            <span className="text-[10px] font-mono text-[#a1a1a1]/70">{slide + 1} / {slides.length}</span>
          </div>

          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-full overflow-hidden rounded-2xl border border-[#06b6d4]/30 bg-[#0a0a0a] shadow-[0_0_60px_-25px_rgba(6,182,212,0.35)]"
          >
            {/* Slide Image Box (16:9 full view so no text is cut) */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0a0a0a]">
              <div key={slide} className="absolute inset-0 transition-opacity duration-700 ease-in-out">
                <Image
                  src={slides[slide].image}
                  alt={slides[slide].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain sm:object-cover object-center transition-all duration-700 group-hover:scale-[1.01]"
                  priority
                />
              </div>

              {/* Top Floating Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold bg-[#0a0a0a]/90 backdrop-blur-md text-[#06b6d4] border border-[#06b6d4]/40 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-pulse" />
                  {slides[slide].tag}
                </span>
              </div>

              {/* Prev / Next Arrows */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0a0a0a]/85 hover:bg-[#06b6d4] text-[#f5f5f5] hover:text-[#0a0a0a] border border-white/10 hover:border-[#06b6d4] flex items-center justify-center opacity-85 hover:opacity-100 backdrop-blur-md transition-all cursor-pointer shadow-lg"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0a0a0a]/85 hover:bg-[#06b6d4] text-[#f5f5f5] hover:text-[#0a0a0a] border border-white/10 hover:border-[#06b6d4] flex items-center justify-center opacity-85 hover:opacity-100 backdrop-blur-md transition-all cursor-pointer shadow-lg"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Bottom Info Bar & Pagination Dots */}
            <div className="p-4 sm:p-5 bg-[#0e0e0e] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="min-w-0 flex-1">
                <h4 className="font-display text-base sm:text-lg md:text-xl font-bold text-[#f5f5f5] drop-shadow-md truncate">
                  {slides[slide].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#a1a1a1] mt-0.5 line-clamp-1 font-light">
                  {slides[slide].desc}
                </p>
              </div>

              {/* Pagination Dots */}
              <div className="flex gap-1.5 items-center flex-shrink-0 self-end sm:self-auto">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSlide(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      slide === i ? "w-6 bg-[#06b6d4]" : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 sm:mt-8 text-center italic text-[#a1a1a1] leading-relaxed text-xs sm:text-sm px-2">
          SkyAI Automation provides education and tools. Results depend on your own effort and vary from person to person — we don&apos;t promise any specific income or outcome.
        </p>

      </div>
    </section>
  );
}
