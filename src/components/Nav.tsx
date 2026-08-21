"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/product", label: "The App" },
  { href: "/science", label: "The Model" },
  { href: "/story", label: "The Founders" },
  { href: "/pricing", label: "Membership" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "border-cobalt/10 bg-bone/85 backdrop-blur-md"
          : "border-transparent bg-bone"
      }`}
    >
      <div
        className={`shell flex items-center justify-between transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <Link href="/" aria-label="Jeani home" className="shrink-0">
          <Image
            src="/wordmark-blue.png"
            alt="Jeani"
            width={132}
            height={45}
            priority
            className={`w-auto transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
              scrolled ? "h-6" : "h-7"
            }`}
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[0.9375rem] font-medium transition-colors duration-300 hover:text-accent ${
                pathname === l.href ? "text-accent" : "text-cobalt/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://www.jeanihealth.com/waitlist" className="btn btn-cobalt !px-5 !py-2.5 text-sm">
            Start free trial
          </a>
          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`h-0.5 w-5 rounded bg-cobalt transition-transform duration-300 ${
            open ? "translate-y-1 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 rounded bg-cobalt transition-transform duration-300 ${
            open ? "-translate-y-1 -rotate-45" : ""
          }`}
        />
      </button>
      {open && (
        <nav
          aria-label="Mobile"
          className="fade-in absolute inset-x-0 top-full border-b border-cobalt/10 bg-bone/95 backdrop-blur-md"
        >
          <div className="shell flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2.5 text-lg font-semibold text-cobalt"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
