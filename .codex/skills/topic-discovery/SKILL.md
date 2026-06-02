---
name: topic-discovery
description: Use when starting a Korean long-tail SEO experiment site or when the user asks to research or re-research SEO project topics.
---

# Topic Discovery

Read `.codex/roles/topic-researcher.md`.

## Optional Templates
When present, read `_workspace/templates/00_input.md`, `_workspace/templates/01_topic_candidates.md`, and `_workspace/templates/02_approved_topic.md`. If a template is absent, create its artifact with these concise fallback headings:

- Input: `# Input`, `## Request`, `## Constraints`, `## Date`
- Topic Candidates: `# Topic Candidates`, `## Research Date`, `## Evidence URLs`, `## Candidate Score Table`, `## Candidate Details`, `## Recommendation`, `## Approval Request`
- Approved Topic: `# Approved Topic`, `## Selected Candidate`, `## User Approval`, `## Approval Date`

## Procedure
1. Record the request in `_workspace/00_input.md`.
2. Browse current search results and free-accessible signals for practical tool-and-guide ideas.
3. Inspect visible competition and note evidence URLs.
4. Score exactly three candidates using the role contract.
5. Write `_workspace/01_topic_candidates.md`.
6. Present the score table and recommendation.
7. Stop and wait for explicit user approval naming one candidate.
8. Only after the user explicitly names one candidate, write `_workspace/02_approved_topic.md`.

## Guardrail
Do not scaffold, install, or implement the Next.js application before explicit topic approval.
