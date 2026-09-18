import Link from "next/link";
import { mailto } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 sm:px-8">
      <p className="text-sm text-accent">404</p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink">
        Page missing.
      </h1>
      <p className="mt-4 max-w-md text-[1.0625rem] leading-[1.6] text-ink-soft">
        That URL is not part of the site.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-accent px-5 py-3 text-sm font-medium text-paper hover:bg-accent-hover"
        >
          Back to Deft Launch
        </Link>
        <a
          href={mailto("Deft — broken link")}
          className="inline-flex items-center justify-center border border-ink px-5 py-3 text-sm text-ink"
        >
          Email Josh
        </a>
      </div>
    </main>
  );
}
