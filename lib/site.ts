export const SITE = {
  url: 'https://proplusplumbing.com',
  name: 'ProPlus Plumbing Inc.',
  shortName: 'ProPlus Plumbing',
  description:
    "Premium plumbing systems for Toronto custom home builds, luxury renovations, radiant floor heating, and snow melting. Family-owned since 2015. Licensed, insured, and trusted by Toronto's top builders and architects.",
  phone: '(647) 518-7787',
  phoneE164: '+1-647-518-7787',
  email: 'info@proplusplumbing.com',
  address: {
    street: '181 Maxwell St',
    locality: 'North York',
    region: 'ON',
    postalCode: 'M3H 5B5',
    country: 'CA',
  },
  geo: {
    // Approximate geocoded position for 181 Maxwell St, North York.
    // TODO: refine with the verified coordinates from the office address
    // (post-launch — Google Business Profile claim will provide the
    // authoritative lat/lng).
    latitude: 43.7615,
    longitude: -79.4513,
  },
  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const,
    opens: '08:00',
    closes: '18:00',
  },
  foundingDate: '2015',
  areaServed: [
    'Toronto',
    'North York',
    'Vaughan',
    'Markham',
    'Richmond Hill',
  ] as const,
  // TODO: add more social URLs as they become available
  // (Instagram, Google Business Profile, Houzz, Facebook, etc.).
  social: [
    'https://www.linkedin.com/company/pro-plus-plumbing-inc.',
  ] as string[],
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}
