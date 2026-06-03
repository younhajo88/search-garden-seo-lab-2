$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$failures = New-Object System.Collections.Generic.List[string]

function Get-RepoPath {
  param([string]$RelativePath)

  return Join-Path -Path $repoRoot -ChildPath $RelativePath
}

function Add-ValidationFailure {
  param([string]$Message)

  [void]$failures.Add($Message)
}

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

foreach ($file in $requiredFiles) {
  if (-not (Test-Path -LiteralPath (Get-RepoPath $file))) {
    Add-ValidationFailure "Missing required file: $file"
  }
}

$requiredText = @{
  "AGENTS.md" = @(
    "Wait for explicit user approval",
    "No paid SEO-tool dependency",
    "State-changing operations",
    "require an explicit user request or confirmation in the current interaction"
  )
  ".codex/roles/site-architect.md" = @(
    "Korean route and language rules",
    "Limit CSR to interaction islands or non-indexable pages",
    "Render indexable content server-side into initial HTML"
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
    'Require `_workspace/04_site_blueprint.md` before any review',
    "Do not generate the blueprint inside release review or invent expected URLs",
    "https://developers.google.com/search/docs/essentials",
    "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
    "https://nextjs.org/docs/app/getting-started/metadata-and-og-images",
    "Do not claim release completion while any FAIL remains",
    "## JSON Schema",
    '`reviewDate`',
    '`target`',
    '`officialSourcesChecked` array',
    '`summary` object with `pass`, `warn`, `fail`, and `manual` counts',
    '`findings` array with `status`, `check`, `url`, `evidence`, and `recommendation`',
    '`manualActions` array'
  )
  ".codex/skills/seo-growth-review/SKILL.md" = @(
    "If no Search Console observations and no Vercel Analytics observations are supplied, stop and request inputs. Never invent values.",
    "If only one source or partial observations are supplied, perform a limited review.",
    "Label missing inputs and limitations",
    "Separate observed facts from hypotheses"
  )
  ".codex/skills/seo-site-production/SKILL.md" = @(
    "## Routing Rule",
    "Select a matching partial mode before starting the full workflow",
    "run only the focused skill or review stage and skip the full workflow, including topic discovery",
    "Never start application implementation before explicit topic approval",
    "Never claim release readiness while a release-review FAIL remains",
    "Never invent Search Console or Vercel Analytics data",
    "Before any GitHub push, Vercel deployment, Search Console submission, or Search Console property change, stop and obtain user confirmation in the current interaction"
  )
  "_workspace/templates/04_site_blueprint.md" = @(
    "## Korean Routes and Language Rules"
  )
  "_workspace/templates/07_growth_baseline.md" = @(
    "## Limitations"
  )
  "_workspace/templates/08_growth_review.md" = @(
    "## Limitations"
  )
}

foreach ($file in $requiredText.Keys) {
  $path = Get-RepoPath $file
  if (-not (Test-Path -LiteralPath $path)) {
    continue
  }

  $content = Get-Content -Raw -LiteralPath $path
  foreach ($text in $requiredText[$file]) {
    if (-not $content.Contains($text)) {
      Add-ValidationFailure "Missing required text '$text' in $file"
    }
  }
}

$agentsPath = Get-RepoPath "AGENTS.md"
if (Test-Path -LiteralPath $agentsPath) {
  $agentsContent = Get-Content -Raw -LiteralPath $agentsPath
  $requiredTriggerRows = @(
    '| "SEO 프로젝트 시작해줘" | Run the full `seo-site-production` workflow |',
    '| "주제 다시 조사해줘" | Run `topic-discovery` only |',
    '| "SEO 검수해줘" | Run `seo-release-review` |',
    '| "배포 후 확인해줘" | Run production URL review and generate Search Console actions |',
    '| "SEO 개선점 찾아줘" | Run `seo-growth-review` |'
  )

  foreach ($row in $requiredTriggerRows) {
    if (-not $agentsContent.Contains($row)) {
      Add-ValidationFailure "Missing exact trigger table row in AGENTS.md: $row"
    }
  }

  $triggerSection = ($agentsContent -split '(?m)^## Trigger Phrases\s*$')[1]
  if ([string]::IsNullOrWhiteSpace($triggerSection)) {
    Add-ValidationFailure "Missing Trigger Phrases section in AGENTS.md"
  } else {
    $triggerTableRows = $triggerSection -split '\r?\n' | Where-Object { $_.Trim().StartsWith("|") }
    foreach ($row in $triggerTableRows) {
      if ($row -notmatch '^\| [^|]+ \| [^|]+ \|$') {
        Add-ValidationFailure "Malformed trigger table row in AGENTS.md: $row"
      }
    }
  }
}

$requiredMetadata = @{
  ".codex/skills/seo-site-production/agents/openai.yaml" = "seo-site-production"
  ".codex/skills/topic-discovery/agents/openai.yaml" = "topic-discovery"
  ".codex/skills/technical-seo/agents/openai.yaml" = "technical-seo"
  ".codex/skills/seo-release-review/agents/openai.yaml" = "seo-release-review"
  ".codex/skills/seo-growth-review/agents/openai.yaml" = "seo-growth-review"
}

foreach ($file in $requiredMetadata.Keys) {
  $path = Get-RepoPath $file
  if (-not (Test-Path -LiteralPath $path)) {
    continue
  }

  $content = Get-Content -Raw -LiteralPath $path
  $skillReference = [regex]::Escape('$' + $requiredMetadata[$file])
  $metadataPatterns = @{
    "interface:" = "(?m)^interface:\s*$"
    "display_name:" = "(?m)^  display_name:\s*[^#\s].*$"
    "short_description:" = "(?m)^  short_description:\s*[^#\s].*$"
    "default_prompt:" = ('(?m)^  default_prompt:\s*[^#\s].*{0}(?:[^A-Za-z0-9-]|$).*$' -f $skillReference)
  }

  foreach ($field in $metadataPatterns.Keys) {
    if (-not [regex]::IsMatch($content, $metadataPatterns[$field])) {
      Add-ValidationFailure "Missing active required metadata '$field' in $file"
    }
  }
}

if ($failures.Count -gt 0) {
  $sortedFailures = $failures | Sort-Object
  throw "SEO harness validation failed:`n$($sortedFailures -join "`n")"
}

Write-Host "SEO harness validation passed."
