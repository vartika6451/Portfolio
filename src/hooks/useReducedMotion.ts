"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Returns whether the user prefers reduced motion.
 * Uses useSyncExternalStore so SSR and the first client render agree (no
 * hydration mismatch), and live-updates if the OS preference changes.
 */
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
