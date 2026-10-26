import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF5EB",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "SKY AI Mentorship Program Build AI-powered income streams of your own.",
    template: "%s | SKY AI Automation",
  },
  description: "The curriculum, AI tools, and community for India's solo builders, creators, and first-time founders. Solo, with a system.",
  keywords: ["sky ai automation", "ai mentorship", "income streams", "ai tools", "agentic ai", "solopreneur india", "first time founders"],
  authors: [{ name: "SKY AI Automation" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://soloneur.in",
    title: "SKY AI Mentorship Program Build AI-powered income streams of your own.",
    description: "SKY AI Automation gives you the skills, the AI tools, and the system to start and grow an online business solo, from zero.",
    siteName: "SKY AI Automation",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF5EB] text-[#161616] flex flex-col font-sans selection:bg-[#D99A19]/25 selection:text-[#161616]">
        {children}
      </body>
    </html>
  );
}
