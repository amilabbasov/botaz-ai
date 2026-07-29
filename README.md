# botaz-ai

The website for [botaz.online](https://botaz.online) — built with [Astro](https://astro.build/), TailwindCSS, and Cloudflare Workers.

## Tech Stack

- [Astro](https://astro.build/) — frontend framework
- [TailwindCSS](https://tailwindcss.com/) — styling
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Cloudflare Workers](https://workers.cloudflare.com/) — deployment target

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Type-check & lint |
| `npm run fix` | Auto-fix lint & format |

## Deployment

Deployed on Cloudflare Workers via [Wrangler](https://developers.cloudflare.com/workers/wrangler/).

```bash
npm run deploy
```

## License

MIT
