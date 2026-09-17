export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect
        x="1.25"
        y="1.25"
        width="29.5"
        height="29.5"
        rx="8"
        stroke="currentColor"
        className="text-gold"
        strokeWidth="1.5"
      />
      <path
        d="M11 22V10h6.1c3.15 0 5.15 1.85 5.15 4.55 0 1.7-.9 3.05-2.4 3.75L22.4 22h-3.05l-2.2-3.55H14V22h-3Zm3-8.7h2.85c1.45 0 2.3-.8 2.3-1.95s-.85-1.9-2.3-1.9H14v3.85Z"
        fill="currentColor"
        className="text-gold-bright"
      />
    </svg>
  );
}
