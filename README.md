# DKM — Dustin Kirk Manalastas Portfolio

Personal developer portfolio for **Dustin Kirk Manalastas (DKM)** — an aspiring web developer specializing in modern full-stack web development.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Motion**, **Resend**, and **Google Gemini**.

## Features

- Emerald green brand system with dark / light mode
- Sticky navigation with active route highlighting and mobile menu
- Homepage overview with concise previews of all major sections
- Independent pages for About, Skills, Projects, Experience, Resume, and Contact
- Project gallery with modal details, screenshots, GitHub, and Live Demo links
- **DKM AI Assistant** — Gemini-powered portfolio chatbot (floating widget)
- Contact form with Zod validation, honeypot spam protection, and Resend delivery
- SEO metadata and accessibility-minded UI patterns

## Tech Stack

- Next.js 16 + React 19
- TypeScript
- Tailwind CSS 4
- Motion
- Zod
- Resend
- Vercel AI SDK + `@ai-sdk/google` (Gemini)
- Lucide icons

## Project Structure

```text
DKMPortfolio/
├── app/                     # App Router pages + API routes
│   ├── api/chat/            # Gemini chatbot endpoint
│   ├── api/contact/         # Contact form endpoint
│   ├── about|skills|projects|experience|resume|contact/
│   ├── robots.ts / sitemap.ts / not-found.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── chatbot/             # DKM AI Assistant UI
│   ├── layout/              # Navbar, Footer, SiteShell
│   ├── pages/               # Page-level content components
│   ├── projects/            # Cards, modal, galleries
│   ├── providers/           # Theme provider
│   ├── sections/            # Homepage sections
│   └── ui/                  # Shared UI primitives
├── data/                    # Content source of truth
├── lib/                     # Utils, validation, Gemini, rate limit, chat KB
├── public/images/           # Portraits + project screenshots
├── .env.example
├── package.json
└── README.md
```

## Routes

| Route | Description |
|---|---|
| `/` | Home overview |
| `/about` | About Me |
| `/skills` | Skills & Technologies |
| `/projects` | Projects gallery + details modal |
| `/experience` | Education & Experience |
| `/resume` | Resume overview |
| `/contact` | Contact form |
| `/api/chat` | Gemini chatbot (server-only) |
| `/api/contact` | Contact form API (server-only) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in the terminal).

## Environment Variables

Copy the example file and fill in real values locally:

```bash
cp .env.example .env.local
```

`.env.example` placeholders:

```env
RESEND_API_KEY=re_xxxxxxxx
CONTACT_EMAIL=your.email@example.com
FROM_EMAIL=DKM Portfolio <onboarding@resend.dev>

# Google Gemini API key for the DKM AI Assistant (server-side only)
GEMINI_API_KEY=your_gemini_api_key_here
```

Notes:

- Never commit `.env.local` or real API keys.
- Do **not** prefix Gemini / Resend secrets with `NEXT_PUBLIC_`.
- Chatbot works only when `GEMINI_API_KEY` is set.
- Contact email delivery works only when Resend variables are set.

## Customize Content

1. Personal info / links — `data/site.ts`, `data/socialLinks.ts`
2. Skills — `data/skills.ts`
3. Projects, demos, repos — `data/projects.ts`
4. Education / experience — `data/experience.ts`
5. Resume PDF — place at `public/resume.pdf` (optional until ready)
6. Images — `public/images/`

## Scripts

```bash
npm run dev         # local development
npm run build       # production build
npm run start       # serve production build
npm run lint        # ESLint
npm run typecheck   # TypeScript (tsc --noEmit)
```

## Deploy to Vercel

1. Push this repository to GitHub
2. Import the project in Vercel
3. Add environment variables:
   - `GEMINI_API_KEY`
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `FROM_EMAIL`
4. Deploy

Live portfolio URL (update if your domain changes): `https://dkm-portfolio.vercel.app`

## Security Notes

- Gemini and Resend keys are server-side only
- `/api/chat` and `/api/contact` include basic IP rate limiting
- Contact form validates input with Zod and includes a honeypot field
- Chatbot answers from a curated knowledge base and avoids inventing private details

## License

Private personal portfolio. All rights reserved unless otherwise stated.
