"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ChevronDown, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/profile";
import TiltCard from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <TiltCard className="overflow-hidden rounded-3xl glass-strong">
        {/* Preview area */}
        <div
          className={cn(
            "relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br sm:h-64",
            project.color
          )}
        >
          <div className="absolute inset-0 bg-bg/40" />
          <div className="absolute inset-0 opacity-20 mix-blend-overlay grid-bg" />
          <span className="relative font-display text-5xl font-bold tracking-tight text-white/90 sm:text-6xl">
            {project.name
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </span>

          <div className="absolute right-4 top-4 rounded-full bg-bg/60 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-sm">
            {project.year}
          </div>

          {project.featured && (
            <div className="absolute left-4 top-4 rounded-full bg-bg/60 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-sm">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">{project.name}</h3>
              <p className="mt-1 font-mono text-xs text-accent-2">{project.tagline}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo of ${project.name}`}
                  data-cursor-interactive
                  className="flex h-9 w-9 items-center justify-center rounded-full glass transition-colors hover:border-accent-2 hover:text-accent-2"
                >
                  <ArrowUpRight size={16} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${project.name}`}
                  data-cursor-interactive
                  className="flex h-9 w-9 items-center justify-center rounded-full glass transition-colors hover:border-accent-2 hover:text-accent-2"
                >
                  <Github size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink-muted">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border-strong bg-surface px-3 py-1 font-mono text-[11px] text-ink-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={() => setExpanded((e) => !e)}
            data-cursor-interactive
            className="mt-5 flex w-full items-center justify-between rounded-xl border border-border px-4 py-3 text-left font-mono text-xs text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
            aria-expanded={expanded}
          >
            <span>{expanded ? "Hide details" : "Problem solved & key achievements"}</span>
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={14} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-4">
                  <p className="text-sm leading-relaxed text-ink-muted">{project.problem}</p>
                  <ul className="mt-3 space-y-2">
                    {project.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-ink-muted">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-2" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </TiltCard>
    </motion.div>
  );
}
