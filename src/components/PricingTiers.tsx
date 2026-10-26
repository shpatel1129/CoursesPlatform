"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { FadeIn, FadeInScale, TiltCard3D, Magnetic } from "./MotionWrapper";
import { motion, AnimatePresence } from "motion/react";

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
    <section id="pricing" className="py-16 sm:py-24 bg-[#FAF5EB] relative border-t border-[#E8CC9D]/50 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-[#F5BD4A]/[0.12] rounded-full blur-[160px] pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <FadeIn delay={0.1} yOffset={16}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8CC9D] bg-[#FFFCF7] px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#925B0A] font-semibold mb-4 shadow-sm hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-3.5 h-3.5 text-[#D99A19]" />
              <span>Flagship Mentorship</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} yOffset={20}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight text-[#161616] break-words">
              SKY Agentic AI <span className="bg-gradient-to-r from-[#925B0A] via-[#D99A19] to-[#F5BD4A] bg-clip-text text-transparent">Mentorship</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} yOffset={16}>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#555555] max-w-xl mx-auto font-light leading-relaxed">
              A structured 60-day roadmap to build practical AI systems and acquire high-paying clients.
            </p>
          </FadeIn>
        </div>

        {/* Single Featured Card (Matching PPT Image - Compact Size) with 3D Tilt and Border Beam */}
        <FadeInScale delay={0.2} duration={0.65}>
          <TiltCard3D maxTilt={6} scale={1.015} glare={true} className="max-w-2xl mx-auto">
            <div 
              className="border-beam-container relative w-full rounded-2xl sm:rounded-3xl bg-[#FFFCF7] text-center backdrop-blur-xl p-5 sm:p-8 md:p-10 border-2 border-[#E8CC9D] shadow-[0_15px_40px_-12px_rgba(217,154,25,0.16)] hover:shadow-[0_25px_65px_-10px_rgba(217,154,25,0.28)] transition-all duration-500 overflow-hidden animate-card-glow"
            >
              {/* Subtle interior gold curve glow */}
              <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#F5BD4A]/15 via-[#E8CC9D]/10 to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                {/* INTRODUCING */}
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-bold text-[#925B0A] mb-2 sm:mb-3">
                  INTRODUCING
                </div>

                {/* SKY */}
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#925B0A] via-[#D99A19] to-[#F5BD4A] bg-clip-text text-transparent tracking-tight leading-none break-words">
                  SKY
                </h3>
                
                {/* AGENTIC AI */}
                <h4 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#161616] tracking-tight leading-tight mt-1 break-words">
                  AGENTIC AI
                </h4>

                {/* MENTORSHIP PROGRAM */}
                <div className="text-[11px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.24em] font-bold text-[#925B0A] mt-1.5 sm:mt-2">
                  MENTORSHIP PROGRAM
                </div>

                {/* Description matching PPT */}
                <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-[#161616] leading-relaxed max-w-lg mx-auto font-normal">
                  A 60-day immersive experience where you will learn how to build a{" "}
                  <strong className="text-[#925B0A] font-bold">profitable AI-powered business</strong>{" "}
                  from scratch even if you have never made money online before.
                </p>

                {/* 60 DAYS • 8 WEEKS Badge with gentle floating motion */}
                <div className="mt-5 sm:mt-6 inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#FAF5EB] border border-[#E8CC9D] text-[#925B0A] font-bold text-xs tracking-wider uppercase shadow-sm animate-float">
                  <Zap className="w-3.5 h-3.5 fill-[#D99A19] text-[#D99A19]" />
                  <span>60 DAYS • 8 WEEKS</span>
                </div>

              </div>
            </div>
          </TiltCard3D>
        </FadeInScale>

        {/* Pricing revealed note banner & Register CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <FadeIn delay={0.1} yOffset={16}>
            <p className="font-display text-xl sm:text-2xl md:text-3xl leading-snug font-bold text-[#161616]">
              Pricing revealed <span className="text-[#925B0A]">live</span> in the webinar.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} yOffset={20}>
            <div className="mt-5 sm:mt-6 flex justify-center">
              <Magnetic distance={0.25}>
                <Link
                  href="#apply"
                  className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap cursor-pointer rounded-md font-semibold bg-[#D99A19] text-[#FFFCF7] shadow-[0_4px_16px_rgba(217,154,25,0.35)] hover:bg-[#925B0A] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(146,91,10,0.45)] active:scale-95 transition-all duration-200 h-12 sm:h-13 px-6 sm:px-10 text-sm sm:text-base text-center"
                >
                  <span>Register for the webinar</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </Link>
              </Magnetic>
            </div>
          </FadeIn>
        </div>

        {/* Program Preview Auto-Slide Carousel */}
        <FadeIn delay={0.25} yOffset={24} className="mt-12 sm:mt-14">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#925B0A] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D99A19] live-ripple-dot animate-ping" />
              PROGRAM PREVIEW
            </span>
            <span className="text-[10px] font-mono text-[#777777]">{slide + 1} / {slides.length}</span>
          </div>

          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-full overflow-hidden rounded-2xl border-2 border-[#E8CC9D] bg-[#FFFCF7] shadow-[0_15px_45px_-15px_rgba(217,154,25,0.18)] hover:shadow-[0_20px_55px_-12px_rgba(217,154,25,0.26)] transition-all duration-500"
          >
            {/* Slide Image Box */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FAF5EB]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={slide} 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[slide].image}
                    alt={slides[slide].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-contain sm:object-cover object-center transition-all duration-700 group-hover:scale-[1.01]"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Top Floating Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold bg-[#FFFCF7]/95 backdrop-blur-md text-[#925B0A] border border-[#E8CC9D] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D99A19] animate-pulse" />
                  {slides[slide].tag}
                </span>
              </div>

              {/* Prev / Next Arrows with micro hover scale */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                aria-label="Previous slide"
                className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFFCF7]/90 hover:bg-[#D99A19] text-[#161616] hover:text-[#FFFCF7] border border-[#E8CC9D] hover:border-[#D99A19] flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-md"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                aria-label="Next slide"
                className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFFCF7]/90 hover:bg-[#D99A19] text-[#161616] hover:text-[#FFFCF7] border border-[#E8CC9D] hover:border-[#D99A19] flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-md"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>

            {/* Bottom Info Bar & Pagination Dots */}
            <div className="p-4 sm:p-5 bg-[#FFFCF7] border-t border-[#E8CC9D]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="min-w-0 flex-1">
                <h4 className="font-display text-base sm:text-lg md:text-xl font-bold text-[#161616] truncate">
                  {slides[slide].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#555555] mt-0.5 line-clamp-1 font-light">
                  {slides[slide].desc}
                </p>
              </div>

              {/* Pagination Dots with smooth width transition */}
              <div className="flex gap-1.5 items-center flex-shrink-0 self-end sm:self-auto">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      slide === i ? "w-6 bg-[#D99A19]" : "w-2 bg-[#E8CC9D] hover:bg-[#D99A19]/60"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Disclaimer */}
        <p className="mt-6 sm:mt-8 text-center italic text-[#777777] leading-relaxed text-xs sm:text-sm px-2">
          SKY AI Automation provides education and tools. Results depend on your own effort and vary from person to person we don&apos;t promise any specific income or outcome.
        </p>

      </div>
    </section>
  );
}
