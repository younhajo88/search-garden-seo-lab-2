---
name: technical-seo
description: Use when implementing indexable public pages in the approved Next.js App Router SEO experiment site.
---

# Technical SEO

Read `.codex/roles/site-architect.md`, `.codex/roles/nextjs-builder.md`, `_workspace/03_keyword_map.md`, and `_workspace/04_site_blueprint.md`.

## App Router Checklist
- Define public indexable URLs and private noindex URLs.
- Keep useful public content in initial HTML with Server Components.
- Use Client Components only for interaction.
- Add root metadataBase, title template, description, robots, and Korean html lang.
- Add unique page-level title, description, canonical path, and one representative h1.
- Add crawlable Link-based internal navigation with descriptive anchor text.
- Return notFound() for missing dynamic content.
- Choose SSG, ISR, SSR, or CSR based on content freshness and personalization.
- Add production-aware sitemap.ts and robots.ts.
- Add structured data only when it matches visible content.
- Add meaningful image alt text, explicit dimensions, compressed assets, favicon, and OG images.
- Keep future English routes compatible with localized canonical URLs and hreflang.
- Configure Vercel Analytics.

## Quality Rules
- Do not keyword-stuff.
- Do not hide keywords.
- Do not mass-generate thin pages.
- Do not treat SSR as an automatic ranking improvement.
