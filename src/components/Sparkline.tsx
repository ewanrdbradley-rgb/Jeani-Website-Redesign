"use client";

import { useEffect, useId, useRef, useState } from "react";

/*
 * the thread line, continued inside every card: a thin blue trend.
 * it flows in left to right behind a widening clip, so the line is
 * always whole, only progressively unveiled.
 */
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
  const clipId = useId();

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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      return;
    }
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
      <defs>
        <clipPath id={clipId}>
          <rect
            x="0"
            y="0"
            height={h}
            width={w}
            style={{
              transform: drawn ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "0 0",
              transition: "transform 1400ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <path
          d={d}
          fill="none"
          stroke="#0068b5"
          strokeWidth="1.6"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}
