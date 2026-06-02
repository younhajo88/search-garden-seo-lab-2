---
name: seo-growth-review
description: Use when reviewing post-release Google Search Console observations and Vercel Analytics to find SEO improvements.
---

# SEO Growth Review

Read `.codex/roles/growth-analyst.md`, `_workspace/templates/07_growth_baseline.md`, and `_workspace/templates/08_growth_review.md`.

## Inputs
- Google Search Console: indexed pages, query impressions, clicks, CTR, average position, coverage notes
- Vercel Analytics: page views and available Web Analytics or Speed Insights observations
- Previous baseline or growth-review artifact when available

## Procedure
1. Record the observation date range.
2. Separate observed facts from hypotheses.
3. Identify indexing failures before ranking experiments.
4. Prioritize improvements to search-intent match, snippets, internal links, content usefulness, and performance.
5. Separate immediate fixes from experiments that need another observation window.
6. Write `_workspace/07_growth_baseline.md` for the first observation or `_workspace/08_growth_review.md` for later observations.
