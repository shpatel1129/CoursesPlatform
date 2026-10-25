"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface WeekTopic {
  label: string;
  content: string;
}

export interface CurriculumWeek {
  week: string;
  title: string;
  topics: WeekTopic[];
}

const curriculumWeeks: CurriculumWeek[] = [
  {
    week: "WEEK 1",
    title: "AI AUTOMATION FUNDAMENTALS",
    topics: [
      { label: "Topic 1", content: "COMPLETE ROADMAP AND FUNDAMENTAL OF AI AUTOMATION" },
      { label: "Topic 2", content: "HOW TO HOST N8N AND GOOGLE TOOL CONNECTION" },
      { label: "Topic 3", content: "BUILDING YOUR FIRST AGENT" },
      { label: "Topic 4", content: "STRATEGY TO MAKE ANY AUTOMATION AND BUILDING YOUR FIRST AGENT" },
    ],
  },
  {
    week: "WEEK 2",
    title: "AI VOICE CALLING AGENTS",
    topics: [
      { label: "Topic 1", content: "CALLING AGENT (FUNDAMENTAL OF CALLING AGENT)" },
      { label: "Topic 2", content: "BUILDING YOUR FIRST CALLING AGENT AND UNDERSTANDING CALL FLOWS" },
      { label: "Topic 3", content: "AUTOMATING WHOLE CALLING AGENT PROCESS" },
      { label: "Topic 4", content: "CALLING FOLLOW UP AUTOMATION & N8N CONNECTION" },
    ],
  },
  {
    week: "WEEK 3",
    title: "WHATSAPP AUTOMATION",
    topics: [
      { label: "Topic 1", content: "WHATSAPP CONNECTION AND TYPES OF METHODS" },
      { label: "Topic 2", content: "WHATSAPP FIRST METHOD API CONNECTION" },
      { label: "Topic 3", content: "WHATSAPP SECOND METHOD COEXISTANCE" },
      { label: "Topic 4", content: "WHATSAPP FOLLOW UP AND BULK MESSAGE" },
    ],
  },
  {
    week: "WEEK 4",
    title: "RAG, MCP & ADVANCED AGENTS",
    topics: [
      { label: "Topic 1", content: "RAG (RETRIEVAL-AUGMENTED GENERATION) AGENT + RAG WHATSAPP AGENT" },
      { label: "Topic 2", content: "MCP (MODEL CONTEXT PROTOCOL) + INSTAGRAM AGENT" },
      { label: "Topic 3", content: "PROMPTING (3 LAYER PROMPTING METHOD, AGENT FRAMEWORK PROMPTING METHOD)" },
      { label: "Topic 4", content: "MARKETING SESSION HOW TO SELL AGENT AND MAKE MONEY" },
    ],
  },
  {
    week: "WEEK 5",
    title: "CLAUDE & CLAUDE CODE AUTOMATION",
    topics: [
      { label: "Topic 1", content: "UNDERSTANDING CLAUDE AND HIS FAMILY MEMBERS" },
      { label: "Topic 2", content: "CLAUDE + N8N HOW TO MAKE AUTOMATION" },
      { label: "Topic 3", content: "CLAUDE CODE AND MAKING FIRST PROJECT" },
      { label: "Topic 4", content: "CLAUDE CODE PART 2" },
    ],
  },
  {
    week: "WEEK 6",
    title: "CLAUDE COWORK & CLIENT ACQUISITION",
    topics: [
      { label: "Topic 1", content: "CLAUDE COWORK" },
      { label: "Topic 2", content: "HOW TO FIND CLIENTS AND CLOSE IT AND MAKE MONEY" },
      { label: "Topic 3", content: "UGC ADS — CREATION, CONTENT & CLIENT DELIVERY" },
    ],
  },
  {
    week: "WEEK 7",
    title: "CLIENT ACQUISITION & SALES",
    topics: [
      { label: "Topic 1", content: "NICHE SELECTION & HIGH-TICKET POSITIONING" },
      { label: "Topic 2", content: "SERVICE PACKAGING & PRICING STRATEGY" },
      { label: "Topic 3", content: "OUTREACH PIPELINES & PROPOSALS" },
      { label: "Topic 4", content: "CLOSING CLIENTS & CONTRACT TEMPLATES" },
    ],
  },
  {
    week: "WEEK 8",
    title: "AI SERVICE BUSINESS LAUNCH",
    topics: [
      { label: "Topic 1", content: "PORTFOLIO & CASE STUDY CREATION" },
      { label: "Topic 2", content: "CLIENT ONBOARDING & DELIVERY SYSTEMS" },
      { label: "Topic 3", content: "PREPARING & OFFERING SCALABLE AI SERVICES" },
      { label: "Topic 4", content: "FULL SERVICE BUSINESS LAUNCH" },
    ],
  },
];

export default function CurriculumTracksSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleTrack = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#06b6d4]/[0.05] rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Preserved as requested) */}
        <div className="mb-10 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-[#f5f5f5] text-balance break-words">
            A curriculum, not a <span className="text-[#06b6d4]">content dump</span>.
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#a1a1a1] max-w-2xl font-light">
            60 DAYS | 8 WEEKS | LIVE GUIDANCE + COMMUNITY
          </p>
        </div>

        {/* Tracks Accordion List */}
        <div className="divide-y divide-white/5 border-t border-b border-white/5">
          {curriculumWeeks.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.week} className="group transition-colors">
                <button
                  type="button"
                  onClick={() => toggleTrack(idx)}
                  className="w-full py-4 sm:py-6 flex items-start sm:items-center justify-between gap-3 sm:gap-4 text-left cursor-pointer transition-all hover:opacity-90"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-6 min-w-0 flex-1">
                    {/* Week Label (side me week 1) */}
                    <span className="font-display text-xs sm:text-sm font-semibold tracking-wider text-[#06b6d4] flex-shrink-0 w-16 sm:w-20 pt-0.5 sm:pt-0">
                      {item.week}
                    </span>

                    {/* Title */}
                    <span className={`font-display text-sm sm:text-lg md:text-xl font-bold tracking-tight transition-colors break-words ${
                      isOpen ? "text-[#06b6d4]" : "text-[#f5f5f5] group-hover:text-[#06b6d4]"
                    }`}>
                      {item.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 mt-0.5 sm:mt-0">
                    <ChevronDown
                      className={`w-4 h-4 text-[#a1a1a1] transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#06b6d4]" : "group-hover:text-white"
                      }`}
                    />
                  </div>
                </button>

                {/* Collapsible Details: Topics 1, 2, 3, 4 from images */}
                {isOpen && (
                  <div className="pb-6 sm:pb-8 pt-1 pl-0 sm:pl-20 pr-0 sm:pr-2 space-y-2 sm:space-y-3 animate-fadeIn">
                    <div className="grid grid-cols-1 gap-2 sm:gap-2.5">
                      {item.topics.map((t, i) => (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-[#0c0c0c] border border-white/5 hover:border-[#06b6d4]/30 transition-colors"
                        >
                          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#06b6d4] flex-shrink-0 sm:w-20">
                            {t.label} :
                          </span>
                          <span className="text-xs sm:text-sm text-[#f5f5f5]/90 font-medium leading-relaxed break-words">
                            {t.content}
                          </span>
                        </div>
                      ))}
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
