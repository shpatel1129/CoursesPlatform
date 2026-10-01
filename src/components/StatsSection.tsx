import React from "react";
import { statsMetrics } from "@/data/stats";
import { Users, Globe2, Star, ThumbsUp } from "lucide-react";

export default function StatsSection() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Users className="w-6 h-6 text-indigo-400" />;
      case 1:
        return <Globe2 className="w-6 h-6 text-cyan-400" />;
      case 2:
        return <Star className="w-6 h-6 text-amber-400 fill-amber-400" />;
      case 3:
        return <ThumbsUp className="w-6 h-6 text-emerald-400" />;
      default:
        return <Users className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsMetrics.map((stat, index) => (
            <div
              key={stat.label}
              className="group p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background hover light */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 group-hover:bg-indigo-500/10 rounded-full blur-xl transition-all"></div>

              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(index)}
                </div>
                {stat.badge && (
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/50">
                    {stat.badge}
                  </span>
                )}
              </div>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-200 mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400 line-clamp-1">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
