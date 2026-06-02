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
  "AGENTS.md" = @(
    "Wait for explicit user approval",
    "No paid SEO-tool dependency",
    "State-changing operations",
    "require an explicit user request or confirmation in the current interaction"
  )
  ".codex/skills/topic-discovery/SKILL.md" = @(
    "Score exactly three candidates",
    "Stop and wait for explicit user approval",
    "Do not scaffold, install, or implement the Next.js application before explicit topic approval"
  )
  ".codex/skills/technical-seo/SKILL.md" = @(
    "Direct invocation must not bypass topic approval",
    "sitemap.ts",
    "robots.ts",
    "hreflang",
    "Vercel Analytics",
    "Do not keyword-stuff",
    "Do not mass-generate thin pages"
  )
  ".codex/skills/seo-release-review/SKILL.md" = @(
    "https://developers.google.com/search/docs/essentials",
    "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
    "https://nextjs.org/docs/app/getting-started/metadata-and-og-images",
    "Do not claim release completion while any FAIL remains"
  )
  ".codex/skills/seo-growth-review/SKILL.md" = @(
    "Never invent values",
    "Separate observed facts from hypotheses"
  )
  ".codex/skills/seo-site-production/SKILL.md" = @(
    "Never start application implementation before explicit topic approval",
    "Never claim release readiness while a release-review FAIL remains",
    "Never invent Search Console or Vercel Analytics data",
    "Before any GitHub push, Vercel deployment, Search Console submission, or Search Console property change, stop and obtain user confirmation in the current interaction"
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

$requiredMetadata = @{
  ".codex/skills/seo-site-production/agents/openai.yaml" = '$seo-site-production'
  ".codex/skills/topic-discovery/agents/openai.yaml" = '$topic-discovery'
  ".codex/skills/technical-seo/agents/openai.yaml" = '$technical-seo'
  ".codex/skills/seo-release-review/agents/openai.yaml" = '$seo-release-review'
  ".codex/skills/seo-growth-review/agents/openai.yaml" = '$seo-growth-review'
}

foreach ($file in $requiredMetadata.Keys) {
  $content = Get-Content -Raw -LiteralPath $file
  foreach ($text in @("display_name:", "short_description:", "default_prompt:", $requiredMetadata[$file])) {
    if (-not $content.Contains($text)) {
      throw "Missing required metadata '$text' in $file"
    }
  }
}

Write-Host "SEO harness validation passed."
