"use client";

import Image from "next/image";
import { useState } from "react";
import Sparkline from "./Sparkline";

type Message = { from: "you" | "jeani"; text: string; spark?: number[] };
type Scenario = { id: string; chip: string; thread: Message[] };

const SCENARIOS: Scenario[] = [
  {
    id: "ask-anything",
    chip: "Ask anything",
    thread: [
      { from: "you", text: "How did this week land on my knee?" },
      { from: "jeani", text: "Load rose 12 percent and your left knee stayed inside its normal range the whole way. One more week like this and the long run is safe." },
    ],
  },
  {
    id: "say-nothing",
    chip: "Or say nothing at all",
    thread: [
      { from: "jeani", text: "Morning. Sleep came in at 7:42 and your legs absorbed yesterday well. Readiness 84, six above your normal." },
      { from: "jeani", text: "Nothing needs your attention today. Enjoy the easy run." },
    ],
  },
  {
    id: "see-it-drawn",
    chip: "See it drawn",
    thread: [
      { from: "you", text: "Show me my knee over the month." },
      { from: "jeani", text: "Here is the trend. The dip mid-month is the week you raced.", spark: [74, 76, 73, 68, 64, 66, 70, 73, 77, 81] },
    ],
  },
  {
    id: "mystery",
    chip: "Give it a mystery",
    thread: [
      { from: "you", text: "Why am I so tired this week?" },
      { from: "jeani", text: "Three things stack up. Sleep is 40 minutes under your normal, Tuesday ran hotter than planned, and your resting heart rate is two beats up. Rest tonight and this clears by Friday." },
    ],
  },
  {
    id: "harder",
    chip: "Ask the harder questions",
    thread: [
      { from: "you", text: "Can I be ready for the half in six weeks?" },
      { from: "jeani", text: "Yes, on one condition. Your knee needs two more weeks at this load before speed work. I have laid the six weeks out so the long runs land where your body can take them." },
    ],
  },
  {
    id: "nudge",
    chip: "Get a nudge",
    thread: [
      { from: "you", text: "Remind me to do ankle drills before Thursday." },
      { from: "jeani", text: "Done. I will say so Thursday morning, before your session." },
    ],
  },
  {
    id: "tell-once",
    chip: "Tell it once",
    thread: [
      { from: "you", text: "My knee felt tight after Tuesday." },
      { from: "jeani", text: "Noted, and held. If tightness shows again inside your recovery window I will say so before your next hard day." },
    ],
  },
  {
    id: "send-things",
    chip: "Send it things",
    thread: [
      { from: "you", text: "Here is the report from my physio visit." },
      { from: "jeani", text: "Read and folded in. The strengthening plan is now part of your week, and I will watch the adductor she flagged." },
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
 * the text interface, shown as itself: a message thread with Jeani.
 * pick a moment and the conversation plays out one message at a time.
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
            className={`chip !px-3 !py-1.5 !text-[0.8125rem] ${
              selected === s.id ? "!border-accent !bg-accent !text-white" : "hover:border-cobalt/40"
            }`}
          >
            {s.chip}
          </button>
        ))}
      </div>

      {/* the phone-style message thread */}
      <div className="card mt-6 max-w-md overflow-hidden !rounded-3xl">
        <div className="flex items-center gap-3 border-b border-cobalt/8 px-5 py-3.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cobalt/5">
            <Image src="/j-blue.png" alt="" width={18} height={18} className="h-4 w-auto" />
          </span>
          <div>
            <p className="text-[0.9375rem] font-bold text-cobalt">Jeani</p>
            <p className="text-xs text-cobalt/55">Always reading. Speaks rarely.</p>
          </div>
        </div>
        <div key={scenario.id} className="flex min-h-[16rem] flex-col justify-end gap-2.5 bg-bone/60 px-4 py-5">
          {scenario.thread.map((m, i) => (
            <div
              key={`${m.from}-${i}`}
              className={`feed-item ${m.from === "you" ? "flex justify-end" : ""}`}
              style={{ animationDelay: `${i * 460 + (m.from === "jeani" ? 180 : 0)}ms` }}
            >
              {m.from === "jeani" ? (
                <div className="mr-10 rounded-2xl rounded-bl-md bg-white p-3.5 shadow-[0_10px_24px_-16px_rgba(16,34,120,0.35)]">
                  <p className="text-[0.9375rem] leading-relaxed text-cobalt/90">{m.text}</p>
                  {m.spark && (
                    <div className="mt-3 rounded-lg bg-bone/70 p-3">
                      <p className="text-[0.6875rem] font-medium text-cobalt/60">Left knee, last 30 days</p>
                      <Sparkline points={m.spark} className="mt-1.5 h-9 w-full" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="ml-14 w-fit rounded-2xl rounded-br-md bg-accent p-3.5 text-[0.9375rem] leading-relaxed text-white">
                  {m.text}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2.5 border-t border-cobalt/8 px-4 py-3">
          <div className="flex-1 rounded-full border border-cobalt/15 px-4 py-2 text-[0.875rem] text-cobalt/45">
            Message Jeani
          </div>
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-accent">
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
              <path d="M8 12.5v-9M4.5 7 8 3.5 11.5 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
