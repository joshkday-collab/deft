import { callbackMailto, launch, prices } from "@/lib/site";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
              Price list
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-paper sm:text-5xl">
              {launch.name} is the priced SKU. Everything else is quoted above.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-paper-dim lg:text-right">
            Setup and monthly are split lines — {launch.setupLabel}, then{" "}
            {launch.monthlyLabel}. {launch.term}. Custom AI, websites, and
            automation are quote work, not the opener.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-line">
          <table className="hidden w-full text-left md:table">
            <caption className="sr-only">Deft pricing — Launch then quoted work</caption>
            <thead className="bg-ink-raised font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
              <tr>
                <th scope="col" className="px-6 py-4 font-normal">
                  Engagement
                </th>
                <th scope="col" className="px-6 py-4 font-normal">
                  Setup
                </th>
                <th scope="col" className="px-6 py-4 font-normal">
                  Monthly
                </th>
                <th scope="col" className="px-6 py-4 font-normal">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {prices.map((row) => (
                <tr
                  key={row.name}
                  className={row.highlight ? "bg-ink-soft" : "bg-ink"}
                >
                  <th
                    scope="row"
                    className="px-6 py-5 font-serif text-xl font-normal text-paper"
                  >
                    {row.name}
                    {row.highlight ? (
                      <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
                        Named SKU
                      </span>
                    ) : null}
                  </th>
                  <td className="px-6 py-5 text-sm text-gold-bright">
                    {row.setup}
                  </td>
                  <td className="px-6 py-5 text-sm text-paper">{row.ongoing}</td>
                  <td className="px-6 py-5 text-sm text-paper-dim">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <ul className="divide-y divide-line md:hidden">
            {prices.map((row) => (
              <li
                key={row.name}
                className={`px-5 py-6 ${row.highlight ? "bg-ink-soft" : "bg-ink"}`}
              >
                <h3 className="font-serif text-2xl text-paper">{row.name}</h3>
                {row.highlight ? (
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
                    Named SKU
                  </p>
                ) : null}
                <p className="mt-3 text-sm text-gold-bright">{row.setup}</p>
                <p className="mt-1 text-sm text-paper">{row.ongoing}</p>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                  {row.note}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-paper-dim">
            Soft close is a callback — not a proposal request.
          </p>
          <a
            href={callbackMailto()}
            className="inline-flex items-center justify-center rounded-full border border-gold/40 px-5 py-3 text-sm text-gold-bright hover:bg-gold/10"
          >
            Book a callback
          </a>
        </div>
      </div>
    </section>
  );
}
