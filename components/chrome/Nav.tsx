'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { Phone } from '@/components/primitives/icons';
import { MenuIcon, MobileMenu } from '@/components/chrome/MobileMenu';

const NAV_LINKS = [
  { href: '/projects', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/for-builders', label: 'For Builders' },
  { href: '/about', label: 'About' },
  { href: '/journal', label: 'Journal' },
  { href: '/faq', label: 'FAQ' },
] as const;

// Routes whose top-of-page hero is light (PageHero variant="light").
// On these, the Nav drops mix-blend-difference and renders in navy ink, because
// blending the brand-red "+" against a near-white background produces teal.
// Add new light-hero routes here when they ship.
const LIGHT_HERO_PATHS: ReadonlySet<string> = new Set(['/contact']);

export function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  const pageIsLight = pathname ? LIGHT_HERO_PATHS.has(pathname) : false;
  // Before scroll on light pages: navy ink, no blend, navy logo.
  // Before scroll on dark pages: white ink, blend on, white+red logo.
  // After scroll (either): navy backdrop, white ink, no blend.
  const showLightInk = !scrolled && pageIsLight;

  const navClasses = scrolled
    ? 'border-b border-white/[0.08] bg-navy/70 text-white backdrop-blur-xl'
    : showLightInk
      ? 'border-b border-transparent text-navy'
      : 'border-b border-transparent text-white mix-blend-difference';

  const logoSrc = showLightInk
    ? '/logo-navy-notag.svg'
    : '/logo-white-notag.svg';

  const underlineColor = showLightInk ? 'after:bg-navy' : 'after:bg-white';

  const ctaClasses = showLightInk
    ? 'border-navy hover:bg-navy hover:text-white'
    : 'border-white hover:bg-white hover:text-ink';

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,border-color,backdrop-filter,color] duration-300 ${navClasses}`}
      >
        <div className="flex items-center justify-between gap-6 px-6 py-4 md:px-12 md:py-5">
          <Link
            href="/"
            data-cursor="hover"
            aria-label="ProPlus Plumbing — home"
            className="flex items-center"
          >
            <Image
              src={logoSrc}
              alt="ProPlus Plumbing"
              width={69}
              height={28}
              priority
              unoptimized
            />
          </Link>

          <ul className="hidden gap-9 text-[13px] font-medium uppercase tracking-[0.04em] lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-cursor="hover"
                  className={`relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:transition-[width] after:duration-300 hover:after:w-full ${underlineColor}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:gap-5">
            <a
              href="tel:+16475187787"
              data-cursor="hover"
              aria-label="Call (647) 518-7787"
              className="flex items-center gap-2 font-mono text-[12px]"
            >
              <Phone size={14} />
              <span className="hidden md:inline">(647) 518-7787</span>
            </a>
            <Link
              href="/contact"
              data-cursor="hover"
              className={`hidden rounded-full border px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.04em] transition-colors duration-300 lg:inline-flex ${ctaClasses}`}
            >
              Request Consultation
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
