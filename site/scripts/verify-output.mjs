import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
const required = [
  'fr/index.html',
  'en/index.html',
  'fr/services/index.html',
  'fr/insights/index.html',
  'fr/insights/topic/seo-local/index.html',
  'fr/research/index.html',
  'fr/work/index.html',
  'fr/insights/visibilite-directe-hotels-maroc/index.html',
  'rss.xml',
  'robots.txt',
  'sitemap-index.xml',
];

const missing = required.filter((file) => !existsSync(resolve(dist, file)));
if (missing.length) throw new Error(`Missing build output: ${missing.join(', ')}`);

const frenchArticle = readFileSync(resolve(dist, 'fr/insights/visibilite-directe-hotels-maroc/index.html'), 'utf8');
for (const expected of ['rel="canonical"', 'hreflang="en"', 'application/ld+json', '/en/insights/direct-visibility-moroccan-hotels/']) if (!frenchArticle.includes(expected)) throw new Error(`Expected ${expected} in French article output`);

const frenchService = readFileSync(resolve(dist, 'fr/services/audit-visibilite/index.html'), 'utf8');
for (const expected of ['"@type":"Service"', '"serviceType"', '"areaServed"']) if (!frenchService.includes(expected)) throw new Error(`Expected ${expected} in service JSON-LD output`);

const sitemap = readFileSync(resolve(dist, 'sitemap-index.xml'), 'utf8');
if (!sitemap.includes('sitemap')) throw new Error('Sitemap index is invalid');
if (sitemap.includes('/privacy/')) throw new Error('Noindex privacy routes must not appear in the sitemap');

console.log('Static output verification passed.');
