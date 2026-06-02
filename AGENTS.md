# SEO Experiment Harness

## Purpose
Build and operate a Korean-first Next.js SEO experiment site. Prefer a useful practical tool plus supporting guides. Keep the structure ready for future English pages.

## Required Workflow
When the user asks to start or build the SEO project:
1. Read `.codex/skills/seo-site-production/SKILL.md`.
2. Run topic discovery before application implementation.
3. Present exactly three scored topic candidates.
4. Wait for explicit user approval of one topic.
5. Do not scaffold or implement the Next.js application before approval.
6. Store generated artifacts in `_workspace/`.

## Review Rules
- During implementation, read `.codex/skills/technical-seo/SKILL.md`.
- Before claiming a release is ready, read `.codex/skills/seo-release-review/SKILL.md`.
- For post-release improvement requests, read `.codex/skills/seo-growth-review/SKILL.md`.
- Prefer official Google Search Central and Next.js documentation over third-party summaries.
- Record the review date and source URLs when checking current guidance.
- Distinguish verified facts, estimates, and manual user actions.

## Initial Release Scope
- One practical tool
- Five supporting Korean guide pages
- Korean-first route and metadata design
- English expansion structure without requiring English content in the first release
- Google Search Console manual action list
- Vercel Analytics integration
- No paid SEO-tool dependency
- No GA4 dependency

## External Operations
GitHub, Vercel, and Google Search Console actions may require authentication. Perform operations when credentials and tools are available. Otherwise create a precise manual action list and wait for the user's result.

## Trigger Phrases
| User request | Action |
| --- | --- |
| "SEO 프로젝트 시작해줘" | Run the full `seo-site-production` workflow |
| "주제 다시 조사해줘" | Run `topic-discovery` only |
| "SEO 검수해줘" | Run `seo-release-review` |
| "배포 후 확인해줘" | Run production URL review and generate Search Console actions |
| "SEO 개선점 찾아줘" | Run `seo-growth-review` |
