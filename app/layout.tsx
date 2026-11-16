import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";

// Import Inter for use throughout the entire site
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Omkar | Systems, DevOps & AI Engineer",
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
      <body className="relative overflow-y-auto bg-[#282828]">
        <div className="relative min-h-screen">
          <div className="relative">{children}</div>
        </div>
        <Navbar />
        <Analytics />
      </body>
    </html>
  );
}
