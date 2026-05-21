import Link from 'next/link';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { ArrowRight } from '@/components/primitives/icons';

type Audience = {
  num: string;
  title: string;
  accent: string;
  desc: string;
  href: string;
};

const AUDIENCES: Audience[] = [
  {
    num: '/ 01',
    title: 'Custom home',
    accent: 'builders',
    desc: "Trusted by Toronto's leading custom-home and design-build firms for tight scheduling, code-perfect work, and seamless trade coordination.",
    href: '/for-builders',
  },
  {
    num: '/ 02',
    title: 'Architectural',
    accent: 'firms',
    desc: 'We collaborate from the schematic phase to ensure your design intent makes it through to the finished plumbing, without value-engineering away what matters.',
    href: '/for-builders#architects',
  },
  {
    num: '/ 03',
    title: 'Luxury',
    accent: 'homeowners',
    desc: 'Building a custom home or renovating an existing one. We work directly with you or alongside your project manager, your call.',
    href: '/contact',
  },
  {
    num: '/ 04',
    title: 'Subdivision',
    accent: 'developers',
    desc: 'We scale operations for multi-home developments, expanding crew and resources to deliver consistent quality across every unit, on every timeline.',
    href: '/for-builders#developers',
  },
  {
    num: '/ 05',
    title: 'Property',
    accent: 'managers',
    desc: 'Ongoing maintenance, system upgrades, and emergency support for commercial and luxury residential portfolios.',
    href: '/contact',
  },
];

export function Audiences() {
  return (
    <section id="audiences" className="bg-paper px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 max-w-[800px]">
          <SectionLabel>04 / Who we work with</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(40px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-ink">
            We work with clients who expect{' '}
            <em className="font-normal italic text-red-brand">reliability</em>{' '}
            and quality without compromise.
          </h2>
        </div>

        <div className="border-t border-line">
          {AUDIENCES.map((audience) => (
            <Link
              key={audience.num}
              href={audience.href}
              data-cursor="hover"
              className="group relative grid grid-cols-[40px_1fr_40px] items-center gap-6 border-b border-line py-8 transition-[padding-left] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] hover:pl-8 md:grid-cols-[80px_1fr_2fr_60px] md:gap-10"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-bottom scale-y-0 bg-navy transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:origin-top group-hover:scale-y-100"
              />
              <span className="relative z-10 font-mono text-[12px] tracking-[0.1em] text-grey-1 transition-colors duration-300 group-hover:text-white/50">
                {audience.num}
              </span>
              <h3 className="relative z-10 font-display text-[clamp(28px,3vw,44px)] font-normal leading-[1.1] tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-white">
                {audience.title}{' '}
                <em className="italic text-red-brand">{audience.accent}</em>
              </h3>
              <p className="relative z-10 col-start-2 max-w-[480px] text-[15px] leading-[1.5] text-grey-1 transition-colors duration-300 group-hover:text-white/70 md:col-start-auto">
                {audience.desc}
              </p>
              <span className="relative z-10 flex h-12 w-12 items-center justify-center justify-self-end rounded-full border border-current text-ink opacity-40 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:text-white group-hover:opacity-100">
                <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
