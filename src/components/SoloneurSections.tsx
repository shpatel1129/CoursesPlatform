"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Compass, 
  Users, 
  Sparkles, 
  TrendingUp, 
  Brain, 
  FileText, 
  Target, 
  ShieldAlert, 
  Handshake, 
  Send, 
  LayoutDashboard, 
  Check, 
  ArrowUpRight,
  ChevronDown
} from "lucide-react";

export function SoloneurMetricBar() {
  return (
    <section className="border-y border-white/5 bg-[#0c0c0c]/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto py-4 sm:py-6 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center tracking-wider uppercase">
          <div className="w-full sm:w-auto py-1 sm:py-0 px-6 sm:px-8 lg:px-10">
            <span className="text-xs sm:text-sm font-semibold text-[#f5f5f5] tracking-wider">60 DAYS</span>
          </div>
          <div className="w-full sm:w-auto pt-2.5 sm:pt-0 sm:py-0 px-6 sm:px-8 lg:px-10">
            <span className="text-xs sm:text-sm font-semibold text-[#f5f5f5] tracking-wider">8 WEEKS</span>
          </div>
          <div className="w-full sm:w-auto pt-2.5 sm:pt-0 sm:py-0 px-6 sm:px-8 lg:px-10">
            <span className="text-xs sm:text-sm font-semibold text-[#06b6d4] tracking-wider">LIVE GUIDANCE + COMMUNITY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
const story = [
  "Over the last 5 years in the online industry, I've learned a lot, experimented with different things, and understood how online opportunities actually work.",
  "When I started exploring AI more closely, I felt it was something more people should get the chance to understand and learn practically.",
  "I didn't want to build just another course. I wanted to create a space where people could learn with me live, ask questions, and actually see how AI solutions are built.",
  "I want to share what I've learned through my own experience and help others gain the confidence to start building something of their own.",
];
export function SoloneurAboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-center text-[#f5f5f5]">
          Why I Started SKY
        </h2>
 
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
          {/* Story */}
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-[#a1a1a1] leading-relaxed font-light">
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
 
            <p className="mt-6 sm:mt-8 text-[#06b6d4] font-display text-base sm:text-lg">
              — Shrikant Yadav
            </p>
          </div>
 
          {/* Shrikant Yadav Card */}
          <div className="md:col-span-2 order-1 md:order-2 w-full max-w-xs mx-auto md:max-w-none">
            <div className="group block rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] overflow-hidden transition-all hover:border-[#06b6d4]/40 hover:shadow-[0_0_40px_-15px_rgba(6,182,212,0.4)]">
              <div className="aspect-[4/5] overflow-hidden bg-[#0a0a0a] relative">
                <Image
                  src="/images/Shikant.PNG"
                  alt="Shrikant Yadav"
                  fill
                  sizes="(min-width: 768px) 320px, 80vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="font-display text-xl sm:text-2xl text-[#f5f5f5]">Shrikant Yadav</div>
                <div className="text-xs sm:text-sm text-[#a1a1a1] mt-1">Founder, SKY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SoloneurWhatYouLearnSection() {
  const pillars = [
    {
      icon: <Compass className="h-6 w-6 sm:h-7 sm:w-7 text-[#06b6d4]" />,
      title: "Find your niche & build what's yours",
      description: "Get clarity on what you actually want to build, tune out everyone else's opinions, and learn to create digital products that are genuinely your own.",
    },
    {
      icon: <Users className="h-6 w-6 sm:h-7 sm:w-7 text-[#06b6d4]" />,
      title: "Build your brand & attract an audience",
      description: "Grow a personal brand, pull in an audience that trusts you, and turn attention into leads.",
    },
    {
      icon: <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-[#06b6d4]" />,
      title: "Use AI as your unfair advantage",
      description: "Wield AI tools the right way to move faster, build more, and outpace people with far bigger teams.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-[#06b6d4]" />,
      title: "Sell, close, and scale",
      description: "The skills to turn interest into customers — and a small start into something that grows.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0c0c0c]/70 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center max-w-3xl mx-auto leading-tight text-[#f5f5f5]">
          What you&apos;ll learn to do.
        </h2>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {pillars.map((item, index) => (
            <div 
              key={index} 
              className="h-full p-5 sm:p-8 rounded-xl border border-white/5 bg-[#111111]/92 backdrop-blur-sm hover:border-[#06b6d4]/30 transition-colors"
            >
              {item.icon}
              <h3 className="mt-4 sm:mt-6 font-display text-lg sm:text-xl md:text-2xl text-[#f5f5f5]">{item.title}</h3>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#a1a1a1] leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SoloneurToolsSection() {
  const liveTools = [
    {
      icon: <Brain className="h-4 w-4" />,
      title: "Council of Mentors",
      tag: "Live tool",
      isElite: false,
      description: "Strategic guidance drawn from history's greatest minds in business, persuasion, and human nature. Bring a real decision, get a real perspective.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FileText className="h-4 w-4" />,
      title: "Vyas — the viral script writer",
      tag: "Live tool",
      isElite: false,
      description: "Turns a rough idea into a sharp, ready-to-record script in your voice.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Target className="h-4 w-4" />,
      title: "Content Compass",
      tag: "Live tool",
      isElite: true,
      description: "Direction when you're stuck: ideas, angles, and hooks mapped to what you're building.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <ShieldAlert className="h-4 w-4" />,
      title: "Objection Crusher",
      tag: "Live tool",
      isElite: true,
      description: "Handle every 'no' before it costs you. Turns hesitation into conversion.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const inDevTools = [
    {
      icon: <Handshake className="h-6 w-6 text-[#06b6d4]" />,
      title: "AI Co-founder",
      description: "A thinking partner that helps you plan, decide, and pressure-test your moves — like a co-founder on call.",
    },
    {
      icon: <Send className="h-6 w-6 text-[#06b6d4]" />,
      title: "OutreachOS",
      description: "Your outreach engine: find, message, and follow up with leads at scale without losing the personal touch.",
    },
    {
      icon: <LayoutDashboard className="h-6 w-6 text-[#06b6d4]" />,
      title: "Soloneur Command Center",
      description: "The cockpit for your whole business — everything in one place so you always know your next move.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-[#06b6d4]" />,
      title: "Free templates & cheatsheets",
      description: "Ready-made resources you can use the moment you need them.",
    },
  ];

  return (
    <section id="tools" className="py-24 bg-[#0c0c0c]/70 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#06b6d4]/20 bg-[#06b6d4]/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-[#06b6d4]">
            Built into the membership
          </div>
          <h2 className="mt-6 font-display text-3xl md:text-5xl leading-tight text-balance text-[#f5f5f5]">
            Tools that <span className="text-[#06b6d4]">think</span> with you.
          </h2>
          <p className="mt-6 text-lg text-[#a1a1a1] font-light">
            Soloneur isn&apos;t just lessons. It&apos;s a toolkit built to move you from &quot;I learned it&quot; to &quot;I did it.&quot;
          </p>
        </div>

        {/* Live Tools Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {liveTools.map((tool, idx) => (
            <div 
              key={idx}
              className="group block overflow-hidden rounded-lg border border-white/10 bg-[#101010]/95 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-[#06b6d4]/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black/50">
                <Image 
                  src={tool.image} 
                  alt={tool.title} 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#06b6d4]/20 bg-[#06b6d4]/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#06b6d4]">
                      {tool.icon} {tool.tag}
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <h3 className="font-display text-2xl leading-tight text-[#f5f5f5]">{tool.title}</h3>
                      {tool.isElite && (
                        <span className="border border-[#06b6d4]/40 text-[10px] uppercase tracking-[0.2em] text-[#06b6d4] px-2 py-0.5 rounded-full">
                          Elite
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 text-[#06b6d4] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#a1a1a1] font-light">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* In Development Tools */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {inDevTools.map((tool, idx) => (
            <div 
              key={idx} 
              className="h-full rounded-lg border border-white/5 bg-[#111111]/90 p-7 transition-colors hover:border-[#06b6d4]/25"
            >
              {tool.icon}
              <div className="mt-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#a1a1a1]">
                In development
              </div>
              <h3 className="mt-5 font-display text-lg leading-snug text-[#f5f5f5]">{tool.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#a1a1a1] font-light">{tool.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-[#a1a1a1]/70">
          These tools are in development and are not included in the current membership. Availability and timelines are not guaranteed.
        </p>
      </div>
    </section>
  );
}

export function SoloneurTierComparisonSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-5xl text-center leading-tight text-[#f5f5f5]">
          What&apos;s in each <span className="text-[#06b6d4]">tier</span>.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Core Tier */}
          <div>
            <h3 className="font-display text-2xl text-[#06b6d4]">Core</h3>
            <ul className="mt-8 space-y-5">
              {[
                "The Core curriculum — 4 course tracks",
                "2 live trainings every week",
                "Council of Mentors + Vyas",
                "Community + support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 py-1">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#06b6d4]/40">
                    <Check className="h-3.5 w-3.5 text-[#06b6d4]" />
                  </span>
                  <span className="text-base md:text-lg text-[#f5f5f5]/95 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Elite Tier */}
          <div>
            <h3 className="font-display text-2xl text-[#06b6d4]">Elite</h3>
            <ul className="mt-8 space-y-5">
              {[
                "The complete curriculum — all 12 course tracks",
                "2 live trainings every week",
                "All 4 AI tools — Council, Vyas, Content Compass, Objection Crusher",
                "Community + support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 py-1">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#06b6d4]/40">
                    <Check className="h-3.5 w-3.5 text-[#06b6d4]" />
                  </span>
                  <span className="text-base md:text-lg text-[#f5f5f5]/95 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SoloneurWeeklyLiveSection() {
  return (
    <section className="py-24 bg-[#0c0c0c]/70 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#f5f5f5]">
            It&apos;s <span className="text-[#06b6d4]">live</span>. Every week.
          </h2>
          <p className="mt-6 text-lg text-[#a1a1a1] font-light">
            Two live sessions a week — one to build, one to reset. You&apos;re never doing this on your own time, in the dark.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Solothon */}
          <div className="h-full rounded-lg border border-white/5 bg-[#111111]/92 backdrop-blur-sm overflow-hidden">
            <div className="aspect-[16/10] overflow-hidden border-b border-white/5 relative">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Solothon live training" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-8 sm:p-10">
              <div className="text-xs uppercase tracking-[0.25em] text-[#06b6d4] font-semibold">Tuesdays</div>
              <h3 className="mt-4 font-display text-3xl text-[#f5f5f5]">Solothon</h3>
              <p className="mt-5 text-[#a1a1a1] leading-relaxed font-light">
                A live build sprint. We implement together in real time — you don&apos;t just learn the lesson, you ship the thing while we&apos;re on the call with you.
              </p>
            </div>
          </div>

          {/* Solignment */}
          <div className="h-full rounded-lg border border-white/5 bg-[#111111]/92 backdrop-blur-sm overflow-hidden">
            <div className="aspect-[16/10] overflow-hidden border-b border-white/5 relative">
              <Image 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" 
                alt="Solignment live training" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-8 sm:p-10">
              <div className="text-xs uppercase tracking-[0.25em] text-[#06b6d4] font-semibold">Wednesdays</div>
              <h3 className="mt-4 font-display text-3xl text-[#f5f5f5]">Solignment</h3>
              <p className="mt-5 text-[#a1a1a1] leading-relaxed font-light">
                A weekly mindset reset. We work on the inner game — clearing the doubt, the distraction, and the noise that stops most people from finishing what they start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SoloneurCommunitySection() {
  return (
    <section id="community" className="py-16 sm:py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-[#f5f5f5] break-words">
          Solo doesn&apos;t mean <span className="text-[#06b6d4]">alone</span>.
        </h2>

        <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-[#a1a1a1] leading-relaxed font-light">
          The hardest part of building something yourself is doing it in silence. Inside Soloneur you&apos;re surrounded by people at every stage — asking questions, sharing wins, and keeping each other moving. The courses teach you. The community keeps you going.
        </p>

        <div className="mt-8 sm:mt-10">
          <a 
            href="https://chat.whatsapp.com/CvHTLno2Eme1Fs3nuC4vhH" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-md font-medium border border-[#06b6d4]/40 text-[#f5f5f5] hover:border-[#06b6d4] hover:text-[#06b6d4] bg-transparent hover:bg-[#06b6d4]/[0.05] transition-colors h-11 px-8 text-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse flex-shrink-0" />
            <span>Join the community</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function SoloneurFAQSection() {
  const [openId, setOpenId] = useState<number | null>(0);

  const soloneurFaqs = [
    {
      q: "Is this for complete beginners?",
      a: "Yes. The curriculum starts at module one and assumes no prior experience. You bring the willingness to do the work.",
    },
    {
      q: "How much time do I need to put in?",
      a: "It's self-paced, but the people who get the most out of it treat it like a real commitment — a few focused hours a week, consistently.",
    },
    {
      q: "Do I need any special tools or budget to start?",
      a: "No. You start with the curriculum and the built-in AI tools. Everything you need to learn is included.",
    },
    {
      q: "Is there a refund policy?",
      a: "Yes — refunds are available within 72 hours of purchase, provided you haven't attended a live session. See our Refund & Cancellation Policy in the footer for full details before you enrol.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f5f5] tracking-tight mb-10 sm:mb-14 text-center break-words">
          Frequently asked questions.
        </h2>

        <div className="divide-y divide-white/5 border-t border-b border-white/5">
          {soloneurFaqs.map((faq, idx) => {
            const isOpen = openId === idx;
            return (
              <div key={idx} className="group">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : idx)}
                  className="w-full py-4 sm:py-6 flex items-start sm:items-center justify-between gap-3 sm:gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base md:text-lg font-medium transition-colors break-words ${
                    isOpen ? "text-[#06b6d4]" : "text-[#f5f5f5]"
                  }`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-[#a1a1a1] transition-transform duration-200 flex-shrink-0 mt-0.5 sm:mt-0 ${
                    isOpen ? "rotate-180 text-[#06b6d4]" : ""
                  }`} />
                </button>
                {isOpen && (
                  <div className="pb-5 sm:pb-6 text-xs sm:text-sm md:text-base text-[#a1a1a1] leading-relaxed font-light animate-fadeIn">
                    <p>{faq.a}</p>
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
