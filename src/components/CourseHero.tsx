"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Course } from "@/data/courses";
import VideoModal from "./VideoModal";
import { 
  Star, 
  Users, 
  Clock, 
  BookOpen, 
  ShieldCheck, 
  Award, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Globe,
  RefreshCw,
  FileText,
  Lock,
  Zap
} from "lucide-react";

interface CourseHeroProps {
  course: Course;
}

export default function CourseHero({ course }: CourseHeroProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
          <span>/</span>
          <span className="text-indigo-400 font-semibold">{course.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Course Details & Highlights */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Category & Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                {course.category}
              </span>
              {course.badge && (
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {course.badge}
                </span>
              )}
              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Save {course.discountPercent}% Today
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
              {course.title}
            </h1>

            {/* Headline / Punchline */}
            <p className="text-lg sm:text-xl text-indigo-200 font-medium mb-4 leading-snug">
              {course.headline}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              {course.description}
            </p>

            {/* Rating & Social Proof Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 mb-6 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-white ml-1">{course.rating}</span>
                <span className="text-slate-400 font-normal">({course.reviewCount.toLocaleString()} verified ratings)</span>
              </div>

              <div className="flex items-center gap-1 text-slate-400">
                <Users className="w-4 h-4 text-indigo-400" />
                <span><strong className="text-white">{course.studentsCount.toLocaleString()}</strong> students enrolled</span>
              </div>
            </div>

            {/* Instructor Snippet */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-indigo-500/40 flex-shrink-0">
                <Image
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Created by</p>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {course.instructor.name}{" "}
                  <span className="text-xs font-normal text-slate-400">({course.instructor.role})</span>
                </h4>
              </div>
            </div>

            {/* Meta Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>{course.duration} on-demand</span>
              </div>
              <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>{course.lessonsCount} lessons</span>
              </div>
              <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>{course.language}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Purchase & Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 shadow-2xl shadow-indigo-950/60 backdrop-blur-xl">
              
              {/* Video Preview Thumbnail */}
              <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden mb-6 group">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Play Button */}
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-indigo-600 flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-white transition-transform group/btn z-10"
                  aria-label="Play course preview trailer"
                >
                  <Play className="w-6 h-6 fill-indigo-600 ml-1 text-indigo-600" />
                </button>

                <div className="absolute bottom-3 inset-x-0 text-center">
                  <span className="text-xs font-bold text-white bg-slate-950/80 px-3 py-1 rounded-full backdrop-blur-sm border border-slate-800">
                    Click to Preview Course Trailer
                  </span>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-4xl font-black text-white">
                    ${course.salePrice}
                  </span>
                  <span className="text-lg text-slate-500 line-through">
                    ${course.price}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    50% OFF
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-rose-400 font-semibold">
                  <Zap className="w-3.5 h-3.5 fill-rose-400" />
                  <span>Limited Time Discount — Price increases soon</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 mb-6">
                <Link
                  href={`/checkout?course=${course.slug}`}
                  className="w-full py-4 rounded-2xl text-center text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Buy Now — ${course.salePrice}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={`/checkout?course=${course.slug}`}
                  className="w-full py-3.5 rounded-2xl text-center text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-750 hover:text-white border border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <span>Enroll Now (Instant Access)</span>
                </Link>
              </div>

              {/* Guarantees and What's Included */}
              <div className="pt-5 border-t border-slate-800/80">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  This Masterclass Includes:
                </h5>
                <ul className="flex flex-col gap-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span>{course.duration} full high-definition video content</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{course.downloadableResources} downloadable guides & templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-violet-400 flex-shrink-0" />
                    <span>Verifiable Certificate of Completion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Access to Private Alumni Community & QA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>30-Day 100% Money-Back Guarantee</span>
                  </li>
                </ul>
              </div>

              {/* Secure Checkout Assurance */}
              <div className="mt-5 p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center gap-2 text-xs text-slate-400">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Guaranteed Safe & Secure 256-Bit Checkout</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Video Preview Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl={course.videoPreviewUrl}
        courseTitle={course.title}
      />
    </section>
  );
}
