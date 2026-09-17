import { mailto } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="glow -top-24 left-1/2 -translate-x-1/2 sm:left-auto sm:right-[-6rem] sm:translate-x-0" />
      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <p
            className="rise font-mono text-[11px] uppercase tracking-[0.28em] text-gold"
            style={{ animationDelay: "40ms" }}
          >
            Consultancy · any business
          </p>
          <h1
            className="rise mt-5 font-serif text-[4.6rem] leading-[0.85] tracking-tight text-paper sm:text-[7.5rem]"
            style={{ animationDelay: "120ms" }}
          >
            Deft
          </h1>
          <p
            className="rise mt-6 max-w-xl font-serif text-[1.7rem] leading-tight text-paper sm:text-[2.35rem]"
            style={{ animationDelay: "200ms" }}
          >
            Custom solutions.
            <span className="block text-gold-bright">
              You sell. We run the backend.
            </span>
          </p>
          <p
            className="rise mt-6 max-w-lg text-base leading-relaxed text-paper-dim sm:text-lg"
            style={{ animationDelay: "280ms" }}
          >
            Websites, AI assistants, lead capture, and automation — built around
            how your business actually operates. Clinics, retailers, studios,
            manufacturers, agencies. If you sell something, we run the system
            behind it.
          </p>
          <div
            className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href={mailto("Deft enquiry")}
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-bright"
            >
              Start a conversation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3.5 text-sm text-paper transition-colors hover:border-gold/50"
            >
              See what we build
            </a>
          </div>
        </div>

        <div
          className="rise relative"
          style={{ animationDelay: "420ms" }}
          aria-hidden="true"
        >
          <OpsStack />
        </div>
      </div>
    </section>
  );
}

function OpsStack() {
  return (
    <div className="rounded-[1.6rem] border border-line bg-ink-raised/80 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-5">
      <div className="mb-4 flex items-center justify-between px-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
          Live stack
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-paper-dim">
          <span className="size-1.5 rounded-full bg-gold" />
          Running
        </span>
      </div>
      <div className="space-y-2.5">
        <StackRow
          label="Website"
          title="New enquiry from the site"
          meta="14:02 · booked a call"
        />
        <StackRow
          label="Lead"
          title="Qualified · budget confirmed"
          meta="Assistant handled the first pass"
        />
        <StackRow
          label="Workflow"
          title="Calendar, CRM, follow-up"
          meta="No spreadsheet. No missed handoff."
        />
        <StackRow
          label="Ops"
          title="Pipeline visible this week"
          meta="3 live · 1 waiting · cash on track"
          last
        />
      </div>
    </div>
  );
}

function StackRow({
  label,
  title,
  meta,
  last = false,
}: {
  label: string;
  title: string;
  meta: string;
  last?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-ink px-4 py-3.5 ${last ? "bg-ink-soft" : ""}`}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
        {label}
      </p>
      <p className="mt-1.5 text-sm text-paper">{title}</p>
      <p className="mt-1 text-xs text-paper-dim">{meta}</p>
    </div>
  );
}
