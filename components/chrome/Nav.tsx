'use client';

import Image from 'next/image';
import Link from 'next/link';
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

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? 'border-b border-white/[0.08] bg-navy/70 text-white backdrop-blur-xl'
            : 'border-b border-transparent text-white mix-blend-difference'
        }`}
      >
        <div className="flex items-center justify-between gap-6 px-6 py-4 md:px-12 md:py-5">
          <Link
            href="/"
            data-cursor="hover"
            aria-label="ProPlus Plumbing — home"
            className="flex items-center"
          >
            <Image
              src="/logo-white-notag.svg"
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
                  className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
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
              className="flex items-center gap-2 font-mono text-[12px] text-white"
            >
              <Phone size={14} />
              <span className="hidden md:inline">(647) 518-7787</span>
            </a>
            <Link
              href="/contact"
              data-cursor="hover"
              className="hidden rounded-full border border-white px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.04em] transition-colors duration-300 hover:bg-white hover:text-ink lg:inline-flex"
            >
              Request Consultation
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
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
