"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { testimonials, Testimonial } from "@/data/reviews";
import { CourseReview } from "@/data/courses";
import { Star, CheckCircle2, Quote, Sparkles, ArrowRight } from "lucide-react";

interface ReviewSectionProps {
  title?: string;
  subtitle?: string;
  customReviews?: CourseReview[];
  courseTitle?: string;
  isCoursePage?: boolean;
}

export default function ReviewSection({
  title = "What Our Students Say",
  subtitle = "Real results from verified students who transformed their careers and businesses.",
  customReviews,
  courseTitle,
  isCoursePage = false,
}: ReviewSectionProps) {
  const [filterRating, setFilterRating] = useState<number | null>(null);

  // If on a course page and customReviews are passed, adapt them
  const reviewsToDisplay = customReviews
    ? customReviews.map((r) => ({
        id: r.id,
        name: r.studentName,
        role: r.studentRole,
        avatar: r.studentAvatar,
        rating: r.rating,
        coursePurchased: courseTitle || "This Masterclass",
        courseSlug: "",
        comment: r.comment,
        verified: r.verified,
        date: r.date,
      }))
    : testimonials;

  const filtered = filterRating
    ? reviewsToDisplay.filter((r) => r.rating === filterRating)
    : reviewsToDisplay;

  return (
    <section id="reviews" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with aggregate rating pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Alumni Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              {title}
            </h2>
            <p className="text-base text-slate-400 max-w-2xl">
              {subtitle}
            </p>
          </div>

          {/* Trust Score Box */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            <div className="text-3xl font-black text-white">4.95</div>
            <div className="flex flex-col">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-400 font-medium">Over 5,800+ 5-star ratings</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between relative shadow-lg hover:shadow-2xl hover:shadow-indigo-950/30"
            >
              <div>
                {/* Rating & Verified Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {item.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Student
                    </span>
                  )}
                </div>

                {/* Highlight Tag if any */}
                {(item as any).highlight && (
                  <div className="text-xs font-bold text-indigo-300 mb-3 bg-indigo-950/60 border border-indigo-800/50 px-3 py-1 rounded-lg inline-block">
                    {(item as any).highlight}
                  </div>
                )}

                {/* Review Text */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  "{item.comment}"
                </p>
              </div>

              {/* Student info footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-indigo-500/30">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.role} {(item as any).company ? `• ${(item as any).company}` : ""}
                    </p>
                  </div>
                </div>

                {/* Course badge */}
                {!isCoursePage && item.courseSlug && (
                  <Link
                    href={`/courses/${item.courseSlug}`}
                    className="text-[10px] text-slate-500 hover:text-indigo-400 font-medium max-w-[100px] text-right truncate"
                  >
                    {item.coursePurchased}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        {!isCoursePage && (
          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 group"
            >
              <span>Join thousands of successful alumni — Explore all courses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
