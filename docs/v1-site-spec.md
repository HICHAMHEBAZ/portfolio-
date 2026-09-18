## Problem Statement

The owner needs a credible personal portfolio and publication that proves search-visibility expertise, attracts Moroccan hospitality and experience businesses, supports frequent publishing, and can be hosted at no platform cost on Cloudflare. The site must establish trust with people and be technically understandable to search engines and AI-assisted discovery surfaces. Its final visual direction is intentionally deferred until a future Stitch design pass.

## Solution

Deliver a French-first, static-first personal site with service, work, research, insight, about, and contact journeys. It will use a structured editorial system so the owner can add one blog post per day through Markdown files, without a database or paid CMS. The technical foundation will provide localized routes, crawlable content, metadata, schema, sitemap, RSS, accessible navigation, performance-conscious assets, and a Cloudflare-free-tier deployment path.

The highest test seam is the built site: content validation and production builds must prove that a valid article, study, case study, or service page becomes an indexable page with correct metadata, structured data, sitemap presence, and internal navigation.

## User Stories

1. As a prospective hospitality client, I want to immediately understand who the site serves and what business outcome it delivers, so that I can decide whether to explore further.
2. As a prospective client, I want to compare a diagnostic, implementation sprint, and ongoing service, so that I can choose an appropriate next step.
3. As a prospective client, I want to see documented work and methodology, so that I can assess credibility before contacting the owner.
4. As a reader, I want to browse insights by topic, so that I can find useful Moroccan SEO, Maps, multilingual, and AI-search guidance.
5. As a reader, I want each article to state its author, publication date, evidence, and practical conclusion, so that I can judge trustworthiness.
6. As a reader, I want an RSS feed and clear article URLs, so that I can follow new writing.
7. As a French-speaking business owner, I want the main experience in French, so that I can understand the offer naturally.
8. As an English-speaking tourism operator, I want key commercial and research pages in English, so that I can evaluate the service.
9. As a site owner, I want to add a daily post by creating one validated Markdown file, so that publishing remains fast and cheap.
10. As a site owner, I want drafts excluded from public listings and sitemaps, so that unfinished work is never indexed.
11. As a site owner, I want content types to require the right fields, so that every published page remains consistent and search-friendly.
12. As a site owner, I want a clear deployment command and Cloudflare configuration, so that the site can run on the free tier.
13. As a search engine, I want crawlable semantic HTML, canonical URLs, language annotations, sitemaps, and accurate structured data, so that the site can be indexed correctly.
14. As an AI-search system, I want well-structured, source-backed, visible content with unambiguous authorship and entities, so that the site can be evaluated as a reliable source.
15. As a mobile visitor, I want an accessible, fast, touch-friendly site, so that I can read or contact the owner without friction.
16. As a future designer, I want page and component boundaries separated from visual tokens, so that Stitch-driven UI changes do not require rewriting the content or SEO system.

## Implementation Decisions

- Use Astro and TypeScript with static generation as the default rendering mode.
- Configure the site for Cloudflare Workers deployment. The first version must not require a database, paid CMS, or server-side account system.
- Keep all brand, owner, contact, social, service-area, and analytics identifiers in one central configuration module. Placeholders are acceptable until the owner supplies personal details.
- Support French as the default locale and English as an explicit secondary locale. Arabic routes and RTL styling are intentionally reserved for a later version.
- Create typed content collections for insights, research studies, case studies, and services. Every collection will validate SEO and publishing fields, including title, description, date, status, language, canonical intent, and featured image information.
- Use one daily-publication workflow: add a Markdown/MDX entry, set its language and publication status, run validation and build, commit, and deploy. Do not introduce a headless CMS until a nontechnical editor needs it.
- Build reusable page templates for homepage, service detail, work/case study, research study, article, topic archive, about, contact, and legal pages.
- Build the first version with neutral layout and intentionally modest styling. Keep component semantics and content hierarchy stable so the later Stitch pass can replace the presentation layer without changing the URL structure or content model.
- Generate metadata, canonical URLs, Open Graph tags, language alternates, XML sitemap, robots directives, and RSS from the central configuration and collection data.
- Use accurate JSON-LD only for visible content, including WebSite, Person/ProfilePage, Organization or ProfessionalService as applicable, Article, BreadcrumbList, and Service. Do not generate misleading FAQ or LocalBusiness markup.
- Build contact calls-to-action as configurable email, WhatsApp, and booking links. A hosted form backend is out of scope until the owner provides the chosen account details.
- Add analytics and webmaster-tool placeholders only; do not embed invented IDs or credentials.
- Include a deployment guide for Cloudflare Workers free tier, environment configuration, custom-domain connection, Search Console, Bing Webmaster Tools, and post-deploy validation.

## Testing Decisions

- Test external behavior, not component internals. A good test proves that the generated site exposes public routes and metadata correctly from valid content.
- Use Astro content validation and the production build as the primary seam. Broken front matter, invalid dates, unsupported locales, missing required fields, or duplicate slugs must fail before deployment.
- Verify the generated sitemap, RSS feed, robots directives, canonical links, language alternates, and JSON-LD for representative content types.
- Verify article filtering: published content appears in listings and feeds; drafts do not.
- Verify that internal links resolve for services, work, research, and topic pages.
- Run an accessibility and performance-oriented production inspection after the build. The final Stitch visual implementation will add visual-regression coverage where it is most valuable.

## Out of Scope

- Final visual design, design tokens, custom illustrations, animation, and responsive art direction supplied through Stitch
- Arabic/RTL implementation
- User accounts, comments, search, paid newsletter, CRM, database, or paid CMS
- Live contact-form delivery until an account/provider is chosen
- Client dashboards, booking integrations, and authenticated analytics
- Claiming or guaranteeing rankings, AI citations, leads, or revenue

## Further Notes

The content model and site structure are the stable v1 investment. The design system is deliberately deferred. “AI-search friendly” means indexable, evidence-led, consistently structured, and technically sound—not a promise of visibility in any individual AI answer.

