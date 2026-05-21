'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { FAQCategory, FAQItem } from '@/lib/faq';
import { SectionLabel } from '@/components/primitives/SectionLabel';

const ease = [0.2, 0.8, 0.2, 1] as const;

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Row({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-${item.id}`;
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        data-cursor="hover"
        className="flex w-full items-start justify-between gap-6 py-6 text-left md:py-8"
      >
        <span className="font-display text-[18px] font-medium leading-snug tracking-[-0.01em] text-ink md:text-[20px]">
          {item.question}
        </span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease }}
          className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/30 text-ink"
        >
          <PlusIcon />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pb-8 pr-16 text-[15px] leading-[1.75] text-grey-2 md:text-[16px]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion({ categories }: { categories: FAQCategory[] }) {
  return (
    <div className="space-y-20 md:space-y-28">
      {categories.map((category) => (
        <section key={category.id} id={category.id}>
          <div className="mb-10 md:mb-12">
            <SectionLabel className="mb-4">{category.label}</SectionLabel>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
              {category.headline}
            </h2>
          </div>
          <div className="border-t border-line">
            {category.questions.map((item) => (
              <Row key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
