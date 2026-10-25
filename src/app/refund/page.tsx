import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | SKY AI Automation Systems & Solutions",
  description:
    "Refund and cancellation terms for SKY AI Automation Systems & Solutions mentorship programs, webinars, workshops, courses, and digital services.",
};

type Item = { label?: string; text: string };
type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: Item[] };
type Section = { title: string; blocks: Block[] };

const CONTACT_EMAIL = "skymentorshipsupport@gmail.com";

const sections: Section[] = [
  {
    title: "1. Introduction",
    blocks: [
      {
        type: "p",
        text: "At SKY AI Automation Systems & Solutions (“SKY,” “we,” “our,” or “us”), we aim to provide clear information about our services, payment terms, cancellations, and refunds.",
      },
      {
        type: "p",
        text: "This Refund & Cancellation Policy applies to purchases made through our website or authorised payment channels for our mentorship programs, webinars, workshops, courses, and related digital services.",
      },
      {
        type: "p",
        text: "By making a purchase, you acknowledge that you have had the opportunity to review this policy before completing your payment. This policy must be read subject to applicable laws and consumer rights.",
      },
    ],
  },
  {
    title: "2. Refund Request Window 48 Hours",
    blocks: [
      {
        type: "p",
        text: "Customers may submit a refund request within 48 hours of the successful payment timestamp, subject to the eligibility conditions set out in this policy.",
      },
      {
        type: "ul",
        items: [
          { text: "The 48-hour period begins when the payment is successfully completed." },
          { text: "A refund request must be submitted by email within this period." },
          {
            text: "Submitting a request within 48 hours does not automatically guarantee approval. The eligibility conditions applicable to the purchased service must also be satisfied.",
          },
          {
            text: "Requests received after the 48-hour period will generally not be eligible for a refund, except where a refund or other remedy is required under applicable law or under the exceptions described in this policy.",
          },
        ],
      },
      {
        type: "p",
        text: "Customers are encouraged to review the service details and contact us promptly if they have concerns about a purchase.",
      },
    ],
  },
  {
    title: "3. Mentorship Program Refund Policy",
    blocks: [
      {
        type: "p",
        text: "The refund conditions in this section apply to the Sky AI Automation Mentorship Program, including token or booking payments and full payments.",
      },
      { type: "h3", text: "3.1 Token and Booking Payments" },
      {
        type: "p",
        text: "If you pay a token or booking amount to register for a mentorship program, you may submit a refund request within 48 hours of successful payment, subject to the eligibility conditions and applicable law.",
      },
      {
        type: "p",
        text: "After the 48-hour period, token or booking payments will generally be non-refundable, except where applicable law requires otherwise or a specific exception under this policy applies.",
      },
      { type: "h3", text: "3.2 Full Mentorship Payments" },
      {
        type: "p",
        text: "For full mentorship payments, refund requests must also be submitted within 48 hours of successful payment.",
      },
      {
        type: "p",
        text: "After the 48-hour period, payments will generally be non-refundable, subject to applicable law and the exceptions described in this policy.",
      },
      { type: "h3", text: "3.3 Mentorship Access and Registration" },
      {
        type: "p",
        text: "Registration, enrolment, access to mentorship resources, or commencement of program-related services may affect refund eligibility, depending on the circumstances and applicable law.",
      },
      {
        type: "p",
        text: "The 48-hour request window does not override any applicable legal rights or remedies.",
      },
    ],
  },
  {
    title: "4. Webinar, Workshop, and Live Session Refund Policy",
    blocks: [
      {
        type: "p",
        text: "Refund requests for webinars, workshops, and other live sessions are subject to both the 48-hour payment window and the session’s start time.",
      },
      {
        type: "ul",
        items: [
          { text: "A refund request must be submitted within 48 hours of successful payment and before the relevant live session begins." },
          { text: "Once a participant has attended or received the live session, the purchase will generally be non-refundable, even if the 48-hour period has not expired." },
          { text: "If the session is scheduled to take place within 48 hours of payment, participants must submit any eligible refund request before the session begins." },
          { text: "If the session has already started or concluded, or the participant has attended it, a refund will generally not be available merely because the request falls within 48 hours." },
        ],
      },
      {
        type: "p",
        text: "These conditions remain subject to applicable law and any cancellation or service-failure exceptions described below.",
      },
    ],
  },
  {
    title: "5. Digital Products and Learning Materials",
    blocks: [
      {
        type: "p",
        text: "For courses, recordings, downloadable resources, templates, and other digital materials, refund eligibility will depend on the applicable product terms, the nature of the purchase, whether access or delivery has occurred, and applicable law.",
      },
      {
        type: "p",
        text: "Where access to digital content or a service has already been provided, a refund may not be available in ordinary circumstances, subject to any mandatory legal rights or remedies.",
      },
      {
        type: "p",
        text: "Customers should review the product description and any specific purchase terms before completing a transaction.",
      },
    ],
  },
  {
    title: "6. Deductions, Taxes, and Payment Processing Charges",
    blocks: [
      {
        type: "p",
        text: "Where a refund is approved, any deduction will be limited to actual, applicable, non-refundable payment processing charges or other legally permissible amounts, where such deductions are permitted by applicable law and disclosed or otherwise authorised as required.",
      },
      {
        type: "p",
        text: "Applicable taxes will be handled in accordance with the relevant tax rules and refund requirements.",
      },
      {
        type: "p",
        text: "We will not impose arbitrary or undisclosed deductions, and nothing in this section is intended to exclude any amount that must legally be refunded.",
      },
      {
        type: "p",
        text: "The final eligible refund amount will be determined after considering the transaction details, applicable charges, and legal requirements.",
      },
    ],
  },
  {
    title: "7. Cancellation by SKY",
    blocks: [
      {
        type: "p",
        text: "If SKY cancels a webinar, workshop, mentorship program, or other paid service, or is unable to provide the purchased service as promised, we will communicate the available options as appropriate.",
      },
      { type: "p", text: "Depending on the circumstances and applicable law, these options may include:" },
      {
        type: "ul",
        items: [
          { text: "Rescheduling the session or program" },
          { text: "Providing an alternative service, where appropriate and agreed" },
          { text: "Issuing a full or appropriate partial refund where required or warranted" },
        ],
      },
      {
        type: "p",
        text: "Any refund or alternative arrangement will be handled in accordance with applicable law and the circumstances of the cancellation.",
      },
    ],
  },
  {
    title: "8. Exceptional Circumstances and Legal Rights",
    blocks: [
      {
        type: "p",
        text: "Although ordinary refund requests are subject to the time limits and eligibility conditions in this policy, nothing in this policy is intended to exclude or restrict rights or remedies that cannot lawfully be excluded or restricted.",
      },
      {
        type: "p",
        text: "Requests involving duplicate payments, failed transactions where money was debited, unauthorised transactions, material failure to provide a purchased service, or other circumstances requiring a remedy under applicable law will be reviewed appropriately.",
      },
      {
        type: "p",
        text: "This section does not guarantee a refund in every exceptional circumstance. The appropriate remedy will depend on the facts and applicable legal requirements.",
      },
    ],
  },
  {
    title: "9. How to Request a Refund",
    blocks: [{ type: "p", text: "To submit a refund request, email us at the address below." }],
  },
];

