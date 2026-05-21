import type { Metadata } from 'next';
import { CTA } from '@/components/sections/CTA';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { JsonLd } from '@/components/shared/JsonLd';
import { PageHero } from '@/components/shared/PageHero';
import { SubscribeBand } from '@/components/shared/SubscribeBand';
import { faqs } from '@/lib/faq';
import { faqPageSchema } from '@/lib/seo';

const DESCRIPTION =
  'Answers to the most asked questions about custom home plumbing, radiant floor heating, snow melting systems, permits, and working with ProPlus Plumbing in Toronto.';

export const metadata: Metadata = {
  title:
    'FAQ — Custom Home Plumbing, Radiant Heating & Snow Melting Questions',
  description: DESCRIPTION,
  alternates: { canonical: '/faq' },
  openGraph: {
    title:
      'FAQ — Custom Home Plumbing, Radiant Heating & Snow Melting Questions | ProPlus Plumbing',
    description: DESCRIPTION,
    url: '/faq',
    type: 'website',
  },
  twitter: {
    title: 'FAQ | ProPlus Plumbing',
    description: DESCRIPTION,
  },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <main>
        <PageHero
          backgroundImage="/images/faq-hero.jpg"
          eyebrow="FAQ"
          headline={
            <>
              Answers to the questions builders and homeowners{' '}
              <em className="font-normal italic text-red-brand">actually</em>{' '}
              ask.
            </>
          }
          tagline="Practical answers about custom home plumbing, radiant heating, snow melting, permits, and what it costs to work with ProPlus."
        />

        <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[860px]">
            <FAQAccordion categories={faqs} />
          </div>
        </section>

        <SubscribeBand />
        <CTA />
      </main>
    </>
  );
}
