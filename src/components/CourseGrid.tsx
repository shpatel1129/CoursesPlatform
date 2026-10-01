"use client";

import React, { useState, useMemo } from "react";
import { Course } from "@/data/courses";
import CourseCard from "./CourseCard";
import { Search, SlidersHorizontal, Sparkles, BookOpen } from "lucide-react";

interface CourseGridProps {
  courses: Course[];
  categories?: string[];
  initialCategory?: string;
  showFilters?: boolean;
  showSearch?: boolean;
  title?: string;
  subtitle?: string;
  limit?: number;
}

export default function CourseGrid({
  courses,
  categories = ["All", "Marketing", "Business", "Technology", "Design", "Personal Development", "Career"],
  initialCategory = "All",
  showFilters = true,
  showSearch = false,
  title,
  subtitle,
  limit,
}: CourseGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"popular" | "rating" | "price-low" | "price-high" | "newest">("popular");

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter(
        (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.instructor.name.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      );
    }

    // Sorting
    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        result.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case "price-high":
        result.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case "newest":
        result.sort((a, b) => Number(b.id) - Number(a.id));
        break;
      case "popular":
      default:
        result.sort((a, b) => b.studentsCount - a.studentsCount);
        break;
    }

    if (limit && limit > 0) {
      return result.slice(0, limit);
    }

    return result;
  }, [courses, selectedCategory, searchQuery, sortBy, limit]);

  return (
    <div className="w-full">
      {/* Header section if title provided */}
      {(title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto mb-10">
          {title && (
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base sm:text-lg text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Search and Filters Bar */}
      {(showFilters || showSearch) && (
        <div className="mb-10 flex flex-col gap-6">
          {showSearch && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search courses, skills, instructors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                />
              </div>

              {/* Sorting selector */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-400 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest Releases</option>
                </select>
              </div>
            </div>
          )}

          {/* Category Filter Pills */}
          {showFilters && (
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                        : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Grid: 4 per row on desktop (lg:grid-cols-4), 2 on tablet (sm:grid-cols-2), 1 on mobile */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course, idx) => (
            <CourseCard key={course.id} course={course} priority={idx < 4} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-3xl bg-slate-900/40 border border-slate-800">
          <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-1">No courses found</h3>
          <p className="text-sm text-slate-400 max-w-sm mx-auto mb-6">
            We couldn't find any courses matching your current search or category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
