import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
            Services
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-paper sm:text-5xl">
            Start with the jobs walking away.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paper-dim sm:text-lg">
            Consultancy for any business. Launch is the named product —
            revenue recovery first. Websites, custom AI, and automation are
            quoted above it.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id} className="bg-ink p-6 sm:p-8">
              <p className="font-mono text-[11px] text-gold">{service.number}</p>
              <h3 className="mt-4 font-serif text-2xl text-paper">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                {service.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
