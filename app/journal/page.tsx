import type { Metadata } from 'next';
import { ARTICLES } from '@/lib/articles';
import { CTA } from '@/components/sections/CTA';
import { ArticleCard } from '@/components/shared/ArticleCard';
import { PageHero } from '@/components/shared/PageHero';
import { SubscribeBand } from '@/components/shared/SubscribeBand';
import { SectionLabel } from '@/components/primitives/SectionLabel';

const DESCRIPTION =
  "Articles and decision guides on custom home plumbing, radiant heating, and the practice of designing premium plumbing systems for Toronto homes.";

export const metadata: Metadata = {
  title: 'Journal — Insights & Notes from the Plumbing Trade',
  description: DESCRIPTION,
  alternates: { canonical: '/journal' },
  openGraph: {
    title: 'Journal — Insights & Notes from the Plumbing Trade | ProPlus Plumbing',
    description: DESCRIPTION,
    url: '/journal',
    type: 'website',
  },
  twitter: {
    title: 'Journal | ProPlus Plumbing',
    description: DESCRIPTION,
  },
};

export default function JournalPage() {
  return (
    <main>
      <PageHero
        backgroundImage="/images/journal-hero.jpg"
        eyebrow="Journal"
        headline={
          <>
            Notes from the{' '}
            <em className="font-normal italic text-red-brand">trade</em>.
          </>
        }
        tagline="Insights, decisions, and lessons from designing and installing plumbing systems for Toronto's custom homes."
      />

      <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 max-w-[800px] md:mb-20">
            <SectionLabel className="mb-6">Latest articles</SectionLabel>
            <h2 className="font-display text-[clamp(40px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-ink">
              Reading for{' '}
              <em className="font-normal italic text-red-brand">builders</em>,
              architects, and homeowners.
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <SubscribeBand />
      <CTA />
    </main>
  );
}
