import type { Metadata } from 'next';
import { ServiceDetail } from '@/components/shared/ServiceDetail';
import { JsonLd } from '@/components/shared/JsonLd';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { serviceSchema } from '@/lib/seo';

const DESCRIPTION =
  'High-performance snow and ice melting systems for luxury Toronto properties. Custom-engineered automation for driveways, walkways, and entrances. No shoveling, no salt damage, no downtime.';

export const metadata: Metadata = {
  title: 'Snow Melting Systems Toronto — Driveway & Walkway Heating',
  description: DESCRIPTION,
  alternates: { canonical: '/services/snow-melting' },
  openGraph: {
    title: 'Snow Melting Systems Toronto — Driveway & Walkway Heating | ProPlus Plumbing',
    description: DESCRIPTION,
    url: '/services/snow-melting',
    type: 'website',
  },
  twitter: {
    title: 'Snow Melting Systems Toronto | ProPlus Plumbing',
    description: DESCRIPTION,
  },
};

const SCHEMA = serviceSchema({
  serviceType: 'Snow Melting System Installation',
  description:
    'Custom-engineered automated snow and ice melting systems for driveways, walkways, and entrances. Weather sensors, smart controls, integration with existing heating systems.',
  url: '/services/snow-melting',
});

const FOR_WHOM = [
  'Luxury homeowners',
  'Commercial property owners',
  'Builders and developers',
  'Property managers',
];

function WhoWeWorkWith() {
  return (
    <section className="bg-cream px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 max-w-[800px]">
          <SectionLabel className="mb-4">03 / For</SectionLabel>
          <h2 className="font-display text-[clamp(36px,4.5vw,64px)] font-light leading-[1.1] tracking-[-0.03em] text-ink">
            Built for{' '}
            <em className="font-normal italic text-red-brand">discerning</em>{' '}
            properties.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FOR_WHOM.map((label, i) => (
            <div
              key={label}
              className="rounded-sm border border-line bg-white p-8"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey-1">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-3 font-display text-[24px] font-normal leading-tight tracking-[-0.02em] text-ink">
                {label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SnowMeltingPage() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      <ServiceDetail
      eyebrow="03 / Services"
      heroImage="/images/snow-melting-hero.jpg"
      heroHeadline={
        <>
          Snow Melting{' '}
          <em className="font-normal italic text-red-brand">Systems</em>
        </>
      }
      intro={[
        'Winter in Toronto demands more than basic solutions. We deliver high-performance snow melting systems that eliminate snow and ice before they become a problem, keeping your property safe, clean, and fully accessible.',
        'No shoveling. No salt damage. No downtime. Our systems are custom-engineered to each property, built with industry-leading technology that automatically responds to weather conditions for seamless operation, optimised energy use, and consistent protection.',
      ]}
      midImage={{
        src: '/images/snow-melting-feature.jpg',
        alt: 'Heated driveway snow-melt installation — Toronto property',
      }}
      scopeLabel="Scope"
      scopeHeadline={
        <>
          Engineered for{' '}
          <em className="font-normal italic text-red-brand">Canadian</em>{' '}
          winters.
        </>
      }
      bullets={[
        'Custom-engineered systems tailored to each property',
        'High-end installation with attention to long-term durability',
        'Smart automation controls and weather sensors',
        'Driveway, walkway, and entrance coverage',
        'Ongoing support and maintenance',
        'Integration with existing heating systems',
      ]}
      featured={[
        { src: '/images/snow-melting-grid-1.jpg', alt: 'Snow-melt system in operation — Toronto driveway' },
        { src: '/images/snow-melting-grid-2.jpg', alt: 'Finished heated driveway — Toronto luxury property' },
        { src: '/images/snow-melting-grid-3.jpg', alt: 'Snow-melt installation — Toronto walkway' },
      ]}
      featuredCaption="Recent installations across Toronto driveways, walkways, and luxury entrances."
      extraSection={<WhoWeWorkWith />}
      faqIds={['heated-driveway-cost', 'integrated-system', 'radiant-lifespan']}
      />
    </>
  );
}
