import {
  callbackMailto,
  launch,
  launchExclusions,
  launchLimits,
  launchScope,
} from "@/lib/site";

export function Launch() {
  return (
    <section id="launch" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
          Named entry SKU
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-paper sm:text-6xl">
          {launch.name}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper-dim sm:text-lg">
          {launch.promise} Revenue recovery for any business that loses work to
          a missed ring — not an AI pitch.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          <div className="bg-ink p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
              Setup — one-off
            </p>
            <p className="mt-3 font-serif text-5xl text-paper">£497</p>
            <p className="mt-3 text-sm leading-relaxed text-paper-dim">
              Billed as its own line. Not blended into the monthly.
            </p>
          </div>
          <div className="bg-ink p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
              Monthly
            </p>
            <p className="mt-3 font-serif text-5xl text-paper">£79</p>
            <p className="mt-3 text-sm leading-relaxed text-paper-dim">
              {launch.term}. Separate line from setup.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-paper-dim">{launch.billing}</p>

        <div className="mt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            Limits — day one
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {launchLimits.map((limit) => (
              <li
                key={limit}
                className="rounded-full border border-line px-3.5 py-1.5 text-sm text-paper"
              >
                {limit}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-serif text-2xl text-paper">In scope</h3>
            <ul className="mt-5 space-y-3">
              {launchScope.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-paper">
                  <span className="mt-0.5 font-mono text-gold" aria-hidden="true">
                    +
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-paper">Out of scope</h3>
            <ul className="mt-5 space-y-3">
              {launchExclusions.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-paper-dim">
                  <span className="mt-0.5 font-mono text-gold" aria-hidden="true">
                    −
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <a
            href={callbackMailto()}
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-bright"
          >
            Book a callback
          </a>
        </div>
      </div>
    </section>
  );
}
