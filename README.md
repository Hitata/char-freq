# charfreq

Real-time character frequency analysis, keyboard heatmap, and Kabbalistic gematria visualizer — built with React + Vite, deployed to GitHub Pages.

## Features

- **Frequency bar chart** — live letter distribution as you type
- **Keyboard heatmap** — Standard and Sofle v2 split layouts with heat-color overlay
- **Kabbalistic Gematria** — Mispar Hechrachi letter-to-number mapping with per-word breakdown
- **Root Number** — Mispar Katan Mispari (digital root) reduction to a single-digit signature
- **Collapsible explainer** — plain-English walkthrough of how gematria and root numbers work

## Tech Stack

- **React 19** — component-based UI
- **Vite 6** — fast dev server and static build
- **GitHub Pages** — zero-config deployment via Actions

## Project Structure

```
src/
├── main.jsx                  # Entry point
├── App.jsx                   # Root component — holds text state
├── components/
│   ├── Header.jsx            # Title + subtitle
│   ├── TextInput.jsx         # Textarea with live character counter
│   ├── StatsRow.jsx          # Summary stat pills
│   ├── BarChart.jsx          # A–Z frequency bars
│   ├── Key.jsx               # Reusable keyboard key (shared by both layouts)
│   ├── KeyboardHeatmap.jsx   # Standard + Sofle keyboards with layout toggle
│   └── GematriaSection.jsx   # Gematria totals, root number, explainer, breakdowns
├── hooks/
│   └── useCharFrequency.js   # All derived computation in one memoized hook
├── utils/
│   ├── gematria.js           # GEMATRIA map, word/text computation, digital root
│   ├── heatColor.js          # Color interpolation for heat visualization
│   └── keyboard.js           # Layout constants (standard, Sofle v2)
└── styles/
    └── index.css             # All styles
```

## Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/character-frequency/`

## Build & Preview

```bash
npm run build
npm run preview
```

## Deployment

Push to `main` — the GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages.

To configure: go to **Settings → Pages → Source → GitHub Actions** in your repository.

> If deploying to a custom domain or the root `username.github.io`, change `base` in `vite.config.js` to `'/'`.
