import Link from "next/link";
import { mailto } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
        404
      </p>
      <h1 className="mt-4 font-serif text-5xl text-paper">Page missing.</h1>
      <p className="mt-4 max-w-md text-paper-dim">
        That URL is not part of the site. Head home, or email Josh if you were
        sent here on purpose.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-gold px-5 py-3 text-sm font-medium text-ink"
        >
          Back to Deft
        </Link>
        <a
          href={mailto("Deft — broken link")}
          className="rounded-full border border-line px-5 py-3 text-sm text-paper"
        >
          Email Josh
        </a>
      </div>
    </main>
  );
}
