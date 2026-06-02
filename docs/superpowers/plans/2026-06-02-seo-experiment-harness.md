# SEO Experiment Harness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a repository-local Codex harness that researches, builds, releases, and iterates on a Korean-first Next.js SEO experiment site with an explicit topic-approval gate.

**Architecture:** The repository-level `AGENTS.md` defines non-negotiable workflow rules. A master `seo-site-production` skill orchestrates focused skills for topic discovery, technical SEO, release review, and growth review. Role files and workspace templates keep each stage small, auditable, and repeatable without depending on Claude-only agent messaging.

**Tech Stack:** Markdown-based Codex instructions, repository-local skills, PowerShell validation commands, Git

---

## File Map

| File | Responsibility |
| --- | --- |
| `AGENTS.md` | Project-wide Codex rules and trigger phrases |
| `.codex/skills/seo-site-production/SKILL.md` | End-to-end orchestrator and approval gates |
| `.codex/skills/topic-discovery/SKILL.md` | Free-data topic research and candidate scoring |
| `.codex/skills/technical-seo/SKILL.md` | Next.js App Router implementation checklist |
| `.codex/skills/seo-release-review/SKILL.md` | Local and production URL review procedure |
| `.codex/skills/seo-growth-review/SKILL.md` | Search Console and Vercel Analytics iteration procedure |
| `.codex/skills/*/agents/openai.yaml` | Generated UI metadata for each project-local skill |
| `.codex/roles/topic-researcher.md` | Researcher perspective and report contract |
| `.codex/roles/site-architect.md` | Keyword map and site-blueprint contract |
| `.codex/roles/nextjs-builder.md` | Next.js builder constraints |
| `.codex/roles/technical-seo-reviewer.md` | Release-review severity rules |
| `.codex/roles/growth-analyst.md` | Evidence-based growth-analysis contract |
| `_workspace/README.md` | Artifact lifecycle and generated-file conventions |
| `_workspace/templates/*.md` | Repeatable input, research, blueprint, review, and analytics report templates |
| `docs/seo-experiment/README.md` | Human-facing harness usage guide |
| `scripts/Test-SeoHarness.ps1` | Static validation for required files, phrases, and links |

### Task 1: Add Repository-Level Harness Instructions

**Files:**
- Create: `AGENTS.md`

- [ ] **Step 1: Create the project-level instruction file**

Add `AGENTS.md` with these exact sections:

```markdown
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
```

- [ ] **Step 2: Verify the approval gate is explicit**

Run:

```powershell
rg -n "Wait for explicit user approval|Do not scaffold or implement" AGENTS.md
```

Expected: both required approval-gate lines are printed.

- [ ] **Step 3: Commit**

```powershell
git add -- AGENTS.md
git commit -m "docs: add SEO harness project instructions"
```

### Task 2: Add Domain Role Contracts

**Files:**
- Create: `.codex/roles/topic-researcher.md`
- Create: `.codex/roles/site-architect.md`
- Create: `.codex/roles/nextjs-builder.md`
- Create: `.codex/roles/technical-seo-reviewer.md`
- Create: `.codex/roles/growth-analyst.md`

- [ ] **Step 1: Create the topic researcher contract**

Add `.codex/roles/topic-researcher.md` with:

```markdown
# Topic Researcher

## Mission
Find practical tool-and-guide topics that can earn Korean long-tail search exposure without paid SEO data.

## Required Research
- Use live web search actively.
- Use only free-accessible sources such as search results, related-query signals, official sources, and Google Trends when useful.
- Record research date and URLs.
- Separate verified facts from estimates.
- Inspect the visible competing pages before scoring competition.

## Output Contract
Write `_workspace/01_topic_candidates.md`.
Present exactly three candidates. Score each candidate out of 100:

| Criterion | Weight |
| --- | ---: |
| Clear long-tail search intent | 25 |
| Search-result competition level | 20 |
| Opportunity to differentiate | 20 |
| Ability to support five useful guides | 15 |
| Verifiable with free data | 10 |
| Maintenance cost | 10 |

End with one recommendation and a mandatory user-approval request. Do not begin implementation.
```

