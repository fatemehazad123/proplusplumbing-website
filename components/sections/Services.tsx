import Image from 'next/image';
import Link from 'next/link';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { ArrowRight } from '@/components/primitives/icons';

type Service = {
  num: string;
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  accent: string;
  desc: string;
};

const SERVICES: Service[] = [
  {
    num: '01 / Custom Home Plumbing',
    href: '/services/custom-home',
    image: '/images/services-card-plumbing.jpg',
    imageAlt: 'Custom plumbing rough-in in a new Toronto build',
    title: 'Custom Home',
    accent: 'Plumbing',
    desc: 'Complete system design and installation for new builds and major renovations. Underground, rough-in, and finishing.',
  },
  {
    num: '02 / Radiant Floor Heating',
    href: '/services/floor-heating',
    image: '/images/services-card-floor-heating.jpg',
    imageAlt: 'Radiant floor heating loops installed before pour',
    title: 'Radiant Floor',
    accent: 'Heating',
    desc: 'Cost-effective, environmentally conscious in-floor heating with zoned controls for every room.',
  },
  {
    num: '03 / Snow Melting Systems',
    href: '/services/snow-melting',
    image: '/images/services-card-snow-melting.jpg',
    imageAlt: 'Snow-melting driveway system before paving',
    title: 'Snow Melting',
    accent: 'Systems',
    desc: 'High-performance, automated snow and ice melting for driveways, walkways, and entrances.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto mb-20 flex max-w-[1400px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div>
          <SectionLabel className="mb-4">02 / Services</SectionLabel>
          <h2 className="font-display text-[clamp(48px,6vw,96px)] font-light leading-none tracking-[-0.03em] text-ink">
            What we{' '}
            <em className="font-normal italic text-red-brand">do</em>.
          </h2>
        </div>
        <p className="max-w-[380px] text-[15px] leading-[1.6] text-grey-1">
          Three core practices, deeply specialised. From rough-in to final
          commissioning, every system is custom-engineered for the property and
          the people in it.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-3">
        {SERVICES.map((service) => (
          <Link
            key={service.num}
            href={service.href}
            data-cursor="hover"
            className="group relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-sm border border-line bg-white p-10 transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-2"
          >
            <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-grey-1">
              {service.num}
            </div>

            <div className="relative my-8 flex-1 overflow-hidden rounded-sm bg-cream">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06]"
              />
            </div>

            <div>
              <h3 className="mb-3 font-display text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-ink">
                {service.title}{' '}
                <em className="italic text-red-brand">{service.accent}</em>
              </h3>
              <p className="mb-5 text-[14px] leading-[1.5] text-grey-1">
                {service.desc}
              </p>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink text-ink transition-all duration-300 group-hover:-rotate-45 group-hover:border-red-brand group-hover:bg-red-brand group-hover:text-white">
                <ArrowRight />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
