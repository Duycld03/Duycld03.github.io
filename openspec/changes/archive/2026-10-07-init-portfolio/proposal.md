## Why

Building a personal developer portfolio deployed to GitHub Pages (`duycld03.github.io`) provides a central, high-performance showcase for projects, experience, technical skills, and contact channels. Using Astro 5 with a Linear/Raycast-inspired Bento Grid aesthetic ensures zero-JS fast loading, strong typography, and smooth micro-interactions while remaining easy to maintain via Markdown/MDX content collections.

## What Changes

- Initialize Astro 5 static site generation project configured for GitHub Pages root domain (`https://duycld03.github.io`).
- Setup Tailwind CSS with a dark-first Bento Grid palette (`#0a0a0a` background, hairline borders, subtle hover glow).
- Implement Astro Content Collections with strict Zod validation for projects and profile data.
- Build responsive UI components:
  - Header / Navigation with quick status badge and social links.
  - Bento Grid layout featuring project highlights, tech stack matrix, and live links.
  - Experience / Milestones timeline.
  - Contact section with one-click copy and resume links.
- Setup GitHub Actions CI/CD workflow for automated static deployment on push to `main`.

## Capabilities

### New Capabilities
- `portfolio`: Core portfolio interface, content collections schema, bento grid layout, responsive presentation, and GitHub Pages deployment workflow.

### Modified Capabilities
<!-- None -->

## Impact

- Repository root initialized as an Astro 5 SSG project.
- New static site assets generated into `dist/`.
- Automated GitHub Pages deployment via `.github/workflows/deploy.yml`.
