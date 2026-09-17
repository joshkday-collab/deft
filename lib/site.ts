export const site = {
  name: "Deft",
  tagline: "AI, automation, websites & business systems for any business.",
  description:
    "Deft designs and runs the backend of your business — websites, AI assistants, lead capture, and automation. You sell. We run the systems.",
  email: "joshkday@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://deft.vercel.app",
} as const;

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#why", label: "Why Deft" },
  { href: "#contact", label: "Contact" },
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
    id: "websites",
    number: "01",
    title: "Websites",
    body: "Conversion-led sites that make the next step obvious — book, buy, enquire. Fast, mobile-first, and built to look like your business, not a theme.",
  },
  {
    id: "ai",
    number: "02",
    title: "AI assistants & chat",
    body: "Assistants trained on how you actually work. They answer customers, qualify enquiries, and hand off to your team — not a novelty widget on the homepage.",
  },
  {
    id: "leads",
    number: "03",
    title: "Call & lead capture",
    body: "Never lose an enquiry to a missed call or a form that goes nowhere. We catch, route, and follow up so you can stay on the sale.",
  },
  {
    id: "automation",
    number: "04",
    title: "Automation & workflows",
    body: "Quotes, bookings, reminders, invoices, and handoffs — without the spreadsheet ballet. The work happens; you get the outcome.",
  },
  {
    id: "ops",
    number: "05",
    title: "Ops & dashboards",
    body: "See jobs, pipeline, and cashflow without logging into five tools. One view of what is live, late, and worth doing next.",
  },
  {
    id: "custom",
    number: "06",
    title: "Custom builds",
    body: "If the system you need does not exist yet, we design and ship it. Discovery, a fixed quote, then a working product — not a deck.",
  },
] as const;

export const prices = [
  {
    name: "Website",
    setup: "£450–£1,500 setup",
    ongoing: "Scoped per site",
    note: "Brochure to booking-ready. Copy, structure, and launch included in the quote.",
  },
  {
    name: "AI assistants & chat",
    setup: "From £300 setup",
    ongoing: "From £49 / month",
    note: "Trained on your offers, hours, and tone. Hosted and maintained.",
  },
  {
    name: "Call & lead capture",
    setup: "From £250 setup",
    ongoing: "From £39 / month",
    note: "Missed-call recovery, forms, and routing into your existing tools.",
  },
  {
    name: "Automation & workflows",
    setup: "From £200 setup",
    ongoing: "From £29 / month",
    note: "One painful process, automated end-to-end. Expand from there.",
  },
  {
    name: "Custom builds",
    setup: "Discovery → fixed quote",
    ongoing: "Quoted after scope",
    note: "Ops tools, portals, and systems unique to how you run.",
  },
] as const;

export const reasons = [
  {
    title: "Operators, not a slide-deck agency",
    body: "We ship working systems. No 40-page strategy PDF, no junior bench, no account manager translating your week into Jira. You talk to the people who build it.",
  },
  {
    title: "Ship fast, then tighten",
    body: "First version in days when the problem is clear — not a quarter of workshops. We put it in front of real customers, then refine against the work.",
  },
  {
    title: "One team for web, AI, and automation",
    body: "The site, the assistant, and the workflow are designed together. You are not stitching a web shop, a chatbot vendor, and a freelancer into one mess.",
  },
] as const;

export function mailto(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return query ? `mailto:${site.email}?${query}` : `mailto:${site.email}`;
}
