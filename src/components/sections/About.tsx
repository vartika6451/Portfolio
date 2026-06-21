"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { stats, aboutMe, education } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, display } = useCountUp(value);
  return (
    <StaggerItem>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative overflow-hidden rounded-2xl glass p-6"
      >
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
        <div className="font-display text-4xl font-bold text-gradient-accent sm:text-5xl">
          <span ref={ref}>{display}</span>
          {suffix}
        </div>
        <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink-muted">{label}</p>
      </motion.div>
    </StaggerItem>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" label="about" title="A bit about how I build." />

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Bio Paragraphs */}
          <div>
            <Reveal>
              <div className="space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                {aboutMe.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Education + Stats */}
          <div className="space-y-8">
            <Reveal>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl glass p-6"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-surface text-accent-2">
                    <GraduationCap size={20} />
                  </span>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                      Education
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-ink">
                      {education.institution}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-ink-muted">
                      {education.degree}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-4 font-mono text-xs">
                      <span className="text-ink-faint">{education.duration}</span>
                      <span className="rounded-full bg-surface-2 px-2.5 py-1 text-accent-2">
                        CGPA: {education.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>

            <StaggerGroup className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
