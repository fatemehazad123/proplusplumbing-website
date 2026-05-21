// DEAD CODE — ServicePicker is not imported anywhere on the live site.
// See "Available but unused components" in CLAUDE.md. The image paths below
// (services-card-{plumbing,floor-heating,snow-melting}.jpg) are also used by
// the homepage Services section (components/sections/Services.tsx). If you
// re-enable ServicePicker on any page, swap these to dedicated unique photos
// so the site's "no photo appears more than once" rule continues to hold.
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from '@/components/primitives/icons';
import { SectionLabel } from '@/components/primitives/SectionLabel';

type Column = {
  num: string;
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  accent: string;
  desc: string;
  ariaLabel: string;
};

const COLUMNS: Column[] = [
  {
    num: '01 / Service',
    href: '/services/custom-home',
    image: '/images/services-card-plumbing.jpg',
    imageAlt: 'Custom plumbing rough-in in a new Toronto build',
    title: 'Custom Home',
    accent: 'Plumbing',
    desc: 'Complete plumbing systems for new custom homes and major renovations, designed and installed end to end.',
    ariaLabel: 'Explore Custom Home Plumbing services',
  },
  {
    num: '02 / Service',
    href: '/services/floor-heating',
    image: '/images/services-card-floor-heating.jpg',
    imageAlt: 'Radiant floor heating loops installed before pour',
    title: 'Radiant Floor',
    accent: 'Heating',
    desc: 'Cost-effective, environmentally conscious in-floor heating with zoned controls for every room.',
    ariaLabel: 'Explore Radiant Floor Heating services',
  },
  {
    num: '03 / Service',
    href: '/services/snow-melting',
    image: '/images/services-card-snow-melting.jpg',
    imageAlt: 'Snow-melting driveway system before paving',
    title: 'Snow Melting',
    accent: 'Systems',
    desc: 'High-performance, automated snow and ice melting for driveways, walkways, and entrances.',
    ariaLabel: 'Explore Snow Melting Systems services',
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;
const duration = 0.6;

export function ServicePicker() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      aria-label="Service categories"
      className="flex h-auto flex-col md:h-[70vh] md:flex-row"
    >
      {COLUMNS.map((col, i) => {
        const isHovered = hovered === i;
        return (
          <motion.div
            key={col.href}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            animate={{ flexGrow: isHovered ? 2 : 1 }}
            transition={{ duration, ease }}
            style={{ flexBasis: 0 }}
            className="relative h-[40vh] md:h-full"
          >
            <Link
              href={col.href}
              data-cursor="hover"
              aria-label={col.ariaLabel}
              className="group absolute inset-0 block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:[outline-color:#0F1B45]"
            >
              <Image
                src={col.image}
                alt={col.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <motion.div
                aria-hidden="true"
                initial={false}
                animate={{
                  backgroundImage: isHovered
                    ? 'linear-gradient(to bottom, rgba(15,27,69,0) 0%, rgba(15,27,69,0.1) 50%, rgba(15,27,69,0.85) 100%)'
                    : 'linear-gradient(to bottom, rgba(15,27,69,0) 0%, rgba(15,27,69,0.2) 50%, rgba(15,27,69,0.85) 100%)',
                }}
                transition={{ duration, ease }}
                className="absolute inset-0"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-8 text-white md:p-12">
                <div className="max-w-[280px]">
                  <SectionLabel theme="dark-vivid" className="mb-6">
                    {col.num}
                  </SectionLabel>
                  <h3 className="mb-4 font-display text-[clamp(48px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em]">
                    {col.title}{' '}
                    <em className="italic text-red-brand">{col.accent}</em>
                  </h3>
                  <p className="text-[14px] leading-[1.5] text-white/70">
                    {col.desc}
                  </p>
                </div>
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: isHovered ? -45 : 0 }}
                  transition={{ duration, ease }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-white text-white"
                >
                  <ArrowRight />
                </motion.span>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </section>
  );
}
