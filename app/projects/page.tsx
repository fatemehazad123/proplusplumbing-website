import type { Metadata } from 'next';
import { CTA } from '@/components/sections/CTA';
import { JsonLd } from '@/components/shared/JsonLd';
import { PageHero } from '@/components/shared/PageHero';
import { ProjectsGrid } from '@/components/shared/ProjectsGrid';
import { projectsCollectionSchema } from '@/lib/seo';

const DESCRIPTION =
  'A selection of recent custom home plumbing, radiant heating, and snow melting projects across the Greater Toronto Area. Built for builders, architects, and luxury homeowners.';

export const metadata: Metadata = {
  title: { absolute: 'Selected Projects — ProPlus Plumbing Toronto' },
  description: DESCRIPTION,
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Selected Projects — ProPlus Plumbing Toronto',
    description: DESCRIPTION,
    url: '/projects',
    type: 'website',
  },
  twitter: {
    title: 'Selected Projects — ProPlus Plumbing Toronto',
    description: DESCRIPTION,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={projectsCollectionSchema} />
      <main>
        <PageHero
          backgroundImage="/images/projects-page-hero.jpg"
          eyebrow="Our work"
          headline={
            <>
              Selected{' '}
              <em className="font-normal italic text-red-brand">projects</em>.
            </>
          }
          tagline="A small selection of recent custom homes, renovations, and radiant heating projects across the Greater Toronto Area."
        />
        <ProjectsGrid />
        <CTA />
      </main>
    </>
  );
}
