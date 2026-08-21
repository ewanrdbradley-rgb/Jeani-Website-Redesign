import type { Goal } from "@/lib/goals";

export default function ChatBubbles({
  goal,
  animate = true,
}: {
  goal: Goal;
  animate?: boolean;
}) {
  return (
    <div key={animate ? goal.id : "static"} className="flex max-w-md flex-col gap-3">
      {goal.bubbles.map((bubble, i) => (
        <div
          key={bubble}
          className={`${animate ? "feed-item" : ""} card rounded-2xl rounded-bl-md p-4`}
          style={animate ? { animationDelay: `${i * 160}ms` } : undefined}
        >
          <p className="text-[0.6875rem] font-semibold text-accent">Jeani</p>
          <p className="mt-1 text-[0.9375rem] leading-relaxed text-cobalt/90">{bubble}</p>
        </div>
      ))}
    </div>
  );
}
