"use client";

import React, { useEffect } from "react";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  courseTitle: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  courseTitle,
}: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-indigo-400 fill-indigo-400" />
            <span className="text-sm font-bold text-white truncate max-w-md">
              Course Preview: {courseTitle}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close preview modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          {videoUrl ? (
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              Your browser does not support HTML5 video.
            </video>
          ) : (
            <div className="text-center p-8">
              <Play className="w-12 h-12 text-indigo-400 mx-auto mb-3 animate-pulse" />
              <p className="text-sm text-slate-300">Preview streaming initialized for {courseTitle}</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-950 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
          <span>HD 1080p • Free Preview Lesson</span>
          <button
            onClick={onClose}
            className="text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
