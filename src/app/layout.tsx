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
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Soloneur — Build AI-powered income streams of your own.",
    template: "%s | Soloneur",
  },
  description: "The curriculum, AI tools, and community for India's solo builders, creators, and first-time founders. Solo, with a system.",
  keywords: ["soloneur", "online business", "income streams", "ai tools", "digital marketing", "solopreneur india", "first time founders"],
  authors: [{ name: "Soloneur" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://soloneur.in",
    title: "Soloneur — Build AI-powered income streams of your own.",
    description: "The curriculum, AI tools, and community for India's solo builders, creators, and first-time founders.",
    siteName: "Soloneur",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable} antialiased scroll-smooth dark`}>
      <body className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] flex flex-col font-sans selection:bg-[#06b6d4]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
