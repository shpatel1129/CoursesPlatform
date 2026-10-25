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
    <section className="border-y border-[#E8CC9D]/50 bg-[#FAF5EB]">
      <div className="max-w-4xl mx-auto py-4 sm:py-6 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#E8CC9D]/50 text-center tracking-wider uppercase">
          <div className="w-full sm:w-auto py-1 sm:py-0 px-6 sm:px-8 lg:px-10">
            <span className="text-xs sm:text-sm font-bold text-[#161616] tracking-wider">60 DAYS</span>
          </div>
          <div className="w-full sm:w-auto pt-2.5 sm:pt-0 sm:py-0 px-6 sm:px-8 lg:px-10">
            <span className="text-xs sm:text-sm font-bold text-[#161616] tracking-wider">8 WEEKS</span>
          </div>
          <div className="w-full sm:w-auto pt-2.5 sm:pt-0 sm:py-0 px-6 sm:px-8 lg:px-10">
            <span className="text-xs sm:text-sm font-bold text-[#925B0A] tracking-wider">LIVE GUIDANCE + COMMUNITY</span>
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
    <section id="about" className="py-16 sm:py-24 bg-[#FFFCF7] border-t border-[#E8CC9D]/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center text-[#161616]">
          Why I Started SKY
        </h2>
 
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
          {/* Story */}
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed font-light">
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
 
            <p className="mt-6 sm:mt-8 text-[#925B0A] font-display font-bold text-base sm:text-lg">
              — Shrikant Yadav
            </p>
          </div>
 
          {/* Shrikant Yadav Card */}
          <div className="md:col-span-2 order-1 md:order-2 w-full max-w-xs mx-auto md:max-w-none">
            <div className="group block rounded-2xl border-2 border-[#E8CC9D] bg-[#FAF5EB] overflow-hidden transition-all hover:border-[#D99A19] hover:shadow-[0_15px_35px_-10px_rgba(217,154,25,0.2)] shadow-md">
              <div className="aspect-[4/5] overflow-hidden bg-[#FAF5EB] relative">
                <Image
                  src="/images/Shikant.PNG"
                  alt="Shrikant Yadav"
                  fill
                  sizes="(min-width: 768px) 320px, 80vw"
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-5 sm:p-6 bg-[#FFFCF7]">
                <div className="font-display text-xl sm:text-2xl font-bold text-[#161616]">Shrikant Yadav</div>
                <div className="text-xs sm:text-sm text-[#925B0A] font-medium mt-1">Founder, SKY</div>
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
      icon: <Compass className="h-6 w-6 sm:h-7 sm:w-7 text-[#D99A19]" />,
      title: "Find your niche & build what's yours",
      description: "Get clarity on what you actually want to build, tune out everyone else's opinions, and learn to create digital products that are genuinely your own.",
    },
    {
      icon: <Users className="h-6 w-6 sm:h-7 sm:w-7 text-[#D99A19]" />,
      title: "Build your brand & attract an audience",
      description: "Grow a personal brand, pull in an audience that trusts you, and turn attention into leads.",
    },
    {
      icon: <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-[#D99A19]" />,
      title: "Use AI as your unfair advantage",
      description: "Wield AI tools the right way to move faster, build more, and outpace people with far bigger teams.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-[#D99A19]" />,
      title: "Sell, close, and scale",
      description: "The skills to turn interest into customers — and a small start into something that grows.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF5EB] border-t border-[#E8CC9D]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto leading-tight text-[#161616]">
          What you&apos;ll learn to do.
        </h2>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {pillars.map((item, index) => (
            <div 
              key={index} 
              className="h-full p-5 sm:p-8 rounded-xl border border-[#E8CC9D] bg-[#FFFCF7] shadow-sm hover:border-[#D99A19] hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF5EB] border border-[#E8CC9D] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="mt-4 sm:mt-6 font-display text-lg sm:text-xl md:text-2xl font-bold text-[#161616]">{item.title}</h3>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#555555] leading-relaxed font-light">{item.description}</p>
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
      icon: <Handshake className="h-6 w-6 text-[#D99A19]" />,
      title: "AI Co-founder",
      description: "A thinking partner that helps you plan, decide, and pressure-test your moves — like a co-founder on call.",
    },
    {
      icon: <Send className="h-6 w-6 text-[#D99A19]" />,
      title: "OutreachOS",
      description: "Your outreach engine: find, message, and follow up with leads at scale without losing the personal touch.",
    },
    {
      icon: <LayoutDashboard className="h-6 w-6 text-[#D99A19]" />,
      title: "Soloneur Command Center",
      description: "The cockpit for your whole business — everything in one place so you always know your next move.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-[#D99A19]" />,
      title: "Free templates & cheatsheets",
      description: "Ready-made resources you can use the moment you need them.",
    },
  ];

  return (
    <section id="tools" className="py-24 bg-[#FFFCF7] border-t border-[#E8CC9D]/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E8CC9D] bg-[#FAF5EB] px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-[#925B0A] font-semibold">
            Built into the mentorship
          </div>
          <h2 className="mt-6 font-display text-3xl md:text-5xl font-bold leading-tight text-balance text-[#161616]">
            Tools that <span className="bg-gradient-to-r from-[#925B0A] via-[#D99A19] to-[#F5BD4A] bg-clip-text text-transparent">think</span> with you.
          </h2>
          <p className="mt-6 text-lg text-[#555555] font-light">
            SKY AI isn&apos;t just lessons. It&apos;s a toolkit built to move you from &quot;I learned it&quot; to &quot;I did it.&quot;
          </p>
        </div>

        {/* Live Tools Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {liveTools.map((tool, idx) => (
            <div 
              key={idx}
              className="group block overflow-hidden rounded-xl border border-[#E8CC9D] bg-[#FFFCF7] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D99A19] hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[#E8CC9D]/60 bg-[#FAF5EB]">
                <Image 
                  src={tool.image} 
                  alt={tool.title} 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#E8CC9D] bg-[#FAF5EB] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#925B0A] font-semibold">
                      {tool.icon} {tool.tag}
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <h3 className="font-display text-2xl font-bold leading-tight text-[#161616]">{tool.title}</h3>
                      {tool.isElite && (
                        <span className="border border-[#E8CC9D] text-[10px] uppercase tracking-[0.2em] text-[#925B0A] px-2 py-0.5 rounded-full font-bold bg-[#FAF5EB]">
                          Elite
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 text-[#925B0A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#555555] font-light">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* In Development Tools */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {inDevTools.map((tool, idx) => (
            <div 
              key={idx} 
              className="h-full rounded-xl border border-[#E8CC9D] bg-[#FAF5EB] p-7 transition-colors hover:border-[#D99A19]"
            >
              {tool.icon}
              <div className="mt-4 inline-flex items-center rounded-full border border-[#E8CC9D] bg-[#FFFCF7] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#777777] font-semibold">
                In development
              </div>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-[#161616]">{tool.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#555555] font-light">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SoloneurTierComparisonSection() {
  return (
    <section className="py-24 bg-[#FAF5EB] border-t border-[#E8CC9D]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center leading-tight text-[#161616]">
          What&apos;s in each <span className="text-[#925B0A]">tier</span>.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Core Tier */}
          <div className="p-8 rounded-2xl bg-[#FFFCF7] border border-[#E8CC9D] shadow-sm">
            <h3 className="font-display text-2xl font-bold text-[#925B0A]">Core</h3>
            <ul className="mt-8 space-y-5">
              {[
                "The Core curriculum — 4 course tracks",
                "2 live trainings every week",
                "Council of Mentors + Vyas",
                "Community + support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 py-1">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#E8CC9D] bg-[#FAF5EB]">
                    <Check className="h-3.5 w-3.5 text-[#D99A19]" />
                  </span>
                  <span className="text-base md:text-lg text-[#161616] font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Elite Tier */}
          <div className="p-8 rounded-2xl bg-[#FFFCF7] border-2 border-[#D99A19] shadow-md">
            <h3 className="font-display text-2xl font-bold text-[#925B0A]">Elite</h3>
            <ul className="mt-8 space-y-5">
              {[
                "The complete curriculum — all 12 course tracks",
                "2 live trainings every week",
                "All 4 AI tools — Council, Vyas, Content Compass, Objection Crusher",
                "Community + support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 py-1">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D99A19] bg-[#FAF5EB]">
                    <Check className="h-3.5 w-3.5 text-[#D99A19]" />
                  </span>
                  <span className="text-base md:text-lg text-[#161616] font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SoloneurCommunitySection() {
  return (
    <section id="community" className="py-16 sm:py-24 bg-[#FFFCF7] border-t border-[#E8CC9D]/50">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#161616] break-words">
          Solo doesn&apos;t mean <span className="bg-gradient-to-r from-[#925B0A] via-[#D99A19] to-[#F5BD4A] bg-clip-text text-transparent">alone</span>.
        </h2>

        <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed font-light">
          The hardest part of building something yourself is doing it in silence. Inside SKY AI you&apos;re surrounded by people at every stage — asking questions, sharing wins, and keeping each other moving. The courses teach you. The community keeps you going.
        </p>

        <div className="mt-8 sm:mt-10">
          <a 
            href="https://chat.whatsapp.com/CvHTLno2Eme1Fs3nuC4vhH" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-md font-semibold border border-[#E8CC9D] text-[#161616] hover:border-[#D99A19] hover:text-[#925B0A] bg-[#FAF5EB] hover:bg-[#FFFCF7] transition-all h-11 px-8 text-sm shadow-sm"
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
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF5EB] border-t border-[#E8CC9D]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#161616] tracking-tight mb-10 sm:mb-14 text-center break-words">
          Frequently asked questions.
        </h2>

        <div className="divide-y divide-[#E8CC9D]/50 border-t border-b border-[#E8CC9D]/50">
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
                  <span className={`text-sm sm:text-base md:text-lg font-bold transition-colors break-words ${
                    isOpen ? "text-[#925B0A]" : "text-[#161616]"
                  }`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-[#777777] transition-transform duration-200 flex-shrink-0 mt-0.5 sm:mt-0 ${
                    isOpen ? "rotate-180 text-[#925B0A]" : ""
                  }`} />
                </button>
                {isOpen && (
                  <div className="pb-5 sm:pb-6 text-xs sm:text-sm md:text-base text-[#555555] leading-relaxed font-light animate-fadeIn">
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