const afterRequestSections: Section[] = [
  {
    title: "10. Refund Processing Time",
    blocks: [
      { type: "p", text: "Once a refund has been approved, we aim to initiate the refund within 7–10 business days." },
      {
        type: "p",
        text: "The time taken for the funds to appear in your account may vary depending on the payment gateway, bank, card issuer, or payment method.",
      },
      {
        type: "p",
        text: "Where processing is delayed, we may need additional time to coordinate with the relevant payment provider. Any mandatory legal deadlines will continue to apply.",
      },
    ],
  },
  {
    title: "11. Chargebacks and Payment Disputes",
    blocks: [
      {
        type: "p",
        text: "If you believe a transaction is incorrect or unauthorised, please contact us promptly so that we can review the matter.",
      },
      {
        type: "p",
        text: "You may also contact your payment provider or bank where appropriate. Nothing in this policy restricts your legal rights or your ability to raise a legitimate payment dispute.",
      },
      {
        type: "p",
        text: "We reserve the right to provide relevant transaction and service records when responding to legitimate payment disputes, subject to applicable law.",
      },
    ],
  },
  {
    title: "12. Changes to This Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Refund & Cancellation Policy to reflect changes in our services, payment arrangements, business operations, or applicable legal requirements.",
      },
      {
        type: "p",
        text: "The updated policy will be published on our website with a revised “Last Updated” date. Any changes will be applied subject to applicable law and will not remove rights that customers are legally entitled to retain.",
      },
      { type: "p", text: "Customers are encouraged to review this policy before making a purchase." },
    ],
  },
];

