"use client";

import { useState } from "react";

type Message = { from: "you" | "jeani"; text: string };
type Scenario = { id: string; chip: string; thread: Message[] };

const SCENARIOS: Scenario[] = [
  {
    id: "speaks-first",
    chip: "It speaks first",
    thread: [
      { from: "jeani", text: "Legs look ready for the long run. Tuesday's intervals landed well and your left knee held its normal the whole session." },
      { from: "jeani", text: "Keep the first 5k easy tomorrow and the rest will come to you." },
    ],
  },
  {
    id: "ask-anything",
    chip: "Ask anything",
    thread: [
      { from: "you", text: "How did this week land on my knee?" },
      { from: "jeani", text: "Load rose 12 percent and your left knee stayed inside its normal range the whole way. One more week like this and the long run is safe." },
    ],
  },
  {
    id: "flag",
    chip: "A flag, not an alarm",
    thread: [
      { from: "jeani", text: "Your right ankle wobbles a little more when you are tired. Nothing urgent, but it is drifting from your normal." },
      { from: "jeani", text: "Two minutes of drills before Thursday would go a long way." },
    ],
  },
  {
    id: "tell-once",
    chip: "Tell it once",
    thread: [
      { from: "you", text: "My knee felt tight after Tuesday." },
      { from: "jeani", text: "Noted, and held. If tightness shows up again inside your recovery window I will say so before your next hard day." },
    ],
  },
  {
    id: "escalation",
    chip: "When it matters",
    thread: [
      { from: "jeani", text: "This pattern has outgrown self-care. A professional should see it, and sooner is better than later." },
      { from: "jeani", text: "Here are three physios within reach of you, and the note I would bring to the first appointment." },
    ],
  },
];

/*
 * the text interface, shown as itself: pick a moment and watch the
 * conversation land, one message at a time.
 */
export default function VoiceDemo() {
  const [selected, setSelected] = useState(SCENARIOS[0].id);
  const scenario = SCENARIOS.find((s) => s.id === selected) ?? SCENARIOS[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelected(s.id)}
            aria-pressed={selected === s.id}
            className={`chip !text-[0.8125rem] ${
              selected === s.id ? "!border-accent !bg-accent !text-white" : "hover:border-cobalt/40"
            }`}
          >
            {s.chip}
          </button>
        ))}
      </div>
      <div key={scenario.id} className="mt-6 flex min-h-[15rem] max-w-md flex-col gap-3">
        {scenario.thread.map((m, i) => (
          <div
            key={`${m.from}-${i}`}
            className="feed-item"
            style={{ animationDelay: `${i * 420 + (m.from === "jeani" ? 160 : 0)}ms` }}
          >
            {m.from === "jeani" ? (
              <div className="card mr-8 rounded-2xl rounded-bl-md p-4">
                <p className="text-[0.6875rem] font-semibold text-accent">Jeani</p>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-cobalt/90">{m.text}</p>
              </div>
            ) : (
              <div className="ml-12 rounded-2xl rounded-br-md bg-cobalt p-4 text-[0.9375rem] leading-relaxed text-white shadow-[0_16px_32px_-20px_rgba(16,34,120,0.6)]">
                {m.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
