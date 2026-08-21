"use client";

import { useEffect, useRef, type ReactNode } from "react";

/*
 * the one continuous thread: a thin cobalt line that draws downward with
 * scroll progress, stitching every section of a page together.
 */
export default function ThreadLine({
  children,
  path,
}: {
  children: ReactNode;
  path?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const d =
    path ??
    "M 49 0 C 49 5, 44 8, 40 12 C 34 18, 82 20, 82 27 C 82 34, 20 37, 20 45 C 20 53, 78 56, 78 64 C 78 72, 30 76, 30 84 C 30 92, 50 95, 50 100";

  useEffect(() => {
    const path = pathRef.current;
    const wrap = wrapRef.current;
    if (!path || !wrap) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    path.style.strokeDasharray = "1";
    if (reduced) {
      path.style.strokeDashoffset = "0";
      return;
    }
    path.style.strokeDashoffset = "1";

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = wrap.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = Math.min(1, Math.max(0, (vh * 0.78 - r.top) / r.height));
        path.style.strokeDashoffset = `${1 - progress}`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          d={d}
          fill="none"
          stroke="#102278"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
        />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}
