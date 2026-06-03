---
name: technical-seo
description: Use when implementing the approved Next.js App Router SEO experiment site, including metadata, canonical URLs, sitemap.ts, robots.ts, preview indexing protection, structured data, or Vercel Analytics.
---

# Technical SEO

Read `.codex/roles/site-architect.md`, `.codex/roles/nextjs-builder.md`, `_workspace/02_approved_topic.md`, `_workspace/03_keyword_map.md`, and `_workspace/04_site_blueprint.md`.

## Preconditions
- Stop and run `.codex/skills/topic-discovery/SKILL.md` if `_workspace/02_approved_topic.md` is absent. Direct invocation must not bypass topic approval.
- Stop and request the missing artifacts if `_workspace/03_keyword_map.md` or `_workspace/04_site_blueprint.md` is absent.

## App Router Checklist
- Define public indexable URLs and private noindex URLs.
- Keep useful public content in initial HTML with Server Components.
- Use Client Components only for interaction.
- Add root metadataBase, title template, description, robots, and Korean html lang.
- Add unique page-level title, description, canonical path, and one representative h1.
- Add crawlable Link-based internal navigation with descriptive anchor text.
- Return notFound() for missing dynamic content.
- Choose SSG, ISR, or SSR for indexable pages based on content freshness and personalization. Use CSR only for interaction islands or non-indexable pages; keep indexable content server-rendered in initial HTML.
- Add production-aware sitemap.ts and robots.ts.
- Keep preview deployments and private pages non-indexable.
- Add structured data only when it matches visible content.
- Add meaningful image alt text, explicit dimensions, compressed assets, favicon, and OG images.
- Keep future English routes compatible with localized canonical URLs and hreflang.
- Configure Vercel Analytics.

## Quality Rules
- Do not keyword-stuff.
- Do not hide keywords.
- Do not mass-generate thin pages.
- Do not treat SSR as an automatic ranking improvement.
