# Henok Berhanu Kebede Portfolio

Personal portfolio website for Henok Berhanu Kebede, focused on equity research, capital markets, financial analysis, investor education, and business development.

Live site: https://hbkportfolio.vercel.app

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React

## Run Locally

Prerequisite: install [Node.js](https://nodejs.org/).

```bash
npm install
npm run dev
```

The local site runs at:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

The production files are generated in:

```text
dist
```

## Type Check

```bash
npm run lint
```

## Deploy On Vercel

Import this repository into Vercel and use the default Vite settings:

- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

No environment variables are required for the current portfolio site.

## Edit Content

Main content cards are in:

```text
src/components/ContentPortfolio.tsx
```

Archive episodes and articles are in:

```text
src/components/ContentArchive.tsx
```

To add a new archive item, add another object inside `ALL_CONTENT`:

```ts
{
  id: 42,
  title: "Capital Market in Practice - Part 33",
  season: "S2",
  episode: 33,
  date: "May 20, 2026",
  category: "Market Analysis",
  link: "https://www.linkedin.com/your-post-link",
  summary: `Paste the full content text here.`
}
```

After editing:

```bash
npm run lint
npm run build
git add .
git commit -m "Update portfolio content"
git push
```

Vercel redeploys automatically after pushing to GitHub.
