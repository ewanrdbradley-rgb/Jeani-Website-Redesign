import CountUp from "./CountUp";
import Sparkline from "./Sparkline";
import type { Score } from "@/lib/goals";

export default function ScoreCard({
  score,
  compact = false,
}: {
  score: Score;
  compact?: boolean;
}) {
  return (
    <div className={`card ${compact ? "p-3.5" : "p-5"}`}>
      <div className="flex items-baseline justify-between gap-2">
        <p className={`font-medium text-cobalt/60 ${compact ? "text-[0.6875rem]" : "text-[0.8125rem]"}`}>
          {score.label}
        </p>
        {score.trend && (
          <p className={`font-semibold text-accent ${compact ? "text-[0.625rem]" : "text-xs"}`}>
            {score.trend}
          </p>
        )}
      </div>
      <p className={`mt-1 font-black tracking-tight text-cobalt ${compact ? "text-[1.7rem] leading-none" : "text-4xl"}`}>
        {typeof score.value === "number" ? (
          <CountUp to={score.value} suffix={score.suffix ?? ""} />
        ) : (
          <>{score.value}{score.suffix ?? ""}</>
        )}
      </p>
      <Sparkline points={score.points} className={`mt-2 w-full ${compact ? "h-5" : "h-7"}`} />
      <p className={`mt-2 text-cobalt/55 ${compact ? "text-[0.625rem]" : "text-xs"}`}>
        {score.normal}
      </p>
    </div>
  );
}
