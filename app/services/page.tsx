import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CTA } from '@/components/sections/CTA';
import { PageHero } from '@/components/shared/PageHero';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { ArrowRight } from '@/components/primitives/icons';

const DESCRIPTION =
  "Three deeply specialised practices: custom home plumbing, radiant floor heating, and snow melting systems. Designed and installed end to end for Toronto's most discerning properties.";

export const metadata: Metadata = {
  title: 'Services — Custom Home Plumbing, Floor Heating & Snow Melting',
  description: DESCRIPTION,
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services — Custom Home Plumbing, Floor Heating & Snow Melting | ProPlus Plumbing',
    description: DESCRIPTION,
    url: '/services',
    type: 'website',
  },
  twitter: {
    title: 'Services | ProPlus Plumbing',
    description: DESCRIPTION,
  },
};

type ServiceCard = {
  num: string;
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  accent: string;
  paragraphs: string[];
  bullets: string[];
};

const SERVICES: ServiceCard[] = [
  {
    num: '01 / Service',
    href: '/services/custom-home',
    image: '/images/services-overview-plumbing.jpg',
    imageAlt: 'Custom home plumbing rough-in',
    title: 'Custom Home',
    accent: 'Plumbing',
    paragraphs: [
      'Complete plumbing system design and installation for new builds and major renovations. Underground, rough-in, and finishing in disciplined sequence.',
      'We work directly with builders, contractors, and homeowners to ensure every system is installed to the highest standards and the latest Ontario Building Code.',
    ],
    bullets: [
      'Full system design and material specification',
      'Water supply and drainage systems',
      'Fixture installation and finishing',
      'Hot water tank and system setup',
      'Subdivision and multi-home developments',
    ],
  },
  {
    num: '02 / Service',
    href: '/services/floor-heating',
    image: '/images/services-overview-heating.jpg',
    imageAlt: 'Radiant floor heating loops',
    title: 'Radiant Floor',
    accent: 'Heating',
    paragraphs: [
      'Cost-effective, environmentally conscious in-floor heating with zoned controls for every room. Quiet, even warmth that disappears into the architecture.',
      'Each system is designed around the property: hot-water pipes routed beneath the flooring, smart thermostats per zone, integration with new or existing boilers.',
    ],
    bullets: [
      'Zoned hydronic floor heating design',
      'Smart thermostat per zone',
      'Manifold design and installation',
      'Integration with new or existing boilers',
      'System commissioning and warranty',
    ],
  },
  {
    num: '03 / Service',
    href: '/services/snow-melting',
    image: '/images/services-overview-snow.jpg',
    imageAlt: 'Snow melting driveway system',
    title: 'Snow Melting',
    accent: 'Systems',
    paragraphs: [
      'High-performance, automated snow and ice melting for driveways, walkways, and entrances. No shovelling, no salt damage, no downtime.',
      'Custom-engineered to each property and built with weather-sensing automation that responds to the storm before the snow lands.',
    ],
    bullets: [
      'Custom-engineered system per property',
      'Weather-sensing automation',
      'Driveway, walkway, and entrance coverage',
      'Integration with existing heating systems',
      'Ongoing support and maintenance',
    ],
  },
];

function ServiceRow({ service, i }: { service: ServiceCard; i: number }) {
  const photoLeft = i % 2 === 0;
  return (
    <article className="grid items-stretch gap-10 md:grid-cols-2 md:gap-16">
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-sm md:aspect-auto md:min-h-[520px] ${
          photoLeft ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div
        className={`flex flex-col justify-center ${
          photoLeft ? 'md:order-2' : 'md:order-1'
        }`}
      >
        <SectionLabel className="mb-6">{service.num}</SectionLabel>
        <h2 className="font-display text-[clamp(40px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-ink">
          {service.title}{' '}
          <em className="font-normal italic text-red-brand">
            {service.accent}
          </em>
        </h2>
        <div className="mt-6 space-y-4 text-[15px] leading-[1.7] text-grey-1 md:text-[16px]">
          {service.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-8 space-y-2 text-[14px] text-ink">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-2 inline-block h-px w-4 shrink-0 bg-red-brand"
              />
              {b}
            </li>
          ))}
        </ul>
        <Link
          href={service.href}
          data-cursor="hover"
          className="group mt-10 inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.12em] text-ink"
        >
          <span className="border-b border-ink/30 pb-1 transition-colors duration-300 group-hover:border-ink">
            Learn more
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink transition-all duration-300 group-hover:-rotate-45 group-hover:border-red-brand group-hover:bg-red-brand group-hover:text-white">
            <ArrowRight />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        backgroundImage="/images/services-hero.jpg"
        eyebrow="What we do"
        headline={
          <>
            Three core practices, deeply{' '}
            <em className="font-normal italic text-red-brand">specialised</em>.
          </>
        }
        tagline="From rough-in to final commissioning, every system is custom-engineered for the property and the people in it."
      />

      <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px] space-y-24 md:space-y-32">
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.href} service={service} i={i} />
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
