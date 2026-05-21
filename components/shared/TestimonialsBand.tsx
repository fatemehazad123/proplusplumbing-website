import type { ReactNode } from 'react';
import { GOOGLE_REVIEWS_URL, TESTIMONIALS } from '@/lib/testimonials';
import { SectionLabel } from '@/components/primitives/SectionLabel';

export function TestimonialsBand({
  label,
  headline,
}: {
  label: string;
  headline: ReactNode;
}) {
  return (
    <section className="bg-paper px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 max-w-[800px] md:mb-20">
          <SectionLabel className="mb-6">{label}</SectionLabel>
          <h2 className="font-display text-[clamp(40px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-ink">
            {headline}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="group flex flex-col rounded-sm border border-line bg-white p-8 transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-0.5 md:p-10"
            >
              <div className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="block h-10 w-1 shrink-0 bg-red-brand"
                />
                <blockquote className="font-display text-[22px] font-light leading-[1.5] tracking-[-0.01em] text-ink md:text-[24px]">
                  {t.quote}
                </blockquote>
              </div>
              <div className="mt-auto pt-10">
                <div className="text-[14px] font-medium text-ink">{t.name}</div>
                <div className="mt-1 text-[13px] text-grey-1">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center md:mt-16">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:border-red-brand hover:text-red-brand"
          >
            Read more reviews on Google
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
