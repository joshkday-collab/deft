import { mailto, nav, site } from "@/lib/site";
import { Mark } from "@/components/mark";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <Mark className="size-6" />
            <span className="font-serif text-xl text-paper">Deft</span>
          </a>
          <p className="mt-3 max-w-sm text-sm text-paper-dim">{site.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper-dim">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-paper">
              {item.label}
            </a>
          ))}
          <a href={mailto()} className="hover:text-paper">
            {site.email}
          </a>
        </div>
      </div>
      <div className="hairline h-px" />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-paper-dim sm:flex-row sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Deft. All rights reserved.</p>
        <p>You sell. We run the backend.</p>
      </div>
    </footer>
  );
}
