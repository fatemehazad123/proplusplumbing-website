'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { SectionLabel } from '@/components/primitives/SectionLabel';

const LINES = [
  { text: 'A family-owned Toronto practice', accent: false },
  { text: 'specialising in ', accent: 'precision plumbing' },
  { text: 'for custom homes, luxury', accent: false },
  { text: 'renovations, and the builders', accent: false },
  { text: 'who demand nothing less.', accent: false },
] as const;

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="intro" className="bg-paper px-6 py-32 md:px-12 md:py-40">
      <div
        ref={ref}
        className="mx-auto grid max-w-[1400px] items-start gap-10 md:grid-cols-[1fr_1.5fr] md:gap-20"
      >
        <SectionLabel>01 / About</SectionLabel>
        <h2 className="font-display text-[clamp(28px,3.2vw,48px)] font-light leading-[1.15] tracking-[-0.02em] text-ink">
          {LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : { y: '100%' }}
                transition={{ duration: 1, delay: i * 0.1, ease }}
                className="inline-block"
              >
                {line.text}
                {line.accent && (
                  <em className="font-normal italic text-red-brand">
                    {line.accent}
                  </em>
                )}
              </motion.span>
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
