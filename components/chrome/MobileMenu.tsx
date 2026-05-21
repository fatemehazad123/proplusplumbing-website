'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Phone } from '@/components/primitives/icons';

const NAV_LINKS = [
  { href: '/projects', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/for-builders', label: 'For Builders' },
  { href: '/about', label: 'About' },
  { href: '/journal', label: 'Journal' },
  { href: '/faq', label: 'FAQ' },
] as const;

export function MenuIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 7h18M3 12h18M3 17h18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5l14 14M19 5L5 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 80);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] as const };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={transition}
          className="fixed inset-0 z-[150] flex bg-navy text-white lg:hidden"
        >
          <div
            aria-hidden="true"
            className="flex w-1.5 shrink-0 flex-col sm:w-2"
          >
            <div className="flex-1 bg-blue-brand" />
            <div className="flex-1 bg-red-brand" />
          </div>

          <div className="flex flex-1 flex-col px-6 py-5">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:border-white"
              >
                <CloseIcon />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="mt-10 flex flex-col gap-5"
            >
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={onClose}
                  className="font-display text-[40px] font-light leading-[1.05] tracking-[-0.02em] text-white transition-colors duration-200 hover:text-red-brand"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-5 pb-4 pt-12">
              <a
                href="tel:+16475187787"
                aria-label="Call (647) 518-7787"
                onClick={onClose}
                className="flex items-center gap-3 font-mono text-[14px] text-white/80 transition-colors duration-200 hover:text-white"
              >
                <Phone size={16} />
                (647) 518-7787
              </a>

              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex w-full items-center justify-center rounded-full bg-red-brand px-8 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-white transition-opacity duration-200 hover:opacity-90"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
