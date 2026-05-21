import type { Metadata } from 'next';
import { Audiences } from '@/components/sections/Audiences';
import { CTA } from '@/components/sections/CTA';
import { Hero } from '@/components/sections/Hero';
import { Intro } from '@/components/sections/Intro';
import { Marquee } from '@/components/sections/Marquee';
import { Process } from '@/components/sections/Process';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
import { JsonLd } from '@/components/shared/JsonLd';
import { TestimonialsBand } from '@/components/shared/TestimonialsBand';
import { breadcrumbSchema } from '@/lib/seo';

const HOMEPAGE_DESCRIPTION =
  "Family-owned plumbing specialists for Toronto's custom homes, luxury renovations, radiant floor heating, and snow melting systems. Licensed, insured, and trusted by Toronto's top builders since 2015.";

export const metadata: Metadata = {
  title: "The Plumbers Toronto's Builders Trust",
  description: HOMEPAGE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: "The Plumbers Toronto's Builders Trust | ProPlus Plumbing",
    description: HOMEPAGE_DESCRIPTION,
    url: '/',
    type: 'website',
  },
  twitter: {
    title: "The Plumbers Toronto's Builders Trust | ProPlus Plumbing",
    description: HOMEPAGE_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
        ])}
      />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Services />
        <Process />
        <Audiences />
        <TestimonialsBand
          label="Trusted by builders"
          headline={
            <>
              What our{' '}
              <em className="font-normal italic text-red-brand">partners</em>{' '}
              say.
            </>
          }
        />
        <Projects />
        <CTA />
      </main>
    </>
  );
}
