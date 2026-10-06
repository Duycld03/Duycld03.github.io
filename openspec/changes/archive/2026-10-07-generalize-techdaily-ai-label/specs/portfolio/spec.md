# Spec Delta

## Purpose

Provides a clean developer portfolio presenting highlighted projects, technical competencies, and developer profile with accessible dark-first styling and provider-agnostic technology tagging.

## ADDED Requirements

### Requirement: Provider-Agnostic AI Project Tagging
The portfolio SHALL display general, provider-agnostic AI badges and summary descriptions for projects utilizing artificial intelligence capabilities instead of vendor-specific model branding.

#### Scenario: View TechDaily project card
- **WHEN** a visitor views the TechDaily project card in the showcase section
- **THEN** the project tag displays "AI" rather than vendor-specific "Gemini AI"
- **AND** the project description highlights AI-driven scenario synthesis without vendor-specific model branding

### Requirement: Bento Grid Project Showcase Integrity
The portfolio SHALL maintain content collection validation, responsive Bento Grid presentation, repository links, and live deployment links for all featured projects.

#### Scenario: Inspect project showcase build and presentation
- **WHEN** the static site build executes and a visitor inspects the TechDaily card
- **THEN** the project frontmatter validates against the Astro content schema and retains functional repository and live demo links
