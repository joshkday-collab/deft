import { mailto, prices } from "@/lib/site";

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
              Starting points. Every job is custom-quoted.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-paper-dim lg:text-right">
            No two businesses run the same. These figures get a conversation
            started — the quote is fixed once we know the work.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-line">
          <table className="hidden w-full text-left md:table">
            <caption className="sr-only">Deft starting prices</caption>
            <thead className="bg-ink-raised font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
              <tr>
                <th scope="col" className="px-6 py-4 font-normal">
                  Engagement
                </th>
                <th scope="col" className="px-6 py-4 font-normal">
                  Setup
                </th>
                <th scope="col" className="px-6 py-4 font-normal">
                  Ongoing
                </th>
                <th scope="col" className="px-6 py-4 font-normal">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {prices.map((row) => (
                <tr key={row.name} className="bg-ink">
                  <th
                    scope="row"
                    className="px-6 py-5 font-serif text-xl font-normal text-paper"
                  >
                    {row.name}
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
              <li key={row.name} className="bg-ink px-5 py-6">
                <h3 className="font-serif text-2xl text-paper">{row.name}</h3>
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
            Ready to scope something? Email Josh with what is breaking.
          </p>
          <a
            href={mailto("Deft quote request")}
            className="inline-flex items-center justify-center rounded-full border border-gold/40 px-5 py-3 text-sm text-gold-bright hover:bg-gold/10"
          >
            Request a fixed quote
          </a>
        </div>
      </div>
    </section>
  );
}
