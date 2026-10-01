"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { courses, getCourseBySlug } from "@/data/courses";
import confetti from "canvas-confetti";
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Play, 
  BookOpen, 
  Download, 
  Printer, 
  ShieldCheck,
  Mail,
  Award,
  Calendar,
  Lock,
  Layers
} from "lucide-react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || `APX-${Date.now()}-8821`;
  const courseSlug = searchParams.get("course") || "digital-marketing-masterclass";
  const customerEmail = searchParams.get("email") || "student@example.com";
  const customerName = searchParams.get("name") || "Student";
  const amountPaid = searchParams.get("amount") || "99";

  const course = getCourseBySlug(courseSlug) || courses[0];
  const [purchaseDate, setPurchaseDate] = useState("");

  useEffect(() => {
    setPurchaseDate(new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }));

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#10b981", "#f59e0b", "#38bdf8", "#ec4899"],
      });

      const timer = setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
      }, 400);

      return () => clearTimeout(timer);
    } catch (e) {
      // Ignore if canvas is unavailable
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      {/* Top Success Badge */}
      <div className="text-center mb-10">
        <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20 animate-scaleUp">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Payment Verified & Account Activated</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
          Payment Successful!
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
          Thank you for your purchase, <span className="text-white font-bold">{customerName}</span>. You are now officially enrolled in:
        </p>
        <p className="text-xl sm:text-2xl font-black text-indigo-400 mt-1">
          {course.title}
        </p>
      </div>

      {/* Main Order Receipt Card */}
      <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-10 mb-10 backdrop-blur-xl">
        
        {/* Receipt Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Order Reference</span>
            <h3 className="text-lg font-mono font-bold text-white">{orderId}</h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Status: Completed
            </span>
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
              title="Print Receipt"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Order Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-b border-slate-800 text-sm">
          <div>
            <span className="text-xs text-slate-400 block mb-1">Enrolled Student</span>
            <p className="font-semibold text-white">{customerName}</p>
            <p className="text-xs text-slate-400 truncate">{customerEmail}</p>
          </div>

          <div>
            <span className="text-xs text-slate-400 block mb-1">Purchase Date</span>
            <p className="font-semibold text-white">{purchaseDate || "Today"}</p>
            <p className="text-xs text-slate-400">Instant Access Activated</p>
          </div>

          <div>
            <span className="text-xs text-slate-400 block mb-1">Access Type</span>
            <p className="font-semibold text-white">Lifetime Access</p>
            <p className="text-xs text-slate-400">Includes all future updates</p>
          </div>

          <div>
            <span className="text-xs text-slate-400 block mb-1">Amount Paid</span>
            <p className="text-lg font-black text-emerald-400">${amountPaid}.00 USD</p>
            <p className="text-xs text-slate-400">256-Bit SSL Encrypted</p>
          </div>
        </div>

        {/* Onboarding Checklist */}
        <div className="pt-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">
            Next Steps to Start Your Learning:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col gap-1">
              <div className="w-8 h-8 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs mb-2">
                1
              </div>
              <h5 className="text-xs font-bold text-white">Check Your Inbox</h5>
              <p className="text-[11px] text-slate-400">
                A confirmation email with your direct portal access link has been sent to {customerEmail}.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col gap-1">
              <div className="w-8 h-8 rounded-xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs mb-2">
                2
              </div>
              <h5 className="text-xs font-bold text-white">Join Private Community</h5>
              <p className="text-[11px] text-slate-400">
                Network with 10,000+ fellow learners and get direct answers from your instructor.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col gap-1">
              <div className="w-8 h-8 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-xs mb-2">
                3
              </div>
              <h5 className="text-xs font-bold text-white">Earn Your Certificate</h5>
              <p className="text-[11px] text-slate-400">
                Complete the modules and submit your capstone to receive your verifiable credential.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href={`/courses/${course.slug}#curriculum`}
          className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Play className="w-5 h-5 fill-white" />
          <span>Start Learning Now</span>
        </Link>

        <Link
          href="/courses"
          className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:text-white transition-all flex items-center justify-center gap-2"
        >
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <span>Go to My Courses</span>
        </Link>
      </div>

    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <Suspense fallback={<div className="text-center py-20 text-slate-400">Loading order confirmation...</div>}>
          <SuccessContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