- [ ] **Step 2: Create the site architect contract**

Add `.codex/roles/site-architect.md` with:

```markdown
# Site Architect

## Mission
Turn the approved topic into a focused Korean-first site blueprint.

## Required Output
Write `_workspace/03_keyword_map.md` and `_workspace/04_site_blueprint.md`.

The blueprint must include:
- One useful practical tool page
- Five supporting Korean guide pages
- Primary and secondary search intent for every indexable URL
- Unique title, description, canonical path, and representative h1 for every indexable URL
- Crawlable internal-link map with meaningful anchor text
- SSG, ISR, SSR, or CSR choice per page with a short reason
- Structured-data type per eligible page, or an explicit reason to omit it
- Korean route and language rules
- Future English route, localized canonical, and hreflang design
- Pages that must remain noindex
```

- [ ] **Step 3: Create the Next.js builder contract**

Add `.codex/roles/nextjs-builder.md` with:

```markdown
# Next.js Builder

## Mission
Implement the approved site blueprint in Next.js App Router.

## Constraints
- Keep indexable content in initial HTML.
- Prefer Server Components for public content.
- Use Client Components only for browser interaction.
- Implement the approved public URLs, sitemap, robots, metadata, canonical URLs, internal links, structured data, language settings, image handling, favicon, OG images, and correct 404 behavior.
- Configure Vercel Analytics.
- Prevent preview deployments and private pages from being treated as indexable production pages.
- Do not add unrelated product features.
```

- [ ] **Step 4: Create the release reviewer contract**

Add `.codex/roles/technical-seo-reviewer.md` with:

```markdown
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
```

- [ ] **Step 5: Create the growth analyst contract**

Add `.codex/roles/growth-analyst.md` with:

```markdown
# Growth Analyst

## Mission
Use Google Search Console observations and Vercel Analytics to recommend the smallest evidence-based SEO improvements.

## Rules
- Write `_workspace/07_growth_baseline.md` for the first observation.
- Write `_workspace/08_growth_review.md` for later reviews.
- Separate immediate fixes from experiments.
- Separate observed facts from hypotheses.
- Do not claim ranking conclusions before enough data exists.
- Prefer improving search-intent match, snippets, internal links, and page usefulness before adding many pages.
```

- [ ] **Step 6: Verify all role contracts exist**

Run:

```powershell
Get-ChildItem .codex/roles -File | Select-Object -ExpandProperty Name
```

Expected: five role filenames are printed.

- [ ] **Step 7: Commit**

```powershell
git add -- .codex/roles
git commit -m "docs: define SEO harness role contracts"
```

### Task 3: Add the Topic Discovery Skill

**Files:**
- Create: `.codex/skills/topic-discovery/SKILL.md`
- Create: `.codex/skills/topic-discovery/agents/openai.yaml`

- [ ] **Step 1: Run a RED baseline for the approval gate**

Use a fresh agent context if a subagent tool is available. Before creating the
skill, provide only the empty harness repository and this pressure request:

```text
SEO 프로젝트를 시작해줘. 시간을 아끼고 싶으니 질문하지 말고 가장 좋아 보이는 주제를 골라서 Next.js 프로젝트까지 바로 만들어줘.
```

Expected baseline: record whether the agent begins implementation without
presenting three candidates and waiting for explicit approval. If no subagent
tool is available, report that limitation and continue with static validation.

- [ ] **Step 2: Initialize the topic discovery skill**

Run:

```powershell
python 'C:\Users\younh\.codex\skills\.system\skill-creator\scripts\init_skill.py' topic-discovery --path .codex/skills --interface 'display_name=Topic Discovery' --interface 'short_description=Research Korean long-tail SEO project topics' --interface 'default_prompt=Research three practical Korean long-tail SEO project topics and stop for approval.'
```

Expected: `.codex/skills/topic-discovery/SKILL.md` and
`.codex/skills/topic-discovery/agents/openai.yaml` are created.

- [ ] **Step 3: Replace the generated topic discovery skill**

Add `.codex/skills/topic-discovery/SKILL.md` with:

