import type { Metadata } from 'next';
import { CTA } from '@/components/sections/CTA';
import { PageHero } from '@/components/shared/PageHero';
import { SectionLabel } from '@/components/primitives/SectionLabel';

const DESCRIPTION =
  'Pro Plus Plumbing is a Toronto family-owned plumbing practice specialising in custom home builds, luxury renovations, and radiant heating systems. Licensed, insured, and trusted by builders since 2015.';

export const metadata: Metadata = {
  title: { absolute: "About ProPlus Plumbing — Toronto's Family-Owned Plumbing Practice" },
  description: DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: {
    title: "About ProPlus Plumbing — Toronto's Family-Owned Plumbing Practice",
    description: DESCRIPTION,
    url: '/about',
    type: 'website',
  },
  twitter: {
    title: "About ProPlus Plumbing — Toronto's Family-Owned Plumbing Practice",
    description: DESCRIPTION,
  },
};

const STATS = [
  { num: '10+', label: 'Years in business' },
  { num: '150+', label: 'Homes plumbed' },
  { num: 'Insured', label: '& Bonded' },
  { num: 'Licensed', label: 'Ontario' },
];

const VALUES = [
  {
    title: 'Precision',
    desc: 'Every system is custom-engineered to its property, designed end-to-end, installed to the latest Ontario Building Code.',
  },
  {
    title: 'Reliability',
    desc: 'Tight scheduling. Disciplined sequencing. Clear communication. Builders depend on us because we deliver.',
  },
  {
    title: 'Craft',
    desc: 'We work with materials and methods that hold up for decades. Hidden work matters most.',
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        backgroundImage="/images/about-hero.jpg"
        eyebrow="About ProPlus"
        headline={
          <>
            A family practice for{' '}
            <em className="font-normal italic text-red-brand">
              Toronto&rsquo;s
            </em>{' '}
            most demanding builds.
          </>
        }
        tagline="Pro Plus Plumbing opened its doors in 2015 as a family-owned and operated business in Toronto. We specialise in new custom home plumbing, major renovations, radiant floor heating, and snow melting systems."
      />

      <section className="bg-cream px-6 py-20 md:px-12 md:py-24">
        <dl className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4 md:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dd className="inline-block border-b-2 border-navy pb-2 font-display text-[clamp(28px,5vw,64px)] font-light italic leading-none tracking-[-0.03em] text-navy">
                {stat.num}
              </dd>
              <dt className="mt-3 text-[11px] uppercase tracking-[0.15em] text-grey-1">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-paper px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1400px] items-start gap-10 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <SectionLabel>01 / Mission</SectionLabel>
          <div>
            <h2 className="font-display text-[clamp(36px,4.5vw,64px)] font-light leading-[1.1] tracking-[-0.03em] text-ink">
              Plumbing systems that exceed{' '}
              <em className="font-normal italic text-red-brand">
                expectations
              </em>
              .
            </h2>
            <p className="mt-8 max-w-[600px] text-[16px] leading-[1.7] text-grey-1 md:text-[18px]">
              To put our clients&rsquo; needs first by delivering plumbing
              systems that exceed expectations in quality, comfort, and
              reliability, every project, every home.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 max-w-[800px] md:mb-20">
            <SectionLabel className="mb-6">02 / Values</SectionLabel>
            <h2 className="font-display text-[clamp(40px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-ink">
              What we{' '}
              <em className="font-normal italic text-red-brand">build</em> on.
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <div key={value.title}>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey-1">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-3 font-display text-[32px] font-normal leading-tight tracking-[-0.02em] text-ink">
                  {value.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.6] text-grey-1">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
