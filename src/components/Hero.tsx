"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  ShieldCheck, 
  CheckCircle2,
  TrendingUp,
  Award,
  Zap
} from "lucide-react";

interface HeroProps {
  onPlayPreview?: () => void;
}

export default function Hero({ onPlayPreview }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-white font-bold">New:</span> 2026 Updated Masterclasses Live
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Learn the Skills That Can{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                Change Your Career
              </span>
            </h1>

            {/* Subtitle / Value prop */}
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl font-normal">
              High-converting, project-driven masterclasses built by senior engineers, 8-figure growth marketers, and venture-backed founders. Master modern skills that command premium salaries and business revenue.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="#featured-courses"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 hover:text-white transition-all duration-200"
              >
                <span>Start Learning</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>

            {/* Trust Indicators Bar */}
            <div className="pt-6 border-t border-slate-800/80 w-full grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-white font-extrabold text-xl sm:text-2xl">
                  <span>10,000+</span>
                </div>
                <span className="text-xs sm:text-sm text-slate-400 font-medium">Students Enrolled</span>
              </div>

              <div className="flex flex-col border-x border-slate-800/80 px-4">
                <div className="flex items-center gap-1.5 text-white font-extrabold text-xl sm:text-2xl">
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <span>4.9/5</span>
                </div>
                <span className="text-xs sm:text-sm text-slate-400 font-medium">Student Rating</span>
              </div>

              <div className="flex flex-col pl-2">
                <div className="flex items-center gap-1.5 text-white font-extrabold text-xl sm:text-2xl">
                  <Award className="w-5 h-5 text-indigo-400" />
                  <span>20+</span>
                </div>
                <span className="text-xs sm:text-sm text-slate-400 font-medium">Expert Masterclasses</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual / Interactive Card */}
          <div className="lg:col-span-5 relative">
            {/* Outer decorative halo */}
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-indigo-500/30 via-slate-800/50 to-slate-900/80 shadow-2xl shadow-indigo-950/50">
              
              <div className="relative rounded-[22px] bg-slate-900/90 overflow-hidden border border-slate-800 backdrop-blur-md">
                {/* Course Spotlight Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                    alt="Students learning and collaborating"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-indigo-600 text-white shadow-lg">
                      Featured Masterclass
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/90 text-white backdrop-blur-md">
                      50% OFF TODAY
                    </span>
                  </div>

                  {/* Play video preview button */}
                  <Link
                    href="/courses/digital-marketing-masterclass"
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-indigo-600 flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-white transition-transform duration-200 z-10 group/btn"
                    aria-label="View Course Details"
                  >
                    <Play className="w-6 h-6 fill-indigo-600 ml-1 text-indigo-600 group-hover/btn:scale-110 transition-transform" />
                  </Link>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-white ml-1 font-semibold">4.95 (1,250 reviews)</span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">14 Hours • 48 Lessons</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                    Digital Marketing & Growth Funnels
                  </h3>

                  <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                    Master paid ads, SEO domination, high-converting email sequences, and attribution analytics with real client campaign templates.
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-white">$99</span>
                      <span className="text-sm text-slate-500 line-through">$199</span>
                    </div>

                    <Link
                      href="/checkout?course=digital-marketing-masterclass"
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all"
                    >
                      Enroll Now — $99
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Social Proof Pill 1 */}
              <div className="absolute -bottom-5 -left-5 bg-slate-900/95 border border-slate-700/80 rounded-2xl p-3.5 shadow-2xl backdrop-blur-xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">95% Student Satisfaction</p>
                  <p className="text-[11px] text-slate-400">Verified alumni outcomes</p>
                </div>
              </div>

              {/* Floating Social Proof Pill 2 */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-slate-900/95 border border-slate-700/80 rounded-2xl p-3 shadow-2xl backdrop-blur-xl items-center gap-2.5">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-900 object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                    alt="Student"
                  />
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-900 object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="Student"
                  />
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-900 object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Student"
                  />
                </div>
                <div className="text-[11px] font-semibold text-slate-200">
                  <span className="text-emerald-400 font-bold">148 joined</span> this week
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
