import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | ApexSkills",
  description: "Terms and conditions regarding course access, intellectual property, and acceptable use.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-400 mb-8">Last Updated: October 2026</p>

          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 text-sm text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. Agreement to Terms</h2>
              <p>
                By purchasing, enrolling, or accessing any educational course, template, or content provided by ApexSkills, you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. Lifetime Access & License</h2>
              <p>
                When you purchase a course, you receive a single-user, non-exclusive, non-transferable perpetual license to access the video lectures, exercises, downloadable source files, and student community for your personal and professional learning. You may not resell, redistribute, or publicly broadcast the course recordings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">3. Certificate Issuance</h2>
              <p>
                Certificates of Completion are awarded to students who have completed all required lessons and assessments. Certificates are verifiable via unique credential IDs on our verification portal.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">4. Contact Information</h2>
              <p>
                For questions regarding these terms, please contact legal@apexskills.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
