export const site = {
  name: "Deft",
  tagline: "Consultancy for any business. Recover the jobs you already paid to win.",
  description:
    "Deft is a consultancy for any business. The named product is Deft Launch: missed-call and lead capture to WhatsApp — name, number, job — on the van. £497 setup (one-off) and £79 a month, billed as separate lines. Custom websites, AI, and automation are quoted above Launch.",
  email: "joshkday@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://deft.vercel.app",
} as const;

export const launch = {
  name: "Deft Launch",
  promise:
    "Missed-call / lead capture → WhatsApp (name, number, job) to the van.",
  setup: 497,
  monthly: 79,
  setupLabel: "£497 setup (one-off)",
  monthlyLabel: "£79 / month",
  term: "3-month minimum, then month-to-month",
  billing:
    "Split billing: setup and monthly are separate lines. Never rolled into one blended fee.",
} as const;

export const launchLimits = [
  "One divert path",
  "One WhatsApp destination",
  "No full PBX on day one",
] as const;

export const launchScope = [
  "Missed-call capture when you cannot pick up",
  "Lead capture that reaches WhatsApp — name, number, and the job",
  "Delivery to the van (one WhatsApp destination)",
  "One divert path configured and tested",
  "Setup billed once; monthly billed as its own line",
] as const;

export const launchExclusions = [
  "Street CRM — not in Launch",
  "SMS or email as the lead channel",
  "Open AI retainers",
  "A website (quoted upsell above Launch)",
  "Full PBX, hunt groups, or multi-destination routing",
] as const;

export const nav = [
  { href: "#launch", label: "Launch" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#recover", label: "Recover" },
  { href: "#contact", label: "Book a callback" },
] as const;

export const sectors = [
  "Professional services",
  "Retail",
  "Clinics",
  "Hospitality",
  "Manufacturing",
  "Agencies",
  "Property",
  "Education",
  "E-commerce",
  "Studios",
] as const;

export const services = [
  {
    id: "launch",
    number: "01",
    title: "Deft Launch",
    body: "Revenue recovery, not an AI pitch. Missed calls and inbound leads become a WhatsApp with name, number, and the job — on the van. This is the named entry product.",
  },
  {
    id: "websites",
    number: "02",
    title: "Websites",
    body: "Quoted work above Launch. Conversion-led sites that make the next step obvious — book, buy, enquire. An upsell, not the opener.",
  },
  {
    id: "automation",
    number: "03",
    title: "Automation & workflows",
    body: "Quoted work above Launch. Quotes, bookings, reminders, invoices, and handoffs — scoped after we know the process, never an open retainer.",
  },
  {
    id: "ops",
    number: "04",
    title: "Ops & dashboards",
    body: "Quoted work above Launch. See jobs, pipeline, and cashflow without logging into five tools. Scoped when the capture path is already earning.",
  },
  {
    id: "ai",
    number: "05",
    title: "Custom AI",
    body: "Quoted work above Launch — not the hero, not a retainer. Assistants trained on how you work, scoped only when there is a real job for them.",
  },
  {
    id: "custom",
    number: "06",
    title: "Custom builds",
    body: "Quoted work above Launch. If the system you need does not exist yet, we design and ship it after discovery — a fixed quote, not a deck.",
  },
] as const;

export const prices = [
  {
    name: "Deft Launch",
    setup: "£497 setup (one-off)",
    ongoing: "£79 / month",
    note: "Named entry SKU. Missed-call / lead capture → WhatsApp (name, number, job) to the van. Setup and monthly billed as separate lines. 3-month minimum, then month-to-month.",
    highlight: true,
  },
  {
    name: "Website",
    setup: "Quoted",
    ongoing: "Quoted after scope",
    note: "Custom work above Launch. The website is an upsell — not included in Launch.",
    highlight: false,
  },
  {
    name: "Custom AI",
    setup: "Quoted",
    ongoing: "Quoted after scope",
    note: "Custom work above Launch. Not the opener. No open AI retainers.",
    highlight: false,
  },
  {
    name: "Automation & workflows",
    setup: "Quoted",
    ongoing: "Quoted after scope",
    note: "Custom work above Launch. One painful process, scoped and quoted.",
    highlight: false,
  },
  {
    name: "Custom builds",
    setup: "Quoted",
    ongoing: "Quoted after scope",
    note: "Ops tools, portals, and systems unique to how you run — quoted after discovery.",
    highlight: false,
  },
] as const;

export const reasons = [
  {
    title: "Revenue recovery, not an AI pitch",
    body: "The job you missed is cash you already paid to attract. Launch puts name, number, and the job on WhatsApp so the van can take it. Custom AI stays quoted work above that.",
  },
  {
    title: "Operators, not a slide-deck agency",
    body: "We ship working systems. No 40-page strategy PDF, no junior bench, no account manager translating your week into Jira. You talk to the people who build it.",
  },
  {
    title: "Launch is the door. Quotes are above.",
    body: "Consultancy for any business. Websites, custom AI, and automation are scoped after Launch — never the opener, never an open retainer.",
  },
] as const;

export function mailto(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return query ? `mailto:${site.email}?${query}` : `mailto:${site.email}`;
}

export function callbackMailto(context = "Deft Launch") {
  return mailto(
    `${context} — book a callback`,
    `Hi Josh,\n\nPlease book a callback about ${context}.\n\nA sentence on the business and how many jobs you miss:\n\nThanks.`,
  );
}

export function formatGbp(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}
