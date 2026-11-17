import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import PageTransition from "@/components/PageTransition";

// Import Inter for use throughout the entire site
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Omkar | Systems, DevOps & AI Engineer",
  icons: {
    icon: "/icon.jpg",
  },
  description:
    "Portfolio of Omkar, a systems, DevOps, and AI engineer building software across distributed systems, security, and LLM infrastructure.",
  openGraph: {
    title: "Omkar | Systems, DevOps & AI Engineer",
    description:
      "Projects and experience across distributed systems, security, DevOps, and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="relative overflow-y-auto bg-background">
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
