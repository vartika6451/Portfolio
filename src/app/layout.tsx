import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CursorFX from "@/components/ui/CursorFX";
import LoadingScreen from "@/components/ui/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://aaravsharma.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aarav Sharma — Software Developer & CS Student",
    template: "%s — Aarav Sharma",
  },
  description:
    "Aarav Sharma is a software developer and computer science student specializing in full-stack development, AI applications, and blockchain. Strong DSA background with Java. Open to internships, freelance work, and software engineering roles.",
  keywords: [
    "Aarav Sharma",
    "Software Developer",
    "Full Stack Developer",
    "AI Developer",
    "Blockchain Developer",
    "Computer Science Student",
    "DSA",
    "Java Developer",
    "Solana Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Aarav Sharma", url: siteUrl }],
  creator: "Aarav Sharma",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Aarav Sharma — Software Developer & CS Student",
    description:
      "Full-stack developer and CS student building AI applications, blockchain systems, and production-grade software. Open to internships and SWE roles.",
    siteName: "Aarav Sharma — Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Aarav Sharma — Software Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarav Sharma — Software Developer & CS Student",
    description:
      "Full-stack developer and CS student building AI applications, blockchain systems, and production-grade software.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aarav Sharma",
    url: siteUrl,
    jobTitle: "Software Developer",
    description:
      "Software developer and computer science student specializing in full-stack development, AI applications, and blockchain.",
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
      "https://leetcode.com/yourusername",
    ],
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${interTight.variable} ${jbMono.variable} bg-bg text-ink font-body antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-white"
        >
          Skip to content
        </a>
        <LoadingScreen />
        <CursorFX />
        <SmoothScrollProvider>
          <div id="main-content">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
