import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL ?? 'https://hichamhebaz.dev';

export default defineConfig({
  site,
  output: 'static',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/drafts/') && !page.includes('/privacy/') })],
});
