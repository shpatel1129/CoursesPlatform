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
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="w-5 h-5 text-[#06b6d4]" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-[#06b6d4]" />;
      case "Infinity":
        return <InfinityIcon className="w-5 h-5 text-[#06b6d4]" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-[#06b6d4]" />;
      case "RefreshCw":
        return <RefreshCw className="w-5 h-5 text-[#06b6d4]" />;
      case "Headphones":
        return <Headphones className="w-5 h-5 text-[#06b6d4]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#06b6d4]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#0a0a0a] relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#06b6d4]/[0.05] rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/[0.06] px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-[#06b6d4] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Soloneur Advantage</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f5] tracking-tight mb-4">
            Why Learn With Us?
          </h2>

          <p className="text-base sm:text-lg text-[#a1a1a1] font-light max-w-2xl mx-auto">
            We reject boring slides and abstract theory. Every track is engineered from real-world workflow pipelines to help you build marketable mastery quickly.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-2xl bg-[#0c0c0c]/80 border border-white/10 hover:border-[#06b6d4]/40 hover:bg-[#121212] transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle cyan glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#06b6d4]/5 group-hover:bg-[#06b6d4]/10 rounded-full blur-2xl transition-all" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-[#06b6d4]/40 transition-colors">
                    {getIcon(benefit.iconName)}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20">
                    {benefit.highlight}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#f5f5f5] mb-3 group-hover:text-[#06b6d4] transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#a1a1a1] leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-[#a1a1a1]">
                <CheckCircle className="w-4 h-4 text-[#06b6d4]" />
                <span>Verified learning methodology</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
