import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SKY AI Automation Systems & Solutions",
  description:
    "Terms and conditions for the SKY AI Automation Mentorship Program and webinars, covering registration, payments, live sessions, content use, and more.",
};

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };
type Section = { title: string; blocks: Block[] };

const CONTACT_EMAIL = "skymentorshipsupport@gmail.com";

const sections: Section[] = [
  {
    title: "1. Acceptance of Terms",
    blocks: [
      {
        type: "p",
        text: "By registering for, purchasing, or participating in the SKY AI Automation Mentorship Program or our webinars, you agree to these Terms & Conditions. Please read them carefully before making a payment.",
      },
    ],
  },
  {
    title: "2. Program Details",
    blocks: [
      {
        type: "p",
        text: "The SKY AI Automation Mentorship Program is an online educational program delivered through live sessions over 60 days (8 weeks).",
      },
      {
        type: "p",
        text: "Webinars are conducted according to the schedule and details communicated at registration. Session timings, joining instructions, and other relevant information may be shared through email or WhatsApp.",
      },
    ],
  },
  {
    title: "3. Registration and Payments",
    blocks: [
      { type: "p", text: "Participants must provide accurate registration and contact information." },
      {
        type: "p",
        text: "A ₹1,000 token/booking amount may be required to reserve a mentorship place. Any remaining payment requirements and applicable fees will be communicated during the enrollment process.",
      },
      {
        type: "p",
        text: "The booking amount is subject to the Refund & Cancellation Policy and applicable law.",
      },
    ],
  },
  {
    title: "4. Live Sessions and Attendance",
    blocks: [
      {
        type: "p",
        text: "The mentorship and webinars are delivered through live online sessions. Participants are responsible for checking the session schedule and joining instructions.",
      },
      {
        type: "p",
        text: "Recordings are not included as a standard program benefit. If a participant misses a session, any alternative arrangement will be considered on a case-by-case basis and is not guaranteed.",
      },
    ],
  },
  {
    title: "5. Access and WhatsApp Community",
    blocks: [
      {
        type: "p",
        text: "Mentorship access is intended for the 60-day program period. Webinar access and participation arrangements apply to the relevant webinar.",
      },
      {
        type: "p",
        text: "WhatsApp may be used to share program updates, joining details, and community or support information, where applicable.",
      },
      {
        type: "p",
        text: "Participants must communicate respectfully and must not misuse the community, harass others, or share another participant’s private information without permission.",
      },
    ],
  },
  {
    title: "6. Learning Outcomes and No Income Guarantee",
    blocks: [
      {
        type: "p",
        text: "Our mentorship and webinars provide education, practical guidance, and information about AI tools, automation, and related business opportunities.",
      },
      {
        type: "p",
        text: "We do not guarantee any specific income, profit, clients, employment, or business results. Outcomes depend on individual effort, implementation, skills, market conditions, and other factors beyond our control.",
      },
      {
        type: "p",
        text: "Any examples or results shared during a session should not be treated as a promise of similar results.",
      },
    ],
  },
  {
    title: "7. Intellectual Property and Content Restrictions",
    blocks: [
      {
        type: "p",
        text: "Program materials, presentations, and other paid educational content are provided for the participant’s personal learning.",
      },
      { type: "p", text: "You must not, without prior written permission:" },
      {
        type: "ul",
        items: [
          "Share or distribute paid content with unauthorized persons.",
          "Resell or commercially redistribute program materials.",
          "Record live sessions without authorization.",
          "Publish or reproduce protected materials without permission, except where permitted by law.",
        ],
      },
      {
        type: "p",
        text: "Unauthorized use may result in restricted program or community access, subject to applicable law and any relevant refund obligations.",
      },
    ],
  },
  {
    title: "8. Refunds and Cancellations",
    blocks: [
      { type: "p", text: "Refund requests are governed by our separate Refund & Cancellation Policy." },
      {
        type: "p",
        text: "The applicable request window, conditions, deductions, and processing timelines are explained in that policy. Please review it before making a payment.",
      },
      {
        type: "p",
        text: "Nothing in these Terms & Conditions limits any rights or remedies available under applicable law.",
      },
    ],
  },
  {
    title: "9. Schedule Changes",
    blocks: [
      {
        type: "p",
        text: "If a live session needs to be rescheduled or changed, updated information will be communicated through an appropriate channel. Any necessary arrangements will be handled in accordance with the applicable program commitments and law.",
      },
    ],
  },
  {
    title: "10. Misuse and Termination",
    blocks: [
      {
        type: "p",
        text: "We may restrict participation or access in cases of serious misconduct, unauthorized distribution of paid content, fraudulent activity, or material violation of these Terms & Conditions.",
      },
      {
        type: "p",
        text: "Any restriction or termination will remain subject to applicable law and relevant contractual or refund obligations.",
      },
    ],
  },
  {
    title: "11. Changes to These Terms",
    blocks: [
      {
        type: "p",
        text: "We may update these Terms & Conditions when reasonably necessary. The updated version will be published on this page with a revised “Last Updated” date. Applicable legal rights and existing commitments will be respected.",
      },
    ],
  },
  {
    title: "12. Governing Law",
    blocks: [
      {
        type: "p",
        text: "These Terms & Conditions are governed by the laws of India. Disputes will be handled by the appropriate forum in accordance with applicable law.",
      },
    ],
  },
];

function renderBlock(block: Block, i: number) {
  if (block.type === "ul") {
    return (
      <ul key={i} className="list-disc pl-6 space-y-1.5 mb-3 marker:text-slate-500">
        {block.items.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <p key={i} className="mb-3">
      {block.text}
    </p>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-base text-slate-300 mb-1">
            SKY AI Automation Mentorship Program &amp; Webinars
          </p>
          <p className="text-sm text-slate-400 mb-8">Last Updated: 25 October 2026</p>

          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-8 text-sm text-slate-300 leading-relaxed">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-bold text-white mb-3">{section.title}</h2>
                {section.blocks.map(renderBlock)}
              </section>
            ))}

            <section>
              <h2 className="text-lg font-bold text-white mb-3">13. Contact</h2>
              <p className="mb-3">
                For questions regarding the mentorship program, webinars, or these Terms &amp; Conditions, contact:
              </p>
              <p className="mb-2">
                Email:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="mb-3">Business: SKY AI Automation Systems &amp; Solutions</p>
            </section>

            <div className="pt-6 border-t border-slate-800 text-center text-slate-400">
              By registering for or purchasing a program, you acknowledge that you have had an opportunity to read
              these Terms &amp; Conditions.
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}