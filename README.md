# Deft

Marketing site for **Deft** — AI, automation, websites, and business systems for any business.

You sell. We run the backend.

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

1. **Hero** — Deft, custom solutions, you sell / we run the backend
2. **Sectors** — any business, not trades-only
3. **Services** — websites; AI assistants & chat; call/lead capture; automation; ops/dashboards; custom builds
4. **Price list** — starting points; every job custom-quoted
5. **Why Deft** — operators, ship fast, one team
6. **Contact** — email Josh

Edit copy and prices in [`lib/site.ts`](lib/site.ts).

## Pricing (starting points)

| Engagement | Setup | Ongoing |
| --- | --- | --- |
| Website | £450–£1,500 | Scoped per site |
| AI assistants & chat | From £300 | From £49/mo |
| Call & lead capture | From £250 | From £39/mo |
| Automation & workflows | From £200 | From £29/mo |
| Custom builds | Discovery → fixed quote | Quoted after scope |

## Contact

[joshkday@gmail.com](mailto:joshkday@gmail.com)
