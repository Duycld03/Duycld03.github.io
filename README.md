# Duy Nguyễn — Personal Portfolio

[![Live Site](https://img.shields.io/badge/Live-duycld03.github.io-10b981?style=flat-square&logo=githubpages&logoColor=white)](https://duycld03.github.io/)
[![Built with Astro 5](https://img.shields.io/badge/Built%20with-Astro%205-ff5d01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Spec-Driven Development](https://img.shields.io/badge/Workflow-OpenSpec-7c3aed?style=flat-square)](https://github.com/Fission-AI/OpenSpec)

Personal engineering portfolio of **Duy Nguyễn** ([@Duycld03](https://github.com/Duycld03)), designed with a Linear/Raycast-inspired Bento Grid aesthetic and built with **Astro 5** for zero-JS static performance.

🌐 **Live Website**: [https://duycld03.github.io/](https://duycld03.github.io/)

---

## ✨ Features

- **⚡ Zero Client-Side JavaScript**: 100% pre-rendered static HTML & CSS. Initial page load is instantaneous (<0.2s) with zero bundle bloat.
- **🍱 Bento Grid Architecture**: High-contrast, dark-first UI (`#0a0a0a`) with 1px hairline borders, subtle hover glow, and responsive typography.
- **🛡️ Type-Safe Content Collections**: Projects are managed via Markdown entries in `src/content/projects/`, strictly validated at compile time with Zod schemas.
- **🚀 Automated CI/CD**: Seamless deployment to GitHub Pages via GitHub Actions upon pushing to the `main` branch.
- **📐 Spec-Driven Development**: Engineered using the **OpenSpec** framework (`openspec/`) for structured, verifiable task delivery.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build) (Static Site Generation)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) (Custom Bento dark theme tokens)
- **Icons**: [@lucide/astro](https://lucide.dev) & optimized inline brand SVGs
- **Type Safety**: TypeScript & Zod (Astro Content Layer)
- **Deployment**: GitHub Pages via GitHub Actions

---

## 📁 Repository Structure

```text
Duycld03.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD to GitHub Pages
├── openspec/                   # Spec-Driven Development artifacts
│   ├── config.yaml
│   └── changes/init-portfolio/ # Initial planning and specification specs
├── public/
│   └── favicon.svg             # Minimalist custom SVG favicon
├── src/
│   ├── content.config.ts       # Astro Content Collections schema (Zod)
│   ├── content/
│   │   └── projects/           # Markdown project entries
│   │       ├── techdaily.md
│   │       ├── motellease.md
│   │       └── boarding-house-booking.md
│   ├── data/
│   │   └── profile.ts          # Structured profile bio, skills, and experience
│   ├── components/
│   │   └── icons/              # Optimized brand SVG components
│   ├── layouts/
│   │   └── Layout.astro        # Root HTML layout with OpenGraph & Twitter tags
│   ├── styles/
│   │   └── global.css          # Tailwind base directives & dark scrollbars
│   └── pages/
│       └── index.astro         # Main Bento Grid presentation
├── astro.config.mjs            # Astro configuration with GitHub Pages domain
├── tailwind.config.mjs         # Custom colors, fonts, and box shadows
└── package.json
```

---

## 💻 Local Development

### Prerequisites

- Node.js 20+ (or Node.js 24)
- npm or pnpm

### Getting Started

```bash
# 1. Clone repository
git clone https://github.com/Duycld03/Duycld03.github.io.git
cd Duycld03.github.io

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Open http://localhost:4321 in your browser

# 4. Run static production build
npm run build
```

---

## 📝 Managing Content

### Adding a New Project

Create a new `.md` file inside `src/content/projects/<project-name>.md`:

```markdown
---
title: "Project Name"
description: "Concise summary of what the project solves and its architecture."
tags: ["C#", "Vue 3", "PostgreSQL", "Docker"]
repoUrl: "https://github.com/Duycld03/<project-name>"
demoUrl: "https://demo.example.com"
featured: true
order: 4
---

Extended details about the project...
```

The site will automatically validate the frontmatter against `src/content.config.ts` and render the new card in the Bento Grid.

---

## 📬 Contact

- **Name**: Duy Nguyễn (Nguyễn Trường Duy)
- **GitHub**: [@Duycld03](https://github.com/Duycld03)
- **Email**: [truongduy2003@gmail.com](mailto:truongduy2003@gmail.com)
