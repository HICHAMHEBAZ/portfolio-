import { readFileSync } from 'node:fs';
const config = readFileSync('src/config/site.ts', 'utf8');
const placeholders = ['Your Name', 'hello@your-domain.ma', 'https://wa.me/212600000000'];
if (!process.env.PUBLIC_SITE_URL || !process.env.PUBLIC_SITE_URL.startsWith('https://') || process.env.PUBLIC_SITE_URL.includes('your-domain.ma') || placeholders.some((value) => config.includes(value))) throw new Error('Refusing deployment: replace placeholder identity/contact values and set PUBLIC_SITE_URL to the real canonical HTTPS domain.');
console.log('Production configuration is valid.');