function renderItem(item: Item) {
  return item.label ? (
    <>
      <strong className="font-semibold text-white">{item.label}</strong> {item.text}
    </>
  ) : (
    item.text
  );
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h3":
      return (
        <h3 key={i} className="text-base sm:text-lg font-semibold text-white mt-5 mb-2">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="mb-3">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="list-disc pl-6 space-y-1.5 mb-3 marker:text-slate-500">
          {block.items.map((item, j) => (
            <li key={j}>{renderItem(item)}</li>
          ))}
        </ul>
      );
  }
}

function renderSection(section: Section) {
  return (
    <section key={section.title}>
      <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
      {section.blocks.map(renderBlock)}
    </section>
  );
}

const mailLink = (
  <a
    href={`mailto:${CONTACT_EMAIL}`}
    className="text-[#925B0A] hover:text-[#D99A19] underline underline-offset-2 font-semibold"
  >
    {CONTACT_EMAIL}
  </a>
);

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-[#FAF5EB] text-[#161616] flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-[#FFFCF7] border-2 border-[#E8CC9D] flex items-center justify-center mx-auto mb-4 text-[#925B0A] shadow-sm">
              <ShieldCheck className="w-8 h-8 text-[#D99A19]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#161616] tracking-tight mb-3">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="text-base text-[#555555] mb-1">SKY AI Automation Systems &amp; Solutions</p>
            <p className="text-sm text-[#777777]">Last Updated: 25 October 2026</p>
          </div>

          <div className="p-6 sm:p-10 rounded-3xl bg-[#FFFCF7] border-2 border-[#E8CC9D] shadow-sm space-y-8 text-[#555555] text-sm sm:text-base leading-relaxed">
            {sections.map(renderSection)}

            {/* Section 9 contact details and required information */}
            <div className="-mt-4 p-5 rounded-2xl bg-[#FAF5EB] border border-[#E8CC9D]">
              <p className="mb-3 font-semibold text-[#161616]">Email: {mailLink}</p>
              <p className="mb-2 text-[#161616]">Please include the following information in your email:</p>
              <ul className="list-disc pl-6 space-y-1.5 mb-3 marker:text-[#925B0A]">
                <li>Full name used during registration</li>
                <li>Email address or phone number associated with the purchase</li>
                <li>Name of the mentorship program, webinar, workshop, or service</li>
                <li>Payment date and approximate time</li>
                <li>Payment ID or transaction reference, if available</li>
                <li>Brief explanation of your request</li>
              </ul>
              <p className="mb-3">
                Please submit your request within the applicable 48-hour period and, for live sessions, before the
                session begins.
              </p>
              <p className="mb-3">
                We may request reasonable additional information to verify the transaction and determine eligibility.
              </p>
              <p className="mb-3">
                Sending a request does not constitute approval. We will review the request and communicate the
                outcome using the contact information provided.
              </p>
            </div>

            {afterRequestSections.map(renderSection)}

            <section>
              <h2 className="text-xl font-bold text-[#161616] mb-3">13. Contact Us</h2>
              <p className="mb-3">
                For refund requests, cancellation enquiries, or questions about this policy, please contact:
              </p>
              <p className="mb-1 font-semibold text-[#161616]">SKY AI Automation Systems &amp; Solutions</p>
              <p className="mb-3">Email: {mailLink}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#161616] mb-3">14. Governing Law</h2>
              <p className="mb-3">
                This policy is intended to be interpreted in accordance with the applicable laws of India, including
                applicable consumer protection, contract, payment, and data protection laws, as relevant to the
                transaction.
              </p>
              <p className="mb-3">
                If any provision of this policy is found to be unenforceable, the remaining provisions will continue
                to apply to the extent permitted by law. Mandatory legal rights and remedies will prevail over any
                conflicting provision of this policy.
              </p>
            </section>

            <div className="pt-6 border-t border-[#E8CC9D]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-[#161616]">Questions before you purchase?</h4>
                <p className="text-xs text-[#777777]">
                  Reach out to us, or register for the webinar to learn more.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs font-semibold text-[#161616] bg-[#FAF5EB] border border-[#E8CC9D] hover:border-[#D99A19] hover:text-[#925B0A] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email us
                </a>
                <Link
                  href="/#apply"
                  className="px-6 py-3 rounded-md text-xs font-semibold text-[#FFFCF7] bg-[#D99A19] hover:bg-[#925B0A] transition-all shadow-[0_4px_16px_rgba(217,154,25,0.35)]"
                >
                  Register for the webinar
                </Link>
              </div>
            </div>

            <div className="text-center">
              <p className="font-semibold text-[#161616]">SKY AI Automation Systems &amp; Solutions</p>
              <p className="text-[#777777] mt-1">
                Building practical AI skills, automation systems, and business opportunities through technology and
                education.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}