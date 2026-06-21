"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";

const BOOT_LINES = [
  "booting portfolio.exe",
  "loading components...",
  "compiling experience...",
  "ready.",
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, BOOT_LINES.length - 1));
    }, 380);

    const progressTimer = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18 + 6;
        return next >= 100 ? 100 : next;
      });
    }, 140);

    const exitTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1900);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.div
            className="absolute inset-0"
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
          <div className="relative flex flex-col items-center gap-8 px-6">
            {/* Logo mark */}
            <motion.div
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-border-strong bg-surface font-display text-2xl font-bold"
              initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-gradient-accent">{profile.initials}</span>
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, var(--color-accent), transparent 60%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[2px] rounded-2xl bg-surface" />
              <span className="relative text-gradient-accent">{profile.initials}</span>
            </motion.div>

            <div className="font-mono text-sm text-ink-muted min-h-[1.5em]" aria-live="polite">
              <span className="text-accent-2">$</span> {BOOT_LINES[lineIndex]}
              <span className="ml-0.5 inline-block w-[2px] h-[1em] bg-accent-2 align-middle animate-blink" />
            </div>

            <div className="h-px w-56 overflow-hidden rounded-full bg-surface-2">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent-2"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
