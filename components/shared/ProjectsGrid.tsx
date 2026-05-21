'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import type { Project, ProjectCategory } from '@/lib/projects';
import { PROJECTS, PROJECT_CATEGORIES } from '@/lib/projects';

const FILTERS: readonly (ProjectCategory | 'All')[] = [
  'All',
  ...PROJECT_CATEGORIES,
] as const;

const SPAN_CLASS: Record<Project['span'], string> = {
  sm: 'md:col-span-4',
  md: 'md:col-span-6',
  lg: 'md:col-span-8',
};

const ASPECT_CLASS: Record<Project['span'], string> = {
  sm: 'aspect-[4/5]',
  md: 'aspect-[6/5]',
  lg: 'aspect-[8/5]',
};

export function ProjectsGrid() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('All');

  const filtered =
    active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <div className="sticky top-[72px] z-[90] bg-paper/95 px-6 py-4 backdrop-blur-md md:px-12 md:py-5">
        <div
          role="tablist"
          aria-label="Filter projects"
          className="mx-auto flex max-w-[1400px] flex-wrap gap-2 md:gap-3"
        >
          {FILTERS.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(filter)}
                data-cursor="hover"
                className={`rounded-full px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 ${
                  isActive
                    ? 'bg-navy text-white'
                    : 'border border-line bg-cream text-ink hover:border-navy hover:bg-white'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <section className="bg-paper px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                  className={`group relative overflow-hidden rounded-sm ${SPAN_CLASS[project.span]}`}
                >
                  <div
                    className={`relative ${ASPECT_CLASS[project.span]} overflow-hidden rounded-sm`}
                  >
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-5 px-1 pt-5">
                    <h3 className="font-display text-[22px] font-normal leading-[1.1] tracking-[-0.02em] text-ink">
                      {project.title}
                    </h3>
                    <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.15em] text-grey-1">
                      {project.category} · {project.year}
                    </span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
