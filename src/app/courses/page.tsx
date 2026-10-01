import React, { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseGrid from "@/components/CourseGrid";
import { courses, getAllCategories } from "@/data/courses";
import { Sparkles, BookOpen, ShieldCheck, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Courses & Masterclasses | ApexSkills",
  description: "Browse all premium online courses in Marketing, Technology, Design, AI, Business, and Career Growth. Lifetime access with verified certificates.",
};

export default function CoursesPage() {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-20 md:pt-36 md:pb-24">
        {/* Page Hero Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Comprehensive Course Catalog</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Explore All Masterclasses
            </h1>
            
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Find the exact course to accelerate your career or scale your business. Every course comes with lifetime access, source files, and a 30-day money-back guarantee.
            </p>

            {/* Micro value badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Money-Back Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-violet-400" /> Verifiable Certificates
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-indigo-400" /> Lifetime Updates
              </span>
            </div>
          </div>
        </section>

        {/* Main Courses Grid with live search & filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="text-center py-12 text-slate-400">Loading courses...</div>}>
            <CourseGrid
              courses={courses}
              categories={categories}
              showFilters={true}
              showSearch={true}
            />
          </Suspense>
        </section>
      </main>

      <Footer />
    </div>
  );
}
