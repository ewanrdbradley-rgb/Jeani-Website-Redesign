"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GOALS, type GoalId } from "@/lib/goals";
import ThreadLine from "./ThreadLine";
import Reveal from "./Reveal";
import CyclingWord from "./CyclingWord";
import Photo from "./Photo";
import ParallaxBand from "./ParallaxBand";
import Streams from "./Streams";
import PhoneCarousel from "./PhoneCarousel";
import VoiceDemo from "./VoiceDemo";
import Chips from "./Chips";
import CountUp from "./CountUp";
import ClosingCta from "./ClosingCta";

export default function HomeClient() {
  const [selected, setSelected] = useState<GoalId>("marathon");
  const goal = GOALS.find((g) => g.id === selected) ?? GOALS[0];

  return (
    <ThreadLine>
      {/* 1 · hero */}
      <section className="shell grid items-center gap-10 pb-20 pt-14 md:grid-cols-2 md:gap-14 md:pb-28 md:pt-20">
        <div className="rise-in">
          <h1 className="headline h-hero">
            The personal health agent built around{" "}
            <CyclingWord
              words={[
                "your marathon PR",
                "your first 5k",
                "your comeback",
                "your trail ultra",
                "moving well for life",
                "pickleball, pain free",
              ]}
            />
          </h1>
          <p className="lede mt-6 max-w-md">Personalizing your preventive health.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="/waitlist" className="btn btn-accent">
              Start your free trial
            </a>
            <Link href="/product" className="btn btn-ghost">
              See how it works
            </Link>
          </div>
          <div className="mt-6 flex max-w-sm items-start gap-3">
            <Image
              src="/apple-watch-mark.png"
              alt="Apple Watch"
              width={96}
              height={32}
              className="mt-0.5 h-4 w-auto opacity-80"
            />
            <p className="small-note">
              <span className="font-semibold text-cobalt/85">Live on Apple Watch today.</span>{" "}
              Jeani reads the watch you already wear and texts you when it matters.
            </p>
          </div>
        </div>
        <Reveal delay={120}>
          <Photo
            src="/photos/hero.jpg"
            alt="Two runners striding up a volcanic trail against an open sky"
            className="aspect-[4/5] shadow-[0_32px_64px_-32px_rgba(16,34,120,0.4)] md:aspect-[5/6]"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </Reveal>
      </section>

      {/* 2 · the goal */}
      <section className="shell py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="headline h-sect">It starts with your goal</h2>
          <p className="lede mt-4">
            Tell Jeani what you are moving toward. Not a step count, a real goal, in
            your words.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {GOALS.map((g, i) => (
            <Reveal key={g.id} delay={i * 100}>
              <button
                onClick={() => setSelected(g.id)}
                aria-pressed={selected === g.id}
                className={`card card-lift w-full p-6 text-left transition-colors duration-300 ${
                  selected === g.id ? "!border-accent/60 ring-1 ring-accent/40" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`block h-1.5 w-8 rounded-full transition-colors duration-300 ${
                    selected === g.id ? "bg-accent" : "bg-cobalt/15"
                  }`}
                />
                <span className="mt-4 block text-xl font-black tracking-tight text-cobalt">
                  {g.chip}
                </span>
                <span className="copy mt-2 block text-[0.9375rem]">{g.line}</span>
              </button>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="small-note mt-6">
            Your choice shapes everything below. Try another and watch the page rebuild.
          </p>
        </Reveal>
      </section>

      {/* 3 · one continuous record */}
      <section className="shell py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="headline h-sect">One continuous record of you</h2>
            <p className="lede mt-4 max-w-md">
              Sleep, heart, training, movement, labs, and the things only you can
              say. Every stream your Apple Watch already generates, read as one person rather
              than a pile of apps, drawn into a single thread that ends in one
              insight, in service of your goal.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Streams goalChip={goal.chip} />
          </Reveal>
        </div>
      </section>

      {/* breather */}
      <Photo
        src="/photos/court-2.jpg"
        alt="An athlete low and ready on a blue court, paddle in hand, caught in motion blur"
        className="h-52 w-full md:h-72"
        position="center 54%"
      />

      {/* 4 · the dashboards, the centerpiece */}
      <section className="shell py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="headline h-sect">No two dashboards look the same</h2>
          <p className="lede mt-4">
            The thread ends up here, inside your Today feed. Jeani rebuilds it around
            the goal and the body it belongs to. Six goals, six different mornings,
            and no two of them ever look the same.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-2.5">
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
        <Reveal delay={100}>
          <div className="mt-12">
            <PhoneCarousel selected={selected} onSelect={setSelected} />
          </div>
        </Reveal>
        <Reveal delay={160}>
          <p className="small-note mt-10 text-center">
            Measured against your normal, not the average person's.
          </p>
        </Reveal>
      </section>

      {/* 5 · the voice */}
      <section className="shell py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="headline h-sect">It speaks when it's worth saying</h2>
            <p className="lede mt-4 max-w-md">
              No streaks, no confetti, no noise. Jeani writes to you in the terms of
              the goal you set, and only when there is something worth acting on.
              It all arrives as texts, straight to your number, with no new app to
              open. Pick a moment and watch how the conversation goes.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <VoiceDemo />
          </Reveal>
        </div>
      </section>

      {/* 6 · belief band: the box holds the center, the photo glides behind */}
      <ParallaxBand
        src="/photos/dusk.jpg"
        alt="A line of runners silhouetted against a golden evening sky"
      >
        <div className="shell">
          <Reveal>
            <h2 className="headline h-band max-w-4xl rounded-3xl bg-bone/80 p-8 backdrop-blur-sm md:p-12">
              Movement is for everyone. So Jeani is different for everyone.
            </h2>
          </Reveal>
        </div>
      </ParallaxBand>

      {/* 7 · proof */}
      <section className="shell py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="headline h-sect">Tested where movement is hardest</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Reveal>
            <div className="card p-7">
              <p className="text-5xl font-black tracking-tight text-cobalt">
                <CountUp to={70} />
              </p>
              <p className="copy mt-3 text-[0.9375rem]">
                elite NCAA and Olympic athletes testing Jeani right now.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card p-7">
              <p className="text-5xl font-black tracking-tight text-cobalt">
                <CountUp to={11} suffix="%" />
              </p>
              <p className="copy mt-3 text-[0.9375rem]">
                better than best-in-class at reading movement from the wrist.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="card p-7">
              <p className="text-5xl font-black tracking-tight text-cobalt">
                <CountUp to={5} />
              </p>
              <p className="copy mt-3 text-[0.9375rem]">
                national titles between the Duke decathlete founders who built it.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={220}>
          <div className="mt-12">
            <Chips />
          </div>
        </Reveal>
      </section>

      {/* 8 · closing */}
      <ClosingCta
        headline="Staying active longer. Living without limits."
        sub="Two weeks free, built around your goal from the first morning."
      />
    </ThreadLine>
  );
}
