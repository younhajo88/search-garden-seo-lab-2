---
name: seo-site-production
description: Use when running the full repository-local Korean-first Next.js SEO experiment pipeline from topic discovery through release and later iteration.
---

# SEO Site Production

## Routing Rule
Select a matching partial mode before starting the full workflow. For a matching partial request, run only the focused skill or review stage and skip the full workflow, including topic discovery.

## Partial Modes
| Request | Mode |
| --- | --- |
| Research the topic again | Run topic discovery only |
| Review SEO | Run local and available deployed-URL release review only |
| Check after deployment | Run production URL review and Search Console action generation only |
| Find SEO improvements | Run growth review only |

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
10. Prepare GitHub and Vercel deployment. Before any GitHub push or Vercel deployment, stop and obtain user confirmation in the current interaction.
11. Run `.codex/skills/seo-release-review/SKILL.md` against the production URL.
12. Fix every FAIL before reporting production readiness.
13. Give the user `_workspace/06_manual_actions.md` for authenticated Search Console steps.
14. After observations exist, run `.codex/skills/seo-growth-review/SKILL.md`.

## Guardrails
- Never start application implementation before explicit topic approval.
- Never claim release readiness while a release-review FAIL remains.
- Never invent Search Console or Vercel Analytics data.
- Allow read-only external checks without confirmation. Before any GitHub push, Vercel deployment, Search Console submission, or Search Console property change, stop and obtain user confirmation in the current interaction.
