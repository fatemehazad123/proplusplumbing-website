'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';
import { ArrowUp } from '@/components/primitives/icons';

export function BackToTop() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShow(latest > window.innerHeight);
  });

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={onClick}
          data-cursor="hover"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          className="fixed bottom-8 right-14 z-[150] flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg shadow-black/20 transition-colors duration-300 hover:bg-red-brand"
        >
          <ArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
