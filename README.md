# AWS Cloud Club I²IT — Website

The official single-page website for the AWS Cloud Club at I²IT, built with React, Vite, Tailwind CSS, and Three.js.

## Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/faizanfirdousi/aws-club-page.git
cd aws-club-page

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173/** (or the next available port).

## Scripts

| Command           | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Start local dev server with HMR    |
| `npm run build`   | Production build to `dist/`        |
| `npm run preview` | Preview the production build       |
| `npm run lint`    | Run ESLint                         |

## Tech Stack

- **React 19** — UI framework
- **Vite 7** — Dev server & bundler
- **Tailwind CSS 4** — Utility-first styling
- **Three.js** — WebGL liquid gradient background animation
- **GSAP** — Scroll-triggered FAQ accordion animations
- **Framer Motion** — Component animations
- **Radix UI** — Accessible accordion primitives
- **Lucide React** — Icon library
- **TypeScript** — Type checking

## Project Structure

```
src/
├── components/
│   ├── ui/                          # UI primitives
│   │   ├── flow-gradient-hero-section.tsx   # WebGL gradient background
│   │   └── scroll-faqaccordion.tsx          # GSAP scroll FAQ
│   ├── Card.jsx
│   ├── EventCard.jsx
│   ├── Footer.jsx
│   ├── MeetUsSection.jsx            # Team member cards
│   └── Navbar.jsx                   # Anchor-link navigation
├── lib/
│   └── utils.ts
├── App.jsx                          # Single-page layout (all sections)
├── main.jsx                         # Entry point
└── index.css                        # Global styles + Tailwind config
```

## Sections

The single-page layout contains the following sections (in order):
1. **Hero** — Title, tagline, CTA buttons
2. **Why Join Us** — Feature cards
3. **Events** — Latest event + "See All Events" link
4. **Meet Us** — Core team member cards
5. **Gallery** — Coming soon placeholder
6. **FAQ** — GSAP scroll-triggered accordion
7. **CTA** — Join the community

## Notes

- The **liquid gradient background** runs site-wide via Three.js WebGL shaders. Use the ⏸ button (top-right) to pause/resume.
- All UI components use **glassmorphic** styling (`backdrop-blur`, semi-transparent backgrounds).
- The **FAQ section** opens accordion items as you scroll using GSAP ScrollTrigger.
- The **"See All Events"** button links to the [AWS I²IT Meetup page](https://www.meetup.com/aws-i2it/events/).
- The **Meet Us** team data is placeholder — update names and photos in `src/components/MeetUsSection.jsx`.
- The `THREE.Clock` deprecation warning in the console is harmless.
