"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories, type SkillCategory } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const ALL = "All" as const;

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group"
    >
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-display text-sm font-medium text-ink">{name}</span>
        <span className="font-mono text-xs text-ink-faint">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: index * 0.04 + 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<SkillCategory | typeof ALL>(ALL);

  const filtered = useMemo(
    () => (active === ALL ? skills : skills.filter((s) => s.category === active)),
    [active]
  );

  return (
    <section id="skills" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-x-0 top-1/3 -z-10 h-[500px] bg-gradient-to-b from-accent/[0.04] to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          label="skills"
          title="The stack behind the work."
          description="A toolkit shaped by competitive programming fundamentals and real shipping experience — from algorithms to production infrastructure."
        />

        {/* Floating tech cloud */}
        <div className="relative mt-14 flex flex-wrap items-center justify-center gap-3 overflow-hidden rounded-2xl glass px-6 py-10">
          {skills.map((s, i) => (
            <motion.span
              key={`${s.name}-${s.category}`}
              className="rounded-full border border-border-strong bg-surface px-4 py-2 font-mono text-xs text-ink-muted"
              animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
              transition={{
                duration: 4 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 6) * 0.3,
              }}
              whileHover={{
                scale: 1.1,
                color: "var(--color-accent-2)",
                borderColor: "var(--color-accent)",
              }}
            >
              {s.name}
            </motion.span>
          ))}
        </div>

        {/* Category filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {[ALL, ...skillCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-cursor-interactive
              className={cn(
                "rounded-full px-4 py-2 font-mono text-xs transition-all duration-300",
                active === cat
                  ? "bg-gradient-to-r from-accent to-accent-2 text-white"
                  : "glass text-ink-muted hover:text-ink"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill bars grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2"
          >
            {filtered.map((s, i) => (
              <SkillBar key={`${s.name}-${s.category}`} name={s.name} level={s.level} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
