---
name: seo-release-review
description: Use when reviewing a local or deployed Next.js site before claiming release readiness, or when the user asks for an SEO review.
---

# SEO Release Review

Read `.codex/roles/technical-seo-reviewer.md`.

## Preconditions
1. Create `_workspace/` if it does not exist.
2. Require `_workspace/04_site_blueprint.md` before any review. If it is missing, stop and hand off to the site-architecture workflow. Do not generate the blueprint inside release review or invent expected URLs.
3. When present, read and copy `_workspace/templates/05_release_review.md` and `_workspace/templates/06_manual_actions.md`. Otherwise use these fallback headings:
   - `_workspace/05_release_review.md`: `# SEO Release Review`, `## Review Date`, `## Target`, `## Official Sources Checked`, `## Summary`, `## Findings`, `## URL Matrix`, `## Manual Follow-Up`
   - `_workspace/06_manual_actions.md`: `# Manual Actions`, `## GitHub`, `## Vercel`, `## Google Search Console`, `## Verification Results to Return`

## Current Official Sources
Check these official pages at review time and record the review date:
- https://developers.google.com/search/docs/essentials
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/appearance/core-web-vitals
- https://developers.google.com/search/docs/specialty/international/localized-versions
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- https://developers.google.com/search/docs/appearance/favicon-in-search
- https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

## Review Procedure
1. Read `_workspace/04_site_blueprint.md` to obtain expected public URLs.
2. Review code for metadata, canonical URLs, language, sitemap, robots, structured data, public HTML content, internal links, 404 behavior, images, favicon, OG images, and preview-indexing prevention.
3. If a local or production URL is available, fetch every expected public URL plus `/robots.txt` and `/sitemap.xml`.
4. Check HTTP status, HTML title, description, canonical URL, h1, important body text, crawlable links, language, and structured-data consistency.
5. Record mobile Core Web Vitals or PageSpeed observations when available.
6. Generate Google Search Console manual actions: property registration, sitemap submission, URL Inspection, indexing request, and later query-impression review. Include `## Verification Results to Return` in `_workspace/06_manual_actions.md`.
7. Write `_workspace/05_release_review.md`, `_workspace/05_release_review.json`, and `_workspace/06_manual_actions.md`.
8. Do not claim release completion while any FAIL remains.

## JSON Schema
Write `_workspace/05_release_review.json` with:
- `reviewDate`
- `target`
- `officialSourcesChecked` array
- `summary` object with `pass`, `warn`, `fail`, and `manual` counts
- `findings` array with `status`, `check`, `url`, `evidence`, and `recommendation`
- `manualActions` array

## Source Policy
Official documentation overrides third-party summaries. If current official documentation cannot be checked, report the limitation and do not claim a current-document review.
