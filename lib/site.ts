export const site = {
  name: "Deft",
  wordmark: "DEFT",
  tagline: "Stop losing jobs to voicemail.",
  title: "Deft Launch — missed-call recovery for trades | Greater Manchester",
  description:
    "When you miss a call, we answer and WhatsApp name, number, and job to the van. £497 setup + £79/mo. Revenue recovery for trades — not an AI pitch.",
  email: "joshkday@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://deft.vercel.app",
} as const;

export const keywords = [
  "missed call recovery trades",
  "WhatsApp lead capture",
  "plumbers",
  "electricians",
  "Greater Manchester trade missed calls",
  "stop losing jobs to voicemail",
] as const;

export const launch = {
  name: "Deft Launch",
  eyebrow: "Deft Launch · missed-call recovery",
  headline: "Recover the jobs you miss when you’re already on a job.",
  sub: "When a customer rings and you’re on a job, they don’t wait — and most don’t leave a voicemail. Deft Launch answers, takes the name, number, and what they need, and WhatsApps it to your van so they don’t ring the next trade.",
  priceLine:
    "£497 setup on acceptance · £79/month from go-live · 3-month term, then month-to-month · WhatsApp only",
  setup: 497,
  monthly: 79,
  setupLabel: "£497 setup on acceptance",
  monthlyLabel: "£79/month from go-live",
  term: "3-month term, then month-to-month",
  channel: "WhatsApp only",
  consultancyLine:
    "Need custom web, automation, or AI? Ask on the callback — quoted separately, never the opener.",
} as const;

export const howItWorks = [
  { step: "01", title: "Miss" },
  { step: "02", title: "Answer" },
  { step: "03", title: "WhatsApp to the van" },
  { step: "04", title: "You call back" },
] as const;

export const launchScope = [
  "one divert",
  "short intake",
  "one WhatsApp dest",
  "lead log",
  "3 test misses before live",
] as const;

export const launchExclusions = [
  "SMS/email as lead channel",
  "open AI retainers",
  "website in Launch",
  "full PBX day one",
] as const;

export const nav = [
  { href: "#how", label: "How it works" },
  { href: "#launch", label: "Launch" },
  { href: "#recover", label: "Recover" },
  { href: "#faq", label: "FAQ" },
] as const;

export const faqs = [
  {
    q: "What happens when I miss a call with Deft Launch?",
    a: "Deft Launch answers, takes the name, number, and what they need, and WhatsApps it to your van so they don’t ring the next trade. You call back.",
  },
  {
    q: "Do I need a new phone number?",
    a: "No. You keep the number customers already ring. Setup is one divert path — not a new public number, and not a full PBX.",
  },
  {
    q: "Why WhatsApp instead of SMS or email?",
    a: "Launch is WhatsApp only. The van already lives there. SMS and email are not the lead channel.",
  },
  {
    q: "What’s included in the £497 setup and £79 a month?",
    a: "£497 setup on acceptance covers one divert, short intake, one WhatsApp destination, a lead log, and 3 test misses before live. £79/month from go-live keeps that path running. Setup and monthly are split lines. 3-month term, then month-to-month.",
  },
  {
    q: "Is Deft an AI receptionist?",
    a: "No. Launch recovers the lead to your WhatsApp so you call back. Custom AI is quote work above Launch.",
  },
  {
    q: "How fast do I get the lead?",
    a: "When the short intake is finished, the WhatsApp goes to the van. Launch does not book your calendar — you call back.",
  },
  {
    q: "Will it quote prices to my customers?",
    a: "No job prices/ETAs. Name, number, job, callback window.",
  },
  {
    q: "What’s the minimum term?",
    a: "3-month term, then month-to-month.",
  },
  {
    q: "Can I keep my existing number?",
    a: "Yes. One divert path on the number you already use.",
  },
  {
    q: "What is not included in Launch?",
    a: "SMS/email as the lead channel, open AI retainers, a website in Launch, and a full PBX on day one. Custom web, automation, or AI is quoted separately — never the opener.",
  },
  {
    q: "How do I book a callback?",
    a: "Use Book a callback at the bottom of this page. Not a proposal.",
  },
  {
    q: "Who is Deft Launch for?",
    a: "Trades who miss jobs when already on a job — plumbers, electricians, and other Greater Manchester trades who lose work to voicemail.",
  },
  {
    q: "Do most callers leave a voicemail or ring the next trade?",
    a: "Most don’t leave a voicemail. They ring the next trade. That is why Launch answers and WhatsApps you.",
  },
  {
    q: "Does Launch book my calendar, or only take a message for me to call back?",
    a: "Only take a message for you to call back. Name, number, job, callback window.",
  },
] as const;

export const demoScenes = [
  {
    label: "Miss",
    title: "You’re already on a job.",
    body: "A customer rings. They don’t wait — and most don’t leave a voicemail. They ring the next trade.",
  },
  {
    label: "Answer",
    title: "Deft Launch answers.",
    body: "Short intake only: [caller name], [callback number], [what they need], [callback window]. No job prices. No ETAs.",
  },
  {
    label: "WhatsApp to the van",
    title: "The lead lands on WhatsApp.",
    body: "To: [van WhatsApp] — name, number, job. WhatsApp only. Not SMS. Not email.",
  },
  {
    label: "You call back",
    title: "You ring them.",
    body: "Launch took the message. You call back. The next trade doesn’t get the job.",
  },
] as const;

export function mailto(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return query ? `mailto:${site.email}?${query}` : `mailto:${site.email}`;
}

export function callbackMailto() {
  return mailto(
    "Deft Launch — book a callback",
    "Hi Josh,\n\nPlease book a callback about Deft Launch.\n\nTrade / area:\nMissed jobs in a usual month:\n\nThanks.",
  );
}

export function formatGbp(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}
