"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PhoneMockup from "./PhoneMockup";
import { GOALS, type GoalId } from "@/lib/goals";

const CARD = 248;
const GAP = 28;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/*
 * the six dashboards as a carousel: the chosen goal holds the center,
 * the others wait either side. swipe, drag or tap to move between them.
 */
export default function PhoneCarousel({
  selected,
  onSelect,
}: {
  selected: GoalId;
  onSelect: (id: GoalId) => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState(0);
  const [dragDx, setDragDx] = useState(0);
  const dragging = useRef(false);
  const moved = useRef(false);
  const startX = useRef(0);
  const index = Math.max(0, GOALS.findIndex((g) => g.id === selected));

  const recalc = useCallback(() => {
    const w = wrapRef.current?.clientWidth ?? 0;
    setCenter(w / 2 - (index * (CARD + GAP) + CARD / 2));
  }, [index]);

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  const step = (dir: number) => {
    const next = Math.min(GOALS.length - 1, Math.max(0, index + dir));
    if (next !== index) onSelect(GOALS[next].id);
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
    if (dx < -48) step(1);
    else if (dx > 48) step(-1);
  };

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
          transform: `translate3d(${center + dragDx}px, 0, 0)`,
          transition: dragging.current ? "none" : `transform 700ms ${EASE}`,
        }}
      >
        {GOALS.map((g, i) => {
          const d = Math.abs(i - index);
          return (
            <button
              key={g.id}
              onClick={() => {
                if (!moved.current) onSelect(g.id);
              }}
              aria-label={`Show the ${g.chip} dashboard`}
              aria-current={i === index}
              className="shrink-0"
              style={{
                opacity: d === 0 ? 1 : d === 1 ? 0.7 : 0.4,
                transition: `opacity 700ms ${EASE}`,
              }}
            >
              <PhoneMockup goal={g} active={i === index} animateFeed={i === index} />
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
