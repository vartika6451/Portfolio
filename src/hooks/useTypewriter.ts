"use client";

import { useEffect, useState } from "react";

interface Options {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter(words: string[], options: Options = {}) {
  const { typingSpeed = 70, deletingSpeed = 35, pauseDuration = 1700 } = options;
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseDuration);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 100);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setPhase("typing");
          setWordIndex((i) => (i + 1) % words.length);
        }, 0);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}
