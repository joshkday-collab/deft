import { launch, launchExclusions, launchScope } from "@/lib/site";

export function Launch() {
  return (
    <section id="launch" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-sm text-accent">{launch.name}</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          £497 setup + £79/mo. Split billing. WhatsApp only.
        </h2>

        <div className="mt-12 border border-line bg-paper-raised/50 px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted">Setup</p>
              <p className="mt-2 text-4xl font-medium tracking-tight">£497</p>
              <p className="mt-2 text-[1.0625rem] leading-[1.6] text-ink-soft">
                on acceptance. Its own line.
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">Monthly</p>
              <p className="mt-2 text-4xl font-medium tracking-tight">£79</p>
              <p className="mt-2 text-[1.0625rem] leading-[1.6] text-ink-soft">
                from go-live. {launch.term}.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-sm text-accent">In</h3>
              <ul className="mt-4 space-y-2 text-[1.0625rem] leading-[1.6]">
                {launchScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-accent">Out</h3>
              <ul className="mt-4 space-y-2 text-[1.0625rem] leading-[1.6] text-ink-soft">
                {launchExclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-[1.0625rem] leading-[1.6] text-muted">
          {launch.consultancyLine}
        </p>
      </div>
    </section>
  );
}
