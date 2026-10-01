import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ApexSkills",
  description: "How we collect, protect, and handle your student personal information and payment data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400 mb-8">Last Updated: October 2026</p>

          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 text-sm text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. Information We Collect</h2>
              <p>
                We collect your name, email address, phone number, marketing attribution responses, and order details when you purchase a course or subscribe to our newsletter. We never store raw credit card numbers or banking passwords on our servers; all payments are processed through PCI-DSS Level 1 compliant processors.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. How We Use Your Information</h2>
              <p>
                Your information is used strictly to provision your course access, deliver learning updates, issue certificates, process customer service inquiries, and improve our curriculum. We do NOT sell or lease your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">3. Data Security</h2>
              <p>
                We employ industry-standard 256-bit SSL encryption, tokenized authentication, and strict access controls to safeguard your data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">4. Your Privacy Rights</h2>
              <p>
                You may request a copy of your personal data or request deletion of your account at any time by contacting privacy@apexskills.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
