"use client";

import { motion } from "framer-motion";
import { Trophy, Code, Award, BadgeCheck, GraduationCap, Github } from "lucide-react";
import { achievements } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const ICONS: Record<string, typeof Trophy> = {
  trophy: Trophy,
  code: Code,
  award: Award,
  "badge-check": BadgeCheck,
  "graduation-cap": GraduationCap,
  github: Github,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 -z-10 h-[400px] bg-gradient-to-b from-accent-2/[0.04] to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          label="achievements"
          title="Numbers that back it up."
          description="Competitive programming, hackathons, and open source contributions — the receipts behind the skills."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => {
            const Icon = ICONS[a.icon] ?? Trophy;
            return (
              <StaggerItem key={a.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-2xl glass p-6"
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-surface text-accent-2">
                      <Icon size={20} />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                      {a.category}
                    </span>
                  </div>
                  <p className="mt-5 font-display text-3xl font-bold text-ink">{a.value}</p>
                  <p className="mt-1 font-display text-sm font-semibold text-ink">{a.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{a.description}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

      </div>
    </section>
  );
}
