import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, ArrowRight, CheckCircle2, Clock, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "30-Day 100% Money-Back Refund Policy | ApexSkills",
  description: "Learn about our straightforward 30-day money-back guarantee and refund request procedure.",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              30-Day Money-Back Guarantee
            </h1>
            <p className="text-base text-slate-400">
              Our 100% risk-free commitment to your education and career satisfaction.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                1. Our Promise to You
              </h2>
              <p>
                We build every masterclass with meticulous attention to detail and practical value. If you enroll in any course on ApexSkills, explore the lectures, and determine that the material does not deliver the career or technical value you expected, you are entitled to a 100% full refund within 30 days of purchase.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-400" />
                2. How to Request a Refund
              </h2>
              <p className="mb-3">
                Requesting a refund is simple and hassle-free:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-slate-300">
                <li>Send an email to <a href="mailto:support@apexskills.com" className="text-indigo-400 underline">support@apexskills.com</a> with the subject line <strong>Refund Request: [Your Order ID]</strong>.</li>
                <li>Include your full name, the email address used during purchase, and a brief sentence detailing why the course wasn't the right fit (to help us improve).</li>
                <li>Our billing team will review and approve your request within 24 to 48 business hours.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-violet-400" />
                3. Refund Processing Timeline
              </h2>
              <p>
                Once processed, refunds are returned to the original payment method (Credit Card, PayPal, or UPI) within 3 to 7 business days, depending on your card issuer or banking institution.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">Ready to start risk-free?</h4>
                <p className="text-xs text-slate-400">Enroll today with complete peace of mind.</p>
              </div>
              <Link
                href="/courses"
                className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                Browse All Masterclasses
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
