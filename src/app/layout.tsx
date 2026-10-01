import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "ApexSkills | Modern Online Courses & Career Masterclasses",
    template: "%s | ApexSkills",
  },
  description: "Accelerate your career with high-converting masterclasses in Digital Marketing, Full-Stack Development, UI/UX Design, AI Automation, and Business Strategy.",
  keywords: ["online courses", "masterclass", "digital marketing", "full stack web development", "UI UX design", "AI prompt engineering", "business strategy"],
  authors: [{ name: "ApexSkills Education" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apexskills.com",
    title: "ApexSkills | Learn the Skills That Change Your Career",
    description: "Industry-standard masterclasses taught by top 1% practitioners. Lifetime access, verifiable certificates, and 30-day money-back guarantee.",
    siteName: "ApexSkills",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} antialiased scroll-smooth dark`}>
      <body className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
