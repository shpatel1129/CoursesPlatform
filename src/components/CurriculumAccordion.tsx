"use client";

import React, { useState } from "react";
import { CourseModule } from "@/data/courses";
import { 
  ChevronDown, 
  PlayCircle, 
  FileText, 
  HelpCircle, 
  Clock, 
  Lock, 
  CheckCircle2 
} from "lucide-react";

interface CurriculumAccordionProps {
  modules: CourseModule[];
  onPlayPreviewLesson?: (title: string) => void;
}

export default function CurriculumAccordion({
  modules,
  onPlayPreviewLesson,
}: CurriculumAccordionProps) {
  // By default expand the first module
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    [modules[0]?.id || "m1"]: true,
  });

  const toggleModule = (id: string) => {
    setOpenModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    modules.forEach((m) => (allOpen[m.id] = true));
    setOpenModules(allOpen);
  };

  const collapseAll = () => {
    setOpenModules({});
  };

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);

  const getLessonIcon = (type: string, isPreview?: boolean) => {
    if (isPreview) {
      return <PlayCircle className="w-4 h-4 text-indigo-400 fill-indigo-400/20" />;
    }
    switch (type) {
      case "assignment":
        return <FileText className="w-4 h-4 text-emerald-400" />;
      case "quiz":
        return <HelpCircle className="w-4 h-4 text-amber-400" />;
      default:
        return <PlayCircle className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="w-full">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <div className="text-sm text-slate-300">
          <span className="font-bold text-white">{modules.length}</span> Modules •{" "}
          <span className="font-bold text-white">{totalLessons}</span> Lessons •{" "}
          <span className="text-slate-400">All lectures with full source files</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={expandAll}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Expand All
          </button>
          <span className="text-slate-700">•</span>
          <button
            onClick={collapseAll}
            className="text-xs font-semibold text-slate-400 hover:text-slate-300 transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Accordion Modules */}
      <div className="flex flex-col gap-3">
        {modules.map((module, idx) => {
          const isOpen = !!openModules[module.id];
          return (
            <div
              key={module.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all duration-200"
            >
              {/* Module Header */}
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-850/80 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      isOpen ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {module.title}
                  </h4>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                    <span>{module.lessons.length} lessons</span>
                    <span>•</span>
                    <span>{module.duration}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-indigo-400" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Lessons List */}
              {isOpen && (
                <div className="px-6 pb-4 pt-1 border-t border-slate-800/60 divide-y divide-slate-800/40">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="py-3 flex items-center justify-between gap-4 text-xs sm:text-sm"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {getLessonIcon(lesson.type, lesson.isPreview)}
                        <span
                          className={`truncate ${
                            lesson.isPreview
                              ? "text-slate-200 font-medium hover:text-indigo-300 cursor-pointer"
                              : "text-slate-300"
                          }`}
                          onClick={() => {
                            if (lesson.isPreview && onPlayPreviewLesson) {
                              onPlayPreviewLesson(lesson.title);
                            }
                          }}
                        >
                          {lesson.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        {lesson.isPreview ? (
                          <button
                            onClick={() => onPlayPreviewLesson?.(lesson.title)}
                            className="px-2.5 py-1 rounded-md text-[11px] font-bold text-indigo-400 hover:text-white bg-indigo-500/10 hover:bg-indigo-600 transition-colors border border-indigo-500/20"
                          >
                            Preview
                          </button>
                        ) : (
                          <Lock className="w-3.5 h-3.5 text-slate-600" />
                        )}
                        <span className="text-slate-500 text-xs">{lesson.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
