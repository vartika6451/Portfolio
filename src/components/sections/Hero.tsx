"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight, Download, MessageSquare } from "lucide-react";
import { profile, stats } from "@/data/profile";
import { useTypewriter } from "@/hooks/useTypewriter";
import Button from "@/components/ui/Button";
import InteractiveGrid from "@/components/ui/InteractiveGrid";

const ParticleBackground = dynamic(() => import("@/components/three/ParticleBackground"), {
  ssr: false,
});

const headingWords = "Building Digital Experiences That Matter".split(" ");

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Layered backgrounds */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-bg" />
        <ParticleBackground />
        <InteractiveGrid />
        {/* Animated gradient blobs */}
        <div className="absolute left-[8%] top-[12%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px] animate-blob" />
        <div
          className="absolute right-[10%] top-[35%] h-[380px] w-[380px] rounded-full bg-accent-2/15 blur-[120px] animate-blob"
          style={{ animationDelay: "-6s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rating-good opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rating-good" />
            </span>
            <span className="font-mono text-xs text-ink-muted">
              Open to internships &amp; SWE roles
            </span>
          </motion.div>

          <h1 className="font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[3.6rem]">
            {headingWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className={`inline-block ${
                    word === "Matter" ? "text-gradient-accent glow-text" : "text-ink"
                  }`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-6 flex h-8 items-center font-mono text-lg text-ink-muted sm:text-xl"
          >
            <span className="mr-2 text-accent-2">{">"}</span>
            <span>{typed}</span>
            <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-blink bg-accent-2" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {profile.subline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects" variant="primary" icon={<ArrowUpRight size={16} />}>
              View Projects
            </Button>
            <Button href={profile.resumeUrl} variant="secondary" icon={<Download size={16} />}>
              Download Resume
            </Button>
            <Button href="#contact" variant="ghost" icon={<MessageSquare size={16} />}>
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Right: terminal / code window — the signature element */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateY: -8 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md"
          style={{ perspective: 1200 }}
        >
          <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-accent/30 to-accent-2/20 opacity-40 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl glass-strong shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-ink-faint">developer.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-ink-muted sm:text-[13px]">
              <code>
                <span className="text-accent-2">const</span> <span className="text-ink">developer</span> = {"{"}
                {"\n"}  name: <span className="text-rating-good">&quot;{profile.name}&quot;</span>,
                {"\n"}  role: <span className="text-rating-good">&quot;Full-Stack &amp; AI Engineer&quot;</span>,
                {"\n"}  stack: [<span className="text-rating-good">&quot;Next.js&quot;</span>, <span className="text-rating-good">&quot;TypeScript&quot;</span>, <span className="text-rating-good">&quot;Solana&quot;</span>],
                {"\n"}  passion: [<span className="text-rating-good">&quot;DSA&quot;</span>, <span className="text-rating-good">&quot;AI&quot;</span>, <span className="text-rating-good">&quot;Web3&quot;</span>],
                {"\n"}  available: <span className="text-ember">true</span>,
                {"\n"}{"}"};
                {"\n\n"}<span className="text-ink-faint">{"// "}always shipping</span>
                {"\n"}<span className="text-accent-2">while</span> (developer.available) {"{"}
                {"\n"}  developer.<span className="text-accent-2">build</span>();
                {"\n"}{"}"}
              </code>
            </pre>
          </div>

          {/* Floating tech badges */}
          <motion.div
            className="absolute -right-6 -top-6 hidden rounded-xl glass px-3 py-2 font-mono text-xs text-rating-good sm:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            ✓ Build passing
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -left-6 hidden rounded-xl glass px-3 py-2 font-mono text-xs text-accent-2 sm:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            {stats.find((s) => s.label.includes("DSA"))?.value ?? 400}+ DSA solved
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[11px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
