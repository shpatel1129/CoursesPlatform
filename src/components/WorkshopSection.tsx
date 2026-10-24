"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Bot, MessageSquare, Monitor, Settings } from "lucide-react";

export default function WorkshopSection() {
  return (
    <section id="workshop" className="py-16 sm:py-24 relative bg-[#0c0c0c]/80 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#06b6d4]/[0.06] rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Workshop Media Frame) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-[#06b6d4]/30 bg-[#0a0a0a] shadow-[0_0_60px_-20px_rgba(6,182,212,0.35)] group">
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                  alt="Live AI Masterclass — Learn AI Skills. Turn Them Into Income in 2026."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent opacity-80" />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0a0a0a]/90 text-[#06b6d4] border border-[#06b6d4]/30 backdrop-blur-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
                    Live Workshop
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Copy from user's image */}
          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/[0.08] px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#06b6d4] mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
              LIVE AI MASTERCLASS
            </div>

            {/* Headline matching image */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] sm:leading-[1.08] tracking-tight text-[#f5f5f5] break-words">
              Learn AI Skills.<br />
              <span className="text-[#06b6d4]">Turn Them Into<br />
              Income</span> in 2026.
            </h2>

            {/* Primary description */}
            <p className="mt-4 sm:mt-5 text-[#a1a1a1] leading-relaxed text-sm sm:text-base font-light">
              Discover how to build AI agents, chatbots, websites and powerful automation systems — and learn how these skills can become valuable services businesses need.
            </p>

            {/* Highlighted box with Zap icon */}
            <div className="mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-[#0a0a0a]/90 border border-[#06b6d4]/25 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 shadow-lg w-full">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 flex items-center justify-center flex-shrink-0 text-[#06b6d4]">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-[#06b6d4]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#f5f5f5]">
                  No vague theory. No hidden steps.
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-[#a1a1a1] leading-relaxed font-light">
                  Watch me build real AI solutions LIVE, step by step, and see the tools, workflows and processes behind how they work.{" "}
                  <span className="text-[#06b6d4] font-medium">Everything explained transparently</span>.
                </p>
              </div>
            </div>

            {/* 4 Live Build Feature Badges: 2 cols on mobile, 4 cols on sm+ */}
            <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 text-center w-full pt-1">
              {/* 1. AI Agents */}
              <div className="flex flex-col items-center p-2.5 sm:p-1 rounded-xl bg-[#0e0e0e]/50 sm:bg-transparent border border-white/5 sm:border-transparent">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#06b6d4] mb-2 shadow-sm">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs font-semibold text-[#f5f5f5]">AI Agents</span>
                <span className="text-[10px] text-[#a1a1a1] mt-0.5 font-light">(Live Build)</span>
              </div>

              {/* 2. Chatbots */}
              <div className="flex flex-col items-center p-2.5 sm:p-1 rounded-xl bg-[#0e0e0e]/50 sm:bg-transparent border border-white/5 sm:border-transparent">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#06b6d4] mb-2 shadow-sm">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs font-semibold text-[#f5f5f5]">Chatbots</span>
                <span className="text-[10px] text-[#a1a1a1] mt-0.5 font-light">(Live Build)</span>
              </div>

              {/* 3. Websites */}
              <div className="flex flex-col items-center p-2.5 sm:p-1 rounded-xl bg-[#0e0e0e]/50 sm:bg-transparent border border-white/5 sm:border-transparent">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#06b6d4] mb-2 shadow-sm">
                  <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs font-semibold text-[#f5f5f5]">Websites</span>
                <span className="text-[10px] text-[#a1a1a1] mt-0.5 font-light">(Live Build)</span>
              </div>

              {/* 4. Automations */}
              <div className="flex flex-col items-center p-2.5 sm:p-1 rounded-xl bg-[#0e0e0e]/50 sm:bg-transparent border border-white/5 sm:border-transparent">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#06b6d4] mb-2 shadow-sm">
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs font-semibold text-[#f5f5f5]">Automations</span>
                <span className="text-[10px] text-[#a1a1a1] mt-0.5 font-light">(Live Build)</span>
              </div>
            </div>

            {/* Practical workshop note */}
            <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-[#a1a1a1] leading-relaxed font-light">
              A practical, live workshop for anyone ready to explore the AI opportunity, learn in-demand skills and discover how to turn what you learn into income opportunities.
            </p>

            {/* Pricing Section */}
            <div className="mt-5 sm:mt-6 flex items-baseline gap-2">
              <span className="font-display text-3xl sm:text-5xl font-bold text-[#f5f5f5]">₹999</span>
              <span className="text-xs sm:text-sm text-[#a1a1a1] font-light">/ seat</span>
            </div>
            <p className="mt-1 text-xs text-[#a1a1a1]">Inclusive of 18% GST</p>

            {/* Register Button */}
            <div className="mt-6 w-full">
              <Link
                href="#apply"
                className="w-full inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap cursor-pointer rounded-lg text-sm sm:text-base font-semibold bg-[#06b6d4] text-[#0a0a0a] shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:bg-[#38bdf8] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(6,182,212,0.7)] transition-all duration-200 h-12 sm:h-13 px-6 sm:px-8 py-3 text-center"
              >
                <span>Register for the Live Workshop</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
