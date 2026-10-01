export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  rating: number;
  coursePurchased: string;
  courseSlug: string;
  comment: string;
  verified: boolean;
  highlight?: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Williams",
    role: "Founder & Creative Director",
    company: "Bloom Studio",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    coursePurchased: "Digital Marketing Masterclass",
    courseSlug: "digital-marketing-masterclass",
    comment: "This course completely transformed our agency's revenue model. The Meta and Google Ad frameworks alone helped us scale past $40k/month within 90 days. Every lesson was packed with actionable, real-world examples.",
    verified: true,
    highlight: "Scaled past $40k/mo in 90 days",
    date: "March 2026"
  },
  {
    id: "t2",
    name: "Michael Chang",
    role: "Full-Stack Software Engineer",
    company: "TechFlow Systems",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    coursePurchased: "Full-Stack Web Development Bootcamp",
    courseSlug: "full-stack-web-development-bootcamp",
    comment: "I went from learning in tutorial loops to landing a $95,000/year developer role. The full-stack SaaS project in Next.js 15 and PostgreSQL became the centerpiece of my portfolio that impressed every hiring manager.",
    verified: true,
    highlight: "Landed $95k Developer Offer",
    date: "April 2026"
  },
  {
    id: "t3",
    name: "Sophia Vance",
    role: "Senior UI/UX Lead",
    company: "Apex Product Labs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    coursePurchased: "UI/UX Design Mastery with Figma",
    courseSlug: "ui-ux-design-mastery-figma",
    comment: "The depth of design systems and variable modes taught here is unmatched anywhere else online. I restructured our product team's design architecture and cut design-to-development cycles in half.",
    verified: true,
    highlight: "50% Faster Design Velocity",
    date: "May 2026"
  },
  {
    id: "t4",
    name: "David Chen",
    role: "Head of Growth",
    company: "VentureScale AI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    coursePurchased: "AI & Prompt Engineering for Business",
    courseSlug: "ai-prompt-engineering-automation",
    comment: "We automated our inbound lead triage and research workflows with the Make and Claude pipeline blueprints from this course. It saved our 12-person team over 60 hours every single week.",
    verified: true,
    highlight: "Saved 60+ hrs/week for team",
    date: "June 2026"
  },
  {
    id: "t5",
    name: "Elena Rostova",
    role: "Strategic B2B Consultant",
    company: "Rostova Advisory",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    coursePurchased: "High-Ticket Sales & Negotiation Mastery",
    courseSlug: "high-ticket-sales-negotiation-mastery",
    comment: "Closed our highest retainer client to date ($12,000/quarter) using the exact objection handling framework and discovery call structure. Unbelievable return on investment.",
    verified: true,
    highlight: "Closed $12,000 Client Retainer",
    date: "July 2026"
  },
  {
    id: "t6",
    name: "Daniel Foster",
    role: "Co-Founder & CEO",
    company: "FlowGrid",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    coursePurchased: "Startup Growth & Business Strategy",
    courseSlug: "startup-growth-business-strategy",
    comment: "The financial model spreadsheet, unit economics breakdowns, and investor pitch deck tear-downs helped us close our $750,000 pre-seed funding round with multiple term sheets.",
    verified: true,
    highlight: "Raised $750k Pre-Seed Round",
    date: "August 2026"
  }
];
