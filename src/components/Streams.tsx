"use client";

import { useEffect, useRef, useState } from "react";

const STREAMS = ["Sleep", "Heart", "Training", "Movement"];

/* four streams drawing together into the single thread */
export default function Streams() {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const paths = [
    "M 0 20 C 220 20, 330 96, 560 100 L 720 100",
    "M 0 72 C 220 72, 330 99, 560 100 L 720 100",
    "M 0 128 C 220 128, 330 101, 560 100 L 720 100",
    "M 0 180 C 220 180, 330 104, 560 100 L 720 100",
  ];
  const labelY = [20, 72, 128, 180];

  return (
    <svg
      ref={ref}
      viewBox="0 0 720 200"
      className="w-full"
      role="img"
      aria-label="Sleep, heart, training and movement streams drawing together into one thread"
    >
      {paths.map((d, i) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke={i === 3 ? "#0068b5" : "#102278"}
          strokeOpacity={i === 3 ? 0.9 : 0.45}
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: drawn ? 0 : 1,
            transition: `stroke-dashoffset 1600ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 160}ms`,
          }}
        />
      ))}
      {STREAMS.map((label, i) => (
        <text
          key={label}
          x="0"
          y={labelY[i] - 8}
          fill="#102278"
          fillOpacity="0.65"
          fontSize="13"
          fontWeight="600"
          style={{
            opacity: drawn ? 1 : 0,
            transition: `opacity 600ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 160}ms`,
          }}
        >
          {label}
        </text>
      ))}
      <circle
        cx="720"
        cy="100"
        r="4"
        fill="#0068b5"
        style={{ opacity: drawn ? 1 : 0, transition: "opacity 600ms cubic-bezier(0.22, 1, 0.36, 1) 1000ms" }}
      />
      <text
        x="588"
        y="88"
        fill="#0068b5"
        fontSize="13"
        fontWeight="600"
        style={{ opacity: drawn ? 1 : 0, transition: "opacity 600ms cubic-bezier(0.22, 1, 0.36, 1) 1100ms" }}
      >
        One record of you
      </text>
    </svg>
  );
}
