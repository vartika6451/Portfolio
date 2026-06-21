"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  // Touch capability doesn't change at runtime in any way we need to react to,
  // so there's nothing to subscribe to — just satisfy the API.
  return () => {};
}

function getSnapshot() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

function getServerSnapshot() {
  return false;
}

/**
 * Returns whether the current device is touch-primary.
 * Uses useSyncExternalStore so the server snapshot (false) and the first
 * client snapshot are reconciled by React without a hydration mismatch.
 */
export function useIsTouchDevice() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