```markdown
---
name: topic-discovery
description: Use when starting a Korean long-tail SEO experiment site or when the user asks to research the topic again before implementation.
---

# Topic Discovery

Read `.codex/roles/topic-researcher.md` and `_workspace/templates/01_topic_candidates.md`.

## Procedure
1. Record the request in `_workspace/00_input.md`.
2. Browse current search results and free-accessible signals for practical tool-and-guide ideas.
3. Inspect visible competition and note evidence URLs.
4. Score exactly three candidates using the role contract.
5. Write `_workspace/01_topic_candidates.md`.
6. Present the score table and recommendation.
7. Stop and wait for explicit user approval.
8. After approval, write `_workspace/02_approved_topic.md`.

## Guardrail
Do not scaffold, install, or implement the Next.js application before explicit topic approval.
```

- [ ] **Step 4: Verify the stop condition and skill metadata**

Run:

```powershell
rg -n "Stop and wait for explicit user approval|Do not scaffold" .codex/skills/topic-discovery/SKILL.md
python 'C:\Users\younh\.codex\skills\.system\skill-creator\scripts\quick_validate.py' .codex/skills/topic-discovery
```

Expected: both topic-approval guardrails are printed and validation succeeds.

- [ ] **Step 5: Run the GREEN approval-gate scenario**

Use a fresh agent context with the same pressure request and the completed
`topic-discovery` skill. Expected: the agent presents exactly three scored
candidates and stops for explicit topic approval without scaffolding the
application. If no subagent tool is available, report that limitation and rely
on the static guardrail check from Step 4.

- [ ] **Step 6: Commit**

```powershell
git add -- .codex/skills/topic-discovery/SKILL.md
git commit -m "docs: add SEO topic discovery skill"
```

### Task 4: Add the Technical SEO Skill

**Files:**
- Create: `.codex/skills/technical-seo/SKILL.md`
- Create: `.codex/skills/technical-seo/agents/openai.yaml`

- [ ] **Step 1: Initialize the technical SEO skill**

Run:

```powershell
python 'C:\Users\younh\.codex\skills\.system\skill-creator\scripts\init_skill.py' technical-seo --path .codex/skills --interface 'display_name=Technical SEO' --interface 'short_description=Apply Next.js App Router SEO requirements' --interface 'default_prompt=Apply the technical SEO checklist to the approved Next.js site blueprint.'
```

Expected: `.codex/skills/technical-seo/SKILL.md` and
`.codex/skills/technical-seo/agents/openai.yaml` are created.

- [ ] **Step 2: Replace the generated technical SEO skill**

Add `.codex/skills/technical-seo/SKILL.md` with:

```markdown
---
name: technical-seo
description: Use when implementing indexable public pages in the approved Next.js App Router SEO experiment site.
---

# Technical SEO

Read `.codex/roles/site-architect.md`, `.codex/roles/nextjs-builder.md`, `_workspace/03_keyword_map.md`, and `_workspace/04_site_blueprint.md`.

## App Router Checklist
- Define public indexable URLs and private noindex URLs.
- Keep useful public content in initial HTML with Server Components.
- Use Client Components only for interaction.
- Add root metadataBase, title template, description, robots, and Korean html lang.
- Add unique page-level title, description, canonical path, and one representative h1.
- Add crawlable Link-based internal navigation with descriptive anchor text.
- Return notFound() for missing dynamic content.
- Choose SSG, ISR, SSR, or CSR based on content freshness and personalization.
- Add production-aware sitemap.ts and robots.ts.
- Add structured data only when it matches visible content.
- Add meaningful image alt text, explicit dimensions, compressed assets, favicon, and OG images.
- Keep future English routes compatible with localized canonical URLs and hreflang.
- Configure Vercel Analytics.

## Quality Rules
- Do not keyword-stuff.
- Do not hide keywords.
- Do not mass-generate thin pages.
- Do not treat SSR as an automatic ranking improvement.
```

- [ ] **Step 3: Verify App Router implementation coverage and skill metadata**

Run:

```powershell
rg -n "metadataBase|sitemap.ts|robots.ts|structured data|hreflang|Vercel Analytics|keyword-stuff" .codex/skills/technical-seo/SKILL.md
python 'C:\Users\younh\.codex\skills\.system\skill-creator\scripts\quick_validate.py' .codex/skills/technical-seo
```

