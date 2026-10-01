import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Award } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow and gradient container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-indigo-900/80 via-slate-900 to-slate-950 border border-indigo-500/30 shadow-2xl shadow-indigo-950/60 overflow-hidden text-center">
          
          {/* Radial flare overlay */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Transform Your Career Today</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
            Ready to Start Learning?
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Invest in yourself and learn skills that can move your career forward. Gain lifetime access to industry-standard masterclasses today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-xl shadow-indigo-600/40 hover:shadow-indigo-600/60 hover:-translate-y-0.5 transition-all"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/checkout?course=digital-marketing-masterclass"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-750 border border-slate-700 hover:text-white transition-all"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Enroll in Featured Track</span>
            </Link>
          </div>

          {/* Guarantee Pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-300 border-t border-slate-800/80 pt-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-violet-400" />
              <span>Verified Certificate of Completion</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Instant Access in Under 60 Seconds</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
