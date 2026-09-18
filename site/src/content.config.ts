import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const locale = z.enum(['fr', 'en']);
const status = z.enum(['draft', 'published']);
const source = z.object({ label: z.string().min(2), url: z.url() });
const base = z.object({
  title: z.string().min(10), description: z.string().min(40).max(170), locale,
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), translationKey: z.string().min(3), status,
  publishedAt: z.coerce.date(), updatedAt: z.coerce.date().optional(), author: z.string().min(2).default('Your Name'),
  canonicalIntent: z.literal('self'),
  image: z.object({ src: z.string().startsWith('/'), alt: z.string().min(8) }),
  sources: z.array(source).default([]),
});

const articles = defineCollection({ loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }), schema: base.extend({ topics: z.array(z.string().min(2)).min(1), excerpt: z.string().min(60), opinion: z.boolean().default(false) }) });
const research = defineCollection({ loader: glob({ base: './src/content/research', pattern: '**/*.{md,mdx}' }), schema: base.extend({ methodology: z.string().min(30), limitations: z.string().min(30), topics: z.array(z.string().min(2)).min(1) }) });
const caseStudies = defineCollection({ loader: glob({ base: './src/content/case-studies', pattern: '**/*.{md,mdx}' }), schema: base.extend({ clientType: z.string().min(3), outcome: z.string().min(20), timeframe: z.string().min(3) }) });
const services = defineCollection({ loader: glob({ base: './src/content/services', pattern: '**/*.{md,mdx}' }), schema: base.extend({ audience: z.string().min(20), startingFrom: z.string().min(3).optional(), deliverables: z.array(z.string().min(3)).min(1) }) });

export const collections = { articles, research, caseStudies, services };
