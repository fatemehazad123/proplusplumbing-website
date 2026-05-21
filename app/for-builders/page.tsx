import type { Metadata } from 'next';
import { CTA } from '@/components/sections/CTA';
import { Process } from '@/components/sections/Process';
import { PageHero } from '@/components/shared/PageHero';
import { TestimonialsBand } from '@/components/shared/TestimonialsBand';
import { SectionLabel } from '@/components/primitives/SectionLabel';

const DESCRIPTION =
  "Tight scheduling. Code-perfect work. Seamless trade coordination. The Toronto plumbing partner for custom-home builders and architectural firms. Three ways to engage.";

export const metadata: Metadata = {
  title: { absolute: 'For Builders & Architects — Trade Partnership with ProPlus' },
  description: DESCRIPTION,
  alternates: { canonical: '/for-builders' },
  openGraph: {
    title: 'For Builders & Architects — Trade Partnership with ProPlus',
    description: DESCRIPTION,
    url: '/for-builders',
    type: 'website',
  },
  twitter: {
    title: 'For Builders & Architects — Trade Partnership with ProPlus',
    description: DESCRIPTION,
  },
};

const VALUE_PROPS = [
  {
    title: 'Tight scheduling',
    desc: 'We commit to dates and we hit them. Daily site cleanliness, weekly progress reporting, zero surprises.',
  },
  {
    title: 'Code-perfect work',
    desc: 'Every system designed and inspected to the latest Ontario Building Code. No callbacks. No conditional sign-offs.',
  },
  {
    title: 'Seamless trade coordination',
    desc: 'We integrate with HVAC, electrical, and framing crews from the schematic phase forward. Your project manager has one less trade to chase.',
  },
];

const MODELS = [
  {
    title: 'Per-project',
    desc: 'Single custom home, renovation, or addition. Quoted scope, fixed schedule, clear deliverables.',
  },
  {
    title: 'Builder retainer',
    desc: 'Ongoing partnership for builders running multiple homes per year. Priority scheduling, dedicated team.',
  },
  {
    title: 'Subdivision development',
    desc: 'Multi-home developments with consistent quality across every unit. Scaled crew and resources.',
  },
];

export default function ForBuildersPage() {
  return (
    <main>
      <PageHero
        backgroundImage="/images/for-builders-hero.jpg"
        eyebrow="For builders & architects"
        headline={
          <>
            The plumbing partner for Toronto&rsquo;s{' '}
            <em className="font-normal italic text-red-brand">custom-home</em>{' '}
            builders.
          </>
        }
        tagline="Tight scheduling. Code-perfect work. Seamless trade coordination. The trade partner who shows up the way you need us to."
      />

      <section className="bg-paper px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 max-w-[800px] md:mb-20">
            <SectionLabel className="mb-6">Why builders work with us</SectionLabel>
            <h2 className="font-display text-[clamp(40px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-ink">
              Built around{' '}
              <em className="font-normal italic text-red-brand">your</em>{' '}
              workflow.
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {VALUE_PROPS.map((prop, i) => (
              <div key={prop.title}>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey-1">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-3 font-display text-[28px] font-normal leading-tight tracking-[-0.02em] text-ink">
                  {prop.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.6] text-grey-1">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />

      <section className="bg-cream px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 max-w-[800px] md:mb-20">
            <SectionLabel className="mb-6">How we work together</SectionLabel>
            <h2 className="font-display text-[clamp(40px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-ink">
              Three ways to{' '}
              <em className="font-normal italic text-red-brand">engage</em>.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {MODELS.map((model, i) => (
              <div
                key={model.title}
                className="rounded-sm border border-line bg-white p-10"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey-1">
                  {String(i + 1).padStart(2, '0')} / Model
                </div>
                <h3 className="mt-4 font-display text-[28px] font-normal leading-tight tracking-[-0.02em] text-ink">
                  {model.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.6] text-grey-1">
                  {model.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsBand
        label="What builders say"
        headline={
          <>
            Trusted by Toronto&rsquo;s{' '}
            <em className="font-normal italic text-red-brand">best</em>.
          </>
        }
      />

      <CTA variant="builders" />
    </main>
  );
}
