# SEO Experiment Harness

## Purpose

Build a Korean-first SEO experiment harness that validates practical, search-driven product ideas before implementation. Keep research, review notes, release checklists, and generated working artifacts under `_workspace/`.

## Required Workflow

1. Read `.codex/skills/seo-site-production/SKILL.md` before starting any SEO experiment work.
2. Run topic discovery before application implementation.
3. Present exactly three scored topic candidates. Include the scoring rationale and supporting evidence for each candidate.
4. Wait for explicit user approval before selecting a candidate or beginning implementation.
5. Do not scaffold or implement the application before approval.
6. Store discovery notes, scored candidates, review reports, and release artifacts in `_workspace/`.

## Review Rules

- Run reviews with the `technical-seo`, `seo-release-review`, and `seo-growth-review` workflows when their respective stages are reached.
- Use official Google Search Central documentation and official Next.js documentation as primary references.
- Record review dates and source URLs in review artifacts.
- Clearly distinguish verified facts, estimates, and manual actions.

## Initial Release Scope

- Ship one practical tool.
- Publish five Korean guide pages.
- Use a Korean-first design that supports future English expansion.
- Include a Search Console manual action list.
- Enable Vercel Analytics.
- Do not require a paid SEO-tool dependency.
- Do not require GA4.

## External Operations

- GitHub: request or confirm user authentication before creating repositories, pushing branches, or opening pull requests. Never fabricate credentials or claim an operation succeeded without verification.
- Vercel: request or confirm user authentication before linking projects, configuring deployments, or changing project settings. Record any manual dashboard actions in `_workspace/`.
- Google Search Console: treat ownership verification, sitemap submission, indexing requests, and manual checks as authenticated user actions. Provide a checklist in `_workspace/` and wait for the user to complete or explicitly authorize each external step.

## Trigger Phrases

| Intent | Korean trigger phrases |
| --- | --- |
| Start | `SEO 실험 시작`, `주제 발굴 시작`, `새 SEO 도구 시작` |
| Re-research | `주제 다시 조사`, `키워드 재조사`, `후보 다시 찾아줘` |
| SEO review | `SEO 리뷰`, `기술 SEO 점검`, `출시 전 SEO 검토` |
| Post-deploy check | `배포 후 점검`, `배포 확인`, `검색 노출 점검` |
| Growth improvements | `성장 개선`, `SEO 성장 아이디어`, `트래픽 개선` |
