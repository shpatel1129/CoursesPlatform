"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Course } from "@/data/courses";
import { Star, Users, Clock, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface CourseCardProps {
  course: Course;
  priority?: boolean;
}

export default function CourseCard({ course, priority = false }: CourseCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-950/40 relative">
      {/* Top Image Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

        {/* Badges on Image */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-900/80 text-white backdrop-blur-md border border-slate-700/60 shadow">
            {course.category}
          </span>
          {course.badge && (
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {course.badge}
            </span>
          )}
        </div>

        {/* Discount Tag */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold bg-emerald-500 text-slate-950 shadow">
            SAVE {course.discountPercent}%
          </span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[11px] font-semibold text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded-md backdrop-blur-sm border border-slate-800">
          <Clock className="w-3 h-3 text-indigo-400" />
          {course.duration}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Rating & Students */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2.5">
          <div className="flex items-center gap-1 text-amber-400 font-bold">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-white">{course.rating}</span>
            <span className="text-slate-500 font-normal">({course.reviewCount.toLocaleString()})</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400 font-medium">
            <Users className="w-3.5 h-3.5 text-indigo-400" />
            <span>{course.studentsCount.toLocaleString()} students</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1 mb-1.5">
          <Link href={`/courses/${course.slug}`}>
            {course.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4 flex-grow">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center gap-2.5 pt-3 border-t border-slate-800/80 mb-4">
          <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-slate-700">
            <Image
              src={course.instructor.avatar}
              alt={course.instructor.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-slate-300 truncate">
              {course.instructor.name}
            </span>
            <span className="text-[10px] text-slate-500 truncate">
              {course.instructor.role}
            </span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">
              ${course.salePrice}
            </span>
            <span className="text-xs text-slate-500 line-through">
              ${course.price}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              href={`/courses/${course.slug}`}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700/60 transition-all flex items-center gap-1"
            >
              <span>View Course</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
