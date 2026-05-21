import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NewsletterForm } from '@/components/shared/NewsletterForm';
import { LinkedIn } from '@/components/primitives/icons';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=181+Maxwell+St+North+York+ON+M3H+5B5';

const LINKEDIN_URL = 'https://www.linkedin.com/company/pro-plus-plumbing-inc.';

type LinkItem = {
  href: string;
  label?: string;
  lines?: string[];
  external?: boolean;
  icon?: ReactNode;
};

// Subdivisions and Renovations re-point to /services/custom-home — both are
// covered under custom-home work (subdivision developments are mentioned in
// that page's intro copy) and don't have dedicated pages yet.
const SERVICES: LinkItem[] = [
  { href: '/services/custom-home', label: 'Custom Home Plumbing' },
  { href: '/services/floor-heating', label: 'Radiant Floor Heating' },
  { href: '/services/snow-melting', label: 'Snow Melting' },
  { href: '/services/custom-home', label: 'Subdivisions' },
  { href: '/services/custom-home', label: 'Renovations' },
];

const COMPANY: LinkItem[] = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/for-builders', label: 'For Builders' },
  { href: '/journal', label: 'Journal' },
  // ProPlus posts jobs on LinkedIn — "Careers" routes there until a dedicated
  // careers page ships.
  { href: LINKEDIN_URL, label: 'Careers', external: true },
];

const CONTACT: LinkItem[] = [
  { href: 'tel:+16475187787', label: '(647) 518-7787' },
  { href: 'mailto:info@proplusplumbing.com', label: 'info@proplusplumbing.com' },
  {
    href: MAPS_URL,
    lines: ['181 Maxwell St', 'North York, ON M3H 5B5'],
    external: true,
  },
  {
    href: LINKEDIN_URL,
    label: 'LinkedIn',
    external: true,
    icon: <LinkedIn size={15} />,
  },
];

function ItemContent({ item }: { item: LinkItem }) {
  if (item.lines) {
    return (
      <span className="block leading-[1.5]">
        {item.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
    );
  }
  if (item.icon) {
    return (
      <span className="inline-flex items-center gap-2">
        {item.icon}
        {item.label}
      </span>
    );
  }
  return <>{item.label}</>;
}

function Column({
  heading,
  items,
}: {
  heading: string;
  items: LinkItem[];
}) {
  return (
    <div>
      <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
        {heading}
      </h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="text-[15px] text-white transition-colors duration-300 hover:text-red-brand"
              >
                <ItemContent item={item} />
              </a>
            ) : (
              <Link
                href={item.href}
                data-cursor="hover"
                className="text-[15px] text-white transition-colors duration-300 hover:text-red-brand"
              >
                <ItemContent item={item} />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-6 pb-10 pt-20 text-white md:px-12">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/logo-white.svg"
            alt="ProPlus Plumbing Inc."
            width={220}
            height={106}
            unoptimized
            className="mb-6"
          />
          <p className="max-w-[320px] text-[14px] leading-[1.6] text-white/50">
            Custom-home plumbing, radiant floor heating, and snow-melting systems
            for Toronto&rsquo;s most discerning residences. Family-owned since
            2015.
          </p>
        </div>
        <Column heading="Services" items={SERVICES} />
        <Column heading="Company" items={COMPANY} />
        <Column heading="Contact" items={CONTACT} />
        <div className="col-span-2 md:col-span-1">
          <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
            Stay in touch
          </h4>
          <p className="mb-5 max-w-[280px] text-[14px] leading-[1.5] text-white/60">
            Occasional updates on new projects and plumbing insights for
            builders. No spam, unsubscribe anytime.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1400px] flex-col justify-between gap-3 border-t border-white/10 pt-8 text-[12px] tracking-[0.05em] text-white/40 md:flex-row">
        <span>© 2026 ProPlus Plumbing Inc. All rights reserved.</span>
        <span>Licensed · Bonded · Insured</span>
        <span>
          Site by{' '}
          <a
            href="https://oobe.ca"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="border-b border-white/20 pb-0.5 text-white/60 transition-colors duration-300 hover:text-white"
          >
            OOBE.ca
          </a>
        </span>
      </div>
    </footer>
  );
}
