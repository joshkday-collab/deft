import { howItWorks } from "@/lib/site";

export function How() {
  return (
    <section id="how" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-sm text-accent">How it works</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          Miss → Answer → WhatsApp to the van → You call back
        </h2>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item, index) => (
            <li key={item.title}>
              <p className="text-sm text-muted">{item.step}</p>
              <p className="mt-3 text-xl font-medium tracking-tight text-ink">
                {item.title}
              </p>
              {index < howItWorks.length - 1 ? (
                <p className="mt-3 text-sm text-muted lg:hidden" aria-hidden="true">
                  →
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
