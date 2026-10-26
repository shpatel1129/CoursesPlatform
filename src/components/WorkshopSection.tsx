"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Bot, MessageSquare, Monitor, Settings } from "lucide-react";
import { FadeIn, FadeInScale, TiltCard3D, Magnetic } from "./MotionWrapper";
import { motion } from "motion/react";

export default function WorkshopSection() {
  return (
    <section id="workshop" className="py-16 sm:py-24 relative bg-[#FAF5EB] border-t border-[#E8CC9D]/50 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#F5BD4A]/[0.12] rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Workshop Media Frame with 3D Tilt) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <FadeInScale duration={0.7}>
              <TiltCard3D maxTilt={9} scale={1.02} glare={true}>
                <div className="border-beam-container relative overflow-hidden rounded-2xl border-2 border-[#E8CC9D] bg-[#FAF5EB] shadow-[0_15px_40px_-10px_rgba(217,154,25,0.18)] hover:shadow-[0_25px_60px_-8px_rgba(217,154,25,0.32)] transition-all duration-500 group animate-card-glow">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src="/images/Learn AI Skills.PNG"
                      alt="Live AI Masterclass Learn AI Skills. Turn Them Into Income in 2026."
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/30 via-transparent to-transparent opacity-40 pointer-events-none" />

                    {/* Overlay Badge with animated ripple */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FFFCF7]/95 text-[#925B0A] border border-[#E8CC9D] backdrop-blur-md flex items-center gap-2 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#D99A19] live-ripple-dot animate-pulse" />
                        Live Workshop
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard3D>
            </FadeInScale>
          </div>

          {/* Right Column: Exact Copy from user's image */}
          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            
            {/* Top Pill Badge */}
            <FadeIn delay={0.1} yOffset={16}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E8CC9D] bg-[#FAF5EB] px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#925B0A] font-semibold mb-4 sm:mb-5 shadow-sm hover:scale-105 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D99A19] live-ripple-dot" />
                LIVE AI MASTERCLASS
              </div>
            </FadeIn>

            {/* Headline matching image */}
            <FadeIn delay={0.2} yOffset={20}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-[1.08] tracking-tight text-[#161616] break-words">
                Learn AI Skills.<br />
                <span className="bg-gradient-to-r from-[#925B0A] via-[#D99A19] to-[#F5BD4A] bg-clip-text text-transparent">Turn Them Into<br />
                Income</span> in 2026.
              </h2>
            </FadeIn>

            {/* Primary description */}
            <FadeIn delay={0.3} yOffset={16}>
              <p className="mt-4 sm:mt-5 text-[#555555] leading-relaxed text-sm sm:text-base font-light">
                Discover how to build AI agents, chatbots, websites and powerful automation systems and learn how these skills can become valuable services businesses need.
              </p>
            </FadeIn>

            {/* Highlighted box with Zap icon */}
            <FadeIn delay={0.35} yOffset={20} className="w-full">
              <motion.div 
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-[#FAF5EB] border border-[#E8CC9D] flex flex-col sm:flex-row items-start gap-3 sm:gap-4 shadow-sm hover:border-[#D99A19] hover:shadow-md transition-all w-full"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFFCF7] border border-[#E8CC9D] flex items-center justify-center flex-shrink-0 text-[#D99A19]">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-[#D99A19]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#161616]">
                    No vague theory. No hidden steps.
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                    Watch me build real AI solutions LIVE, step by step, and see the tools, workflows and processes behind how they work.{" "}
                    <span className="text-[#925B0A] font-medium">Everything explained transparently</span>.
                  </p>
                </div>
              </motion.div>
            </FadeIn>

            {/* 4 Live Build Feature Badges: 2 cols on mobile, 4 cols on sm+ */}
            <FadeIn delay={0.4} yOffset={20} className="w-full">
              <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 text-center w-full pt-1">
                {/* 1. AI Agents */}
                <motion.div 
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="flex flex-col items-center p-2.5 sm:p-2 rounded-xl bg-[#FAF5EB] sm:bg-transparent border border-[#E8CC9D]/50 sm:border-transparent cursor-pointer transition-all"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFFCF7] border border-[#E8CC9D] flex items-center justify-center text-[#D99A19] mb-2 shadow-sm group-hover:scale-110 transition-transform">
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#161616]">AI Agents</span>
                  <span className="text-[10px] text-[#777777] mt-0.5 font-light">(Live Build)</span>
                </motion.div>

                {/* 2. Chatbots */}
                <motion.div 
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="flex flex-col items-center p-2.5 sm:p-2 rounded-xl bg-[#FAF5EB] sm:bg-transparent border border-[#E8CC9D]/50 sm:border-transparent cursor-pointer transition-all"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFFCF7] border border-[#E8CC9D] flex items-center justify-center text-[#D99A19] mb-2 shadow-sm group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#161616]">Chatbots</span>
                  <span className="text-[10px] text-[#777777] mt-0.5 font-light">(Live Build)</span>
                </motion.div>

                {/* 3. Websites */}
                <motion.div 
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="flex flex-col items-center p-2.5 sm:p-2 rounded-xl bg-[#FAF5EB] sm:bg-transparent border border-[#E8CC9D]/50 sm:border-transparent cursor-pointer transition-all"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFFCF7] border border-[#E8CC9D] flex items-center justify-center text-[#D99A19] mb-2 shadow-sm group-hover:scale-110 transition-transform">
                    <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#161616]">Websites</span>
                  <span className="text-[10px] text-[#777777] mt-0.5 font-light">(Live Build)</span>
                </motion.div>

                {/* 4. Automations */}
                <motion.div 
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="flex flex-col items-center p-2.5 sm:p-2 rounded-xl bg-[#FAF5EB] sm:bg-transparent border border-[#E8CC9D]/50 sm:border-transparent cursor-pointer transition-all"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFFCF7] border border-[#E8CC9D] flex items-center justify-center text-[#D99A19] mb-2 shadow-sm group-hover:scale-110 transition-transform">
                    <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#161616]">Automations</span>
                  <span className="text-[10px] text-[#777777] mt-0.5 font-light">(Live Build)</span>
                </motion.div>
              </div>
            </FadeIn>

            {/* Practical workshop note */}
            <FadeIn delay={0.45} yOffset={16}>
              <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                A practical, live workshop for anyone ready to explore the AI opportunity, learn in-demand skills and discover how to turn what you learn into income opportunities.
              </p>
            </FadeIn>

            {/* Pricing Section */}
            <FadeIn delay={0.5} yOffset={16}>
              <div className="mt-5 sm:mt-6 flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-5xl font-bold text-[#161616]">₹999</span>
                <span className="text-xs sm:text-sm text-[#777777] font-light">/ seat</span>
              </div>
              <p className="mt-1 text-xs text-[#777777]">Inclusive of 18% GST</p>
            </FadeIn>

            {/* Register Button with shimmer sweep */}
            <FadeIn delay={0.55} yOffset={20} className="w-full">
              <div className="mt-6 w-full">
                <Link
                  href="#apply"
                  className="btn-shimmer w-full inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap cursor-pointer rounded-lg text-sm sm:text-base font-semibold bg-[#D99A19] text-[#FFFCF7] shadow-[0_4px_18px_rgba(217,154,25,0.35)] hover:bg-[#925B0A] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(146,91,10,0.45)] active:scale-95 transition-all duration-200 h-12 sm:h-13 px-6 sm:px-8 py-3 text-center"
                >
                  <span>Register for the Live Workshop</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </Link>
              </div>
            </FadeIn>

          </div>

        </div>
      </div>
    </section>
  );
}
