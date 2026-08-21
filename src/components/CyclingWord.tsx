"use client";

import { useEffect, useState } from "react";

/* hero goal words cross-fade on a slow cycle */
export default function CyclingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 420);
    }, 3200);
    return () => clearInterval(cycle);
  }, [words.length]);

  return (
    <span
      className="text-accent inline-block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 400ms ease-out" }}
    >
      {words[index]}
    </span>
  );
}
