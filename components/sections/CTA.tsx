'use client';

import { animate, motion, useMotionValue } from 'motion/react';
import Link from 'next/link';
import type { MouseEvent, ReactNode } from 'react';
import { useRef } from 'react';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { ArrowRight, Mail, Phone, Pin } from '@/components/primitives/icons';

type Variant = 'default' | 'builders';

type CTAConfig = {
  bgText: string;
  eyebrow: string;
  headline: ReactNode;
  buttonText: string;
  buttonHref: string;
};

const CONFIGS: Record<Variant, CTAConfig> = {
  default: {
    bgText: 'Let’s build.',
    eyebrow: '06 / Get in touch',
    headline: (
      <>
        Build it{' '}
        <em className="font-normal italic text-red-brand">right</em>
        <br />
        <span
          className="italic"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1.5px white',
          }}
        >
          from the start.
        </span>
      </>
    ),
    buttonText: 'Request a Consultation',
    buttonHref: '/contact',
  },
  builders: {
    bgText: 'Let’s build.',
    eyebrow: 'Partnership',
    headline: (
      <>
        Let&rsquo;s build the next one{' '}
        <em className="font-normal italic text-red-brand">together</em>.
      </>
    ),
    buttonText: 'Request partnership conversation',
    buttonHref: '/contact',
  },
};

function MagneticButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx * 0.2);
    y.set(dy * 0.2);
  };

  const onLeave = () => {
    animate(x, 0, { duration: 0.3, ease: [0.2, 0.8, 0.2, 1] });
    animate(y, 0, { duration: 0.3, ease: [0.2, 0.8, 0.2, 1] });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      data-cursor="cta"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y }}
      className="inline-flex items-center gap-5 rounded-full bg-red-brand px-12 py-6 text-[14px] font-medium uppercase tracking-[0.12em] text-white"
    >
      {text}
      <ArrowRight />
    </motion.a>
  );
}

export function CTA({ variant = 'default' }: { variant?: Variant }) {
  const config = CONFIGS[variant];

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-navy px-6 pb-40 pt-48 text-white md:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-0 right-0 overflow-hidden whitespace-nowrap text-center font-display text-[clamp(180px,26vw,400px)] font-extralight italic leading-[0.8] tracking-[-0.04em]"
        style={{
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(255,255,255,0.08)',
        }}
      >
        {config.bgText}
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] text-center">
        <div className="flex justify-center">
          <SectionLabel theme="dark">{config.eyebrow}</SectionLabel>
        </div>
        <h2 className="my-12 font-display text-[clamp(56px,8vw,128px)] font-light leading-none tracking-[-0.04em]">
          {config.headline}
        </h2>
        <MagneticButton text={config.buttonText} href={config.buttonHref} />
        <div className="mt-20 flex flex-col items-center justify-center gap-6 text-[13px] text-white/50 md:flex-row md:gap-12">
          <span className="flex items-center gap-2">
            <Phone />
            <Link
              href="tel:+16475187787"
              data-cursor="hover"
              className="border-b border-white/20 pb-0.5 text-white/80"
            >
              (647) 518-7787
            </Link>
          </span>
          <span className="flex items-center gap-2">
            <Mail />
            <Link
              href="mailto:info@proplusplumbing.com"
              data-cursor="hover"
              className="border-b border-white/20 pb-0.5 text-white/80"
            >
              info@proplusplumbing.com
            </Link>
          </span>
          <span className="flex items-center gap-2">
            <Pin />
            <span className="text-white/80">Toronto, ON</span>
          </span>
        </div>
      </div>
    </section>
  );
}
