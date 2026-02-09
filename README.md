# DevOps Training Program — Frontend

A responsive React frontend for the "DevOps Training Program" organized by Kongu Engineering College in association with GUVI.

## Quick Start

**Requirements:** Node.js >= 16

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Add images
Place the provided images in `src/assets/`:
- `kongu.png` — Kongu Engineering College logo
- `guvi.png` — GUVI logo
- `college.jpg` — College banner image

## Project Structure
```
src/
├── components/
│   ├── Header.jsx      # Header with logos and CTA
│   ├── Hero.jsx        # Hero banner and highlights
│   ├── About.jsx       # About section with tools
│   ├── Partners.jsx    # Partner logos
│   └── Footer.jsx      # Footer
├── assets/             # Images folder (add kongu.png, guvi.png, college.jpg here)
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global responsive styles
```

## Tech Stack
- **React 18** — UI library with functional components
- **Vite** — Fast build tool and dev server
- **CSS** — Mobile-first responsive design with hover effects

## Features
✓ Mobile-first responsive design
✓ Smooth animations and hover effects
✓ Clean component architecture
✓ Well-commented code
✓ Fast Vite dev experience

## Build for Production
```bash
npm run build
```

Output will be in `dist/` folder, ready to deploy.
