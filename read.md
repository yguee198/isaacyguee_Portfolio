

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website built with React 19, Vite, and Tailwind CSS 4. It is a single-page application with scroll-based navigation between sections (Home, About, Resume, Projects, Contact).

## Commands

```bash
npm run dev       # Start development server with HMR
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
npm run tailwind  # Watch and rebuild Tailwind CSS (compiles input.css to output.css)
```

## Architecture

- **Entry point**: `src/main.jsx` renders `App` component
- **Main component**: `src/App.jsx` contains all sections in scrollable layout
- **Components**: `src/components/` - Navbar, Hero, About, Resume, ContactMe, Header, ProjectCard
- **Pages**: `src/pages/Project.jsx` - Project listing page
- **Data**: `src/data/project.jsx` - Project data array
- **Styling**: Tailwind CSS input at `src/input.css`, compiled output at `src/output.css`
- **Custom theme**: Extended in `tailwind.config.cjs` with `darkBg` color and `logo-spin` animation

## Key Details

- Uses React 19 with strict mode enabled
- Tailwind CSS 4 with dark mode via `prefers-color-scheme` (media query)
- Icons provided by `lucide-react` package
- All images referenced in projects are in `/public` directory
- Dark background theme (`#0f0f0f`) used throughout