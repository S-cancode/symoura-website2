# Symoura Website

AI Automation Agency - B2B Trust-Building Website

## Overview

This is the marketing website for Symoura, an AI automation agency helping businesses automate their workflows with custom AI solutions.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **TypeScript:** Full type safety
- **Deployment:** Vercel (recommended)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
symoura_website/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Home page
│   ├── how-it-works/        # How It Works page
│   ├── who-its-for/         # Who It's For page
│   ├── dashboard/           # Client Dashboard demo
│   ├── discovery-call/      # Discovery Call booking
│   └── about/               # About page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   └── WorkflowDiagram.tsx
│   ├── dashboard/           # Dashboard components
│   │   └── DashboardPreview.tsx
│   └── layout/              # Layout components
│       ├── Header.tsx
│       └── Footer.tsx
├── public/                  # Static assets
│   └── images/
└── tailwind.config.ts       # Tailwind configuration
```

## Design System

### Color Palette

- **Navy Blue:** `#1A3D5C` - Brand primary, headings
- **Brown:** `#8B6F47` - CTA buttons, accent
- **Warm Neutral:** `#F5F3F0` - Background
- **White:** `#FFFFFF` - Card backgrounds
- **Grays:** Various shades for text and borders

### Typography

- **Font Family:** Inter (Google Fonts)
- **Heading Weights:** 600 (semibold)
- **Body Weight:** 400 (regular)

### Spacing

- Base unit: 8px
- Section spacing: 96-128px (vertical)
- Container max-width: 1280px

## Pages

1. **Home** - Hero, problem statement, features, use cases, final CTA
2. **How It Works** - Workflow diagram, implementation steps, technical details
3. **Who It's For** - Ideal customer profile, detailed use cases
4. **Dashboard** - Interactive dashboard preview, benefits
5. **Discovery Call** - Booking form (Calendly placeholder), what to expect
6. **About** - Founder story, approach, values

## Next Steps

1. **Add Logo:** Replace "Symoura" text logo with actual logo SVG in `public/`
2. **Calendly Integration:** Add Calendly embed code to Discovery Call page
3. **SEO Optimization:** Add Open Graph images, enhance meta descriptions
4. **Analytics:** Add Google Analytics or similar tracking
5. **Contact Form:** Implement contact form with backend (optional)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables

None required for initial deployment. Add later if implementing contact forms or analytics.

## License

Private - All rights reserved
