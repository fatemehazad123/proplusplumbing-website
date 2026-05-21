import type { Metadata } from 'next';
import { ServiceDetail } from '@/components/shared/ServiceDetail';
import { JsonLd } from '@/components/shared/JsonLd';
import { serviceSchema } from '@/lib/seo';

const DESCRIPTION =
  'Cost-effective, environmentally conscious radiant in-floor heating systems with zoned controls. Custom-designed for Toronto custom homes and renovations. Manifold design, integration, commissioning.';

export const metadata: Metadata = {
  title: 'Radiant Floor Heating Toronto — Hydronic In-Floor Systems',
  description: DESCRIPTION,
  alternates: { canonical: '/services/floor-heating' },
  openGraph: {
    title: 'Radiant Floor Heating Toronto — Hydronic In-Floor Systems | ProPlus Plumbing',
    description: DESCRIPTION,
    url: '/services/floor-heating',
    type: 'website',
  },
  twitter: {
    title: 'Radiant Floor Heating Toronto | ProPlus Plumbing',
    description: DESCRIPTION,
  },
};

const SCHEMA = serviceSchema({
  serviceType: 'Radiant Floor Heating Installation',
  description:
    'Hydronic in-floor heating systems with zoned controls, designed and installed for Toronto custom homes and renovations. Manifold design, smart thermostats, boiler integration, commissioning.',
  url: '/services/floor-heating',
});

export default function FloorHeatingPage() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      <ServiceDetail
      eyebrow="02 / Services"
      heroImage="/images/floor-heating-hero.jpg"
      heroHeadline={
        <>
          Radiant Floor{' '}
          <em className="font-normal italic text-red-brand">Heating</em>
        </>
      }
      intro={[
        'Stepping onto a warm floor, especially during a harsh Canadian winter, is a quiet luxury. Radiant in-floor heating is one of the most cost-effective and environmentally conscious ways to warm a basement, bathroom, or any room in your home.',
        'The system uses hot-water pipes running beneath your flooring, with separate zone controls so you can adjust temperature for each area independently. Following an initial consultation, our team designs a system tailored to your space and budget.',
      ]}
      midImage={{
        src: '/images/floor-heating-feature.jpg',
        alt: 'Radiant floor heating system installed — Toronto home',
      }}
      scopeLabel="Scope"
      scopeHeadline={
        <>
          Comfort by{' '}
          <em className="font-normal italic text-red-brand">zone</em>.
        </>
      }
      bullets={[
        'Zoned in-floor hydronic heating design',
        'Integration with existing or new boiler systems',
        'Smart thermostat installation per zone',
        'Floor preparation and pipe layout',
        'System commissioning and warranty',
        'Manifold design and installation',
      ]}
      featured={[
        { src: '/images/floor-heating-grid-1.jpg', alt: 'Hydronic loops in place — Toronto custom home' },
        { src: '/images/floor-heating-grid-2.jpg', alt: 'Floor heating finished install — Toronto home' },
        { src: '/images/floor-heating-grid-3.jpg', alt: 'Radiant heating system detail — Toronto residence' },
      ]}
      featuredCaption="Recent zoned heating systems installed across Toronto homes and renovations."
      faqIds={['radiant-cost', 'radiant-worth-it', 'radiant-lifespan']}
      />
    </>
  );
}