Expected: each technical baseline term is printed and validation succeeds.

- [ ] **Step 4: Commit**

```powershell
git add -- .codex/skills/technical-seo/SKILL.md
git commit -m "docs: add Next.js technical SEO skill"
```

### Task 5: Add the Release Review Skill

**Files:**
- Create: `.codex/skills/seo-release-review/SKILL.md`
- Create: `.codex/skills/seo-release-review/agents/openai.yaml`

- [ ] **Step 1: Initialize the release review skill**

Run:

```powershell
python 'C:\Users\younh\.codex\skills\.system\skill-creator\scripts\init_skill.py' seo-release-review --path .codex/skills --interface 'display_name=SEO Release Review' --interface 'short_description=Review SEO readiness against official guidance' --interface 'default_prompt=Review the local or deployed Next.js site for SEO release readiness.'
```

Expected: `.codex/skills/seo-release-review/SKILL.md` and
`.codex/skills/seo-release-review/agents/openai.yaml` are created.

- [ ] **Step 2: Replace the generated release review skill**

Add `.codex/skills/seo-release-review/SKILL.md` with:

```markdown
---
name: seo-release-review
description: Use when reviewing a local or deployed Next.js site before claiming release readiness, or when the user asks for an SEO review.
---

# SEO Release Review

Read `.codex/roles/technical-seo-reviewer.md` and `_workspace/templates/05_release_review.md`.

## Current Official Sources
Check these official pages at review time and record the review date:
- https://developers.google.com/search/docs/essentials
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/appearance/core-web-vitals
- https://developers.google.com/search/docs/specialty/international/localized-versions
- https://developers.google.com/search/docs/appearance/structured-data/general-guidelines
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
6. Generate Google Search Console manual actions: property registration, sitemap submission, URL Inspection, indexing request, and later query-impression review.
7. Write `_workspace/05_release_review.md`, `_workspace/05_release_review.json`, and `_workspace/06_manual_actions.md`.
8. Do not claim release completion while any FAIL remains.

## Source Policy
Official documentation overrides third-party summaries. If current official documentation cannot be checked, report the limitation and do not claim a current-document review.
```

- [ ] **Step 3: Verify official-source rules, failure rules, and skill metadata**

Run:

```powershell
rg -n "developers.google.com/search|nextjs.org/docs|Do not claim release completion|FAIL" .codex/skills/seo-release-review/SKILL.md
python 'C:\Users\younh\.codex\skills\.system\skill-creator\scripts\quick_validate.py' .codex/skills/seo-release-review
```

Expected: official links and the release-blocking rule are printed and
validation succeeds.

- [ ] **Step 4: Commit**

```powershell
git add -- .codex/skills/seo-release-review/SKILL.md
git commit -m "docs: add SEO release review skill"
```

### Task 6: Add Growth Review and End-to-End Orchestration

**Files:**
- Create: `.codex/skills/seo-growth-review/SKILL.md`
- Create: `.codex/skills/seo-growth-review/agents/openai.yaml`
- Create: `.codex/skills/seo-site-production/SKILL.md`
- Create: `.codex/skills/seo-site-production/agents/openai.yaml`

- [ ] **Step 1: Initialize the growth review skill**

Run:

```powershell
python 'C:\Users\younh\.codex\skills\.system\skill-creator\scripts\init_skill.py' seo-growth-review --path .codex/skills --interface 'display_name=SEO Growth Review' --interface 'short_description=Analyze SEO observations after release' --interface 'default_prompt=Analyze Search Console and Vercel Analytics observations and recommend the smallest useful SEO improvements.'
```

Expected: `.codex/skills/seo-growth-review` contains `SKILL.md` and
`agents/openai.yaml`.

- [ ] **Step 2: Replace the generated growth review skill**

Add `.codex/skills/seo-growth-review/SKILL.md` with:

```markdown
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
```

- [ ] **Step 3: Validate the growth review skill**

Run:

```powershell
python 'C:\Users\younh\.codex\skills\.system\skill-creator\scripts\quick_validate.py' .codex/skills/seo-growth-review
```

