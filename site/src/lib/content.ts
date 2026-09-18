import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';
import type { Locale } from '../config/site';

export const isPublished = (entry: { data: { status: string; publishedAt: Date } }) => entry.data.status === 'published' && entry.data.publishedAt <= new Date();

export async function localizedEntries<T extends CollectionKey>(collection: T, locale: Locale) {
  const entries = (await getCollection(collection)) as CollectionEntry<T>[];
  return entries.filter((entry) => entry.data.locale === locale && isPublished(entry)).sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export async function translationFor<T extends CollectionKey>(collection: T, entry: CollectionEntry<T>, locale: Locale) {
  const entries = (await getCollection(collection)) as CollectionEntry<T>[];
  return entries.find((candidate) => candidate.data.translationKey === entry.data.translationKey && candidate.data.locale === locale && isPublished(candidate));
}

export const formatDate = (date: Date, locale: Locale) => new Intl.DateTimeFormat(locale === 'fr' ? 'fr-MA' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
