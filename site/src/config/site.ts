export const SITE = {
  name: 'Hicham Hebaz',
  owner: {
    name: 'Hicham Hebaz',
    role: 'Strategic marketing and visibility specialist',
    description:
      'I turn research, culture, and search behaviour into clearer marketing decisions people remember.',
  },
  url: import.meta.env.PUBLIC_SITE_URL ?? 'https://hichamhebaz.dev',
  email: '',
  whatsappUrl: '',
  bookingUrl: '#contact',
  locale: { default: 'fr', supported: ['fr', 'en'] as const },
  social: { linkedin: '', x: '' },
} as const;

export type Locale = (typeof SITE.locale.supported)[number];

export const copy = {
  fr: {
    nav: { services: 'Services', work: 'Études de cas', insights: 'Analyses', research: 'Recherche', about: 'À propos', contact: 'Contact' },
    cta: 'Demander un audit', readMore: 'Lire l’article', latest: 'Dernières analyses', source: 'Sources',
  },
  en: {
    nav: { services: 'Services', work: 'Case studies', insights: 'Insights', research: 'Research', about: 'About', contact: 'Contact' },
    cta: 'Request an audit', readMore: 'Read article', latest: 'Latest insights', source: 'Sources',
  },
} as const;