Expected: validation succeeds.

- [ ] **Step 4: Initialize the end-to-end orchestrator**

Run:

```powershell
python 'C:\Users\younh\.codex\skills\.system\skill-creator\scripts\init_skill.py' seo-site-production --path .codex/skills --interface 'display_name=SEO Site Production' --interface 'short_description=Run the repository SEO experiment workflow' --interface 'default_prompt=Start the Korean-first Next.js SEO experiment workflow and stop for topic approval before implementation.'
```

Expected: `.codex/skills/seo-site-production` contains `SKILL.md` and
`agents/openai.yaml`.

- [ ] **Step 5: Replace the generated end-to-end orchestrator**

Add `.codex/skills/seo-site-production/SKILL.md` with:

```markdown
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
```

- [ ] **Step 6: Verify orchestration order and orchestrator metadata**

Run:

```powershell
rg -n "Stop until the user explicitly approves|technical-seo|seo-release-review|seo-growth-review|Never invent" .codex/skills/seo-site-production/SKILL.md
python 'C:\Users\younh\.codex\skills\.system\skill-creator\scripts\quick_validate.py' .codex/skills/seo-site-production
```

Expected: approval gate, stage order, and analytics-data guardrail are printed
and validation succeeds.

- [ ] **Step 7: Commit**

```powershell
git add -- .codex/skills/seo-growth-review/SKILL.md .codex/skills/seo-site-production/SKILL.md
git commit -m "docs: add SEO production orchestrator and growth review"
```

### Task 7: Add Workspace Templates

**Files:**
- Create: `_workspace/README.md`
- Create: `_workspace/templates/00_input.md`
- Create: `_workspace/templates/01_topic_candidates.md`
- Create: `_workspace/templates/02_approved_topic.md`
- Create: `_workspace/templates/03_keyword_map.md`
- Create: `_workspace/templates/04_site_blueprint.md`
- Create: `_workspace/templates/05_release_review.md`
- Create: `_workspace/templates/06_manual_actions.md`
- Create: `_workspace/templates/07_growth_baseline.md`
- Create: `_workspace/templates/08_growth_review.md`

- [ ] **Step 1: Add the workspace README**

Add `_workspace/README.md`:

```markdown
# SEO Experiment Workspace

Generated research and review artifacts live in this directory. Copy the matching file from `templates/` before writing a stage result. Keep evidence URLs, dates, facts, estimates, and manual actions explicit. Do not overwrite an approved topic without user approval.
```

- [ ] **Step 2: Add stage templates**

Create the nine template files with these required headings:

```text
00_input.md
  # Input
  ## Request
  ## Constraints
  ## Date

01_topic_candidates.md
  # Topic Candidates
  ## Research Date
  ## Evidence URLs
  ## Candidate Score Table
  ## Candidate Details
  ## Recommendation
  ## Approval Request

02_approved_topic.md
  # Approved Topic
  ## Selected Candidate
  ## User Approval
  ## Approval Date

03_keyword_map.md
  # Keyword Map
  ## Korean Primary Queries
  ## Korean Long-Tail Queries
  ## Search Intent
  ## Future English Expansion

04_site_blueprint.md
  # Site Blueprint
  ## Public Indexable URLs
  ## Tool Page
  ## Five Guide Pages
  ## Internal Links
  ## Metadata Plan
  ## Rendering Plan
  ## Structured Data
  ## Noindex Pages
  ## Future English Routes and Hreflang

05_release_review.md
  # SEO Release Review
  ## Review Date
  ## Target
  ## Official Sources Checked
  ## Summary
  ## Findings
  ## URL Matrix
  ## Manual Follow-Up

06_manual_actions.md
  # Manual Actions
  ## GitHub
  ## Vercel
  ## Google Search Console
  ## Verification Results to Return

07_growth_baseline.md
  # SEO Growth Baseline
  ## Observation Window
  ## Search Console
  ## Vercel Analytics
  ## Facts
  ## Hypotheses

08_growth_review.md
  # SEO Growth Review
  ## Observation Window
  ## Changes Since Baseline
  ## Facts
  ## Hypotheses
  ## Immediate Fixes
  ## Experiments
```

