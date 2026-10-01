import React from "react";
import { whyChooseUsBenefits } from "@/data/stats";
import { 
  Award, 
  Zap, 
  Infinity as InfinityIcon, 
  Clock, 
  RefreshCw, 
  Headphones,
  CheckCircle,
  ShieldCheck
} from "lucide-react";

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="w-6 h-6 text-indigo-400" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-amber-400" />;
      case "Infinity":
        return <InfinityIcon className="w-6 h-6 text-cyan-400" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-emerald-400" />;
      case "RefreshCw":
        return <RefreshCw className="w-6 h-6 text-violet-400" />;
      case "Headphones":
        return <Headphones className="w-6 h-6 text-rose-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-slate-950/60 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>The ApexSkills Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Why Learn With Us?
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            We reject boring slides and abstract theory. Every course is engineered from real-world workflows to help you build marketable mastery quickly.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800/90 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle gradient hover highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 group-hover:bg-indigo-500/15 rounded-full blur-2xl transition-all"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(benefit.iconName)}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/80 text-indigo-300 border border-indigo-500/20">
                    {benefit.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Verified learning methodology</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
