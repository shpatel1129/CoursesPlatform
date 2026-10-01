import React from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import CourseGrid from "@/components/CourseGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewSection from "@/components/ReviewSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ApexSkills | Modern High-Impact Online Courses & Masterclasses",
  description: "Learn high-income skills in digital marketing, full-stack web development, UI/UX design, AI automation, and business strategy from top 1% industry leaders.",
  openGraph: {
    title: "ApexSkills — Master the Skills That Change Your Career",
    description: "Learn directly from top industry experts. High-converting, practical, project-driven online masterclasses.",
    type: "website",
  },
};

export default function HomePage() {
  const featuredCourses = courses.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-white">
      {/* Sticky Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust / Social Proof Section */}
        <StatsSection />

        {/* 3. Featured Courses Section */}
        <section id="featured-courses" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Curated Industry Tracks</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Explore Our Courses
              </h2>
              <p className="text-base text-slate-400 mt-2 max-w-2xl">
                Browse our highest-rated masterclasses engineered to take you from foundational understanding to elite professional execution.
              </p>
            </div>

            {/* View All Courses Link */}
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all self-start md:self-auto group"
            >
              <span>View All Courses ({courses.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 4 Courses Grid on Homepage */}
          <CourseGrid
            courses={featuredCourses}
            showFilters={false}
            showSearch={false}
          />

          {/* Bottom View All CTA Banner */}
          <div className="mt-14 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all"
            >
              <span>Explore All {courses.length} Available Masterclasses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. What Our Students Say (Overall Reviews) */}
        <ReviewSection />

        {/* 6. FAQ Section */}
        <FAQ />

        {/* 7. Final High-Converting CTA */}
        <CTASection />
      </main>

      {/* Global High-Trust Footer */}
      <Footer />
    </div>
  );
}
