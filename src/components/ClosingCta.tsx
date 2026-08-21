import Link from "next/link";
import Reveal from "./Reveal";

export default function ClosingCta({
  headline,
  sub,
}: {
  headline: string;
  sub?: string;
}) {
  return (
    <section className="shell py-24 md:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="headline h-band">{headline}</h2>
        {sub && <p className="lede mx-auto mt-5 max-w-xl">{sub}</p>}
        <div className="mt-9 flex justify-center">
          <Link href="/pricing" className="btn btn-accent">
            Start your free trial
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
