import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-cobalt/10 bg-bone">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Image
              src="/wordmark-blue.png"
              alt="Jeani"
              width={132}
              height={45}
              className="h-7 w-auto"
            />
            <p className="mt-3 max-w-xs text-[0.9375rem] text-cobalt/70">
              Personalizing your preventive health
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            <Link href="/product" className="text-[0.9375rem] font-medium text-cobalt/80 transition-colors hover:text-accent">The App</Link>
            <Link href="/science" className="text-[0.9375rem] font-medium text-cobalt/80 transition-colors hover:text-accent">The Model</Link>
            <Link href="/story" className="text-[0.9375rem] font-medium text-cobalt/80 transition-colors hover:text-accent">The Founders</Link>
            <Link href="/pricing" className="text-[0.9375rem] font-medium text-cobalt/80 transition-colors hover:text-accent">Membership</Link>
          </nav>
          <div className="flex flex-col gap-2.5 text-[0.9375rem] text-cobalt/70">
            <a href="mailto:ewan@jeanihealth.com" className="transition-colors hover:text-accent">
              ewan@jeanihealth.com
            </a>
            <span>@jeanihealth</span>
            <span>jeanihealth.com</span>
          </div>
        </div>
        <div className="hair mt-12" />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-cobalt/50">
            Staying active longer. Living without limits.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.jeanihealth.com/privacy"
              className="text-sm text-cobalt/50 transition-colors hover:text-accent"
            >
              Privacy
            </a>
            <a
              href="https://www.jeanihealth.com/terms"
              className="text-sm text-cobalt/50 transition-colors hover:text-accent"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