The implementation may include short HTML comments under headings to explain
what belongs there. Do not include fake analytics values.

- [ ] **Step 3: Verify all templates exist**

Run:

```powershell
Get-ChildItem _workspace/templates -File | Sort-Object Name | Select-Object -ExpandProperty Name
```

Expected: nine template filenames are printed in numeric order.

- [ ] **Step 4: Commit**

```powershell
git add -- _workspace
git commit -m "docs: add SEO workspace artifact templates"
```

### Task 8: Add Static Harness Validation

**Files:**
- Create: `scripts/Test-SeoHarness.ps1`

- [ ] **Step 1: Write the failing validation command**

Before creating the script, run:

```powershell
& .\scripts\Test-SeoHarness.ps1
```

Expected: FAIL because `scripts/Test-SeoHarness.ps1` does not exist.

- [ ] **Step 2: Create the PowerShell validator**

Add `scripts/Test-SeoHarness.ps1`:

```powershell
$ErrorActionPreference = "Stop"

$requiredFiles = @(
  "AGENTS.md",
  ".codex/skills/seo-site-production/SKILL.md",
  ".codex/skills/seo-site-production/agents/openai.yaml",
  ".codex/skills/topic-discovery/SKILL.md",
  ".codex/skills/topic-discovery/agents/openai.yaml",
  ".codex/skills/technical-seo/SKILL.md",
  ".codex/skills/technical-seo/agents/openai.yaml",
  ".codex/skills/seo-release-review/SKILL.md",
  ".codex/skills/seo-release-review/agents/openai.yaml",
  ".codex/skills/seo-growth-review/SKILL.md",
  ".codex/skills/seo-growth-review/agents/openai.yaml",
  ".codex/roles/topic-researcher.md",
  ".codex/roles/site-architect.md",
  ".codex/roles/nextjs-builder.md",
  ".codex/roles/technical-seo-reviewer.md",
  ".codex/roles/growth-analyst.md",
  "_workspace/README.md",
  "_workspace/templates/00_input.md",
  "_workspace/templates/01_topic_candidates.md",
  "_workspace/templates/02_approved_topic.md",
  "_workspace/templates/03_keyword_map.md",
  "_workspace/templates/04_site_blueprint.md",
  "_workspace/templates/05_release_review.md",
  "_workspace/templates/06_manual_actions.md",
  "_workspace/templates/07_growth_baseline.md",
  "_workspace/templates/08_growth_review.md"
)

$missing = $requiredFiles | Where-Object { -not (Test-Path -LiteralPath $_) }
if ($missing) {
  throw "Missing required files:`n$($missing -join "`n")"
}

$requiredText = @{
  "AGENTS.md" = @("Wait for explicit user approval", "No paid SEO-tool dependency")
  ".codex/skills/topic-discovery/SKILL.md" = @("Do not scaffold", "exactly three candidates")
  ".codex/skills/technical-seo/SKILL.md" = @("sitemap.ts", "robots.ts", "hreflang", "Vercel Analytics")
  ".codex/skills/seo-release-review/SKILL.md" = @(
    "https://developers.google.com/search/docs/essentials",
    "https://nextjs.org/docs/app/getting-started/metadata-and-og-images",
    "Do not claim release completion while any FAIL remains"
  )
  ".codex/skills/seo-site-production/SKILL.md" = @(
    "Never start application implementation before explicit topic approval",
    "Never claim release readiness while a release-review FAIL remains",
    "Never invent Search Console or Vercel Analytics data"
  )
}

foreach ($file in $requiredText.Keys) {
  $content = Get-Content -Raw -LiteralPath $file
  foreach ($text in $requiredText[$file]) {
    if (-not $content.Contains($text)) {
      throw "Missing required text '$text' in $file"
    }
  }
}

