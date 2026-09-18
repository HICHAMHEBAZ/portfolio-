# Morocco Search Lab v1

Static-first Astro portfolio and publication for Moroccan SEO, Maps, and AI-search visibility work.

## Local development

```bash
npm install
npm run dev
```

`PUBLIC_SITE_URL` is the canonical HTTPS URL used by Astro and the sitemap integration. It is required for a public deployment; do not commit the value if it is private or environment-specific. Copy `.env.example` to `.env` for local builds, or set the variable in the shell:

```powershell
$env:PUBLIC_SITE_URL = 'https://<your-real-canonical-domain>'
npm run test
npm run build
```

The placeholder above is illustrative only. Replace it with the real canonical domain before building for publication. The repository does not define a production domain.

## Publish a daily article

1. Add a Markdown or MDX file under `src/content/articles/fr/` or `src/content/articles/en/`.
2. Complete every required frontmatter field. Use `status: draft` until ready.
3. Add a maintained translation only when it is useful; retain the same `translationKey` but use the localized slug.
4. Run `npm run test`.
5. Commit and push. Deploy through Cloudflare Workers or a connected Git provider.

## Cloudflare free-tier deployment

The site uses Cloudflare Workers Static Assets. Normal page requests are static assets, so no database, SSR, or paid CMS is required for v1. The Wrangler configuration deploys the generated `dist/` directory as the Worker named `hichamhebaz-dev`; Cloudflare may assign a workers.dev URL if no custom domain is configured. No custom production domain is assumed here.

### GitHub → Cloudflare automatic deployment

1. Push this repository to GitHub.
2. Push this repository to GitHub with `main` as the production branch.
3. Add repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
4. Optionally add the repository variable `PUBLIC_SITE_URL`; it defaults to `https://hichamhebaz.dev` until the real canonical domain is confirmed.
5. Every pull request runs the build and Wrangler dry-run. Every push to `main` deploys `site/dist` through `site/wrangler.jsonc`.

This repository includes `.github/workflows/cloudflare.yml` so GitHub is the source of truth and Cloudflare receives only changes that pass the production checks. If you prefer Cloudflare Workers Builds instead of GitHub Actions, configure its root as `site`, build command as `npm run ci`, and deployment command as `npm run deploy`.

### Wrangler from a local checkout

From the `site` directory, authenticate Wrangler once and deploy after setting the required URL:

```powershell
npx wrangler login
$env:PUBLIC_SITE_URL = 'https://<your-real-canonical-domain>'
npm run deploy
```

`npm run deploy` validates the production configuration, builds Astro, and runs `wrangler deploy`. It will refuse to deploy while placeholder identity/contact values or a missing/non-HTTPS `PUBLIC_SITE_URL` remain.

Do not publish until the domain, author identity, real email/WhatsApp links, analytics policy, and privacy page are completed. A future contact form should be a small separate Worker protected by Turnstile, not a reason to convert the whole site to SSR.
