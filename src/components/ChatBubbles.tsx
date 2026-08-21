import type { Goal } from "@/lib/goals";
import Reveal from "./Reveal";

/* the voice: each bubble flows in on its own beat as you scroll */
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
        <Reveal key={bubble} delay={i * 180}>
          <div className="card rounded-2xl rounded-bl-md p-4">
            <p className="text-[0.6875rem] font-semibold text-accent">Jeani</p>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-cobalt/90">{bubble}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
