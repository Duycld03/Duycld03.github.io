## Context

The repository is hosted at `Duycld03.github.io` and deployed as a GitHub Pages User Site. The goal is to build a high-performance, dark-first portfolio inspired by Linear/Raycast Bento Grid design principles. See `proposal.md` for project motivation.

## Goals / Non-Goals

**Goals:**
- Zero client-side JavaScript for default content rendering (pure static HTML/CSS).
- Type-safe content definitions using Astro Content Collections with Zod schemas.
- High-contrast, elegant Bento Grid layout with responsive breakpoints for desktop, tablet, and mobile.
- Clean, automated GitHub Actions workflow for zero-config deployments to GitHub Pages.

**Non-Goals:**
- Dynamic server-side rendering (SSR) or backend database runtime.
- Complex client-heavy animations that degrade initial load or SEO performance.
- Over-engineered full-text search systems on the static site.

## Decisions

1. **Framework: Astro 5 (Static Output)**
   - *Rationale*: Generates pure HTML/CSS without sending client-side framework runtimes to the visitor. Instant TTFB (<0.2s), Lighthouse 100/100 score.
   - *Alternative Considered*: Next.js (`output: 'export'`) — rejected due to mandatory React hydration runtime overhead for static content.

2. **Styling: Tailwind CSS with Bento Grid Tokens**
   - *Rationale*: Utility-first styling with custom dark background token `#0a0a0a`, hairline borders `border-neutral-800`, and subtle hover glows.
   - *Alternative Considered*: CSS Modules / Vanilla CSS — rejected for slower development iteration and lack of unified design token utilities.

3. **Content Architecture: Astro Content Collections**
   - *Rationale*: Native Zod validation ensures every project entry adheres to required metadata (title, summary, tags, urls, order) without external headless CMS.
   - *Alternative Considered*: Hardcoded JSON or TS files — rejected because Markdown/MDX content collections provide cleaner separation between content and component rendering.

4. **Icons: `lucide-astro`**
   - *Rationale*: Inline SVG generation at build time with zero client JavaScript overhead.
   - *Alternative Considered*: Font icons or runtime React icon packages — rejected due to layout shift and client bundle bloat.

## Risks / Trade-offs

- [Custom Domain or Sub-path Routing] → Explicitly configure `site: 'https://duycld03.github.io'` and `base: '/'` in `astro.config.mjs` to prevent broken asset paths.
- [GitHub Actions Permission Errors] → Specify `pages: write`, `id-token: write`, and `contents: read` permissions in workflow file.
