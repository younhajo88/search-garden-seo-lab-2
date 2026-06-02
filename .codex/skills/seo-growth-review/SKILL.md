---
name: seo-growth-review
description: Use when reviewing post-release Google Search Console observations and Vercel Analytics to find SEO improvements.
---

# SEO Growth Review

Read `.codex/roles/growth-analyst.md`. Create `_workspace/` if it is absent. Read `_workspace/templates/07_growth_baseline.md` and `_workspace/templates/08_growth_review.md` when present.

If a template is absent, use these fallback headings:
- Baseline: `# SEO Growth Baseline`, `## Observation Window`, `## Search Console`, `## Vercel Analytics`, `## Facts`, `## Hypotheses`
- Later review: `# SEO Growth Review`, `## Observation Window`, `## Changes Since Baseline`, `## Facts`, `## Hypotheses`, `## Immediate Fixes`, `## Experiments`

## Inputs
- Supplied Google Search Console observations: indexed pages, query impressions, clicks, CTR, average position, coverage notes
- Supplied Vercel Analytics observations: page views and available Web Analytics or Speed Insights observations
- Previous baseline or growth-review artifact when available

## Procedure
1. If no Search Console observations and no Vercel Analytics observations are supplied, stop and request inputs. Never invent values.
2. If only one source or partial observations are supplied, perform a limited review. Label missing inputs and limitations, and avoid conclusions not supported by the available data.
3. Record the observation date range.
4. Separate observed facts from hypotheses.
5. Identify indexing failures before ranking experiments.
6. Prioritize improvements to search-intent match, snippets, internal links, content usefulness, and performance.
7. Separate immediate fixes from experiments that need another observation window.
8. Write `_workspace/07_growth_baseline.md` for the first observation or `_workspace/08_growth_review.md` for later observations.
