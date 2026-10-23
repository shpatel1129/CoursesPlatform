"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, CheckCircle2 } from "lucide-react";

export interface TrackItem {
  number: string;
  title: string;
  tier: "Core" | "Elite";
  lessonsCount: number;
  duration: string;
  summary: string;
  highlights: string[];
}

const soloneurTracks: TrackItem[] = [
  {
    number: "01",
    title: "Niche clarity & market positioning",
    tier: "Core",
    lessonsCount: 6,
    duration: "2h 45m",
    summary: "Discover your high-margin sweet spot, identify underserved problems, and build an irresistible unique value proposition using proprietary AI market research prompts.",
    highlights: ["Audience persona extraction", "Competitor gap radar", "High-ticket positioning matrix"],
  },
  {
    number: "02",
    title: "Build digital products & create backend systems",
    tier: "Core",
    lessonsCount: 8,
    duration: "3h 20m",
    summary: "Architect high-converting digital products, templates, notion hubs, or mini-masterclasses. Set up Stripe, Razorpay, automated receipting, and member delivery.",
    highlights: ["Notion & Gumroad system setup", "Automated checkout pipeline", "Zero-refund delivery structures"],
  },
  {
    number: "03",
    title: "UGC, product videos & your AI influencer",
    tier: "Core",
    lessonsCount: 7,
    duration: "3h 10m",
    summary: "Produce high-converting short-form videos and hyper-realistic AI influencer assets without filming your face every single day. Master viral scriptwriting hooks.",
    highlights: ["Midjourney visual generation", "CapCut viral sequencing", "Automated short-form clipping"],
  },
  {
    number: "04",
    title: "AI avatar & voice cloning (HeyGen + ElevenLabs)",
    tier: "Core",
    lessonsCount: 9,
    duration: "4h 05m",
    summary: "Create your personal AI digital twin. Clone your voice in multiple languages, sync lip movements flawlessly, and produce 30 days of training videos in under 2 hours.",
    highlights: ["ElevenLabs studio voice tuning", "HeyGen custom avatar creation", "Multi-language audio dubbed workflows"],
  },
  {
    number: "05",
    title: "AI voice-calling agents & automations",
    tier: "Elite",
    lessonsCount: 11,
    duration: "4h 45m",
    summary: "Deploy voice agents (Bland AI, Vapi, Retell) that pick up outbound and inbound phone calls, qualify customer leads, handle objections in real-time, and book appointments directly on your calendar.",
    highlights: ["Real-time telephony setup", "Dynamic objection handling scripts", "Calendar auto-synced webhooks"],
  },
  {
    number: "06",
    title: "Websites & apps without touching code",
    tier: "Elite",
    lessonsCount: 10,
    duration: "4h 15m",
    summary: "Build world-class landing pages, member portals, and web tools using modern no-code builders (Next.js, Framer, Webflow, Lovable, v0). Look like an enterprise brand on day one.",
    highlights: ["Framer luxury micro-interactions", "Custom domain DNS setup", "Conversion-optimized layout templates"],
  },
  {
    number: "07",
    title: "The Lead Machine & Meta Ads",
    tier: "Elite",
    lessonsCount: 12,
    duration: "5h 30m",
    summary: "Stop relying on cold DM hope. Run profitable paid ad campaigns on Instagram and Facebook that acquire targeted leads at scale with positive day-zero ROAS.",
    highlights: ["CBO campaign structuring", "AI creative testing protocol", "Pixel & CAPI tracking setup"],
  },
  {
    number: "08",
    title: "Sell Anything To Anyone",
    tier: "Elite",
    lessonsCount: 8,
    duration: "3h 40m",
    summary: "The psychology of closing high-ticket deals without feeling pushy. Word-for-word call frameworks, question diagnostics, and objection decimation.",
    highlights: ["Diagnostic sales framework", "Price objection handling", "Automated contract signing flow"],
  },
  {
    number: "09",
    title: "AI Automation Mastery",
    tier: "Elite",
    lessonsCount: 14,
    duration: "6h 10m",
    summary: "Connect your forms, databases, CRM, notifications, and AI agents into fully autonomous loops that run your business 24/7 while you sleep.",
    highlights: ["Make.com complex webhook loops", "OpenAI Assistant API integration", "Auto-reporting dashboards"],
  },
  {
    number: "10",
    title: "Create AI Employees",
    tier: "Elite",
    lessonsCount: 9,
    duration: "4h 00m",
    summary: "Build specialized AI employees: a 24/7 researcher, a customer support agent, a copywriter, and a QA auditor that execute tasks autonomously.",
    highlights: ["CrewAI & LangChain architecture", "System role prompting templates", "Autonomous tool execution"],
  },
  {
    number: "11",
    title: "YouTube Mastery",
    tier: "Elite",
    lessonsCount: 10,
    duration: "4h 50m",
    summary: "Turn YouTube into your highest-converting trust flywheel. Master title framing, thumbnail psychology, audience retention curves, and high-ticket backend funnel conversions.",
    highlights: ["CTR thumbnail design frameworks", "High-retention storytelling hooks", "Direct lead magnets setup"],
  },
  {
    number: "12",
    title: "From Zero to Launch — the complete launch guide",
    tier: "Elite",
    lessonsCount: 10,
    duration: "4h 30m",
    summary: "The 14-day launch sequence playbook. From pre-launch anticipation emails to webinar closing sequences, countdown scarcity timers, and post-launch customer onboarding.",
    highlights: ["14-day launch calendar", "High-converting email sequences", "Live cohort launch dashboard"],
  },
];

