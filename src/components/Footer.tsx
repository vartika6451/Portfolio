"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import Magnetic from "@/components/ui/Magnetic";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; a lot of coffee.
        </p>
        <Magnetic strength={0.4}>
          <a
            href="#hero"
            data-cursor-interactive
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full glass transition-colors hover:border-accent-2 hover:text-accent-2"
          >
            <ArrowUp size={16} />
          </a>
        </Magnetic>
      </div>
    </footer>
  );
}
