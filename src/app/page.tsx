import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WorkshopSection from "@/components/WorkshopSection";
import PricingTiers from "@/components/PricingTiers";
import CurriculumTracksSection from "@/components/CurriculumTracksSection";
import { 
  SoloneurMetricBar, 
  SoloneurAboutSection, 
  SoloneurWhatYouLearnSection, 
  SoloneurCommunitySection, 
  SoloneurFAQSection 
} from "@/components/SoloneurSections";
import RegisterWebinarSection from "@/components/RegisterWebinarSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SkyAI Automation — Build AI-powered income streams of your own.",
  description: "The curriculum, AI tools, and community for India's solo builders, creators, and first-time founders. Solo, with a system.",
  openGraph: {
    title: "SkyAI Automation — Build AI-powered income streams of your own.",
    description: "SkyAI Automation gives you the skills, the AI tools, and the system to start and grow an online business — solo, from zero.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] flex flex-col selection:bg-[#06b6d4]/30 selection:text-white">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 2. Soloneur Hero Section */}
        <Hero />

        {/* 3. Live Blueprint Workshop (Building 5 Income Streams using AI in 2026) */}
        <WorkshopSection />

        {/* 4. Soloneur Two Tiers Membership Architecture ("Pick your depth") */}
        <PricingTiers />

        {/* 5. Soloneur 12-Track Curriculum ("A curriculum, not a content dump") */}
        <CurriculumTracksSection />

        {/* 6. Metric Divider Bar */}
        <SoloneurMetricBar />

        {/* 7. Why We Built This (About Founders: Tushar & Abhishek) */}
        <SoloneurAboutSection />

        {/* 8. What You'll Learn to Do (4 Pillars) */}
        <SoloneurWhatYouLearnSection />

        {/* 9. Solo Doesn't Mean Alone (Community) */}
        <SoloneurCommunitySection />

        {/* 13. Frequently Asked Questions */}
        <SoloneurFAQSection />

        {/* 14. "Start building." Application / Webinar Registration Form */}
        <RegisterWebinarSection />
      </main>

      {/* 15. Footer */}
      <Footer />
    </div>
  );
}
