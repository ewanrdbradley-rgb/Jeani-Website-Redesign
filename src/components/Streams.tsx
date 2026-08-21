"use client";

import { useEffect, useRef, useState } from "react";

const STREAMS = [
  { label: "Sleep" },
  { label: "Heart" },
  { label: "Training" },
  { label: "Movement" },
  { label: "Labs and biometrics" },
  { label: "What you tell Jeani" },
  { label: "Your goal", accent: true },
];

/*
 * the flow: everything you already generate draws together into one
 * record, and the record becomes one insight, in service of the goal
 * you chose. the endpoint rebuilds when the goal does.
 */
export default function Streams({ goalChip }: { goalChip?: string }) {
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
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";
  const ys = STREAMS.map((_, i) => 30 + i * 40);
  const jx = 400; // where the streams become one record
  const jy = 150;
  const ex = 700; // where the record becomes one insight
  const draw = (delay: number, dur = 1500) => ({
    strokeDasharray: 1,
    strokeDashoffset: drawn ? 0 : 1,
    transition: `stroke-dashoffset ${dur}ms ${ease} ${delay}ms`,
  });
  const appear = (delay: number) => ({
    opacity: drawn ? 1 : 0,
    transition: `opacity 600ms ${ease} ${delay}ms`,
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 720 300"
      className="w-full"
      role="img"
      aria-label="Sleep, heart, training, movement, labs and what you tell Jeani draw together into one record, and the record becomes one insight for your goal"
    >
      {STREAMS.map((s, i) => (
        <g key={s.label}>
          <text
            x="0"
            y={ys[i] - 9}
            fill={s.accent ? "#0068b5" : "#102278"}
            fillOpacity={s.accent ? 1 : 0.65}
            fontSize="14"
            fontWeight="600"
            style={appear(i * 110)}
          >
            {s.label}
          </text>
          <path
            d={`M 0 ${ys[i]} C 170 ${ys[i]}, 290 ${jy + (ys[i] - jy) * 0.25}, ${jx} ${jy}`}
            fill="none"
            stroke={s.accent ? "#0068b5" : "#102278"}
            strokeOpacity={s.accent ? 0.9 : 0.4}
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            pathLength={1}
            style={draw(i * 110)}
          />
        </g>
      ))}

      {/* one record */}
      <circle cx={jx} cy={jy} r="4" fill="#102278" style={appear(950)} />
      <text
        x={jx}
        y={jy - 22}
        textAnchor="middle"
        fill="#102278"
        fillOpacity="0.65"
        fontSize="14"
        fontWeight="600"
        style={appear(1000)}
      >
        One record of you
      </text>

      {/* the record becomes the insight */}
      <path
        d={`M ${jx} ${jy} C ${jx + 110} ${jy}, ${ex - 90} ${jy}, ${ex} ${jy}`}
        fill="none"
        stroke="#0068b5"
        strokeWidth="2.5"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        style={draw(1100, 1100)}
      />
      <circle cx={ex} cy={jy} r="5" fill="#0068b5" style={appear(1900)} />
      <g key={goalChip ?? "static"} className="fade-in">
        <text
          x={ex}
          y={jy - 38}
          textAnchor="end"
          fill="#0068b5"
          fontSize="15"
          fontWeight="700"
          style={appear(1950)}
        >
          One insight, just for you
        </text>
        {goalChip && (
          <text
            x={ex}
            y={jy - 18}
            textAnchor="end"
            fill="#102278"
            fillOpacity="0.65"
            fontSize="13"
            fontWeight="600"
            style={appear(2050)}
          >
            in service of {goalChip}
          </text>
        )}
      </g>
    </svg>
  );
}
