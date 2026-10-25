"use client";

import React, { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import AmbientBackground from "./AmbientBackground";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";

export default function RegisterWebinarSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    callingNumber: "",
    age: "25",
    profession: "",
    agreeTerms: true,
    receiveUpdates: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.whatsapp) {
      alert("Please fill in your Full Name, Email, and WhatsApp number.");
      return;
    }
    if (!formData.agreeTerms) {
      alert("Please agree to the Terms & Conditions to proceed.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Celebrate with Electric Cyan & Ice Blue confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#06b6d4", "#38bdf8", "#67e8f9", "#e0f2fe", "#ffffff"],
        });
      } catch (err) {
        // ignore if canvas not supported
      }
    }, 700);
  };

  return (
    <section id="apply" className="py-16 sm:py-24 relative overflow-hidden bg-[#0a0a0a] border-t border-white/5 scroll-mt-20">
      {/* Background ambient lighting & floating cyan embers */}
      <AmbientBackground variant="section" intensity="subtle" />

      {/* Electric Cyan radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[500px] bg-[#06b6d4]/[0.08] rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching exact user image */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#e0f2fe] tracking-tight break-words">
            Start building.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[#a1a1a1] max-w-xl mx-auto font-light">
            Tell us a little about yourself. We&apos;ll guide you in from there.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-[#0c0c0c]/95 border border-white/10 p-5 sm:p-8 md:p-10 shadow-[0_0_60px_-20px_rgba(6,182,212,0.25)] backdrop-blur-xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              
              {/* Row 1: Full name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#f5f5f5] mb-1.5 sm:mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-base sm:text-sm text-[#f5f5f5] placeholder-[#a1a1a1]/40 focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#f5f5f5] mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-base sm:text-sm text-[#f5f5f5] placeholder-[#a1a1a1]/40 focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: WhatsApp number & Calling number (optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#f5f5f5] mb-1.5 sm:mb-2">
                    WhatsApp number
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    placeholder="+91 9xxxxxxxxx"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-base sm:text-sm text-[#f5f5f5] placeholder-[#a1a1a1]/40 focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#f5f5f5] mb-1.5 sm:mb-2">
                    Calling number <span className="text-[#a1a1a1]/60 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="callingNumber"
                    placeholder="+91 9xxxxxxxxx"
                    value={formData.callingNumber}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-base sm:text-sm text-[#f5f5f5] placeholder-[#a1a1a1]/40 focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Age & Profession */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#f5f5f5] mb-1.5 sm:mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    min="16"
                    max="99"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-base sm:text-sm text-[#f5f5f5] placeholder-[#a1a1a1]/40 focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#f5f5f5] mb-1.5 sm:mb-2">
                    Profession
                  </label>
                  <select
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-base sm:text-sm text-[#f5f5f5] focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] transition-all"
                  >
                    <option value="" disabled>Select one</option>
                    <option value="working-professional">Working professional</option>
                    <option value="freelancer">Freelancer / Agency Owner</option>
                    <option value="creator">Content Creator</option>
                    <option value="student">Student</option>
                    <option value="founder">First-time Founder / Business Owner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                <label className="flex items-start gap-3 cursor-pointer group text-xs text-[#a1a1a1] leading-relaxed">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 rounded bg-[#0a0a0a] border-white/20 text-[#06b6d4] focus:ring-[#06b6d4] accent-[#06b6d4] flex-shrink-0"
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#06b6d4] hover:underline font-medium">
                      Terms &amp; Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#06b6d4] hover:underline font-medium">
                      Privacy Policy
                    </Link>
                    , and consent to ShrikantAi Automation processing my personal data to respond to this enquiry and provide the services I request.{" "}
                    <span className="text-[#a1a1a1]/70">(required)</span>
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group text-xs text-[#a1a1a1] leading-relaxed">
                  <input
                    type="checkbox"
                    name="receiveUpdates"
                    checked={formData.receiveUpdates}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 rounded bg-[#0a0a0a] border-white/20 text-[#06b6d4] focus:ring-[#06b6d4] accent-[#06b6d4] flex-shrink-0"
                  />
                  <span>
                    I would also like to receive updates, offers, and educational content from SkyAI Automation by email, WhatsApp, and phone. I can withdraw this at any time.{" "}
                    <span className="text-[#a1a1a1]/70">(optional)</span>
                  </span>
                </label>
              </div>

              {/* Soloneur Apply to Join Button in Electric Cyan */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md font-semibold bg-[#06b6d4] hover:bg-[#38bdf8] text-[#0a0a0a] shadow-[0_4px_20px_-4px_rgba(6,182,212,0.5)] hover:shadow-[0_8px_24px_-6px_rgba(6,182,212,0.7)] hover:-translate-y-0.5 transition-all px-8 py-3.5 text-sm cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting application...</span>
                  ) : (
                    <>
                      <span>Apply to join</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Submission Success State */
            <div className="py-8 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 flex items-center justify-center mx-auto mb-4 text-[#06b6d4]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#f5f5f5] mb-2">
                Application Received!
              </h3>
              <p className="text-sm text-[#a1a1a1] max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. We&apos;ve reserved your priority seat for the upcoming live webinar. You will receive calendar links and briefing materials via WhatsApp (<span className="text-[#06b6d4]">{formData.whatsapp}</span>) and email.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/919999999999?text=Hi%2C%20I%20have%20applied%20to%20join%20Soloneur%20for%20the%20live%20webinar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold bg-[#06b6d4] text-[#0a0a0a] hover:bg-[#38bdf8] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Join VIP WhatsApp Community</span>
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2.5 rounded-md text-xs font-medium text-[#a1a1a1] hover:text-white transition-colors cursor-pointer"
                >
                  Submit another registration
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
