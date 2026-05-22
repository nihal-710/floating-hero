# Floating Hero Section

A polished Next.js implementation of a **Legal Work Platform** hero section, built for a Round 1 Next.js Frontend Intern assessment.

The project recreates a modern SaaS-style hero section with floating tilted cards, responsive layout, smooth animations, and light/dark mode support.

---

## Live Demo

**Vercel Link:** [https://floating-hero-silk.vercel.app/]

---

## Screenshots



### Light Mode

![Light Mode Screenshot](public/screenshots/light-mode.png)

### Dark Mode

![Dark Mode Screenshot](public/screenshots/dark-mode.png)

---

## Tech Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React Icons**

---

## Features

- Responsive split hero layout
- Reusable `FloatingCard` component
- Tilted floating cards for:
  - Billing
  - Matters
  - Tasks
  - Documents
- Unique `John Doe - Portal` card variant
- Light and dark mode support
- Smooth entrance animations
- Subtle hover effects
- Decorative background blobs and rail shapes
- Mobile-friendly layout
- Production build verified with `npm run build`

---

## Project Structure

```txt
floating-hero/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── FloatingCard.tsx
│   └── HeroSection.tsx
├── public/
│   └── screenshots/
│       ├── light-mode.png
│       └── dark-mode.png
├── package.json
├── tailwind.config.ts
└── tsconfig.json