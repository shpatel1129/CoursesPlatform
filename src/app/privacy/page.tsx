import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SKY AI Automation Systems & Solutions",
  description:
    "How SKY AI Automation Systems & Solutions collects, uses, protects, and shares your personal information, and the rights you have.",
};

type Item = { label?: string; text: string };
type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: Item[] }
  | { type: "ol"; items: Item[] };
type Section = { title: string; blocks: Block[] };

const CONTACT_EMAIL = "skymentorshipsupport@gmail.com";

const sections: Section[] = [
  {
    title: "1. Introduction",
    blocks: [
      { type: "p", text: "Welcome to SKY AI Automation Systems & Solutions (“SKY,” “we,” “our,” or “us”)." },
      {
        type: "p",
        text: "We respect your privacy and are committed to protecting the personal information you share with us through our website, registration forms, webinars, mentorship programs, training sessions, communication channels, and other services.",
      },
      {
        type: "p",
        text: "This Privacy Policy explains what information we may collect, how we use and protect it, when it may be shared with third parties, and what choices and rights you may have regarding your personal information.",
      },
      {
        type: "p",
        text: "By using our website or voluntarily providing information to us, you acknowledge that you have had the opportunity to read this Privacy Policy. Where consent is legally required, we will seek it separately and appropriately. Using our website does not automatically constitute consent to every form of data processing described here.",
      },
    ],
  },
  {
    title: "2. Information We Collect",
    blocks: [
      { type: "p", text: "We collect only the information reasonably necessary for the purposes described in this Privacy Policy." },
      { type: "h3", text: "2.1 Personal Information" },
      { type: "p", text: "Depending on how you interact with us, we may collect:" },
      {
        type: "ul",
        items: [
          { text: "Full name" },
          { text: "Email address" },
          { text: "Mobile number and WhatsApp number" },
          { text: "City, state, country, or other location information you provide" },
          { text: "Age or age range, where relevant to a registration or service" },
          { text: "Professional background, occupation, interests, and learning goals" },
          { text: "Information you voluntarily submit through contact forms, enquiries, surveys, or feedback forms" },
        ],
      },
      { type: "h3", text: "2.2 Registration and Mentorship Information" },
      {
        type: "p",
        text: "When you register for a webinar, workshop, course, mentorship program, or other educational service, we may collect:",
      },
      {
        type: "ul",
        items: [
          { text: "Registration and enrolment details" },
          { text: "Your stated familiarity with AI, automation, or related technologies" },
          { text: "Your learning objectives and reasons for joining" },
          { text: "Attendance and participation records" },
          { text: "Communication history relating to your registration or enrolment" },
          { text: "Information required to provide access to learning materials, sessions, communities, or support" },
        ],
      },
      { type: "h3", text: "2.3 Payment and Transaction Information" },
      { type: "p", text: "If you purchase a service or mentorship program, payment-related information may include:" },
      {
        type: "ul",
        items: [
          { text: "Transaction reference or payment ID" },
          { text: "Purchased service or program" },
          { text: "Payment status, amount, and date" },
          { text: "Applicable refund and billing information" },
        ],
      },
      {
        type: "p",
        text: "Payments may be processed by third-party payment providers. We do not intend to collect or store complete card numbers, card security codes, UPI PINs, banking passwords, or other sensitive payment authentication credentials on our own systems. Such information should be provided only through the relevant payment provider’s authorised interface.",
      },
      { type: "h3", text: "2.4 Technical and Usage Information" },
      {
        type: "p",
        text: "When you visit our website, certain technical information may be collected automatically, depending on the website configuration and tools used. This may include:",
      },
      {
        type: "ul",
        items: [
          { text: "IP address and approximate location" },
          { text: "Browser type, device type, and operating system" },
          { text: "Pages visited, referring pages, and time spent on the website" },
          { text: "Website interaction and diagnostic information" },
          { text: "Cookie identifiers and similar technical data, where applicable" },
        ],
      },
      { type: "h3", text: "2.5 Communication Information" },
      {
        type: "p",
        text: "When you contact us by email, telephone, WhatsApp, social media, or another supported channel, we may collect the information you choose to share, together with relevant communication records needed to respond to your enquiry or provide our services.",
      },
      {
        type: "p",
        text: "Please avoid sending passwords, payment authentication details, or unnecessary sensitive personal information through these channels.",
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    blocks: [
      { type: "p", text: "We may use personal information for the following purposes:" },
      {
        type: "ol",
        items: [
          { label: "To respond to enquiries:", text: "Answer questions, contact prospective customers, and provide information about our services." },
          { label: "To manage registrations:", text: "Process webinar, workshop, course, and mentorship registrations and maintain enrolment records." },
          { label: "To deliver services:", text: "Provide access to sessions, learning resources, mentorship support, communities, and related services." },
          { label: "To process payments:", text: "Confirm transactions, maintain payment records, handle refunds, and resolve billing issues." },
          { label: "To communicate with you:", text: "Send registration confirmations, session links, reminders, important announcements, service updates, and support messages." },
          { label: "To provide relevant information:", text: "Share details about our AI automation services, educational programs, and related offerings, where permitted and subject to applicable consent requirements." },
          { label: "To improve our services:", text: "Understand user feedback, assess participation, troubleshoot technical issues, and improve website usability and learning experiences." },
          { label: "To maintain security:", text: "Detect suspicious activity, prevent fraud, protect our systems, and investigate misuse." },
          { label: "To meet legal obligations:", text: "Maintain required records, respond to lawful requests, and comply with applicable tax, accounting, consumer protection, and other legal requirements." },
        ],
      },
      {
        type: "p",
        text: "We will not use your personal information for purposes that are incompatible with the purpose for which it was collected, unless permitted by applicable law or supported by the necessary consent.",
      },
    ],
  },
  {
    title: "4. WhatsApp, Email, and Other Communications",
    blocks: [
      {
        type: "p",
        text: "If you provide your contact details when registering for a webinar or purchasing a service, we may use them to send communications reasonably connected with your registration, transaction, or ongoing service.",
      },
      {
        type: "p",
        text: "Marketing messages and promotional communications will be sent only where permitted by applicable law and with any consent required.",
      },
      {
        type: "p",
        text: "You may request to stop promotional emails or messages by using an available unsubscribe option or contacting us directly. You may also use WhatsApp’s available blocking or reporting features.",
      },
      {
        type: "p",
        text: "Opting out of marketing will not necessarily stop essential transactional messages, such as payment confirmations, refund updates, or important service-related notifications.",
      },
      {
        type: "p",
        text: "Providing a phone number for a registration does not, by itself, mean that you have consented to every category of promotional communication.",
      },
    ],
  },
  {
    title: "5. Cookies and Similar Technologies",
    blocks: [
      {
        type: "p",
        text: "Our website may use cookies, pixels, analytics tools, or similar technologies to support website functionality and understand website usage.",
      },
      { type: "p", text: "These technologies may be used to:" },
      {
        type: "ul",
        items: [
          { text: "Remember relevant website preferences" },
          { text: "Maintain website functionality and security" },
          { text: "Understand traffic and visitor interactions" },
          { text: "Measure the performance of website content or campaigns" },
          { text: "Support advertising measurement or personalisation, if implemented" },
        ],
      },
      {
        type: "p",
        text: "Where required, we will provide appropriate notice and obtain consent before using non-essential cookies or similar technologies.",
      },
      {
        type: "p",
        text: "You may be able to manage cookies through your browser settings. Blocking certain cookies may affect some website features.",
      },
      {
        type: "p",
        text: "The specific cookies and tracking technologies used will depend on the tools actually installed on our website.",
      },
    ],
  },
  {
    title: "6. When We Share Your Information",
    blocks: [
      {
        type: "p",
        text: "We do not sell your personal information as a business practice. We may share relevant information with the following categories of recipients when necessary for the purposes described in this policy:",
      },
      { type: "h3", text: "6.1 Service Providers" },
      { type: "p", text: "These may include providers of:" },
      {
        type: "ul",
        items: [
          { text: "Website hosting and website development" },
          { text: "Forms, spreadsheets, and registration management" },
          { text: "Email delivery and communication services" },
          { text: "WhatsApp or messaging services" },
          { text: "Video conferencing and online learning platforms" },
          { text: "Payment processing and transaction management" },
          { text: "Analytics, security, and technical support" },
        ],
      },
      {
        type: "p",
        text: "Such providers may process information on our behalf or independently under their own applicable privacy terms.",
      },
      { type: "h3", text: "6.2 AI and Automation Tools" },
      {
        type: "p",
        text: "We may use AI-powered or automated tools to help manage enquiries, provide customer support, organise registrations, deliver business services, or improve operational efficiency.",
      },
      {
        type: "p",
        text: "Where personal information is processed through such tools, we will seek to limit the information shared to what is reasonably necessary and use appropriate safeguards and permissions.",
      },
      {
        type: "p",
        text: "The privacy and data-handling practices of the relevant third-party provider may also apply. We will not intentionally submit unnecessary sensitive personal information to AI tools.",
      },
      { type: "h3", text: "6.3 Legal and Regulatory Authorities" },
      {
        type: "p",
        text: "We may disclose information when reasonably necessary to comply with applicable laws, valid legal processes, regulatory requirements, or lawful requests from competent authorities, or to protect our legal rights and the safety of individuals.",
      },
      { type: "h3", text: "6.4 Business Transfers" },
      {
        type: "p",
        text: "If our business undergoes a merger, restructuring, acquisition, or transfer of relevant assets, personal information may be transferred as part of that transaction, subject to applicable law and appropriate safeguards.",
      },
      {
        type: "p",
        text: "We do not authorise third parties to use your personal information for unrelated purposes merely because they provide services to us.",
      },
    ],
  },
  {
    title: "7. Third-Party Websites and Platforms",
    blocks: [
      {
        type: "p",
        text: "Our website or communications may contain links to third-party websites, platforms, payment pages, registration forms, video conferencing services, or social media services.",
      },
      {
        type: "p",
        text: "These third parties operate under their own terms and privacy policies. We do not control their independent data practices and are not responsible for privacy practices outside our control.",
      },
      {
        type: "p",
        text: "We encourage you to review the applicable privacy policy before submitting personal information directly to a third-party platform.",
      },
    ],
  },
  {
    title: "8. Data Security",
    blocks: [
      {
        type: "p",
        text: "We take reasonable steps, appropriate to the nature of the information and the risks involved, to protect personal information against unauthorised access, disclosure, alteration, loss, and misuse.",
      },
      { type: "p", text: "Depending on the systems used, safeguards may include:" },
      {
        type: "ul",
        items: [
          { text: "Access restrictions and account permissions" },
          { text: "Strong passwords and multi-factor authentication, where available" },
          { text: "Secure connections and supported encryption features" },
          { text: "Appropriate security settings for forms, spreadsheets, and stored records" },
          { text: "Limiting access to authorised personnel and service providers" },
          { text: "Reviewing access permissions and removing unnecessary access" },
          { text: "Maintaining reasonable procedures for identifying and responding to security incidents" },
        ],
      },
      {
        type: "p",
        text: "No method of transmitting or storing information electronically is completely secure. Therefore, we cannot guarantee absolute security.",
      },
      {
        type: "p",
        text: "If a personal data breach occurs, we will take appropriate steps to investigate, contain, and address it and provide notifications where required by applicable law.",
      },
    ],
  },
  {
    title: "9. Data Retention and Deletion",
    blocks: [
      {
        type: "p",
        text: "We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, provide our services, resolve disputes, maintain legitimate business records, and comply with applicable legal obligations.",
      },
      { type: "p", text: "Different categories of information may have different retention periods. For example:" },
      {
        type: "ul",
        items: [
          { text: "Enquiry information may be retained while an enquiry is active and for a reasonable period afterwards." },
          { text: "Registration and attendance records may be retained for administering and reviewing educational programs." },
          { text: "Payment and accounting records may be retained for the period required under applicable law." },
          { text: "Consent and communication records may be retained as necessary to demonstrate compliance and manage communication preferences." },
          { text: "Technical logs may be retained for a limited period based on security and operational needs." },
        ],
      },
      {
        type: "p",
        text: "When personal information is no longer required, we will take reasonable steps to delete it or render it unusable, subject to applicable legal requirements and legitimate retention needs.",
      },
      {
        type: "p",
        text: "You may request deletion of your personal information, subject to applicable law. Certain records may need to be retained where legally required or necessary to establish, exercise, or defend legal claims.",
      },
    ],
  },
  {
    title: "10. Your Privacy Rights",
    blocks: [
      { type: "p", text: "Subject to applicable law, you may have the right to:" },
      {
        type: "ul",
        items: [
          { label: "Access information:", text: "Request information about the personal data we process about you." },
          { label: "Correction:", text: "Request correction of inaccurate or incomplete personal information." },
          { label: "Erasure:", text: "Request deletion of personal information that is no longer required or that must be deleted under applicable law." },
          { label: "Withdraw consent:", text: "Withdraw consent where processing is based on consent. Withdrawal will not retrospectively invalidate processing that was lawful before withdrawal." },
          { label: "Manage communications:", text: "Opt out of promotional communications, subject to the distinction between marketing and essential service messages." },
          { label: "Raise grievances:", text: "Contact us to raise a concern about how your personal information is handled." },
          { label: "Nominate another person:", text: "Exercise a nomination right where provided under applicable law." },
        ],
      },
      {
        type: "p",
        text: "To exercise a privacy right or raise a concern, please contact us using the email address provided in the Contact Us section. We may request reasonable information to verify your identity before acting on a request.",
      },
      {
        type: "p",
        text: "We will respond within the period required by applicable law. Some requests may be limited where an exception applies or where retention is legally required.",
      },
    ],
  },
  {
    title: "11. Children’s Privacy",
    blocks: [
      {
        type: "p",
        text: "Our services are primarily intended for individuals who can lawfully access the relevant services and enter into the applicable arrangements.",
      },
      {
        type: "p",
        text: "We do not knowingly collect children’s personal information beyond what is permitted by applicable law. Where required, we will obtain verifiable parental or lawful guardian consent and apply any additional safeguards required for children.",
      },
      {
        type: "p",
        text: "If you believe that a child has provided personal information in circumstances that are not permitted, please contact us so that we can review the matter and take appropriate action.",
      },
    ],
  },
  {
    title: "12. International Data Transfers",
    blocks: [
      {
        type: "p",
        text: "Some third-party platforms we use may store or process information on servers located outside India.",
      },
      {
        type: "p",
        text: "Where personal information is transferred internationally, we will take steps required by applicable Indian law and any relevant legal restrictions or government directions.",
      },
      {
        type: "p",
        text: "The applicable privacy protections may differ depending on the service provider and the location where information is processed.",
      },
    ],
  },
  {
    title: "13. Automated Processing and AI",
    blocks: [
      {
        type: "p",
        text: "We may use automated systems or AI tools to assist with operational tasks, such as organising enquiries, categorising registrations, responding to routine questions, or supporting customer communications.",
      },
      {
        type: "p",
        text: "Where applicable, we will take reasonable steps to ensure that such processing is relevant to the stated purpose and appropriately controlled.",
      },
      {
        type: "p",
        text: "We do not intend for automated processing alone to override any rights you may have under applicable law. Where required, we will provide relevant information or support concerning the processing of your personal data.",
      },
    ],
  },
  {
    title: "14. Changes to This Privacy Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Privacy Policy from time to time to reflect changes in our services, website features, technology, business operations, or legal requirements.",
      },
      {
        type: "p",
        text: "When changes are made, we will update the “Last Updated” date on this page. Where required by applicable law, we will provide additional notice or seek renewed consent before implementing changes that require it.",
      },
      { type: "p", text: "We encourage you to review this page periodically." },
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
        <h3 key={i} className="text-base font-semibold text-white mt-5 mb-2">
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
    case "ol":
      return (
        <ol key={i} className="list-decimal pl-6 space-y-1.5 mb-3 marker:text-slate-500">
          {block.items.map((item, j) => (
            <li key={j}>{renderItem(item)}</li>
          ))}
        </ol>
      );
  }
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAF5EB] text-[#161616] flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#161616] tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-base text-[#555555] mb-1">SKY AI Automation Systems &amp; Solutions</p>
          <p className="text-sm text-[#777777] mb-8">Last Updated: 25 October 2026</p>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFCF7] border-2 border-[#E8CC9D] shadow-sm space-y-8 text-sm text-[#555555] leading-relaxed">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-bold text-[#161616] mb-3">{section.title}</h2>
                {section.blocks.map(renderBlock)}
              </section>
            ))}

            <section>
              <h2 className="text-lg font-bold text-[#161616] mb-3">15. Contact Us</h2>
              <p className="mb-3">
                If you have questions about this Privacy Policy, wish to exercise your privacy rights, or want to
                raise a concern relating to your personal information, you can contact us at:
              </p>
              <p className="mb-3">
                Email:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[#925B0A] hover:text-[#D99A19] underline underline-offset-2 font-semibold"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#161616] mb-3">16. Applicable Law</h2>
              <p className="mb-3">
                This Privacy Policy is intended to be interpreted in accordance with the applicable laws of India,
                including relevant data protection and information technology laws, as applicable to our activities.
              </p>
              <p className="mb-3">
                Nothing in this policy is intended to exclude or limit any rights that cannot lawfully be excluded
                or limited.
              </p>
            </section>

            <div className="pt-6 border-t border-[#E8CC9D]/50 text-center">
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