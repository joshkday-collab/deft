# Deft

Marketing site for **Deft Launch** — missed-call recovery for trades. When a customer rings and you’re on a job, Launch answers and WhatsApps name, number, and job to the van.

Stop losing jobs to voicemail.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Ready for Vercel (no extra services or env secrets required)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Deploy to Vercel

1. Import [github.com/joshkday-collab/deft](https://github.com/joshkday-collab/deft) on [vercel.com/new](https://vercel.com/new).
2. Framework Preset **Next.js**. Optional: `NEXT_PUBLIC_SITE_URL`.
3. Contact is `mailto:joshkday@gmail.com`.

## Site content (GTM v3)

1. **Hero** — demo CTA first; See Deft Launch second
2. **How it works** — Miss → Answer → WhatsApp to the van → You call back
3. **Launch card** — £497 + £79 split, WhatsApp only; one consultancy line under the card
4. **ROI** — their missed jobs × their job value vs £79/mo + £497 payback
5. **FAQ / AEO**
6. **Callback** — Book a callback · Not a proposal

Edit copy in [`lib/site.ts`](lib/site.ts).

## Pricing (do not invent other numbers)

| Engagement | Setup | Ongoing |
| --- | --- | --- |
| **Deft Launch** | £497 setup on acceptance | £79/month from go-live |

3-month term, then month-to-month. WhatsApp only. Founding-partner setup stays offline — never on the page.

## Contact

[joshkday@gmail.com](mailto:joshkday@gmail.com)
