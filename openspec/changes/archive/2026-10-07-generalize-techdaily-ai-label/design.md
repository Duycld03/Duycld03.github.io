# Design

## Context

See proposal.md - Why. TechDaily is rendered on the portfolio homepage from `src/content/projects/techdaily.md` using Astro Content Collections. Technology tags are rendered as pill badges in the project's Bento Grid card.

## Goals / Non-Goals

**Goals:**
- Replace vendor-specific `"Gemini AI"` tag badge with `"AI"`.
- Generalize the frontmatter description to mention AI scenario synthesis without specifying Google Gemini.
- Generalize the content body summary to reference AI structured schemas rather than Google Gemini AI.
- Ensure type-safe Astro Content Collections schema validation passes cleanly.

**Non-Goals:**
- Modifying Astro content collection schemas (`src/content.config.ts`).
- Altering the Bento Grid card component or tag rendering styles.
- Modifying any other project content files.

## Decisions

### Decision 1: Tag Badge Labeling
- **Chosen Option**: `"AI"`
- **Rationale**: Keeps badge compact, matches user's request ("đổi lại thành AI hoặc tích hợp AI thôi, đừng để chi tiết Gemini AI"), and balances nicely alongside other tags such as `"Nuxt 4"` and `"pgvector"`.
- **Alternatives Considered**:
  - `"AI Integration"`: Longer string that expands pill width excessively on mobile viewports.
  - `"Gemini AI"`: Explicitly rejected by user request to remove vendor specificity.

### Decision 2: Description and Body Text Phrasing
- **Frontmatter Description**: `"Daily micro-learning & Senior interview preparation platform built with .NET 10 Clean Architecture, Nuxt 4, on-device neural TTS narration, pgvector search, and AI scenario synthesis."`
- **Body Text**: `"A platform combining SuperMemo SM-2 spaced repetition, client-side on-device neural speech synthesis, interactive 3D knowledge graphs, and architectural scenario challenges evaluated with AI structured schemas."`
- **Rationale**: Retains the engineering depth (structured schemas, scenario synthesis) while removing vendor coupling.

## Risks / Trade-offs

- **[Risk] Schema or build regression** → **Mitigation**: Run `npm run build` during apply phase to verify markdown parsing and static route generation.

## Migration Plan

1. Apply textual updates to `src/content/projects/techdaily.md`.
2. Execute `npm run build` to confirm static site generation.
3. Commit and push to repository for GitHub Pages deployment.
