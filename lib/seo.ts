import type { Article } from '@/lib/articles';
import type { FAQCategory } from '@/lib/faq';
import { absoluteUrl, SITE } from '@/lib/site';

export const BUSINESS_ID = `${SITE.url}/#business`;

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  '@id': BUSINESS_ID,
  name: SITE.name,
  image: absoluteUrl('/logo-white.svg'),
  logo: absoluteUrl('/logo-white.svg'),
  url: SITE.url,
  telephone: SITE.phoneE164,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [...SITE.hours.days],
      opens: SITE.hours.opens,
      closes: SITE.hours.closes,
    },
  ],
  areaServed: [
    ...SITE.areaServed.map((city) => ({ '@type': 'City', name: city })),
    { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
  ],
  priceRange: '$$$$',
  foundingDate: SITE.foundingDate,
  founder: { '@type': 'Person', name: 'ProPlus Plumbing' },
  // Populated from SITE.social — currently LinkedIn only.
  // TODO: extend with Instagram, Google Business Profile, Houzz, Facebook as available.
  sameAs: SITE.social,
};

export function serviceSchema(input: {
  serviceType: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: input.serviceType,
    name: input.serviceType,
    url: absoluteUrl(input.url),
    provider: { '@id': BUSINESS_ID },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Greater Toronto Area',
    },
    description: input.description,
  };
}

export function articleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: absoluteUrl(article.heroImage),
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: { '@type': 'Organization', name: SITE.shortName },
    publisher: { '@id': BUSINESS_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/journal/${article.slug}`),
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': absoluteUrl('/contact'),
  url: absoluteUrl('/contact'),
  name: 'Contact ProPlus Plumbing',
  description:
    'Request a consultation for custom home plumbing, radiant floor heating, or snow melting systems in Toronto.',
  about: { '@id': BUSINESS_ID },
};

export function faqPageSchema(categories: FAQCategory[]) {
  const mainEntity = categories.flatMap((category) =>
    category.questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  );
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': absoluteUrl('/faq'),
    url: absoluteUrl('/faq'),
    mainEntity,
  };
}

// TODO: when real project data ships (post-CMS), replace this placeholder
// with concrete itemListElement entries enumerating each project.
export const projectsCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': absoluteUrl('/projects'),
  url: absoluteUrl('/projects'),
  name: 'Selected projects — ProPlus Plumbing',
  description:
    'Recent custom home plumbing, radiant heating, and snow melting projects across the Greater Toronto Area.',
  isPartOf: { '@id': BUSINESS_ID },
};
