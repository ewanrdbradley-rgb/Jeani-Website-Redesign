"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PhoneMockup from "./PhoneMockup";
import { GOALS, type GoalId } from "@/lib/goals";

const CARD = 248;
const GAP = 28;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const N = GOALS.length;

const mod = (n: number, m: number) => ((n % m) + m) % m;

/*
 * the six dashboards as an endless loop: the chosen goal always holds
 * the center with neighbors either side, and the track wraps around.
 * three copies render; the middle one is home, and after each glide
 * the track silently rebases so the loop never runs out of road.
 */
export default function PhoneCarousel({
  selected,
  onSelect,
}: {
  selected: GoalId;
  onSelect: (id: GoalId) => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [wrapW, setWrapW] = useState(0);
  const [vi, setVi] = useState(N + Math.max(0, GOALS.findIndex((g) => g.id === selected)));
  const [instant, setInstant] = useState(false);
  const [dragDx, setDragDx] = useState(0);
  const dragging = useRef(false);
  const moved = useRef(false);
  const startX = useRef(0);

  const measure = useCallback(() => {
    setWrapW(wrapRef.current?.clientWidth ?? 0);
  }, []);
  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // an outside selection (chips) glides in via the shortest path around the loop
  useEffect(() => {
    const gi = GOALS.findIndex((g) => g.id === selected);
    if (gi < 0 || mod(vi, N) === gi) return;
    const base = Math.floor(vi / N) * N;
    const candidates = [base - N + gi, base + gi, base + N + gi];
    const target = candidates.reduce((a, b) => (Math.abs(b - vi) < Math.abs(a - vi) ? b : a));
    setVi(target);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  // rebase into the middle copy once the glide settles
  useEffect(() => {
    if (vi >= N && vi < 2 * N) return;
    const t = setTimeout(() => {
      setInstant(true);
      setVi((v) => N + mod(v, N));
      requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)));
    }, 720);
    return () => clearTimeout(t);
  }, [vi]);

  const go = (target: number) => {
    setVi(target);
    onSelect(GOALS[mod(target, N)].id);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    moved.current = false;
    startX.current = e.clientX;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 8) moved.current = true;
    setDragDx(dx);
  };
  const endDrag = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
    const dx = e.clientX - startX.current;
    setDragDx(0);
    if (dx < -48) go(vi + 1);
    else if (dx > 48) go(vi - 1);
  };

  const offset = wrapW / 2 - (vi * (CARD + GAP) + CARD / 2);
  const items = [...GOALS, ...GOALS, ...GOALS];

  return (
    <div
      ref={wrapRef}
      className="relative -mx-4 cursor-grab overflow-hidden py-4 active:cursor-grabbing md:-mx-8"
      style={{ touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      role="group"
      aria-roledescription="carousel"
      aria-label="Swipe between the six goal dashboards"
    >
      <div
        className="flex w-max items-end"
        style={{
          gap: GAP,
          transform: `translate3d(${offset + dragDx}px, 0, 0)`,
          transition: dragging.current || instant ? "none" : `transform 700ms ${EASE}`,
        }}
      >
        {items.map((g, i) => {
          const d = Math.abs(i - vi);
          return (
            <button
              key={`${Math.floor(i / N)}-${g.id}`}
              onClick={() => {
                if (!moved.current) go(i);
              }}
              tabIndex={d === 0 ? 0 : -1}
              aria-label={`Show the ${g.chip} dashboard`}
              aria-current={d === 0}
              className="shrink-0"
              style={{
                opacity: d === 0 ? 1 : d === 1 ? 0.7 : 0.4,
                transition: dragging.current || instant ? "none" : `opacity 700ms ${EASE}`,
              }}
            >
              <PhoneMockup goal={g} active={d === 0} animateFeed={d === 0} />
            </button>
          );
        })}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28"
        style={{ background: "linear-gradient(90deg, #f9f6ef, rgba(249,246,239,0))" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28"
        style={{ background: "linear-gradient(270deg, #f9f6ef, rgba(249,246,239,0))" }}
      />
    </div>
  );
}
