import { nav, site } from "@/lib/site";
import { Wordmark } from "@/components/wordmark";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <a href="#top" aria-label="Deft home">
          <Wordmark />
        </a>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted sm:px-8">
        <p>© {new Date().getFullYear()} Deft.</p>
      </div>
    </footer>
  );
}
