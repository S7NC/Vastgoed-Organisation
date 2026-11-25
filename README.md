# Vastgoed.org

Multilingual educational and lead-generation website for open property listings with Nostr. Built with Nuxt 4, Vue 3, and TypeScript.

## Development

Requires Node.js 22.22.3+, 24.15+, or 26+ and npm, matching Nuxt's supported runtimes.

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

## Checks and Deployment

```sh
npm run typecheck
npx playwright install chromium
npm test
npm run build
```

Run the production server with `node .output/server/index.mjs`. For static hosting, run `npm run generate` and deploy `.output/public`. All four language routes are prerendered.

## Content

- Dutch `/`, English `/en`, French `/fr`, German `/de`.
- All translated copy lives in `app/data/content.ts`.
- Page layout and demonstrations live in `app/pages/[[locale]].vue`.
- Styles live in `app/assets/css/main.css`.
- Canonical URLs, Open Graph URLs, `public/robots.txt`, and `public/sitemap.xml` use `https://vastgoed.org`.
- House images are copied locally from the supplied reference website. Confirm publication rights before launching. Fonts load from Google Fonts, with system-font fallbacks; self-host them if required by your privacy policy.

## Demonstrations

The price-change interaction is local only: it does not connect to a relay, sign events, upload images, or publish properties. The developer panel shows a NIP-01 subscription request and an illustrative subset of NIP-99 event fields, not a complete signed event. No private keys, accounts, or personal data are collected. Outbound calls to action lead to `https://vastgoed.net/`.
