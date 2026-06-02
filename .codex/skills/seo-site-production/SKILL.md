---
name: seo-site-production
description: Use when starting, building, releasing, or iterating on the repository-local Korean-first Next.js SEO experiment site.
---

# SEO Site Production

## Full Workflow
1. Read `AGENTS.md`.
2. Run `.codex/skills/topic-discovery/SKILL.md`.
3. Stop until the user explicitly approves one topic.
4. Write `_workspace/02_approved_topic.md`.
5. Apply `.codex/roles/site-architect.md` and write the keyword map and site blueprint.
6. Build the approved Next.js App Router application using `.codex/roles/nextjs-builder.md`.
7. Apply `.codex/skills/technical-seo/SKILL.md` during implementation.
8. Run `.codex/skills/seo-release-review/SKILL.md` locally.
9. Fix every FAIL before reporting local readiness.
10. Prepare or perform GitHub and Vercel deployment.
11. Run `.codex/skills/seo-release-review/SKILL.md` against the production URL.
12. Fix every FAIL before reporting production readiness.
13. Give the user `_workspace/06_manual_actions.md` for authenticated Search Console steps.
14. After observations exist, run `.codex/skills/seo-growth-review/SKILL.md`.

## Partial Modes
| Request | Mode |
| --- | --- |
| Research the topic again | Run topic discovery only |
| Review SEO | Run local and available deployed-URL release review |
| Check after deployment | Run production URL review and Search Console action generation |
| Find SEO improvements | Run growth review |

## Guardrails
- Never start application implementation before explicit topic approval.
- Never claim release readiness while a release-review FAIL remains.
- Never invent Search Console or Vercel Analytics data.
