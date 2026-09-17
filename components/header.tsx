"use client";

import { useState } from "react";
import { mailto, nav } from "@/lib/site";
import { Mark } from "@/components/mark";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/75 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-gold focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Deft home">
          <Mark className="size-7" />
          <span className="font-serif text-2xl tracking-tight text-paper">
            Deft
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-paper-dim md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={mailto("Deft enquiry")}
            className="hidden rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-gold-bright sm:inline-flex"
          >
            Talk to Josh
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line text-paper md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
              <span
                className={`h-px w-full bg-paper transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-paper transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-ink px-5 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-3 text-base text-paper"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={mailto("Deft enquiry")}
              className="mt-2 rounded-full bg-gold px-4 py-3 text-center text-sm font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Talk to Josh
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
