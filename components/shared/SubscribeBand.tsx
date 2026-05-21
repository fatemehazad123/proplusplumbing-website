import { NewsletterForm } from '@/components/shared/NewsletterForm';
import { SectionLabel } from '@/components/primitives/SectionLabel';

export function SubscribeBand() {
  return (
    <section className="bg-cream px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-start gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div>
          <SectionLabel className="mb-6">Stay in touch</SectionLabel>
          <h2 className="font-display text-[clamp(36px,4.5vw,64px)] font-light leading-[1.1] tracking-[-0.03em] text-ink">
            New articles delivered{' '}
            <em className="font-normal italic text-red-brand">occasionally</em>.
          </h2>
          <p className="mt-6 max-w-[460px] text-[15px] leading-[1.7] text-grey-1 md:text-[16px]">
            We publish a few times a year. Subscribe for project stories,
            technical deep-dives, and practical guides — never spam.
          </p>
        </div>
        <div className="md:pt-12">
          <NewsletterForm variant="light" />
        </div>
      </div>
    </section>
  );
}
