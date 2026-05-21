'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from '@/components/primitives/icons';

const HERO_STATS = [
  { num: '10+', label: 'Years in business' },
  { num: '150+', label: 'Homes plumbed' },
  { num: '100%', label: 'Insured & bonded' },
];

const lineEase = [0.2, 0.8, 0.2, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 800], [0, 240]);
  const bgY = useTransform(scrollY, [0, 800], [0, 120]);
  const photoY = useTransform(scrollY, [0, 800], [0, 60]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen min-h-[720px] items-center overflow-hidden bg-navy px-6 text-white md:px-12"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: photoY, willChange: 'transform' }}
      >
        <Image
          src="/images/hero-home.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/95" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ y: bgY, willChange: 'transform' }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(36, 61, 151, 0.25), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(236, 28, 36, 0.18), transparent 50%)',
          }}
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          y: gridY,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: lineEase }}
          className="mb-8 flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.2em] text-white/60"
        >
          <span aria-hidden="true" className="block h-px w-10 bg-white/40" />
          EST. 2015 · TORONTO · LICENSED &amp; INSURED
        </motion.div>

        <h1 className="max-w-[1200px] font-display text-[clamp(56px,9vw,144px)] font-light leading-[0.95] tracking-[-0.04em]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: lineEase }}
              className="inline-block"
            >
              The plumbers
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.65, ease: lineEase }}
              className="inline-block"
            >
              Toronto&rsquo;s{' '}
              <em className="font-normal italic text-red-brand">builders</em>
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: lineEase }}
              className="inline-block italic"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1.5px white',
              }}
            >
              trust.
            </motion.span>
          </span>
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: lineEase }}
        className="absolute bottom-12 left-6 right-16 z-10 flex flex-col items-start gap-6 md:left-12 md:right-20 md:flex-row md:items-end md:justify-between"
      >
        <p className="max-w-[380px] text-[15px] leading-[1.6] text-white/70">
          Custom-home plumbing, radiant floor heating, and snow-melting systems
          engineered for Toronto&rsquo;s most discerning residences.
        </p>
        <dl className="flex gap-12">
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <dd className="font-display text-[48px] font-light italic leading-none tracking-[-0.03em] text-white">
                {stat.num}
              </dd>
              <dt className="mt-2 text-[11px] uppercase tracking-[0.15em] text-white/50">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-12 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/50 md:flex"
      >
        <ArrowDown />
        Scroll
      </motion.div>
    </section>
  );
}
