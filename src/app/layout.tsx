import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CursorFX from "@/components/ui/CursorFX";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { profile } from "@/data/profile";

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

const siteUrl = "https://vartikasharma.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Software Developer & CS Student`,
    template: `%s — ${profile.name}`,
  },
  description:
    `${profile.name} is a software developer and computer science undergraduate building full-stack products, Gen AI applications, and exploring Web3 — with a strong DSA foundation.`,
  keywords: [
    profile.name,
    "Software Developer",
    "Full Stack Developer",
    "AI Developer",
    "Blockchain Explorer",
    "Computer Science Undergraduate",
    "DSA",
    "Next.js Portfolio",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — Software Developer & CS Student`,
    description: profile.subline,
    siteName: `${profile.name} — Portfolio`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${profile.name} — Software Developer` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Developer & CS Student`,
    description: profile.subline,
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
    name: profile.name,
    url: siteUrl,
    jobTitle: "Software Developer",
    description: profile.subline,
    sameAs: [
      profile.socials.github,
      profile.socials.linkedin,
      profile.socials.leetcode,
      profile.socials.codeforces,
      profile.socials.twitter,
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