export default function CurriculumTracksSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleTrack = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#06b6d4]/[0.05] rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#f5f5f5] text-balance">
            A curriculum, not a <span className="text-[#06b6d4]">content dump</span>.
          </h2>

          <p className="mt-6 text-lg text-[#a1a1a1] max-w-2xl font-light">
            Twelve tracks in all. Core covers the first four; Elite unlocks all twelve.
          </p>
        </div>

        {/* Tracks Accordion */}
        <div className="divide-y divide-white/5 border-t border-b border-white/5">
          {soloneurTracks.map((track, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={track.number} className="group transition-colors">
                <button
                  type="button"
                  onClick={() => toggleTrack(idx)}
                  className="w-full py-6 flex items-center justify-between gap-4 text-left cursor-pointer transition-all hover:opacity-90"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    {/* Number in Electric Cyan Tabular Font */}
                    <span className="font-display text-sm sm:text-base text-[#06b6d4] tabular-nums w-7 sm:w-8 flex-shrink-0">
                      {track.number}
                    </span>

                    {/* Track Title */}
                    <span className={`font-display text-base sm:text-xl transition-colors truncate sm:text-wrap ${
                      isOpen ? "text-[#06b6d4]" : "text-[#f5f5f5] group-hover:text-[#06b6d4]"
                    }`}>
                      {track.title}
                    </span>

                    {/* Tier Tag */}
                    {track.tier === "Elite" && (
                      <span className="border border-[#06b6d4]/40 text-[10px] uppercase tracking-[0.2em] text-[#06b6d4] px-2 py-0.5 rounded-full flex-shrink-0 bg-[#06b6d4]/[0.05]">
                        Elite
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <ChevronDown
                      className={`w-4 h-4 text-[#a1a1a1] transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#06b6d4]" : "group-hover:text-white"
                      }`}
                    />
                  </div>
                </button>

                {/* Collapsible Details */}
                {isOpen && (
                  <div className="pb-6 pl-11 sm:pl-14 pr-4 text-sm text-[#a1a1a1] leading-relaxed transition-all animate-fadeIn">
                    <p className="mb-4 text-[#f5f5f5]/90 font-light">
                      {track.summary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-white/5 mb-4">
                      {track.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#a1a1a1]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#06b6d4] flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#a1a1a1]/70 pt-2">
                      <span>{track.lessonsCount} focused modules · {track.duration} total run time</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
