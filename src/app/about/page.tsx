import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";
import { GraduationCap, Award, Users, ShieldCheck, ArrowRight, Target, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ApexSkills Mastery Platform",
  description: "Learn about the mission, values, and industry-leading instructors behind ApexSkills.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Our Mission & Vision</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto">
            Empowering the Next Generation of High-Value Builders
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            We bridge the gap between traditional academic theory and rapid modern industry requirements. Our masterclasses are taught exclusively by top practitioners who have built real companies, managed millions in ad budgets, and written software used by millions worldwide.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="/courses"
              className="px-8 py-3.5 rounded-2xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30"
            >
              Explore Our Programs
            </Link>
          </div>
        </section>

        <StatsSection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800">
              <Target className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Our Core Philosophy</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We believe practical execution beats passive consumption every single time. Every lesson in our platform comes with concrete assignments, code templates, or marketing funnels you can copy-paste and deploy immediately.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800">
              <Award className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Guaranteed Quality</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We maintain an uncompromising standard of video production, curriculum clarity, and instructor credentials. If any course fails to exceed your expectations, our 30-day money-back guarantee has you covered.
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
