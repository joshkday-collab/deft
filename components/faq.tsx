import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-sm text-accent">FAQ</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          Missed-call recovery, answered.
        </h2>
        <dl className="mt-14 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <div key={item.q} className="grid gap-3 py-8 lg:grid-cols-[1fr_1.2fr]">
              <dt className="font-medium leading-snug tracking-tight text-ink">
                {item.q}
              </dt>
              <dd className="text-[1.0625rem] leading-[1.6] text-ink-soft">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
