export interface StatMetric {
  value: string;
  label: string;
  description: string;
  badge?: string;
}

export const statsMetrics: StatMetric[] = [
  {
    value: "10,000+",
    label: "Active Students",
    description: "Ambitious professionals learning daily worldwide",
    badge: "Global Community"
  },
  {
    value: "50+",
    label: "Countries Reached",
    description: "Diverse global alumni network from Silicon Valley to Tokyo",
    badge: "Worldwide"
  },
  {
    value: "4.9/5",
    label: "Average Student Rating",
    description: "Based on 5,800+ verified student reviews",
    badge: "Top Tier"
  },
  {
    value: "95%",
    label: "Student Satisfaction",
    description: "Alumni reporting significant career advancement or ROI",
    badge: "Proven Outcomes"
  }
];

export interface ValueBenefit {
  iconName: string;
  title: string;
  description: string;
  highlight: string;
}

export const whyChooseUsBenefits: ValueBenefit[] = [
  {
    iconName: "Award",
    title: "Expert Instructors",
    description: "Learn directly from active industry directors, senior engineers, and founders who have managed millions in ad budgets and shipped products to millions of users.",
    highlight: "Top 1% Practitioners"
  },
  {
    iconName: "Zap",
    title: "Practical, Project-Driven Learning",
    description: "Skip theoretical fluff. Every lesson is designed around actionable implementation, real case studies, code templates, and portfolio-worthy capstones.",
    highlight: "Zero Fluff Curriculum"
  },
  {
    iconName: "Infinity",
    title: "Lifetime Perpetual Access",
    description: "Access your courses on desktop, tablet, or mobile at any time, anywhere. Never worry about subscriptions or expiring access windows.",
    highlight: "Pay Once, Learn Forever"
  },
  {
    iconName: "Clock",
    title: "Learn at Your Own Pace",
    description: "Fit high-impact learning around your busy schedule. Bite-sized modules with progress tracking and speed controls make continuous growth effortless.",
    highlight: "Flexible Scheduling"
  },
  {
    iconName: "RefreshCw",
    title: "Free Regular Content Updates",
    description: "As technologies, frameworks, algorithms, and market tactics change, our curriculum updates automatically with new modules at zero extra charge.",
    highlight: "Always Up-to-Date"
  },
  {
    iconName: "Headphones",
    title: "Dedicated Student Support & Community",
    description: "Get your technical and conceptual questions answered quickly inside our private community by instructors, teaching assistants, and fellow peers.",
    highlight: "Fast Response Time"
  }
];
