# Proposal

## Why

The TechDaily project showcase currently highlights vendor-specific "Gemini AI" terminology in its description, tag badges, and detailed summary. Generalizing this branding to "AI" or integrated AI aligns the portfolio with high-level architectural capabilities, presenting a clean and vendor-agnostic technology overview.

## What Changes

- Modify `src/content/projects/techdaily.md`:
  - Replace the `"Gemini AI"` tag with `"AI"`.
  - Update the frontmatter description from `"Gemini AI scenario synthesis"` to `"AI scenario synthesis"` (or AI-driven scenario synthesis).
  - Update the detailed project summary in the body to replace `"Google Gemini AI structured schemas"` with `"AI structured schemas"`.
- Verify static build and content collection schema validation succeed.

## Capabilities

### New Capabilities
- `portfolio`: Showcase developer projects with clean, accurate, and provider-agnostic technology badges and architectural descriptions.

### Modified Capabilities

## Impact

- Affected files: `src/content/projects/techdaily.md`.
- No architectural, build pipeline, or component changes required.
