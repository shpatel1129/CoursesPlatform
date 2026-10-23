"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function WorkshopSection() {
  return (
    <section id="workshop" className="py-24 relative bg-[#0c0c0c]/80 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-[#06b6d4]/[0.06] rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (3 cols): Workshop Media Frame */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border border-[#06b6d4]/30 bg-[#0a0a0a] shadow-[0_0_60px_-20px_rgba(6,182,212,0.35)] group">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                  alt="Soloneur Workshop — Building 5 Income Streams using AI in 2026"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0a0a0a]/90 text-[#06b6d4] border border-[#06b6d4]/30 backdrop-blur-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-ping" />
                    Live Session
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (2 cols): Exact Soloneur Copy */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/[0.08] px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-[#06b6d4] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
              Live workshop
            </div>

            <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-[#f5f5f5] text-balance">
              Building <span className="text-[#06b6d4]">5 income streams</span> using AI in 2026.
            </h2>

            <p className="mt-6 text-[#a1a1a1] leading-relaxed text-sm sm:text-base font-light">
              A live blueprint session with Tushar &amp; Abhishek. Walk out with the exact 5 AI-powered income streams a solo builder can start this year — and the order to build them in.
            </p>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-4xl md:text-5xl font-bold text-[#f5f5f5]">₹999</span>
              <span className="text-sm text-[#a1a1a1]">/ seat</span>
            </div>

            <p className="mt-2 text-xs text-[#a1a1a1]">Inclusive of 18% GST</p>
            <p className="mt-3 text-xs text-[#a1a1a1]/80 leading-relaxed">
              Introduced by a Soloneur Growth Partner? Ask them for their limited-time invite price.
            </p>

            <div className="mt-8 w-full sm:w-auto">
              <Link
                href="#apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md text-base font-semibold bg-[#06b6d4] text-[#0a0a0a] shadow-[0_0_0_0_rgba(6,182,212,0)] hover:bg-[#38bdf8] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(6,182,212,0.65)] transition-all duration-200 h-13 px-10 py-3.5"
              >
                <span>Register for the workshop</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
