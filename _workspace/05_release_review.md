# SEO Release Review

## Review Date
2026-06-03

## Target
- Local target: `http://localhost:3100`
- Future production canonical base: `https://search-garden-seo-lab-2.vercel.app`

## Official Sources Checked
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

## Summary
- PASS: 12
- WARN: 2
- FAIL: 0
- MANUAL: 4

No release-blocking `FAIL` remains for the local build. Production readiness still requires user-confirmed GitHub/Vercel deployment and Search Console actions.

## Findings
| Status | Check | URL | Evidence | Recommendation |
| --- | --- | --- | --- | --- |
| PASS | Build | local | `npm run build` completed successfully with 12 static pages generated. | Keep SSG-first structure. |
| PASS | TypeScript | local | `npm run typecheck` completed successfully. | Run again before deployment. |
| PASS | Lint | local | `npm run lint` completed successfully. | Keep lint script on ESLint flat config. |
| PASS | Dependency audit | local | `npm audit --audit-level=moderate` found 0 vulnerabilities after `postcss` override. | Keep lockfile committed. |
| PASS | Public URL HTTP status | all blueprint URLs | `/`, `/tools/korea-post-parcel`, and five `/guides/*` pages returned 200. | Recheck after deployment. |
| PASS | Metadata | all blueprint URLs | Every public URL returned a non-empty title, description, canonical, and h1 in initial HTML. | Recheck production canonical domain. |
| PASS | Initial HTML content | all blueprint URLs | Initial HTML contains Korean parcel/post-office content. | Keep public content in Server Components. |
| PASS | Sitemap | `/sitemap.xml` | Sitemap includes home, tool page, and five guide pages. | Submit production sitemap in Search Console. |
| PASS | Robots | `/robots.txt` | Allows `/`, disallows `/api/`, and points to production sitemap. | Preview deployments are blocked by `VERCEL_ENV !== production`. |
| PASS | Internal links | all internal anchors | Crawled internal hrefs returned 200. | Keep guide links crawlable. |
| PASS | Structured data | public pages | WebSite/WebApplication, Article/BreadcrumbList, and visible FAQ JSON-LD are present. | Validate production pages with Rich Results Test when deployed. |
| PASS | Korean language | layout | Root layout sets `<html lang="ko">`. | Add hreflang only when English pages exist. |
| WARN | Browser visual check | local | In-app Browser tool was unavailable in this session, so visual inspection used HTML/build checks only. | Open local or Vercel URL manually if visual polish matters before deploy. |
| WARN | Core Web Vitals | local | No field data exists before deployment. Static build is lightweight, but PageSpeed/Speed Insights requires production URL. | Run Vercel Speed Insights or PageSpeed after deployment. |
| MANUAL | GitHub branch/merge | GitHub | Feature branch changes are local until explicitly pushed/merged for this app iteration. | Confirm push/PR or merge strategy. |
| MANUAL | Vercel deployment | Vercel | Deployment is a state-changing operation and requires user confirmation. | Connect repository and deploy after confirmation. |
| MANUAL | Search Console setup | Google Search Console | Requires authenticated property registration. | Add URL-prefix property after production URL exists. |
| MANUAL | Indexing request | Google Search Console | Requires production URL and authenticated URL Inspection. | Submit sitemap and request indexing for home and tool page. |

## URL Matrix
| URL | Status | Title | Description | Canonical | H1 | Initial body | JSON-LD |
| --- | ---: | --- | --- | --- | --- | --- | ---: |
| `/` | 200 | PASS | PASS | PASS | 우체국 택배 요금 계산기 | PASS | PASS |
| `/tools/korea-post-parcel` | 200 | PASS | PASS | PASS | 우체국 택배 박스·무게 요금 계산기 | PASS | PASS |
| `/guides/post-office-parcel-size` | 200 | PASS | PASS | PASS | 우체국 택배 박스 크기 기준 | PASS | PASS |
| `/guides/counter-vs-pickup` | 200 | PASS | PASS | PASS | 우체국 창구접수와 방문접수 차이 | PASS | PASS |
| `/guides/jeju-parcel-fee` | 200 | PASS | PASS | PASS | 우체국 제주 택배 요금 기준 | PASS | PASS |
| `/guides/used-goods-parcel-box` | 200 | PASS | PASS | PASS | 중고거래 택배 박스 고르는 법 | PASS | PASS |
| `/guides/oversize-parcel-checklist` | 200 | PASS | PASS | PASS | 우체국 택배 규격 초과 체크리스트 | PASS | PASS |
| `/robots.txt` | 200 | n/a | n/a | n/a | n/a | PASS | n/a |
| `/sitemap.xml` | 200 | n/a | n/a | n/a | n/a | PASS | n/a |

## Manual Follow-Up
See `_workspace/06_manual_actions.md`.

