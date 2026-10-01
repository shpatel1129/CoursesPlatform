export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'access' | 'certificate' | 'payments' | 'curriculum';
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "access",
    question: "How do I access the course after purchasing?",
    answer: "Immediately upon completing your payment, you will receive instant access to the course player, download links for all source files, templates, and an invitation to our private student community. A welcome email containing your login credentials and instant access link is also dispatched automatically to your email."
  },
  {
    id: "faq-2",
    category: "access",
    question: "Do I get lifetime access to all materials and future updates?",
    answer: "Yes! When you enroll in any of our masterclasses, you receive 100% lifetime access. You can learn at your own pace, revisit any lesson whenever you need a refresher, and automatically receive all future curriculum updates at no extra charge."
  },
  {
    id: "faq-3",
    category: "curriculum",
    question: "Are the courses beginner-friendly or do I need prior experience?",
    answer: "Our courses are carefully structured to take you from foundational fundamentals all the way to advanced industry mastery. Even if you are starting with zero previous knowledge, each module builds step-by-step with practical assignments and hands-on guidance."
  },
  {
    id: "faq-4",
    category: "certificate",
    question: "Do I receive a verified certificate upon completion?",
    answer: "Yes! After completing all video modules and passing the final capstone project or assessment, you will receive an official verifiable digital Certificate of Completion. You can easily share it on LinkedIn, download a high-res PDF, and attach it to your resume."
  },
  {
    id: "faq-5",
    category: "access",
    question: "Can I watch the course on mobile, tablet, and desktop?",
    answer: "Absolutely. Our learning platform is fully responsive and optimized for mobile phones (iOS and Android), tablets, laptops, and desktop computers. You can switch between devices seamlessly with synchronized video progress."
  },
  {
    id: "faq-6",
    category: "curriculum",
    question: "Are course updates and new lessons included for free?",
    answer: "Yes. Technology and marketing strategies evolve rapidly. Whenever our instructors record new modules, update framework versions, or add new templates, you will receive these updates completely free as an existing student."
  },
  {
    id: "faq-7",
    category: "payments",
    question: "What payment methods are available?",
    answer: "We support all major international Credit/Debit Cards (Visa, MasterCard, American Express, Discover), PayPal, UPI, Net Banking, and Apple Pay/Google Pay via our secure 256-bit encrypted checkout."
  },
  {
    id: "faq-8",
    category: "payments",
    question: "What happens right after my payment is successful?",
    answer: "You will be redirected immediately to your personalized Order Confirmation & Onboarding portal. You can start streaming your first lesson in under 60 seconds."
  },
  {
    id: "faq-9",
    category: "payments",
    question: "Can I get a refund if the course isn't right for me?",
    answer: "Yes, we offer a 30-day 100% risk-free money-back guarantee. If you go through the materials, do the exercises, and feel the course did not deliver immense value, simply contact our support team within 30 days for a prompt, hassle-free refund."
  }
];
