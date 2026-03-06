# AWS Cloud Club I²IT — Website

The official website for the AWS Cloud Club at I²IT, built with React, Vite, Tailwind CSS, and Three.js.

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
- **Framer Motion** — Page animations
- **React Router** — Client-side routing
- **Lucide React** — Icon library
- **TypeScript** — Type checking

## Project Structure

```
src/
├── components/          # Shared components
│   ├── ui/              # UI primitives (gradient background, etc.)
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Card.jsx
│   ├── EventCard.jsx
│   └── FAQAccordion.jsx
├── pages/               # Route pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Events.jsx
│   ├── Gallery.jsx
│   └── FAQ.jsx
├── lib/                 # Utilities
├── App.jsx              # Root layout + gradient background
├── main.jsx             # Entry point
└── index.css            # Global styles + Tailwind config
```

## Notes

- The **liquid gradient background** runs site-wide via Three.js WebGL shaders. Use the ⏸ button (top-right) to pause/resume.
- All UI components use **glassmorphic** styling (`backdrop-blur`, semi-transparent backgrounds) so the gradient shows through.
- The `THREE.Clock` deprecation warning in the console is harmless and does not affect functionality.
