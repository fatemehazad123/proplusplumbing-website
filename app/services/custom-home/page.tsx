import type { Metadata } from 'next';
import { ServiceDetail } from '@/components/shared/ServiceDetail';
import { JsonLd } from '@/components/shared/JsonLd';
import { serviceSchema } from '@/lib/seo';

const DESCRIPTION =
  'Complete plumbing system design and installation for new custom homes, major renovations, and subdivision developments across Toronto and the GTA. Code-compliant, builder-trusted, scalable.';

export const metadata: Metadata = {
  title: 'Custom Home Plumbing — New Construction & Major Renovations Toronto',
  description: DESCRIPTION,
  alternates: { canonical: '/services/custom-home' },
  openGraph: {
    title: 'Custom Home Plumbing — New Construction & Major Renovations Toronto | ProPlus Plumbing',
    description: DESCRIPTION,
    url: '/services/custom-home',
    type: 'website',
  },
  twitter: {
    title: 'Custom Home Plumbing | ProPlus Plumbing',
    description: DESCRIPTION,
  },
};

const SCHEMA = serviceSchema({
  serviceType: 'Custom Home Plumbing Installation',
  description:
    'Complete plumbing system design and installation for new custom homes and major renovations, including water supply, drainage, fixture installation, and code-compliant testing.',
  url: '/services/custom-home',
});

export default function CustomHomePage() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      <ServiceDetail
      eyebrow="01 / Services"
      heroImage="/images/custom-home-hero.jpg"
      heroHeadline={
        <>
          Custom Home{' '}
          <em className="font-normal italic text-red-brand">Plumbing</em>
        </>
      }
      intro={[
        'At Pro Plus Plumbing Inc., we specialise in high-quality plumbing solutions for brand-new residential construction. With a strong commitment to precision, efficiency, and long-lasting performance, we work closely with builders, contractors, and homeowners to ensure every plumbing system is installed to the highest standards.',
        'In addition to custom home projects, our company can scale operations for subdivision developments, enabling us to expand workforce and resources to handle multiple homes simultaneously while maintaining consistent quality across every build.',
      ]}
      midImage={{
        src: '/images/custom-home-feature.jpg',
        alt: 'Completed custom home plumbing project on a Toronto lakefront new build, ProPlus Plumbing service van on site',
      }}
      scopeLabel="Scope"
      scopeHeadline={
        <>
          End-to-end{' '}
          <em className="font-normal italic text-red-brand">plumbing</em> design
          and installation.
        </>
      }
      bullets={[
        'Complete plumbing system design and installation',
        'Water supply and drainage systems',
        'Fixture installation (sinks, faucets, toilets, showers)',
        'Hot water tank and system setup',
        'Subdivision developments — scalable crew and resources',
        'Code-compliant inspections and testing',
      ]}
      featured={[
        { src: '/images/custom-home-grid-1.jpg', alt: 'Custom plumbing installation — Toronto custom home' },
        { src: '/images/custom-home-grid-2.jpg', alt: 'Plumbing rough-in detail — Toronto custom home' },
        { src: '/images/custom-home-grid-3.jpg', alt: 'Recent custom home plumbing project — GTA' },
      ]}
      featuredCaption="A small selection of recent custom-home and renovation work across the GTA."
      faqIds={['project-types', 'rough-in-duration', 'subdivisions']}
      />
    </>
  );
}
