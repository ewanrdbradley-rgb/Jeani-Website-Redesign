import type { Metadata } from "next";
import ThreadLine from "@/components/ThreadLine";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import ClosingCta from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "Pricing",
  description: "One plan. Yours. Two weeks free, then monthly or annual.",
};

const INCLUDED = [
  "Full Thorpe analysis of your movement",
  "A dashboard built around your goal",
  "Goal tracking against your own normal",
  "Text interface, in your terms",
];

const FAQ = [
  "Works with Apple Watch today. Garmin arrives fall 2026.",
  "Cancel anytime, in two taps.",
  "Your data stays yours. Always.",
];

export default function PricingPage() {
  return (
    <ThreadLine path="M 50 0 C 50 10, 30 16, 30 28 C 30 44, 70 50, 70 64 C 70 78, 50 84, 50 100">
      <section className="shell pb-14 pt-14 md:pt-24">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Pricing</p>
          <h1 className="headline h-hero mt-3">One plan. Yours.</h1>
          <p className="lede mt-5 max-w-lg">
            Every subscription opens with a two-week free trial, built around your
            goal from the first morning.
          </p>
        </Reveal>
      </section>

      <section className="shell pb-16 md:pb-24">
        <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
          <div className="rise-in card card-lift p-8" style={{ animationDelay: "80ms" }}>
            <p className="text-lg font-black tracking-tight text-cobalt">Monthly</p>
            <p className="mt-4 text-5xl font-black tracking-tight text-cobalt">
              $19.99
              <span className="text-base font-semibold text-cobalt/60"> /month</span>
            </p>
            <p className="small-note mt-2">Two weeks free, then monthly.</p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="copy text-[0.9375rem]">{item}</span>
                </li>
              ))}
            </ul>
            <a href="/waitlist" className="btn btn-ghost mt-8 w-full justify-center">
              Start your free trial
            </a>
          </div>

          <div className="rise-in card card-lift relative border-accent/40 p-8" style={{ animationDelay: "180ms" }}>
            <span className="pulse-once absolute -top-3 right-6 rounded-full bg-accent px-3.5 py-1 text-xs font-semibold text-white">
              Best value
            </span>
            <p className="text-lg font-black tracking-tight text-cobalt">Annual</p>
            <p className="mt-4 text-5xl font-black tracking-tight text-cobalt">
              $199.99
              <span className="text-base font-semibold text-cobalt/60"> /year</span>
            </p>
            <p className="small-note mt-2">Two weeks free, then one payment a year.</p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="copy text-[0.9375rem]">{item}</span>
                </li>
              ))}
            </ul>
            <a href="/waitlist" className="btn btn-accent mt-8 w-full justify-center">
              Start your free trial
            </a>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <Reveal>
          <p className="small-note mb-6 text-center">
            The teams, clubs and partners we build alongside.
          </p>
          <LogoMarquee />
        </Reveal>
      </section>

      <section className="shell pb-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="headline h-sub">Good to know</h2>
          </Reveal>
          <div className="mt-6 flex flex-col">
            {FAQ.map((line, i) => (
              <Reveal key={line} delay={i * 90}>
                <div>
                  {i > 0 && <div className="hair" />}
                  <p className="copy py-4">{line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div id="start">
        <ClosingCta
          headline="Staying active longer starts today."
          sub="Two weeks free. Cancel anytime."
        />
      </div>
    </ThreadLine>
  );
}
