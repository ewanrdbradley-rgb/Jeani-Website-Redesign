"use client";

import { useEffect, useState } from "react";

/*
 * hero goal words: a fluid cross-fade. all words share one grid cell so
 * the headline never reflows; the outgoing word drifts up as the next
 * one rises in, like a stride, never a hard cut.
 */
export default function CyclingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const t = setInterval(() => {
      setIndex((i) => {
        setPrev(i);
        return (i + 1) % words.length;
      });
    }, 2400);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <span className="cycle-wrap text-accent" aria-live="polite">
      {words.map((w, i) => (
        <span
          key={w}
          aria-hidden={i !== index}
          className={`cycle-word ${
            i === index ? "is-current" : i === prev ? "is-prev" : ""
          }`}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
