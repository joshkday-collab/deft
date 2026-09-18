import { callbackMailto, site } from "@/lib/site";

export function Callback() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
          Book a callback.
        </h2>
        <p className="mt-3 text-xl text-muted">Not a proposal.</p>
        <a
          href={callbackMailto()}
          className="mt-10 inline-flex items-center justify-center bg-accent px-5 py-3 text-sm font-medium text-paper hover:bg-accent-hover"
        >
          Book a callback
        </a>
        <p className="mt-6">
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-accent underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
