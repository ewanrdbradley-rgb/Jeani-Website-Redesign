"use client";

import Image from "next/image";
import { useState } from "react";
import { GOALS, type GoalId } from "@/lib/goals";
import ThreadLine from "./ThreadLine";
import Reveal from "./Reveal";
import Photo from "./Photo";
import Streams from "./Streams";
import PhoneMockup from "./PhoneMockup";
import ChatBubbles from "./ChatBubbles";
import Chips from "./Chips";
import ClosingCta from "./ClosingCta";

const BENEFITS = [
  {
    title: "You see the entire context",
    copy: "Every stream you already generate, read together as one person.",
  },
  {
    title: "You know how to act",
    copy: "One clear reading at a time, in the terms of your goal.",
  },
  {
    title: "You act in time",
    copy: "Change shows up in your normal weeks before it shows up as pain.",
  },
  {
    title: "Escalation when needed",
    copy: "When something needs a professional, Jeani says so and helps you get there.",
  },
];

export default function ProductClient() {
  const [selected, setSelected] = useState<GoalId>("marathon");
  const goal = GOALS.find((g) => g.id === selected) ?? GOALS[0];

  return (
    <>
      {/* pinned persona toggle: everything below reflects the selection */}
      <div className="sticky top-[57px] z-40 border-b border-cobalt/10 bg-bone/85 backdrop-blur-md">
        <div className="shell flex flex-wrap items-center gap-2.5 py-3.5">
          <span className="mr-1 text-sm font-medium text-cobalt/60">Your goal</span>
          {GOALS.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelected(g.id)}
              aria-pressed={selected === g.id}
              className={`chip transition-all duration-300 ${
                selected === g.id
                  ? "!border-accent !bg-accent !text-white"
                  : "hover:border-cobalt/40"
              }`}
            >
              {g.chip}
            </button>
          ))}
        </div>
      </div>

      <ThreadLine>
        <section className="shell pb-16 pt-14 md:pt-20">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Product</p>
            <h1 className="headline h-hero mt-3">Built around one person. You.</h1>
            <p className="lede mt-5 max-w-lg">
              Pick a goal above and watch every screen on this page rebuild around
              it. That is the product.
            </p>
            <div className="mt-5 flex max-w-md items-start gap-3">
              <Image
                src="/apple-watch-mark.png"
                alt="Apple Watch"
                width={96}
                height={32}
                className="mt-0.5 h-4 w-auto opacity-80"
              />
              <p className="small-note">
                <span className="font-semibold text-cobalt/85">Wear your Apple Watch.</span>{" "}
                Jeani reads it and texts you when it matters. Nothing new to buy,
                nothing new to charge.
              </p>
            </div>
          </Reveal>
        </section>

        {/* a · set your goal */}
        <section className="shell py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow">01</p>
              <h2 className="headline h-sect mt-3">Set your goal</h2>
              <p className="lede mt-4 max-w-md">
                A marathon PR, a first 5k, a comeback, a trail ultra, pickleball
                without pain, or simply moving well for life. One choice, in your own
                words. It becomes the lens for everything Jeani reads and says.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div key={goal.id} className="feed-item card p-8">
                <span aria-hidden="true" className="block h-1.5 w-10 rounded-full bg-accent" />
                <p className="mt-5 text-2xl font-black tracking-tight text-cobalt">{goal.chip}</p>
                <p className="copy mt-3">{goal.line}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* b · one continuous record */}
        <section className="shell py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal className="md:order-2">
              <p className="eyebrow">02</p>
              <h2 className="headline h-sect mt-3">One continuous record</h2>
              <p className="lede mt-4 max-w-md">
                Sleep, heart, training, movement, labs, and the things only you
                can say, read from your Apple Watch and Apple Health. One person,
                not a pile of apps. The record runs
                for years, so your normal is really yours.
              </p>
            </Reveal>
            <Reveal delay={120} className="md:order-1">
              <Streams goalChip={goal.chip} />
            </Reveal>
          </div>
        </section>

        <Photo
          src="/photos/court-2.jpg"
          alt="An athlete low and ready on a blue court, paddle in hand, caught in motion blur"
          className="h-52 w-full md:h-72"
          position="center 54%"
        />

        {/* c · dashboard rebuilds */}
        <section className="shell py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow">03</p>
              <h2 className="headline h-sect mt-3">A dashboard that rebuilds around you</h2>
              <p className="lede mt-4 max-w-md">
                This is the {goal.chip} Today feed. Switch the goal above and the
                message, the checklist and the scores all change, because the person
                they serve has changed.
              </p>
              <p className="small-note mt-4">
                Measured against your normal, not the average person's.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex justify-center">
                <PhoneMockup goal={goal} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* d · it speaks your language */}
        <section className="shell py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal className="md:order-2">
              <p className="eyebrow">04</p>
              <h2 className="headline h-sect mt-3">It speaks your language</h2>
              <p className="lede mt-4 max-w-md">
                Every message is written in the terms of the goal you set. And when
                something matters more than a message, Jeani escalates, pointing you
                to the right professional in time to act.
              </p>
            </Reveal>
            <div className="md:order-1">
              <ChatBubbles goal={goal} />
            </div>
          </div>
        </section>

        {/* benefits */}
        <section className="shell py-16 md:py-24">
          <Reveal>
            <h2 className="headline h-sub">What that adds up to</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <div className="card card-lift h-full p-6">
                  <p className="text-lg font-black tracking-tight text-cobalt">{b.title}</p>
                  <p className="copy mt-2 text-[0.9375rem]">{b.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="shell pb-4 pt-8">
          <Reveal>
            <Chips />
          </Reveal>
        </section>

        <ClosingCta
          headline="Your goal is waiting."
          sub="Two weeks free. Your dashboard rebuilds around it from day one."
        />
      </ThreadLine>
    </>
  );
}
