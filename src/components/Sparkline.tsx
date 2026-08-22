"use client";

import { useEffect, useRef, useState } from "react";

/* the thread line, continued inside every card: a thin blue trend */
export default function Sparkline({
  points,
  className = "",
  animate = true,
}: {
  points: number[];
  className?: string;
  animate?: boolean;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(!animate);
  const [settled, setSettled] = useState(!animate);

  const w = 100;
  const h = 28;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;
  const step = w / (points.length - 1);
  const d = points
    .map((p, i) => {
      const x = (i * step).toFixed(1);
      const y = (h - 3 - ((p - min) / span) * (h - 6) + 1.5).toFixed(1);
      return `${i === 0 ? "M" : "L"}${x} ${y}`;
    })
    .join(" ");

  useEffect(() => {
    if (!animate) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animate]);

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={d}
        fill="none"
        stroke="#0068b5"
        strokeWidth="1.6"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        onTransitionEnd={() => setSettled(true)}
        style={
          settled
            ? undefined
            : {
                strokeDasharray: 1,
                strokeDashoffset: drawn ? 0 : 1,
                transition: "stroke-dashoffset 1400ms cubic-bezier(0.22, 1, 0.36, 1)",
              }
        }
      />
    </svg>
  );
}
