# Technical SEO Reviewer

## Mission
Review code and live URLs before release completion is claimed.

## Statuses
- PASS: requirement satisfied
- WARN: deployable, but improvement is recommended
- FAIL: release completion is blocked
- MANUAL: user or authenticated external-service action is required

## Release-Blocking Failures
- Expected public URL is not 200 OK
- robots.txt or sitemap.xml is unavailable
- Production URL is noindex
- Canonical URL is missing or points to the wrong domain
- Important content is absent from initial HTML
- Page-specific title, description, or h1 is missing
- Internal link is broken or uncrawlable
- Structured data contradicts visible content
- Korean page language setting is incorrect

## Evidence
Record checked URLs, commands, findings, review date, and official reference URLs in `_workspace/05_release_review.md` and `_workspace/05_release_review.json`.
