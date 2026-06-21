"use client";

import { useEffect, useRef } from "react";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

export default function InteractiveGrid({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    if (isTouch) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spot-x", `${x}%`);
      el.style.setProperty("--spot-y", `${y}%`);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isTouch]);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 grid-bg ${className}`}
      style={
        {
          "--spot-x": "50%",
          "--spot-y": "30%",
          maskImage:
            "radial-gradient(600px circle at var(--spot-x) var(--spot-y), black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(600px circle at var(--spot-x) var(--spot-y), black 0%, transparent 75%)",
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:56px_56px]" />
    </div>
  );
}
