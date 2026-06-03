# Manual Actions

## GitHub
- Decide whether to push the current implementation branch and open a PR.
- State-changing GitHub actions require explicit confirmation in this interaction.
- Suggested branch: `feature/seo-harness-implementation`.

## Vercel
- Connect `younhajo88/search-garden-seo-lab-2` to Vercel.
- Set production environment variable:
  - `NEXT_PUBLIC_SITE_URL=https://search-garden-seo-lab-2.vercel.app` or the final custom domain.
- Deploy after confirming the GitHub/Vercel action.
- After deployment, return the production URL.

## Google Search Console
- After production deployment, add a URL-prefix property for the production URL.
- Submit `https://search-garden-seo-lab-2.vercel.app/sitemap.xml` or the final-domain sitemap.
- Use URL Inspection for:
  - `/`
  - `/tools/korea-post-parcel`
  - one representative guide page
- Request indexing after confirming each URL renders the expected canonical production URL.

## Verification Results to Return
- Production URL.
- Whether `/robots.txt` returns 200 and allows public pages.
- Whether `/sitemap.xml` returns 200 and lists all seven public URLs.
- Search Console property type and verification status.
- Sitemap submission status.
- URL Inspection status for the home page and tool page.

