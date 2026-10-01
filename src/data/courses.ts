export interface ModuleLesson {
  id: string;
  title: string;
  duration: string;
  isPreview?: boolean;
  type: 'video' | 'quiz' | 'assignment' | 'resource';
}

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  lessons: ModuleLesson[];
}

export interface Instructor {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  studentsCount: number;
  rating: number;
  experience: string;
}

export interface CourseReview {
  id: string;
  studentName: string;
  studentRole: string;
  studentAvatar: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface CourseFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  headline: string;
  description: string;
  longDescription: string;
  category: 'Marketing' | 'Business' | 'Technology' | 'Design' | 'Personal Development' | 'Career';
  badge?: 'Best Seller' | 'Trending' | 'Popular' | 'New' | 'Top Rated';
  instructor: Instructor;
  image: string;
  videoPreviewUrl?: string;
  price: number;
  salePrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  studentsCount: number;
  duration: string;
  lessonsCount: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Beginner to Advanced' | 'Intermediate to Advanced' | 'All Levels';
  language: string;
  lastUpdated: string;
  lifetimeAccess: boolean;
  certificate: boolean;
  downloadableResources: number;
  assignmentsCount: number;
  whatYouWillLearn: string[];
  requirements: string[];
  targetAudience: string[];
  modules: CourseModule[];
  features: CourseFeature[];
  reviews: CourseReview[];
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "digital-marketing-masterclass",
    title: "Digital Marketing Masterclass",
    headline: "The Complete Guide to Modern Growth, Performance Ads, SEO & Omnichannel Funnels",
    description: "Learn how to build, launch, and scale profitable digital marketing campaigns from scratch using cutting-edge tactics and ROI-driven strategies.",
    longDescription: "Master the full spectrum of modern digital marketing. From setting up multi-stage conversion funnels, running hyper-targeted Meta & Google Ads, dominating search engine rankings with advanced technical SEO, to building viral email sequences and social growth engines. Designed by industry-leading growth architects who have scaled brands to 8 figures in revenue.",
    category: "Marketing",
    badge: "Best Seller",
    instructor: {
      name: "Marcus Vance",
      role: "Chief Growth Officer & Ex-Google Strategist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Marcus has led growth marketing for Fortune 500 brands and high-velocity startups, overseeing $45M+ in profitable ad spend over the past 10 years.",
      studentsCount: 48500,
      rating: 4.95,
      experience: "12+ Years Experience"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    price: 199,
    salePrice: 99,
    discountPercent: 50,
    rating: 4.9,
    reviewCount: 1250,
    studentsCount: 10450,
    duration: "14 Hours",
    lessonsCount: 48,
    level: "Beginner to Advanced",
    language: "English (Subtitles in 12 languages)",
    lastUpdated: "October 2026",
    lifetimeAccess: true,
    certificate: true,
    downloadableResources: 32,
    assignmentsCount: 8,
    whatYouWillLearn: [
      "Build a complete 360° digital marketing and sales funnel strategy",
      "Master Google Ads (Search, Display, Performance Max) for maximum ROAS",
      "Run profitable Meta Ads (Facebook & Instagram) with custom audiences & pixel tracking",
      "Execute high-impact Technical, On-Page & Off-Page SEO that ranks on Google page 1",
      "Automate email marketing workflows with high open and click-through rates",
      "Analyze data, attribution models, and conversion tracking using GA4 and GTM",
      "Create viral organic content that drives qualified inbound leads consistently",
      "Build scalable growth reporting dashboards for clients or stakeholders"
    ],
    requirements: [
      "No prior marketing experience required — start from ground zero",
      "A computer with internet access and a web browser",
      "A willingness to practice and execute real campaign exercises"
    ],
    targetAudience: [
      "Entrepreneurs and business owners wanting more customer acquisition",
      "Aspiring digital marketers looking for high-paying remote careers",
      "Freelancers wanting to charge $3k-$10k/month for marketing retainers",
      "Traditional marketers transitioning to modern data-driven performance marketing"
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 — Foundations of High-Converting Marketing",
        duration: "2 hrs 15 mins",
        lessons: [
          { id: "l1", title: "Welcome & How to Maximize This Masterclass", duration: "10:15", isPreview: true, type: "video" },
          { id: "l2", title: "Customer Persona Mapping & Market Research", duration: "25:40", isPreview: true, type: "video" },
          { id: "l3", title: "Value Propositions & Irresistible Offer Design", duration: "32:10", isPreview: false, type: "video" },
          { id: "l4", title: "Worksheet: Define Your Core Buyer Archetype", duration: "15:00", isPreview: false, type: "assignment" }
        ]
      },
      {
        id: "m2",
        title: "Module 2 — Meta Ads Engine (Facebook & Instagram Mastery)",
        duration: "3 hrs 40 mins",
        lessons: [
          { id: "l5", title: "Meta Business Manager Setup & Conversion API", duration: "22:30", isPreview: false, type: "video" },
          { id: "l6", title: "Audience Targeting & Lookalike Architecture", duration: "35:10", isPreview: false, type: "video" },
          { id: "l7", title: "High-CTR Creative Blueprint & Ad Copy Frameworks", duration: "48:20", isPreview: false, type: "video" },
          { id: "l8", title: "Live Campaign Launch: $0 to $1,000/Day Scaling Walkthrough", duration: "54:00", isPreview: false, type: "video" }
        ]
      },
      {
        id: "m3",
        title: "Module 3 — Google Ads & Search Intent Dominance",
        duration: "3 hrs 10 mins",
        lessons: [
          { id: "l9", title: "Search Engine Keyword Intent & Quality Score", duration: "28:15", isPreview: false, type: "video" },
          { id: "l10", title: "Performance Max Campaigns & Smart Bidding Strategies", duration: "42:30", isPreview: false, type: "video" },
          { id: "l11", title: "Negative Keywords & Eliminating Wasted Budget", duration: "20:45", isPreview: false, type: "video" }
        ]
      },
      {
        id: "m4",
        title: "Module 4 — SEO & Organic Discovery Strategy",
        duration: "2 hrs 50 mins",
        lessons: [
          { id: "l12", title: "Keyword Clustering & Content Hub Architecture", duration: "34:20", isPreview: false, type: "video" },
          { id: "l13", title: "Core Web Vitals & Technical Crawl Optimization", duration: "30:15", isPreview: false, type: "video" },
          { id: "l14", title: "Authority Backlinks & Digital PR Campaigns", duration: "38:40", isPreview: false, type: "video" }
        ]
      },
      {
        id: "m5",
        title: "Module 5 — Email Automation & Retention Funnels",
        duration: "2 hrs 05 mins",
        lessons: [
          { id: "l15", title: "Lead Magnet Creation & High-Opt-in Squeeze Pages", duration: "26:30", isPreview: false, type: "video" },
          { id: "l16", title: "7-Day Welcome Nurture Sequence That Prints Sales", duration: "35:00", isPreview: false, type: "video" },
          { id: "l17", title: "Final Capstone Project & Certificate Verification", duration: "20:00", isPreview: false, type: "quiz" }
        ]
      }
    ],
    features: [
      { icon: "ShieldCheck", title: "Lifetime Access", description: "Learn at your own pace with unlimited perpetual access to all materials." },
      { icon: "FileText", title: "32 Downloadable Templates", description: "Get copy-paste ad scripts, budget calculators, and SEO checklists." },
      { icon: "Award", title: "Industry Certificate", description: "Receive a verifiable credential to display on LinkedIn and resumes." },
      { icon: "Users", title: "Private Student Community", description: "Network with over 10,000+ marketers and get instructor feedback." },
      { icon: "RefreshCw", title: "Free Regular Updates", description: "New lessons added quarterly as ad platform algorithms evolve." },
      { icon: "Smartphone", title: "Mobile & Tablet Ready", description: "Stream lessons smoothly on any device anytime, anywhere." }
    ],
    reviews: [
      {
        id: "r1",
        studentName: "Sarah Williams",
        studentRole: "Founder, Bloom Studio",
        studentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "2 days ago",
        comment: "This course completely changed the way I approach digital marketing. The lessons are practical, clear, and actionable. We doubled our monthly revenue within 6 weeks of applying the Meta ads framework!",
        verified: true
      },
      {
        id: "r2",
        studentName: "David Chen",
        studentRole: "Senior Growth Marketer",
        studentAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "1 week ago",
        comment: "Easily the best investment I've made in my career. The attribution and GA4 tracking module alone saved our agency hundreds of hours and thousands in misallocated ad spend.",
        verified: true
      },
      {
        id: "r3",
        studentName: "Elena Rostova",
        studentRole: "Freelance Consultant",
        studentAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "2 weeks ago",
        comment: "Marcus explains complex concepts in a friendly, no-nonsense way. Landed two new high-ticket clients right after completing the offer creation module.",
        verified: true
      }
    ]
  },
  {
    id: "2",
    slug: "full-stack-web-development-bootcamp",
    title: "Full-Stack Web Development Bootcamp",
    headline: "Build Modern Web Applications with React, Next.js 15, TypeScript & Node.js",
    description: "From zero programming knowledge to building production-ready, scalable full-stack web applications with modern architecture and deployment pipelines.",
    longDescription: "Step into modern software engineering with this comprehensive full-stack program. You will build 6 real-world portfolio projects including a SaaS platform, an AI wrapper app, and a complete e-commerce marketplace using Next.js App Router, Tailwind CSS, PostgreSQL with Prisma, NextAuth, and Stripe.",
    category: "Technology",
    badge: "Trending",
    instructor: {
      name: "Alex Rivera",
      role: "Staff Software Engineer & Tech Lead",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      bio: "Alex has 10+ years of engineering leadership at top tech companies in Silicon Valley and has mentored thousands of engineers into 6-figure roles.",
      studentsCount: 62000,
      rating: 4.97,
      experience: "10+ Years Experience"
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    price: 249,
    salePrice: 129,
    discountPercent: 48,
    rating: 4.95,
    reviewCount: 2180,
    studentsCount: 14800,
    duration: "26 Hours",
    lessonsCount: 92,
    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "October 2026",
    lifetimeAccess: true,
    certificate: true,
    downloadableResources: 45,
    assignmentsCount: 14,
    whatYouWillLearn: [
      "Master TypeScript, JavaScript ES6+, and modern clean coding practices",
      "Build dynamic UIs with React 19, Server Components, Hooks, and State Management",
      "Master Next.js App Router, Server Actions, Dynamic Routing, and Middleware",
      "Design relational databases with PostgreSQL, Prisma ORM, and Supabase",
      "Implement secure authentication, RBAC, OAuth, and session management",
      "Integrate Stripe payments, webhooks, and subscription lifecycles",
      "Deploy scalable production applications with Vercel, Docker, and CI/CD pipelines",
      "Write unit & integration tests using Vitest and Playwright"
    ],
    requirements: [
      "No coding background required — includes a beginner-friendly foundations module",
      "Mac, Windows, or Linux computer capable of running VS Code and Node.js"
    ],
    targetAudience: [
      "Beginners wanting to land their first full-time junior web developer job",
      "Self-taught coders wanting structured, enterprise-grade engineering practices",
      "Frontend developers wanting to level up to full-stack mastery",
      "Founders and indie hackers wanting to build their own SaaS products"
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 — Modern JavaScript & TypeScript Foundations",
        duration: "4 hrs 10 mins",
        lessons: [
          { id: "l1", title: "Modern JavaScript Deep Dive & Asynchronous Programming", duration: "32:00", isPreview: true, type: "video" },
          { id: "l2", title: "TypeScript Types, Interfaces, Generics & Utility Types", duration: "45:15", isPreview: true, type: "video" },
          { id: "l3", title: "Clean Code & Refactoring Patterns", duration: "28:30", isPreview: false, type: "video" }
        ]
      },
      {
        id: "m2",
        title: "Module 2 — React 19 & Next.js App Router Architecture",
        duration: "6 hrs 30 mins",
        lessons: [
          { id: "l4", title: "React Component Lifecycle, Custom Hooks & State", duration: "50:00", isPreview: false, type: "video" },
          { id: "l5", title: "Next.js App Router: Server Components vs Client Components", duration: "45:00", isPreview: false, type: "video" },
          { id: "l6", title: "Server Actions, Optimistic UI & Form Handling", duration: "55:00", isPreview: false, type: "video" }
        ]
      },
      {
        id: "m3",
        title: "Module 3 — Databases, ORMs & Backend APIs",
        duration: "5 hrs 20 mins",
        lessons: [
          { id: "l7", title: "Database Schema Modeling with PostgreSQL & Prisma", duration: "48:00", isPreview: false, type: "video" },
          { id: "l8", title: "REST & RPC APIs with Zod Validation & Error Handling", duration: "40:00", isPreview: false, type: "video" }
        ]
      },
      {
        id: "m4",
        title: "Module 4 — Authentication, Stripe & Production SaaS Project",
        duration: "10 hrs 00 mins",
        lessons: [
          { id: "l9", title: "NextAuth / Auth.js Implementation & Role-Based Access", duration: "55:00", isPreview: false, type: "video" },
          { id: "l10", title: "Stripe Subscriptions & Webhook Processing", duration: "60:00", isPreview: false, type: "video" },
          { id: "l11", title: "Deploying to Vercel with Custom Domains & Monitoring", duration: "35:00", isPreview: false, type: "video" }
        ]
      }
    ],
    features: [
      { icon: "ShieldCheck", title: "Lifetime Access", description: "All code repositories, starter kits, and lecture updates for life." },
      { icon: "FileCode", title: "6 Full Portfolio Projects", description: "Real source code you can customize and showcase to employers." },
      { icon: "Award", title: "Certificate of Engineering", description: "Recognized certification demonstrating real-world coding capability." },
      { icon: "MessageSquare", title: "Discord Dev Community", description: "Direct technical support, code reviews, and pair programming." }
    ],
    reviews: [
      {
        id: "r1",
        studentName: "Michael Chang",
        studentRole: "Frontend Developer at TechFlow",
        studentAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "3 days ago",
        comment: "I went from tutorial hell to landing a $95k frontend role within 4 months of finishing this bootcamp. Alex's explanation of Next.js Server Components is the clearest on the internet.",
        verified: true
      },
      {
        id: "r2",
        studentName: "Jessica Taylor",
        studentRole: "Indie Founder",
        studentAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "1 week ago",
        comment: "Built and launched my SaaS in 3 weeks using the project templates provided in this course. It already has paying users!",
        verified: true
      }
    ]
  },
  {
    id: "3",
    slug: "ui-ux-design-mastery-figma",
    title: "UI/UX Design Mastery with Figma",
    headline: "Design High-Converting Interfaces, Design Systems, and Mobile Apps Like a Pro",
    description: "Learn professional user interface & user experience design from scratch. Master Figma, wireframing, interactive prototyping, and design systems.",
    longDescription: "Transform from a beginner into a product designer capable of creating stunning, user-centered digital products. This course covers everything: visual hierarchy, color theory, typography, auto-layout 5.0, variables, micro-interactions, user research, usability testing, and developer handoff workflows.",
    category: "Design",
    badge: "Top Rated",
    instructor: {
      name: "Sophia Martinez",
      role: "Principal Product Designer",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "Sophia has designed interfaces for Apple design award winners and fintech apps used by over 20M users worldwide.",
      studentsCount: 34000,
      rating: 4.96,
      experience: "9+ Years Experience"
    },
    image: "https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=800&q=80",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    price: 179,
    salePrice: 89,
    discountPercent: 50,
    rating: 4.92,
    reviewCount: 940,
    studentsCount: 7800,
    duration: "16 Hours",
    lessonsCount: 54,
    level: "All Levels",
    language: "English",
    lastUpdated: "September 2026",
    lifetimeAccess: true,
    certificate: true,
    downloadableResources: 50,
    assignmentsCount: 10,
    whatYouWillLearn: [
      "Master Figma from fundamentals to advanced auto-layout and components",
      "Build scalable, enterprise-level design systems with Figma variables and modes",
      "Conduct actionable user research, journey mapping, and empathy interviews",
      "Create high-fidelity interactive prototypes with realistic micro-animations",
      "Design conversion-optimized web landing pages and iOS/Android mobile apps",
      "Master typography, spacing grids, contrast ratios, and visual balance",
      "Export assets and write clear developer handoff specifications",
      "Create a compelling UI/UX portfolio that gets you hired"
    ],
    requirements: [
      "No prior design experience needed",
      "Free Figma account and a modern browser"
    ],
    targetAudience: [
      "Aspiring product designers and UI/UX freelancers",
      "Developers who want to make their apps look polished and beautiful",
      "Product managers wanting to design better prototypes and collaborate with teams"
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 — UI Design Fundamentals & Figma Basics",
        duration: "3 hrs 00 mins",
        lessons: [
          { id: "l1", title: "Visual Hierarchy, Spacing Grids & White Space", duration: "25:00", isPreview: true, type: "video" },
          { id: "l2", title: "Figma Interface, Frames, Shapes & Vector Networks", duration: "35:00", isPreview: true, type: "video" },
          { id: "l3", title: "Color Palettes & Typography Selection Guide", duration: "30:00", isPreview: false, type: "video" }
        ]
      },
      {
        id: "m2",
        title: "Module 2 — Advanced Figma: Auto-Layout & Design Systems",
        duration: "5 hrs 30 mins",
        lessons: [
          { id: "l4", title: "Mastering Nested Auto-Layout & Responsive Constraints", duration: "45:00", isPreview: false, type: "video" },
          { id: "l5", title: "Building Reusable Components, Variants & Properties", duration: "50:00", isPreview: false, type: "video" },
          { id: "l6", title: "Figma Variables & Dynamic Light/Dark Mode Tokens", duration: "40:00", isPreview: false, type: "video" }
        ]
      },
      {
        id: "m3",
        title: "Module 3 — UX Research, Wireframes & App Prototyping",
        duration: "4 hrs 45 mins",
        lessons: [
          { id: "l7", title: "User Flows, Information Architecture & Low-Fi Wireframes", duration: "35:00", isPreview: false, type: "video" },
          { id: "l8", title: "Designing a Complete iOS Banking & Investment App", duration: "60:00", isPreview: false, type: "video" },
          { id: "l9", title: "Smart Animate & Interactive Prototyping Tricks", duration: "45:00", isPreview: false, type: "video" }
        ]
      },
      {
        id: "m4",
        title: "Module 4 — Developer Handoff & Portfolio Building",
        duration: "2 hrs 45 mins",
        lessons: [
          { id: "l10", title: "Figma Dev Mode, Inspect & Documentation", duration: "30:00", isPreview: false, type: "video" },
          { id: "l11", title: "Case Study Writing Framework for Your Portfolio", duration: "40:00", isPreview: false, type: "video" }
        ]
      }
    ],
    features: [
      { icon: "Layers", title: "Complete UI Kit Included", description: "Get our commercial Figma design system with 250+ components." },
      { icon: "ShieldCheck", title: "Lifetime Access", description: "Full updates whenever Figma releases major features." },
      { icon: "Award", title: "Certified Product Designer", description: "Industry-standard credential for your resume." }
    ],
    reviews: [
      {
        id: "r1",
        studentName: "Liam O'Connor",
        studentRole: "UI/UX Designer at Apex Digital",
        studentAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "5 days ago",
        comment: "Sophia’s design system breakdown is world-class. I revamped our entire company Figma library after module 2 and our team velocity increased by 40%.",
        verified: true
      }
    ]
  },
  {
    id: "4",
    slug: "ai-prompt-engineering-automation",
    title: "AI & Prompt Engineering for Business",
    headline: "Automate Workflows, Build AI Agents, and 10x Productivity with LLMs",
    description: "Harness OpenAI GPT-4o, Claude 3.5, LangChain, and automation tools to streamline business operations, build AI tools, and eliminate repetitive tasks.",
    longDescription: "Generative AI is reshaping every industry. In this practical, hands-on masterclass, you will learn advanced prompt engineering frameworks, Retrieval-Augmented Generation (RAG) principles, workflow automation with Make.com & Zapier, and how to build autonomous AI agents that run client operations on autopilot.",
    category: "Technology",
    badge: "Popular",
    instructor: {
      name: "Dr. Ethan Hayes",
      role: "AI Researcher & Automation Consultant",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
      bio: "Ethan has consulted on enterprise AI adoption for Fortune 100 leaders and published extensive work on prompt optimization.",
      studentsCount: 29000,
      rating: 4.93,
      experience: "8+ Years Experience"
    },
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    price: 189,
    salePrice: 95,
    discountPercent: 50,
    rating: 4.88,
    reviewCount: 820,
    studentsCount: 6500,
    duration: "11 Hours",
    lessonsCount: 38,
    level: "All Levels",
    language: "English",
    lastUpdated: "October 2026",
    lifetimeAccess: true,
    certificate: true,
    downloadableResources: 28,
    assignmentsCount: 6,
    whatYouWillLearn: [
      "Master few-shot, chain-of-thought, and tree-of-thought prompt engineering",
      "Build custom GPTs and AI workflows that execute multi-step logic",
      "Connect LLMs to real data using API endpoints and webhooks",
      "Automate email triage, customer support, and content production",
      "Build no-code AI agents with Make.com and LangChain connectors",
      "Monetize AI services by packaging solutions for business clients"
    ],
    requirements: [
      "No coding background necessary (both no-code & low-code paths included)",
      "An active OpenAI or Claude free/paid account"
    ],
    targetAudience: [
      "Business owners and executives wanting to reduce labor overhead",
      "Knowledge workers looking to save 15+ hours every week with AI automation",
      "Consultants wanting to offer lucrative AI implementation services"
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 — Advanced Prompt Engineering Frameworks",
        duration: "2 hrs 30 mins",
        lessons: [
          { id: "l1", title: "The Anatomy of a Perfect Prompt: Persona, Context, Constraints", duration: "20:00", isPreview: true, type: "video" },
          { id: "l2", title: "Chain of Thought & System Prompt Engineering", duration: "35:00", isPreview: true, type: "video" }
        ]
      },
      {
        id: "m2",
        title: "Module 2 — No-Code Workflow Automation & AI Agents",
        duration: "4 hrs 15 mins",
        lessons: [
          { id: "l3", title: "Building Multi-Step Workflows in Make.com with OpenAI API", duration: "45:00", isPreview: false, type: "video" },
          { id: "l4", title: "Automated Lead Qualification & CRM Sync Agent", duration: "50:00", isPreview: false, type: "video" }
        ]
      }
    ],
    features: [
      { icon: "ShieldCheck", title: "Lifetime Access", description: "Constant updates as new model capabilities roll out." },
      { icon: "Award", title: "Certificate of AI Competency", description: "Demonstrate verified generative AI skills." }
    ],
    reviews: [
      {
        id: "r1",
        studentName: "Rachel Adams",
        studentRole: "Operations Lead",
        studentAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "4 days ago",
        comment: "This course paid for itself within the first day. We automated our client onboarding questionnaire and saved 12 hours a week immediately.",
        verified: true
      }
    ]
  },
  {
    id: "5",
    slug: "startup-growth-business-strategy",
    title: "Startup Growth & Business Strategy",
    headline: "Scale from Zero to $1M ARR: Product-Market Fit, Unit Economics & Fundraising",
    description: "A battle-tested blueprint for founders and executives to validate ideas, build high-converting sales funnels, and scale revenue sustainably.",
    longDescription: "Building a company is hard; building a profitable, high-growth business requires rigorous strategy. Learn the exact frameworks used by Y Combinator alumni to discover product-market fit, optimize customer lifetime value (LTV) to customer acquisition cost (CAC), close enterprise deals, and pitch venture capital investors.",
    category: "Business",
    badge: "Trending",
    instructor: {
      name: "Victoria Sterling",
      role: "Venture Partner & 2x Serial Founder",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
      bio: "Victoria has scaled and exited two venture-backed software companies and currently advises early-stage tech founders.",
      studentsCount: 19500,
      rating: 4.94,
      experience: "14+ Years Experience"
    },
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    price: 229,
    salePrice: 119,
    discountPercent: 48,
    rating: 4.91,
    reviewCount: 650,
    studentsCount: 4300,
    duration: "13 Hours",
    lessonsCount: 42,
    level: "Intermediate",
    language: "English",
    lastUpdated: "September 2026",
    lifetimeAccess: true,
    certificate: true,
    downloadableResources: 36,
    assignmentsCount: 7,
    whatYouWillLearn: [
      "Identify high-demand market niches and test product-market fit with pre-sales",
      "Model unit economics: CAC, LTV, churn rate, gross margins, and payback periods",
      "Build a predictable outbound B2B sales pipeline that converts cold prospects",
      "Create high-converting pitch decks and navigate seed & Series A funding rounds",
      "Establish high-velocity team operating cadences (OKRs, KPIs, agile sprints)",
      "Scale marketing channels with repeatable viral loops and referral programs"
    ],
    requirements: [
      "Basic understanding of business concepts",
      "An active business idea or existing business you wish to scale"
    ],
    targetAudience: [
      "Early-stage founders, co-founders, and solo entrepreneurs",
      "Business development and operations managers",
      "Professionals planning to leave corporate jobs to launch their own venture"
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 — Product-Market Fit & Customer Discovery",
        duration: "3 hrs 00 mins",
        lessons: [
          { id: "l1", title: "The PMF Engine: Surveying & Identifying The Burning Problem", duration: "30:00", isPreview: true, type: "video" },
          { id: "l2", title: "Validating Pricing Before Writing a Single Line of Code", duration: "35:00", isPreview: true, type: "video" }
        ]
      },
      {
        id: "m2",
        title: "Module 2 — Financial Modeling & Unit Economics",
        duration: "3 hrs 30 mins",
        lessons: [
          { id: "l3", title: "Building a 3-Year Pro Forma Financial Model (Excel Template Included)", duration: "45:00", isPreview: false, type: "video" },
          { id: "l4", title: "Unit Economics: LTV/CAC Optimization Masterclass", duration: "40:00", isPreview: false, type: "video" }
        ]
      }
    ],
    features: [
      { icon: "FileText", title: "Pitch Deck & Financial Models", description: "Real investor decks that raised over $15M in seed funding." },
      { icon: "ShieldCheck", title: "Lifetime Access", description: "Instant access to all future founder interviews and case studies." }
    ],
    reviews: [
      {
        id: "r1",
        studentName: "Daniel Foster",
        studentRole: "Founder at FlowGrid",
        studentAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "6 days ago",
        comment: "Victoria's financial modeling spreadsheet and pitch deck breakdown helped us close our $750k pre-seed round. Unbelievable value.",
        verified: true
      }
    ]
  },
  {
    id: "6",
    slug: "high-ticket-sales-negotiation-mastery",
    title: "High-Ticket Sales & Negotiation Mastery",
    headline: "Close $5,000+ Deals with Confidence, Overcome Objections, and Scale Retainers",
    description: "Master consultative enterprise sales, psychology of negotiation, closing high-ticket deals, and building predictable pipeline revenue.",
    longDescription: "Stop competing on price. Learn how to position yourself as an indispensable partner, lead high-stakes discovery calls, handle tough price objections with ease, and negotiate win-win contracts that command premium fees.",
    category: "Career",
    badge: "Top Rated",
    instructor: {
      name: "Jordan Belfort Jr. / Marcus Knight",
      role: "Enterprise VP of Sales & Revenue Coach",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "Marcus has closed over $80M in corporate B2B contracts and trained sales teams across 30+ countries.",
      studentsCount: 22000,
      rating: 4.91,
      experience: "15+ Years Experience"
    },
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    price: 199,
    salePrice: 99,
    discountPercent: 50,
    rating: 4.9,
    reviewCount: 710,
    studentsCount: 5200,
    duration: "10 Hours",
    lessonsCount: 36,
    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "October 2026",
    lifetimeAccess: true,
    certificate: true,
    downloadableResources: 24,
    assignmentsCount: 6,
    whatYouWillLearn: [
      "The Consultative Closing Method: Turn conversations into paid contracts",
      "How to command $5,000 to $50,000 package rates without hesitation",
      "Overcoming the 'I need to think about it' and 'Too expensive' objections",
      "The exact email sequences to reactivate stalled client leads",
      "Contract negotiation tactics that protect your scope and margins"
    ],
    requirements: [
      "Willingness to practice live roleplay scripts and communication tactics"
    ],
    targetAudience: [
      "Freelancers, agency owners, consultants, and B2B sales professionals"
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 — The Psychology of High-Ticket Buying",
        duration: "2 hrs 15 mins",
        lessons: [
          { id: "l1", title: "Status Alignment & Establishing Authority on Discovery Calls", duration: "25:00", isPreview: true, type: "video" },
          { id: "l2", title: "Uncovering Deep Pain Points & ROI Quantifiers", duration: "30:00", isPreview: true, type: "video" }
        ]
      }
    ],
    features: [
      { icon: "PhoneCall", title: "35 Call Recordings with Breakdown", description: "Listen to real multi-thousand dollar closes step-by-step." },
      { icon: "ShieldCheck", title: "Lifetime Access", description: "Perpetual access to the sales script library." }
    ],
    reviews: [
      {
        id: "r1",
        studentName: "Carlos Ramirez",
        studentRole: "Agency Founder",
        studentAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "1 week ago",
        comment: "Closed our highest retainer ever ($8,500/month) using the discovery framework from module 1. The ROI on this course is insane.",
        verified: true
      }
    ]
  },
  {
    id: "7",
    slug: "productivity-deep-work-time-management",
    title: "High Performance & Deep Work Mastery",
    headline: "Eliminate Distraction, Double Output, and Build Elite Daily Execution Habits",
    description: "Science-backed neuroscience protocols, energy management systems, and focus rituals to achieve more in 4 hours than most people do in a full week.",
    longDescription: "Modern professionals are drowning in notifications and context switching. Learn cognitive neuroscience protocols, time-blocking strategies, dopamine management, and habit architecture to enter flow state on command and reach peak creative output.",
    category: "Personal Development",
    badge: "Popular",
    instructor: {
      name: "Dr. Evelyn Reed",
      role: "Cognitive Scientist & Performance Coach",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      bio: "Dr. Reed holds a PhD in Cognitive Psychology and has trained Olympic athletes and top tech executives.",
      studentsCount: 31000,
      rating: 4.93,
      experience: "11+ Years Experience"
    },
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    price: 149,
    salePrice: 79,
    discountPercent: 47,
    rating: 4.89,
    reviewCount: 520,
    studentsCount: 3900,
    duration: "8 Hours",
    lessonsCount: 28,
    level: "All Levels",
    language: "English",
    lastUpdated: "October 2026",
    lifetimeAccess: true,
    certificate: true,
    downloadableResources: 20,
    assignmentsCount: 4,
    whatYouWillLearn: [
      "Access flow states consistently within 10 minutes of starting work",
      "Design an invincible daily routine tailored to your circadian biology",
      "Eliminate dopamine-draining digital distractions effortlessly",
      "Implement the 90-minute focus cycle and strategic rest systems"
    ],
    requirements: [
      "Desire to optimize your mental performance and daily output"
    ],
    targetAudience: [
      "Founders, engineers, creators, and high-achievers wanting peak focus"
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 — Neuroscience of Focus & Dopamine Control",
        duration: "2 hrs 00 mins",
        lessons: [
          { id: "l1", title: "How the Brain Enters Flow: The 4 Neurological Triggers", duration: "25:00", isPreview: true, type: "video" }
        ]
      }
    ],
    features: [
      { icon: "ShieldCheck", title: "Lifetime Access", description: "Perpetual access to all habit tracking templates and audio guides." }
    ],
    reviews: [
      {
        id: "r1",
        studentName: "Emma Watson-Lee",
        studentRole: "Writer & Content Director",
        studentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "3 days ago",
        comment: "Finished writing my book in half the projected time. The focus ritual changed everything.",
        verified: true
      }
    ]
  },
  {
    id: "8",
    slug: "executive-leadership-management-accelerator",
    title: "Executive Leadership & Team Management",
    headline: "Inspire High-Performing Teams, Lead Through Uncertainty, and Accelerate Promotion",
    description: "Develop executive presence, strategic decision-making, conflict resolution, and high-impact delegation systems to lead world-class teams.",
    longDescription: "Moving from an individual contributor to an executive leader requires an entirely different operating system. Master the art of 1-on-1 coaching, stakeholder management, building psychological safety, and orchestrating cross-functional teams that consistently overdeliver on ambitious goals.",
    category: "Career",
    badge: "Trending",
    instructor: {
      name: "Robert Kensington",
      role: "Former Fortune 50 CEO & Board Member",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "Robert has led global organizations with 5,000+ employees and sits on the advisory boards of multiple international enterprises.",
      studentsCount: 16000,
      rating: 4.96,
      experience: "25+ Years Experience"
    },
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    price: 249,
    salePrice: 129,
    discountPercent: 48,
    rating: 4.95,
    reviewCount: 480,
    studentsCount: 3100,
    duration: "12 Hours",
    lessonsCount: 34,
    level: "Intermediate to Advanced",
    language: "English",
    lastUpdated: "September 2026",
    lifetimeAccess: true,
    certificate: true,
    downloadableResources: 25,
    assignmentsCount: 5,
    whatYouWillLearn: [
      "Master executive presence and command respect in any boardroom",
      "Run productive 1-on-1s that motivate top performers and fix underperformance",
      "Develop agile decision-making frameworks under high ambiguity",
      "Negotiate budgets, resources, and stakeholder alignment seamlessly"
    ],
    requirements: [
      "Current or aspiring team lead, manager, director, or executive"
    ],
    targetAudience: [
      "Managers wanting to get promoted to director and VP roles",
      "Technical leads transitioning to management"
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 — Executive Presence & Strategic Communication",
        duration: "2 hrs 30 mins",
        lessons: [
          { id: "l1", title: "The 3 Pillars of Executive Presence", duration: "25:00", isPreview: true, type: "video" }
        ]
      }
    ],
    features: [
      { icon: "Award", title: "Executive Leadership Certification", description: "High-value credential verified by our executive network." }
    ],
    reviews: [
      {
        id: "r1",
        studentName: "Arthur Vance",
        studentRole: "Engineering Director",
        studentAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "2 weeks ago",
        comment: "This course bridged the gap between engineering management and strategic leadership for me. Promoted to VP within 6 months!",
        verified: true
      }
    ]
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getFeaturedCourses(): Course[] {
  return courses.slice(0, 4);
}

export function getAllCategories(): string[] {
  return [
    "All",
    "Marketing",
    "Business",
    "Technology",
    "Design",
    "Personal Development",
    "Career"
  ];
}
