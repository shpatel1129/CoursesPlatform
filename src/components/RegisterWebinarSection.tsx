"use client";

import React, { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import AmbientBackground from "./AmbientBackground";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { FadeIn, FadeInScale, Magnetic } from "./MotionWrapper";
import { motion } from "motion/react";

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

      // Celebrate with Luxury Gold & Champagne confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#D99A19", "#F5BD4A", "#925B0A", "#E8CC9D", "#161616", "#FFFCF7"],
        });
      } catch (err) {
        // ignore if canvas not supported
      }
    }, 700);
  };

  return (
    <section id="apply" className="py-16 sm:py-24 relative overflow-hidden bg-[#FAF5EB] border-t border-[#E8CC9D]/50 scroll-mt-20">
      {/* Background ambient lighting & floating gold embers */}
      <AmbientBackground variant="section" intensity="subtle" />

      {/* Warm Gold radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[500px] bg-[#F5BD4A]/[0.15] rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <FadeIn delay={0.1} yOffset={16}>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#161616] tracking-tight break-words">
              Start building.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} yOffset={16}>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[#555555] max-w-xl mx-auto font-light">
              Tell us a little about yourself. We&apos;ll guide you in from there.
            </p>
          </FadeIn>
        </div>

        {/* Form Container Card with 3D Border Light Beam */}
        <FadeInScale delay={0.25}>
          <div className="border-beam-container max-w-2xl mx-auto rounded-2xl bg-[#FFFCF7] border-2 border-[#E8CC9D] p-5 sm:p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(217,154,25,0.18)] hover:shadow-[0_24px_60px_-12px_rgba(217,154,25,0.26)] transition-all duration-500 backdrop-blur-xl animate-card-glow">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                
                {/* Row 1: Full name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#161616] mb-1.5 sm:mb-2">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#FAF5EB] border border-[#E8CC9D] text-base sm:text-sm text-[#161616] placeholder-[#888888] focus:outline-none focus:border-[#D99A19] focus:ring-1 focus:ring-[#D99A19] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#161616] mb-1.5 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#FAF5EB] border border-[#E8CC9D] text-base sm:text-sm text-[#161616] placeholder-[#888888] focus:outline-none focus:border-[#D99A19] focus:ring-1 focus:ring-[#D99A19] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: WhatsApp number & Calling number (optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#161616] mb-1.5 sm:mb-2">
                      WhatsApp number
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      placeholder="+91 9xxxxxxxxx"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#FAF5EB] border border-[#E8CC9D] text-base sm:text-sm text-[#161616] placeholder-[#888888] focus:outline-none focus:border-[#D99A19] focus:ring-1 focus:ring-[#D99A19] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#161616] mb-1.5 sm:mb-2">
                      Calling number <span className="text-[#777777] font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="callingNumber"
                      placeholder="+91 9xxxxxxxxx"
                      value={formData.callingNumber}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#FAF5EB] border border-[#E8CC9D] text-base sm:text-sm text-[#161616] placeholder-[#888888] focus:outline-none focus:border-[#D99A19] focus:ring-1 focus:ring-[#D99A19] transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Age & Profession */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#161616] mb-1.5 sm:mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      min="16"
                      max="99"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#FAF5EB] border border-[#E8CC9D] text-base sm:text-sm text-[#161616] placeholder-[#888888] focus:outline-none focus:border-[#D99A19] focus:ring-1 focus:ring-[#D99A19] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#161616] mb-1.5 sm:mb-2">
                      Profession
                    </label>
                    <select
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#FAF5EB] border border-[#E8CC9D] text-base sm:text-sm text-[#161616] focus:outline-none focus:border-[#D99A19] focus:ring-1 focus:ring-[#D99A19] transition-all"
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
                  <label className="flex items-start gap-3 cursor-pointer group text-xs text-[#555555] leading-relaxed">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 rounded bg-[#FAF5EB] border-[#E8CC9D] text-[#D99A19] focus:ring-[#D99A19] accent-[#D99A19] flex-shrink-0"
                    />
                    <span>
                      I agree to the{" "}
                      <Link href="/terms" className="text-[#925B0A] hover:underline font-semibold">
                        Terms &amp; Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-[#925B0A] hover:underline font-semibold">
                        Privacy Policy
                      </Link>
                      , and consent to SKY AI Automation processing my personal data to respond to this enquiry and provide the services I request.{" "}
                      <span className="text-[#777777]">(required)</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group text-xs text-[#555555] leading-relaxed">
                    <input
                      type="checkbox"
                      name="receiveUpdates"
                      checked={formData.receiveUpdates}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 rounded bg-[#FAF5EB] border-[#E8CC9D] text-[#D99A19] focus:ring-[#D99A19] accent-[#D99A19] flex-shrink-0"
                    />
                    <span>
                      I would also like to receive updates, offers, and educational content from SKY AI Automation by email, WhatsApp, and phone. I can withdraw this at any time.{" "}
                      <span className="text-[#777777]">(optional)</span>
                    </span>
                  </label>
                </div>

                {/* Apply to Join Button in Primary Gold with Shimmer Gleam & Magnetic */}
                <div className="pt-2">
                  <Magnetic distance={0.2}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md font-semibold bg-[#D99A19] hover:bg-[#925B0A] text-[#FFFCF7] shadow-[0_4px_16px_rgba(217,154,25,0.35)] hover:shadow-[0_8px_24px_rgba(146,91,10,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all px-8 py-3.5 text-sm cursor-pointer disabled:opacity-50"
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
                  </Magnetic>
                </div>

              </form>
            ) : (
              /* Submission Success State */
              <div className="py-8 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#FAF5EB] border border-[#E8CC9D] flex items-center justify-center mx-auto mb-4 text-[#925B0A]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#161616] mb-2">
                  Application Received!
                </h3>
                <p className="text-sm text-[#555555] max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-[#161616]">{formData.fullName}</strong>. We&apos;ve reserved your priority seat for the upcoming live webinar. You will receive calendar links and briefing materials via WhatsApp (<span className="text-[#925B0A] font-semibold">{formData.whatsapp}</span>) and email.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-[#E8CC9D]/50">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    href={`https://wa.me/919999999999?text=Hi%2C%20I%20have%20applied%20to%20join%20SKY%20AI%20for%20the%20live%20webinar.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold bg-[#D99A19] text-[#FFFCF7] hover:bg-[#925B0A] transition-all shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Join VIP WhatsApp Community</span>
                  </motion.a>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2.5 rounded-md text-xs font-semibold text-[#555555] hover:text-[#161616] transition-colors cursor-pointer"
                  >
                    Submit another registration
                  </button>
                </div>
              </div>
            )}
          </div>
        </FadeInScale>

      </div>
    </section>
  );
}
