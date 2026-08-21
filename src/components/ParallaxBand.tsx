"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Photo from "./Photo";

/*
 * a pinned band: the content holds the center while the photo glides
 * through behind it, and the thread continues over the image in bone.
 */
export default function ParallaxBand({
  src,
  alt,
  children,
  heightVh = 135,
  panVh = 46,
  threadPath = "M 50 0 C 50 18, 24 28, 26 50 C 28 72, 72 80, 70 100",
}: {
  src: string;
  alt: string;
  children: ReactNode;
  heightVh?: number;
  panVh?: number;
  threadPath?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const panRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pan = panRef.current;
    const path = pathRef.current;
    if (!section || !pan || !path) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    path.style.strokeDasharray = "1";
    if (reduced) {
      pan.style.transform = "none";
      path.style.strokeDashoffset = "0";
      return;
    }

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        const r = section.getBoundingClientRect();
        const travel = r.height - vh;
        const p = Math.min(1, Math.max(0, -r.top / (travel || 1)));
        const pan_px = (0.5 - p) * (panVh / 100) * vh;
        pan.style.transform = `translate3d(0, ${pan_px}px, 0)`;
        path.style.strokeDashoffset = `${Math.max(0, 1 - p * 1.15)}`;
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
  }, [panVh]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: `${heightVh}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={panRef}
          className="absolute inset-x-0 will-change-transform"
          style={{ top: `-${panVh / 2}vh`, height: `calc(100vh + ${panVh}vh)` }}
        >
          <Photo src={src} alt={alt} className="h-full w-full" />
        </div>
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            ref={pathRef}
            d={threadPath}
            fill="none"
            stroke="#eeebe4"
            strokeOpacity="0.75"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            pathLength={1}
          />
        </svg>
        <div className="relative z-10 flex h-full items-center">{children}</div>
      </div>
    </section>
  );
}
