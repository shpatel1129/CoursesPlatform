import React from "react";
import { statsMetrics } from "@/data/stats";
import { Users, Globe2, Star, ThumbsUp } from "lucide-react";

export default function StatsSection() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Users className="w-5 h-5 text-[#06b6d4]" />;
      case 1:
        return <Globe2 className="w-5 h-5 text-[#06b6d4]" />;
      case 2:
        return <Star className="w-5 h-5 text-[#06b6d4] fill-[#06b6d4]" />;
      case 3:
        return <ThumbsUp className="w-5 h-5 text-[#06b6d4]" />;
      default:
        return <Users className="w-5 h-5 text-[#06b6d4]" />;
    }
  };

  return (
    <section className="py-14 border-y border-white/5 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsMetrics.map((stat, index) => (
            <div
              key={stat.label}
              className="group p-6 rounded-2xl bg-[#0c0c0c]/80 border border-white/5 hover:border-[#06b6d4]/30 hover:bg-[#121212] transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle cyan glow on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#06b6d4]/5 group-hover:bg-[#06b6d4]/10 rounded-full blur-xl transition-all" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-[#06b6d4]/40 transition-colors">
                  {getIcon(index)}
                </div>
                {stat.badge && (
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20">
                    {stat.badge}
                  </span>
                )}
              </div>

              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f5f5f5] tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#f5f5f5]/90 mb-1">
                {stat.label}
              </div>
              <p className="text-[11px] text-[#a1a1a1] line-clamp-1 font-light">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
