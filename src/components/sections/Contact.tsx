"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2, Code2, Twitter, Trophy } from "lucide-react";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Magnetic from "@/components/ui/Magnetic";

type Status = "idle" | "sending" | "sent";

const SOCIALS = [
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
  { label: "LeetCode", href: profile.socials.leetcode, icon: Code2 },
  { label: "Codeforces", href: profile.socials.codeforces, icon: Trophy },
  { label: "X (Twitter)", href: profile.socials.twitter, icon: Twitter },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder submission flow — wire up to an actual email/form service later.
    setTimeout(() => setStatus("sent"), 1400);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="05"
          label="contact"
          title="Let&rsquo;s build something."
          description="Open to internships, freelance projects, and full-time roles. The fastest way to reach me is the form below or a direct email."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Info card */}
          <div className="flex flex-col justify-between gap-8 rounded-3xl glass-strong p-8">
            <div>
              <h3 className="font-display text-xl font-bold text-ink">Get in touch</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Whether it&rsquo;s an internship, a freelance project, or just a conversation
                about engineering — I usually reply within a day.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor-interactive
                  className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong bg-surface text-accent-2">
                    <Mail size={15} />
                  </span>
                  {profile.email}
                </a>
                <div className="flex items-center gap-3 text-sm text-ink-muted">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong bg-surface text-accent-2">
                    <MapPin size={15} />
                  </span>
                  {profile.location}
                </div>
              </div>
            </div>

            <div>
              <p className="mono-eyebrow mb-3 text-ink-faint">{"// elsewhere"}</p>
              <div className="flex flex-wrap gap-3">
                {SOCIALS.map((s) => (
                  <Magnetic key={s.label} strength={0.35}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-interactive
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full glass transition-colors hover:border-accent-2 hover:text-accent-2"
                    >
                      <s.icon size={17} />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-3xl glass-strong p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-2 block font-mono text-xs text-ink-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent-2"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-2 block font-mono text-xs text-ink-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-2 block font-mono text-xs text-ink-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  type="text"
                  placeholder="Internship opportunity, project idea, etc."
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block font-mono text-xs text-ink-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a bit about what you’re looking for…"
                  className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent-2"
                />
              </div>
            </div>

            <Magnetic strength={0.25} className="mt-6 block w-full sm:w-auto">
              <button
                type="submit"
                disabled={status !== "idle"}
                data-cursor-interactive
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 font-display text-sm font-semibold text-white transition-shadow hover:shadow-[0_8px_30px_-8px_var(--color-accent)] disabled:cursor-not-allowed sm:w-auto"
              >
                {status === "idle" && (
                  <>
                    Send message <Send size={15} />
                  </>
                )}
                {status === "sending" && (
                  <motion.span
                    className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                  />
                )}
                {status === "sent" && (
                  <>
                    Message sent <CheckCircle2 size={15} />
                  </>
                )}
              </button>
            </Magnetic>
          </form>
        </div>
      </div>
    </section>
  );
}
