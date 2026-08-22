import Image from "next/image";

const LOGOS = [
  { src: "/logos/duke.png", alt: "Duke", h: "h-10" },
  { src: "/logos/ncaa.png", alt: "NCAA", h: "h-10" },
  { src: "/logos/acc.png", alt: "ACC", h: "h-8" },
  { src: "/logos/cooldown.jpg", alt: "Cooldown", h: "h-9", rounded: true },
  { src: "/logos/crunk.png", alt: "Crunk Club", h: "h-11" },
  { src: "/logos/capstone.jpg", alt: "Capstone Event Group", h: "h-9", rounded: true },
];

/* the teams, clubs and partners, drifting past at an even pace */
export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden" aria-label="Partners and communities">
      <div className="marquee flex w-max items-center">
        {[0, 1, 2, 3].map((copy) => (
          <div key={copy} aria-hidden={copy > 0} className="flex items-center gap-20 pr-20">
            {LOGOS.map((logo) => (
              <Image
                key={`${copy}-${logo.alt}`}
                src={logo.src}
                alt={copy === 0 ? logo.alt : ""}
                width={200}
                height={80}
                className={`w-auto ${logo.h} ${logo.rounded ? "rounded-lg" : ""}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-20" style={{ background: "linear-gradient(90deg, #f9f6ef, rgba(249,246,239,0))" }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-20" style={{ background: "linear-gradient(270deg, #f9f6ef, rgba(249,246,239,0))" }} />
    </div>
  );
}
