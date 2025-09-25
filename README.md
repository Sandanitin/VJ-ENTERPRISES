# SunRay Solar – React + Vite + Tailwind SPA

A responsive, accessible singlepage website for a solar installation business. Built with React, Vite, and Tailwind CSS.

## Features
- Sticky navbar with active link highlighting and mobile hamburger
- Smooth scrolling navigation
- Hero with CTA and subtle SVG background
- Services grid with 3 cards
- Accessible testimonials carousel (keyboard navigable, manual controls)
- Contact form with clientside validation and success state
- Footer with links and social placeholders
- Mobilefirst, Tailwindstyled, subtle animations

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
Open the local URL shown (usually `http://localhost:5173`).

### Build
```bash
npm run build
npm run preview
```

## Project Structure
```
public/
  favicon.svg
src/
  components/
    Navbar.jsx, Hero.jsx, Services.jsx, Testimonials.jsx, Contact.jsx, Footer.jsx
  App.jsx
  index.css
  main.jsx
index.html
```

## Deployment
Deploy the `dist/` folder produced by `npm run build` to any static host (e.g., Netlify, Vercel, GitHub Pages, S3/CloudFront). Set framework to “Vite” if prompted.

## Notes
- No backend; form submission shows a local success message only.
- Tailwind colors extended for primary/leaf/accent palette.
- All images are placeholders from Unsplash; replace with your assets.# VJ-ENTERPRISES
