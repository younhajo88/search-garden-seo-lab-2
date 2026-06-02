---
name: topic-discovery
description: Use when the user asks to research, select, compare, or re-research a Korean long-tail SEO experiment topic before implementation.
---

# Topic Discovery

Read `.codex/roles/topic-researcher.md`.

## Optional Templates
When present, read `_workspace/templates/00_input.md`, `_workspace/templates/01_topic_candidates.md`, and `_workspace/templates/02_approved_topic.md`. If a template is absent, create its artifact with these concise fallback headings:

- Input: `# Input`, `## Request`, `## Constraints`, `## Date`
- Topic Candidates: `# Topic Candidates`, `## Research Date`, `## Evidence URLs`, `## Candidate Score Table`, `## Candidate Details`, `## Recommendation`, `## Approval Request`
- Approved Topic: `# Approved Topic`, `## Selected Candidate`, `## User Approval`, `## Approval Date`

## Procedure
1. Create `_workspace/` if it does not exist.
2. Record the request in `_workspace/00_input.md`.
3. Browse current search results and free-accessible signals for practical tool-and-guide ideas.
4. Inspect visible competition and note evidence URLs.
5. Score exactly three candidates using the role contract.
6. Write `_workspace/01_topic_candidates.md`.
7. Present the score table and recommendation.
8. Stop and wait for explicit user approval naming one candidate.
9. Only after the user explicitly names one candidate, write `_workspace/02_approved_topic.md`.

## Guardrail
Do not scaffold, install, or implement the Next.js application before explicit topic approval.
