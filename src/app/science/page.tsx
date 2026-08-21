import type { Metadata } from "next";
import ThreadLine from "@/components/ThreadLine";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Photo from "@/components/Photo";
import ClosingCta from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "Science",
  description:
    "Joint load, asymmetry, movement quality. Measured in your terms, not the average person's.",
};

const STACK = [
  {
    name: "Multi-modal data ingestion",
    copy: "Apple Watch native. Oura, Whoop and Apple Health integrations. Biometrics and labs. And the goals only you can set.",
  },
  {
    name: "Thorpe MSK engine",
    copy: "Our proprietary engine translates motion and bio data into movement intelligence and joint load.",
  },
  {
    name: "Jeani intelligence layer",
    copy: "Consolidates your fragmented health context into one agent that knows your record end to end.",
  },
  {
    name: "Hyper-personalized experience",
    copy: "Chat, a dashboard built around your goal, and expert interventions when they matter.",
  },
];

export default function SciencePage() {
  return (
    <ThreadLine path="M 50 0 C 50 6, 26 10, 26 18 C 26 30, 50 34, 50 44 C 50 54, 50 58, 50 66 C 50 76, 74 80, 74 88 C 74 94, 50 96, 50 100">
      <section className="shell pb-16 pt-14 md:pb-24 md:pt-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Science</p>
          <h1 className="headline h-hero mt-3">Personal down to the model</h1>
          <p className="lede mt-5 max-w-xl">
            Joint load, asymmetry, movement quality. Measured in your terms, not the
            average person's.
          </p>
        </Reveal>
      </section>

      {/* the stack, linked by the thread */}
      <section className="shell py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <h2 className="headline h-sect">The stack</h2>
          <p className="lede mt-4">
            Data arrives at the top. A reading that belongs to one person comes out
            the bottom.
          </p>
        </Reveal>
        <div className="mx-auto mt-12 flex max-w-2xl flex-col">
          {STACK.map((layer, i) => (
            <div key={layer.name}>
              {i > 0 && (
                <div className="flex justify-center py-1" aria-hidden="true">
                  <span className="block h-8 w-px bg-cobalt/30" />
                </div>
              )}
              <Reveal delay={i * 120}>
                <div className="card card-lift p-7">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-semibold text-accent">
                      0{i + 1}
                    </span>
                    <div>
                      <p className="text-xl font-black tracking-tight text-cobalt">
                        {layer.name}
                      </p>
                      <p className="copy mt-2 text-[0.9375rem]">{layer.copy}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <Photo
        src="/photos/court.jpg"
        alt="A player mid-stride on a blue court, caught in natural motion blur"
        className="h-52 w-full md:h-72"
        position="center 56%"
      />

      {/* thorpe */}
      <section className="shell py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Thorpe</p>
            <h2 className="headline h-sect mt-3">
              A foundational model built to decode human movement quality from wrist
              accelerometers
            </h2>
            <p className="lede mt-5 max-w-md">
              Thorpe learns your baselines and your movement signature, so every
              score compares you to your own rolling normal. The longer it runs,
              the truer it reads, for you and for everyone who trains like you.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="card p-10 text-center">
              <p className="text-[5.5rem] font-black leading-none tracking-tight text-cobalt md:text-[7rem]">
                <CountUp to={11} suffix="%" duration={1400} />
              </p>
              <p className="lede mt-4">
                better than best-in-class at movement classification from the wrist.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* validation band */}
      <section className="relative">
        <Photo
          src="/photos/boardwalk.jpg"
          alt="Three athletes accelerating across a boardwalk under a deep blue sky"
          className="h-[26rem] w-full md:h-[30rem]"
          position="center 56%"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="shell">
            <Reveal>
              <div className="max-w-xl rounded-3xl bg-bone/85 p-8 backdrop-blur-sm md:p-10">
                <h2 className="headline h-sub">
                  In testing with 70 elite NCAA and Olympic athletes
                </h2>
                <p className="copy mt-3">
                  Built from real experience, validated where movement is measured
                  in hundredths.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingCta
        headline="Your terms, not the average person's."
        sub="Start free and let Thorpe learn your normal."
      />
    </ThreadLine>
  );
}
