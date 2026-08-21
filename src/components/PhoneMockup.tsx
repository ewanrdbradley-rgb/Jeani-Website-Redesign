import ScoreCard from "./ScoreCard";
import type { Goal } from "@/lib/goals";

/*
 * one Today feed per goal. no two of these are ever the same:
 * different message, different checklist, different scores.
 */
export default function PhoneMockup({
  goal,
  active = true,
  animateFeed = true,
}: {
  goal: Goal;
  active?: boolean;
  animateFeed?: boolean;
}) {
  return (
    <div
      className={`w-[248px] shrink-0 rounded-[2.2rem] border bg-white p-2.5 transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
        active
          ? "z-10 -translate-y-2 scale-[1.03] border-cobalt/10 shadow-[0_36px_70px_-30px_rgba(16,34,120,0.45)]"
          : "scale-[0.97] border-cobalt/8 opacity-70 shadow-[0_24px_50px_-30px_rgba(16,34,120,0.3)]"
      }`}
    >
      <div className="rounded-[1.75rem] bg-bone/70 px-3 pb-4 pt-3">
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-cobalt/15" />
        <div key={animateFeed ? goal.id : "static"} className="flex flex-col gap-2.5">
          <div className="feed-item flex items-baseline justify-between px-1" style={{ animationDelay: "0ms" }}>
            <p className="text-sm font-black tracking-tight text-cobalt">Today</p>
            <p className="text-[0.625rem] font-medium text-cobalt/50">{goal.chip}</p>
          </div>

          <div className="feed-item card p-3.5" style={{ animationDelay: "90ms" }}>
            <p className="text-[0.625rem] font-semibold text-accent">Jeani</p>
            <p className="mt-1 text-[0.875rem] font-semibold leading-snug text-cobalt">
              {goal.message}
            </p>
          </div>

          <div className="feed-item card p-3.5" style={{ animationDelay: "180ms" }}>
            <p className="text-[0.6875rem] font-medium text-cobalt/60">{goal.checklistTitle}</p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {goal.checklist.map((item) => (
                <li key={item.text} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border text-[0.5rem] ${
                      item.done
                        ? "border-accent bg-accent text-white"
                        : "border-cobalt/25 text-transparent"
                    }`}
                  >
                    ✓
                  </span>
                  <span className={`text-[0.75rem] leading-snug ${item.done ? "text-cobalt/55" : "text-cobalt/85"}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {goal.scores.map((score, i) => (
            <div key={score.label} className="feed-item" style={{ animationDelay: `${270 + i * 90}ms` }}>
              <ScoreCard score={score} compact />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
