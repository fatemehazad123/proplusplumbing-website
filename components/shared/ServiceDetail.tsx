import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { CTA } from '@/components/sections/CTA';
import { Process } from '@/components/sections/Process';
import { PageHero } from '@/components/shared/PageHero';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { ArrowRight } from '@/components/primitives/icons';
import { getFAQById } from '@/lib/faq';

export type ServiceDetailProps = {
  eyebrow: string;
  heroImage: string;
  heroHeadline: ReactNode;
  intro: string[];
  midImage: { src: string; alt: string };
  scopeLabel: string;
  scopeHeadline: ReactNode;
  bullets: string[];
  featured: { src: string; alt: string }[];
  featuredCaption: string;
  /**
   * IDs of FAQ items (from `lib/faq.ts`) to surface in the "Frequently asked"
   * cross-link section above the CTA band. 2–3 most-relevant items per page.
   */
  faqIds?: string[];
  extraSection?: ReactNode;
};

function FAQCrossLink({ ids }: { ids: string[] }) {
  const items = ids
    .map((id) => getFAQById(id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  if (items.length === 0) return null;
  return (
    <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[860px]">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <SectionLabel className="mb-4">Frequently asked</SectionLabel>
            <h2 className="font-display text-[clamp(28px,3.2vw,40px)] font-light leading-[1.15] tracking-[-0.02em] text-ink">
              Common questions about this{' '}
              <em className="font-normal italic text-red-brand">service</em>.
            </h2>
          </div>
        </div>
        <div className="border-t border-line">
          {items.map((item) => (
            <div key={item.id} className="border-b border-line py-6 md:py-8">
              <h3 className="mb-3 font-display text-[18px] font-medium leading-snug tracking-[-0.01em] text-ink md:text-[20px]">
                {item.question}
              </h3>
              <p className="text-[15px] leading-[1.75] text-grey-2 md:text-[16px]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/faq"
            data-cursor="hover"
            className="group inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.12em] text-ink"
          >
            <span className="border-b border-ink/30 pb-1 transition-colors duration-300 group-hover:border-ink">
              Read all FAQs
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink transition-all duration-300 group-hover:-rotate-45 group-hover:border-red-brand group-hover:bg-red-brand group-hover:text-white">
              <ArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ServiceDetail({
  eyebrow,
  heroImage,
  heroHeadline,
  intro,
  midImage,
  scopeLabel,
  scopeHeadline,
  bullets,
  featured,
  featuredCaption,
  faqIds,
  extraSection,
}: ServiceDetailProps) {
  return (
    <main>
      <PageHero
        backgroundImage={heroImage}
        eyebrow={eyebrow}
        headline={heroHeadline}
      />

      <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1400px] items-start gap-10 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <SectionLabel>Overview</SectionLabel>
          <div className="space-y-6 text-[16px] leading-[1.7] text-grey-1 md:text-[18px]">
            {intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-cream">
        <Image
          src={midImage.src}
          alt={midImage.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1400px] items-start gap-10 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <SectionLabel className="mb-4">{scopeLabel}</SectionLabel>
          </div>
          <div>
            <h2 className="font-display text-[clamp(36px,4.5vw,64px)] font-light leading-[1.1] tracking-[-0.03em] text-ink">
              {scopeHeadline}
            </h2>
            <ul className="mt-10 grid gap-3 text-[15px] text-ink md:grid-cols-2 md:gap-x-10 md:gap-y-4 md:text-[16px]">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-3 inline-block h-px w-5 shrink-0 bg-red-brand"
                  />
                  <span className="leading-[1.5]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Process />

      <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionLabel>Selected work</SectionLabel>
            <p className="max-w-[420px] text-[15px] leading-[1.6] text-grey-1">
              {featuredCaption}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {extraSection}

      {faqIds && faqIds.length > 0 && <FAQCrossLink ids={faqIds} />}

      <CTA />
    </main>
  );
}
