"use client";

import { useEffect, useRef } from "react";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CursorFX() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (isTouch || reducedMotion) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onDown = () => ringRef.current?.classList.add("scale-75", "bg-accent/20");
    const onUp = () => ringRef.current?.classList.remove("scale-75", "bg-accent/20");

    const onEnterInteractive = () => ringRef.current?.classList.add("scale-150", "border-accent-2");
    const onLeaveInteractive = () => ringRef.current?.classList.remove("scale-150", "border-accent-2");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const interactiveEls = document.querySelectorAll("a, button, [data-cursor-interactive]");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    let raf: number;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(animateRing);
    };
    raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
      cancelAnimationFrame(raf);
    };
  }, [isTouch, reducedMotion]);

  if (isTouch || reducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[150] hidden md:block" aria-hidden="true">
      {/* Large ambient glow that follows mouse with slight lag via CSS transition */}
      <div
        ref={glowRef}
        className="absolute -left-[300px] -top-[300px] h-[600px] w-[600px] rounded-full opacity-[0.07] blur-[80px] transition-transform duration-300 ease-out"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="absolute -left-4 -top-4 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink-muted/40 transition-[transform,background-color,border-color] duration-200 ease-out"
      />
      {/* Sharp dot */}
      <div
        ref={dotRef}
        className="absolute -left-1 -top-1 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2"
      />
    </div>
  );
}
