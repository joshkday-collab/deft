import { sectors } from "@/lib/site";

export function Sectors() {
  return (
    <section className="border-y border-line bg-ink-raised/40">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
          Built for any business
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {sectors.map((sector) => (
            <li
              key={sector}
              className="rounded-full border border-line px-3.5 py-1.5 text-sm text-paper-dim"
            >
              {sector}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
