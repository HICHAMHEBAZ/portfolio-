import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE } from '../config/site';
import { isPublished } from '../lib/content';

export async function GET() {
  const articles = (await getCollection('articles')) as CollectionEntry<'articles'>[];
  const publishedArticles = articles.filter((entry) => entry.data.locale === 'fr' && isPublished(entry));
  return rss({
    title: `${SITE.name} — Analyses`,
    description: 'Analyses de la visibilité Google, Maps et recherche IA au Maroc.',
    site: SITE.url,
    items: publishedArticles.map((entry) => ({ title: entry.data.title, description: entry.data.description, pubDate: entry.data.publishedAt, link: `/fr/insights/${entry.data.slug}/` })),
  });
}
