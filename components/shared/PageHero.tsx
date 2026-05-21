'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { useRef } from 'react';
import { SectionLabel } from '@/components/primitives/SectionLabel';

type Variant = 'dark' | 'light';

export function PageHero({
  variant = 'dark',
  backgroundImage,
  imageOpacity = 0.4,
  eyebrow,
  headline,
  tagline,
  byline,
}: {
  variant?: Variant;
  backgroundImage?: string;
  imageOpacity?: number;
  eyebrow: ReactNode;
  headline: ReactNode;
  tagline?: ReactNode;
  byline?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, 60]);

  const isDark = variant === 'dark';

  return (
    <section
      ref={ref}
      className={`relative flex min-h-[560px] items-center overflow-hidden px-6 pb-24 pt-40 md:min-h-[640px] md:px-12 md:pb-32 md:pt-44 ${
        isDark ? 'bg-navy text-white' : 'bg-cream text-ink'
      }`}
    >
      {backgroundImage && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ y: photoY, willChange: 'transform' }}
        >
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ opacity: imageOpacity }}
          />
          {isDark ? (
            <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/95" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/60 to-cream/95" />
          )}
        </motion.div>
      )}

      {isDark && backgroundImage && (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(36, 61, 151, 0.2), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(236, 28, 36, 0.12), transparent 50%)',
          }}
        />
      )}

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <SectionLabel
          theme={isDark ? 'dark-vivid' : 'light'}
          className="mb-6"
        >
          {eyebrow}
        </SectionLabel>
        <h1
          className={`max-w-[1100px] font-display text-[clamp(48px,7vw,112px)] font-light leading-[1.02] tracking-[-0.04em] ${
            isDark ? 'text-white' : 'text-ink'
          }`}
        >
          {headline}
        </h1>
        {tagline && (
          <p
            className={`mt-8 max-w-[640px] text-[16px] leading-[1.6] md:text-[18px] ${
              isDark ? 'text-white/70' : 'text-grey-1'
            }`}
          >
            {tagline}
          </p>
        )}
        {byline && (
          <div
            className={`mt-10 text-[13px] ${
              isDark ? 'text-white/60' : 'text-grey-1'
            }`}
          >
            {byline}
          </div>
        )}
      </div>
    </section>
  );
}
