import type { Metadata } from "next";
import Image from "next/image";
import ThreadLine from "@/components/ThreadLine";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import ClosingCta from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "Story",
  description:
    "Built from real experience by Duke decathlete founders whose careers were changed by injuries better prevention could have foreseen.",
};

const TEAM = [
  {
    name: "Ewan Bradley",
    role: "Co-founder and CEO",
    img: "/photos/ewan.jpg",
    position: "center 28%",
    href: "https://www.linkedin.com/in/ewanrdbradley/",
    linkLabel: "linkedin.com/in/ewanrdbradley",
  },
  {
    name: "Michael Bennett",
    role: "Co-founder and COO",
    img: "/photos/michael.jpg",
    position: "center 15%",
    href: "https://www.linkedin.com/in/michael-bennett-052376210/",
    linkLabel: "linkedin.com/in/michael-bennett",
  },
  {
    name: "Stuart Bladon",
    role: "Co-founder and CTO",
    img: "/photos/stuart.jpg",
    position: "center 20%",
    href: "https://www.5tu.art",
    linkLabel: "5tu.art",
  },
];

export default function StoryPage() {
  return (
    <ThreadLine>
      {/* hero over a full-width photo, slow zoom on load */}
      <section className="relative overflow-hidden">
        <div className="slow-zoom">
          <Photo
            src="/photos/alpine.jpg"
            alt="Two trail runners moving along a rocky ridge beneath glaciated peaks"
            className="h-[18rem] w-full md:h-[22rem]"
            position="center 62%"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="shell pb-12 md:pb-16">
            <h1 className="rise-in headline h-hero max-w-3xl rounded-3xl bg-bone/85 p-7 backdrop-blur-sm md:p-10">
              Built from real experience
            </h1>
          </div>
        </div>
      </section>

      {/* origin and team, one section */}
      <section className="shell py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The origin</p>
          <h2 className="headline h-sect mt-3">Fifteen years inside elite sport</h2>
          <p className="copy mt-6">
            For the best part of fifteen years we lived the cost of injury. All
            three of our careers were disrupted, and in moments ended, by injuries
            that better prevention could have foreseen. The warning signs were in
            the data. Nobody was reading them.
          </p>
          <p className="copy mt-5">
            Duke decathletes with five national titles, four All-American honors
            and multiple school records between us, and backgrounds across
            machine learning, neuroscience, biology, physiology, public policy
            and business.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 120}>
              <a
                href={member.href}
                target="_blank"
                rel="noreferrer"
                className="card card-lift block overflow-hidden !rounded-none"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={member.img}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: member.position }}
                  />
                </div>
                <div className="p-5">
                  <p className="text-lg font-black tracking-tight text-cobalt">{member.name}</p>
                  <p className="copy mt-0.5 text-[0.9375rem]">{member.role}</p>
                  <p className="mt-2 text-sm font-medium text-accent">{member.linkLabel}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* belief */}
      <section className="shell py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <h2 className="headline h-band">Movement is for everyone.</h2>
          <p className="lede mt-6 max-w-xl">
            We believe the body you move with should be measured, understood and
            spoken to before it fails. In your terms, not the average person's.
          </p>
        </Reveal>
      </section>

      {/* vision band */}
      <section className="relative">
        <Photo
          src="/photos/grass.jpg"
          alt="A person standing still on a windswept grass hill under a wide blue sky"
          className="h-[26rem] w-full md:h-[32rem]"
          position="center 55%"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="shell">
            <Reveal>
              <h2 className="headline h-band max-w-3xl rounded-3xl bg-bone/85 p-8 backdrop-blur-sm md:p-12">
                The next frontier of health isn't just living longer. It's staying
                active longer.
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingCta
        headline="Keep moving with us."
        sub="Two weeks free, in your terms from the first morning."
      />
    </ThreadLine>
  );
}
