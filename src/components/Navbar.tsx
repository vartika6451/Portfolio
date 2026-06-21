"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "./ui/Magnetic";
import { profile } from "@/data/profile";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[120] transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a
            href="#hero"
            className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
            data-cursor-interactive
          >
            <span
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-xl border border-border-strong bg-surface text-sm transition-transform duration-300 group-hover:rotate-[12deg]",
              )}
            >
              <span className="text-gradient-accent">{profile.initials}</span>
            </span>
          </a>

          <nav
            className={cn(
              "hidden items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 md:flex",
              scrolled ? "glass-strong" : "border border-transparent"
            )}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor-interactive
                className={cn(
                  "relative rounded-full px-4 py-2 font-mono text-[13px] transition-colors duration-300",
                  active === link.href ? "text-ink" : "text-ink-muted hover:text-ink"
                )}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Magnetic strength={0.3}>
              <a
                href="#contact"
                data-cursor-interactive
                className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 font-display text-sm font-semibold text-white transition-shadow hover:shadow-[0_8px_30px_-8px_var(--color-accent)]"
              >
                Let&rsquo;s talk
              </a>
            </Magnetic>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full glass md:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex flex-col bg-bg/98 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-lg font-bold text-gradient-accent">{profile.initials}</span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full glass"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-4xl font-bold text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="px-8 pb-10">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3.5 text-center font-display font-semibold text-white"
              >
                Let&rsquo;s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
