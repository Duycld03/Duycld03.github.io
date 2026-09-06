## 1. Project Scaffolding & Configuration

- [x] 1.1 Scaffold Astro 5 project with TypeScript and Tailwind CSS; verify `package.json` contains dependencies and scripts
- [x] 1.2 Configure `astro.config.mjs` for root site `https://duycld03.github.io` with static output and Tailwind integration
- [x] 1.3 Configure `tailwind.config.mjs` with dark theme palette, neutral colors, and custom grid utilities

## 2. Content Architecture & Schema

- [x] 2.1 Define Astro Content Collections schema in `src/content.config.ts` (or `src/content/config.ts`) with Zod validation for projects
- [x] 2.2 Create sample/seed project records in `src/content/projects/` validating all schema constraints
- [x] 2.3 Create static data modules for profile bio, social channels, technical skills, and experience milestones

## 3. UI Component Construction (Bento Grid)

- [x] 3.1 Create root layout in `src/layouts/Layout.astro` with SEO metadata, OpenGraph tags, and dark-first background styling
- [x] 3.2 Build Header / Hero component with profile info, animated availability badge, and social action buttons
- [x] 3.3 Build ProjectCard and BentoGrid components rendering featured projects with tags and links
- [x] 3.4 Build TechStack component categorizing skills with visual badges
- [x] 3.5 Build ExperienceTimeline component presenting chronological career milestones
- [x] 3.6 Assemble all components into `src/pages/index.astro` and verify responsive layout across breakpoints

## 4. Deployment & Verification

- [x] 4.1 Create GitHub Actions workflow `.github/workflows/deploy.yml` for automated GitHub Pages static deployment
- [x] 4.2 Run `pnpm build` to verify static HTML/CSS asset generation with zero errors
