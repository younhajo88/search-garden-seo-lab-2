# SEO Experiment Harness

This repository contains a Codex harness for researching, building, releasing,
and improving a small Korean-first Next.js SEO experiment site.

The harness is intentionally gated. It may run read-only research and checks
when the matching tools are available, but it must ask for explicit approval
before implementation or external state-changing operations.

## Start a Full Run

Ask Codex to start the SEO project workflow. The exact Korean trigger phrases
live in `AGENTS.md`; an English equivalent is:

> Start the SEO experiment project.

Codex will:

1. Read `AGENTS.md` and `.codex/skills/seo-site-production/SKILL.md`.
2. Research exactly three practical Korean long-tail tool-and-guide topics.
3. Present a scored candidate table and one recommendation.
4. Stop until you explicitly approve one topic.
5. Only after approval, write the approved-topic artifact and begin the site
   architecture and Next.js implementation workflow.

Codex must not scaffold, install, or implement the application before explicit
topic approval.

## Initial Release Scope

- One practical tool
- Five supporting Korean guide pages
- Korean-first route and metadata design
- Future English expansion structure without requiring English content
- Google Search Console manual action list
- Vercel Analytics integration
- No paid SEO-tool dependency
- No GA4 dependency

## Focused Partial Modes

The orchestrator checks for a matching partial mode before starting the full
workflow. When a partial mode matches, Codex runs only that focused stage and
skips the full workflow, including topic discovery.

| Request intent | Focused mode |
| --- | --- |
| Research the topic again | Run topic discovery only and stop for approval. |
| Review SEO | Run local and available deployed-URL release review only. |
| Check after deployment | Review production URLs and generate Search Console manual actions. |
| Find SEO improvements | Run growth review only using supplied observations. |

For post-release growth review, Codex must not invent Google Search Console or
Vercel Analytics data. If only one source or partial observations are supplied,
it performs a limited review and labels missing inputs and limitations.

## External Operations

Read-only checks may run when tools are available. External mutations require
an explicit user request or confirmation in the current interaction, including:

- GitHub pushes
- Vercel deployments
- Google Search Console indexing submissions
- Google Search Console property changes

If an external tool is unavailable, authentication is missing, or approval has
not been granted, Codex should write a precise manual action list and wait for
the user's result.

## Important Files

- `AGENTS.md`: repository rules, workflow gates, trigger phrases, and external
  operation policy
- `.codex/skills/seo-site-production/SKILL.md`: full workflow, partial-mode
  routing, approval gates, and release-readiness guardrails
- `.codex/skills/topic-discovery/SKILL.md`: three-candidate topic research and
  approval gate
- `.codex/skills/technical-seo/SKILL.md`: implementation-time technical SEO
  rules
- `.codex/skills/seo-release-review/SKILL.md`: local and production release
  checks using current official sources
- `.codex/skills/seo-growth-review/SKILL.md`: post-release Search Console and
  Vercel Analytics review
- `_workspace/`: generated stage artifacts and templates

## Validate the Harness

Run the static validator from the repository root:

```powershell
& .\scripts\Test-SeoHarness.ps1
```

Expected output:

```text
SEO harness validation passed.
```

The validator checks the required harness files, approval-gate text, partial
mode routing, external-mutation confirmation rules, release-review schema, and
growth-review limitations.
