"use client";

import { useMemo, useState } from "react";
import { mailto, site } from "@/lib/site";

const topics = [
  "Website",
  "AI assistant",
  "Lead capture",
  "Automation",
  "Ops dashboard",
  "Custom build",
] as const;

export function Contact() {
  const [topic, setTopic] = useState<(typeof topics)[number]>("Website");
  const href = useMemo(
    () =>
      mailto(
        `Deft enquiry — ${topic}`,
        `Hi Josh,\n\nI run a business and I am looking at ${topic.toLowerCase()} help.\n\nA sentence on what is breaking:\n\nThanks.`,
      ),
    [topic],
  );

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line">
      <div className="relative mx-auto max-w-6xl overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
        <div className="glow -right-24 top-0" />
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
          Contact
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-paper sm:text-6xl">
          Tell us what you sell.
          <span className="block text-gold-bright">
            We will run the rest.
          </span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-dim">
          A short email is enough. Mention the business, the bottleneck, and
          whether you need a site, an assistant, capture, or a custom build.
        </p>

        <fieldset className="mt-10">
          <legend className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
            What should we talk about?
          </legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {topics.map((item) => {
              const active = item === topic;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTopic(item)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    active
                      ? "border-gold bg-gold text-ink"
                      : "border-line text-paper hover:border-gold/50"
                  }`}
                  aria-pressed={active}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={href}
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-ink hover:bg-gold-bright"
          >
            Email Josh
          </a>
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-sm text-gold-bright underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