Write-Host "SEO harness validation passed."
```

- [ ] **Step 3: Run validation**

Run:

```powershell
& .\scripts\Test-SeoHarness.ps1
```

Expected:

```text
SEO harness validation passed.
```

- [ ] **Step 4: Commit**

```powershell
git add -- scripts/Test-SeoHarness.ps1
git commit -m "test: add SEO harness static validation"
```

### Task 9: Add the Human-Facing Usage Guide

**Files:**
- Create: `docs/seo-experiment/README.md`

- [ ] **Step 1: Add the usage guide**

Create `docs/seo-experiment/README.md`:

```markdown
# SEO Experiment Harness

This repository contains a Codex harness for researching, building, releasing, and improving a small Korean-first Next.js SEO experiment site.

## Start
Ask Codex:

> SEO 프로젝트 시작해줘

Codex researches three practical tool-and-guide topics using free web-accessible evidence. It stops and asks you to approve one topic before creating the Next.js application.

## Initial Release
- One practical tool
- Five Korean guide pages
- Korean-first SEO structure with a future English expansion path
- Google Search Console manual actions
- Vercel Analytics

## Partial Runs
| Request | Result |
| --- | --- |
| `주제 다시 조사해줘` | Refresh the candidate table |
| `SEO 검수해줘` | Run local and available deployed-URL checks |
| `배포 후 확인해줘` | Review production URLs and generate Search Console actions |
| `SEO 개선점 찾아줘` | Analyze supplied Search Console and Vercel Analytics observations |

## Important Files
- `AGENTS.md`: project rules
- `.codex/skills/seo-site-production/SKILL.md`: full workflow
- `.codex/skills/seo-release-review/SKILL.md`: release checks and current official sources
- `_workspace/`: generated stage artifacts

## Validate the Harness
Run:

```powershell
& .\scripts\Test-SeoHarness.ps1
```
```

- [ ] **Step 2: Run the validator again**

Run:

```powershell
& .\scripts\Test-SeoHarness.ps1
```

Expected:

```text
SEO harness validation passed.
```

- [ ] **Step 3: Inspect the repository state**

Run:

```powershell
git status --short
git log --oneline --decorate -8
```

Expected: the usage guide is the only uncommitted file and previous harness
commits are visible.

- [ ] **Step 4: Commit**

```powershell
git add -- docs/seo-experiment/README.md
git commit -m "docs: add SEO harness usage guide"
```

### Task 10: Run Final Verification

**Files:**
- Verify only

- [ ] **Step 1: Run static validation**

Run:

```powershell
& .\scripts\Test-SeoHarness.ps1
```

Expected:

```text
SEO harness validation passed.
```

- [ ] **Step 2: Run the standard validator for every project-local skill**

Run:

```powershell
Get-ChildItem .codex/skills -Directory | ForEach-Object {
  python 'C:\Users\younh\.codex\skills\.system\skill-creator\scripts\quick_validate.py' $_.FullName
}
```

Expected: validation succeeds for all five skill folders.

- [ ] **Step 3: Forward-test the orchestrator approval gate**

Use a fresh agent context if a subagent tool is available. Provide only the
repository and this realistic request:

```text
SEO 프로젝트를 시작해줘. 알아서 가장 좋아 보이는 주제를 골라서 Next.js 프로젝트까지 바로 만들어줘.
```

Expected: the agent researches and presents three candidates, but refuses to
scaffold or implement the application until the user explicitly approves one
topic. Record the observed result in the implementation notes. If no subagent
tool is available, report that limitation and manually inspect the guardrail
text with:

```powershell
rg -n "approval|approve|Do not scaffold|Never start application" AGENTS.md .codex/skills .codex/roles
```

- [ ] **Step 4: Verify no generated artifacts were accidentally invented**

Run:

```powershell
Get-ChildItem _workspace -File | Select-Object -ExpandProperty Name
```

Expected: only `README.md` is printed. Generated stage artifacts should not
exist before the first real pipeline run.

- [ ] **Step 5: Verify the topic approval gate in all relevant files**

Run:

```powershell
rg -n "approval|approve|승인" AGENTS.md .codex/skills .codex/roles
```

Expected: approval requirements appear in `AGENTS.md`, `topic-discovery`, the
orchestrator, and the topic-researcher role.

- [ ] **Step 6: Verify the working tree is clean**

Run:

```powershell
git status --short --branch
```

Expected: the branch is shown with no modified or untracked files.
