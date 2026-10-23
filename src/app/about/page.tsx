import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";
import { Award, Target, Sparkles, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Soloneur",
  description: "Learn about the mission, values, and founders behind Soloneur.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] flex flex-col selection:bg-[#06b6d4]/30 selection:text-white">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <div className="hero-badge mb-4">
            <span className="hero-badge-dot" />
            <span>Our Mission & Vision</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#f5f5f5] tracking-tight mb-6 max-w-3xl mx-auto">
            Empowering the Next Generation of <span className="text-[#06b6d4] italic">Solo Builders</span>
          </h1>

          <p className="text-lg text-[#a1a1a1] max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            We bridge the gap between theoretical knowledge and rapid modern AI execution. Our curriculum and tools are built by practitioners who build and scale online businesses solo.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="/#apply"
              className="px-8 py-3.5 rounded-md text-sm font-semibold bg-[#06b6d4] text-[#0a0a0a] hover:bg-[#38bdf8] transition-all shadow-[0_4px_20px_-4px_rgba(6,182,212,0.6)]"
            >
              Register for the webinar
            </Link>
          </div>
        </section>

        <StatsSection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#0c0c0c] border border-white/10 hover:border-[#06b6d4]/30 transition-colors">
              <Target className="w-8 h-8 text-[#06b6d4] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Our Core Philosophy</h3>
              <p className="text-sm text-[#a1a1a1] leading-relaxed">
                We believe practical execution beats passive consumption every single time. Every track in our platform comes with concrete assignments, prompt chains, or marketing workflows you can copy-paste and deploy immediately.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0c0c0c] border border-white/10 hover:border-[#06b6d4]/30 transition-colors">
              <ShieldCheck className="w-8 h-8 text-[#06b6d4] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Guaranteed Quality</h3>
              <p className="text-sm text-[#a1a1a1] leading-relaxed">
                We maintain an uncompromising standard of clarity, depth, and actionable systems. If our platform fails to exceed your expectations, our 72-hour refund policy has you covered.
              </p>
            </div>
          </div>
        </div>

        <WhyChooseUs />
      </main>

      <Footer />
    </div>
  );
}
