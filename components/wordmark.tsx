import { site } from "@/lib/site";

export function Wordmark({
  showTagline = true,
}: {
  showTagline?: boolean;
}) {
  return (
    <span className="flex flex-col items-start text-left">
      <span className="text-[1.05rem] font-medium uppercase leading-none tracking-[0.1em] text-ink">
        {site.wordmark}
      </span>
      {showTagline ? (
        <span className="mt-1.5 text-[0.75rem] font-normal leading-snug text-muted">
          {site.tagline}
        </span>
      ) : null}
    </span>
  );
}
