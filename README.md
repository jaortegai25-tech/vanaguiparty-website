# Vanagui Party — Website

Professional balloon decor and party rentals website for Vanagui Party in Central Florida.

## Tech Stack

- **Framework**: TanStack Start (React 19 + TanStack Router)
- **Styling**: Tailwind CSS 4.2 + custom design system
- **Fonts**: Instrument Serif, JetBrains Mono (via Google Fonts)
- **Build**: Vite
- **Deployment**: Vercel

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
src/
├── routes/          # TanStack Router pages
│   ├── __root.tsx   # Root layout with fonts & metadata
│   └── index.tsx    # Main homepage
├── assets/          # Images (gallery, logo, etc.)
├── styles.css       # Global styles & design tokens
└── components/ui/   # Radix UI components
```

## Features

- **Responsive Design** — Mobile-first, works on all devices
- **Image Gallery** — Auto-rotating carousel with manual controls
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards
- **Google Fonts** — Instrument Serif & JetBrains Mono
- **Tailwind CSS** — Custom color palette & spacing

## Environment Variables

None required for basic functionality. Project is static-friendly.

## Deployment

Deployed on Vercel. Push to `main` branch to auto-deploy.

- **Production**: [vanaguiparty.vercel.app](https://vanaguiparty.vercel.app)
- **Custom Domain**: vanaguiparty.com (via Cloudflare)

## License

© 2026 Vanagui Party. All rights reserved.
