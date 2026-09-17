# Deft

Marketing site for **Deft** — consultancy for any business. The named product is **Deft Launch**: missed-call and lead capture to WhatsApp.

Recover the jobs you already paid to win.

This is a clean greenfield Next.js App Router site. Share the live URL with any business owner.

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

Josh can ship this in a few minutes and send the URL to any client.

### Option A — Dashboard (recommended)

1. Push this repo to GitHub (already at [github.com/joshkday-collab/deft](https://github.com/joshkday-collab/deft)).
2. Go to [vercel.com/new](https://vercel.com/new) and import the `deft` repository.
3. Leave the defaults: Framework Preset **Next.js**, build command `next build`, output detected automatically.
4. Optional environment variable:
   - `NEXT_PUBLIC_SITE_URL` — the production URL, e.g. `https://deft.vercel.app` or your custom domain. Used for metadata, sitemap, and Open Graph.
5. Click **Deploy**.
6. Share the deployment URL. Add a custom domain under Project → Settings → Domains if you want `deft` on your own host.

### Option B — CLI

```bash
npm i -g vercel
vercel login
vercel
```

Promote the production deployment with `vercel --prod`.

### After deploy

- Contact goes to `mailto:joshkday@gmail.com`. No form backend to configure.
- Preview deployments are created automatically on each pull request.
- Re-deploys happen on every push to the production branch.

## Site content

Single-page marketing site:

1. **Hero** — consultancy for any business; revenue recovery / missed jobs
2. **Sectors** — any business, not trades-only
3. **Deft Launch** — named SKU, split billing, limits, in/out scope
4. **Recover** — ROI calculator (missed jobs × job value vs £79/mo + setup payback)
5. **Services** — Launch first; websites, custom AI, automation quoted above
6. **Price list** — Launch £497 + £79; other rows quoted
7. **Why Deft** — revenue recovery, operators, Launch is the door
8. **Contact** — book a callback (not a proposal)

Edit copy and prices in [`lib/site.ts`](lib/site.ts).

## Pricing (CoS locks — do not invent other numbers)

| Engagement | Setup | Ongoing |
| --- | --- | --- |
| **Deft Launch** | £497 setup (one-off) | £79/mo |
| Website | Quoted | Quoted after scope |
| Custom AI | Quoted | Quoted after scope |
| Automation & workflows | Quoted | Quoted after scope |
| Custom builds | Quoted | Quoted after scope |

Launch: 3-month minimum, then month-to-month. Setup and monthly are separate lines. Founding-partner setup discount is offline only — never publish a cheaper setup on the page.

## Contact

[joshkday@gmail.com](mailto:joshkday@gmail.com)
