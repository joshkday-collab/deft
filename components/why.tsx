import { reasons } from "@/lib/site";

export function Why() {
  return (
    <section id="why" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
          Why Deft
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-paper sm:text-5xl">
          Recover the job. Quote the rest.
        </h2>

        <ol className="mt-14 grid gap-8 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <li key={reason.title} className="relative pt-2">
              <span className="font-mono text-[11px] text-gold">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-serif text-2xl leading-snug text-paper">
                {reason.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                {reason.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
