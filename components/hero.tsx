import Image from "next/image";
import { launch } from "@/lib/site";
import { Demo } from "@/components/demo";

export function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="text-sm text-accent">{launch.eyebrow}</p>
          <h1 className="mt-5 max-w-xl text-[2.15rem] font-medium leading-[1.15] tracking-tight text-ink sm:text-5xl">
            {launch.headline}
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.6] text-ink-soft sm:text-lg">
            {launch.sub}
          </p>
          <p className="mt-6 max-w-xl text-sm leading-[1.6] text-muted">
            {launch.priceLine}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Demo />
            <a
              href="#launch"
              className="inline-flex items-center justify-center border border-ink px-5 py-3 text-sm text-ink hover:bg-paper-raised"
            >
              See Deft Launch
            </a>
          </div>
        </div>

        <figure className="relative aspect-[4/3] w-full overflow-hidden bg-paper-raised">
          <Image
            src="/already-on-a-job.jpg"
            alt="A tradesperson already on a job — the phone stays on the floor."
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-[50%_20%]"
          />
          <figcaption className="sr-only">
            Documentary photograph: already on a job. Missed-call recovery for
            trades, not an AI receptionist.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
