'use client';

import { useEffect, useRef, useState } from 'react';

type CursorMode = 'default' | 'hover' | 'cta';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>('default');

  // Enable only on hover-capable, fine-pointer, non-reduced-motion devices.
  useEffect(() => {
    const hoverMq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(hoverMq.matches && !reduceMq.matches);
    update();
    hoverMq.addEventListener('change', update);
    reduceMq.addEventListener('change', update);
    return () => {
      hoverMq.removeEventListener('change', update);
      reduceMq.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    let frame = requestAnimationFrame(function tick() {
      dotX += (mouseX - dotX) * 0.5;
      dotY += (mouseY - dotY) * 0.5;
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(tick);
    });

    window.addEventListener('mousemove', onMove);

    // Attach hover-state listeners to every [data-cursor] element currently in the DOM.
    // Re-attach when the DOM mutates so React-rendered or async content keeps working.
    let cleanups: Array<() => void> = [];
    const attach = () => {
      cleanups.forEach((fn) => fn());
      cleanups = [];
      document
        .querySelectorAll<HTMLElement>('[data-cursor]')
        .forEach((el) => {
          const value = el.dataset.cursor;
          if (value !== 'hover' && value !== 'cta') return;
          const onEnter = () => setMode(value);
          const onLeave = () => setMode('default');
          el.addEventListener('mouseenter', onEnter);
          el.addEventListener('mouseleave', onLeave);
          cleanups.push(() => {
            el.removeEventListener('mouseenter', onEnter);
            el.removeEventListener('mouseleave', onLeave);
          });
        });
    };
    attach();

    let pending = false;
    const observer = new MutationObserver(() => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        attach();
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, [enabled]);

  if (!enabled) return null;

  const ringSize = mode === 'cta' ? 100 : mode === 'hover' ? 80 : 36;
  const ringBorder = mode === 'default' ? '#FFFFFF' : '#EC1C24';
  const ringBackground =
    mode === 'cta'
      ? '#EC1C24'
      : mode === 'hover'
        ? 'rgba(236, 28, 36, 0.1)'
        : 'transparent';

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-red-brand transition-opacity duration-200 ${
          mode === 'cta' ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[9999] rounded-full ${
          mode === 'default' ? 'mix-blend-difference' : ''
        }`}
        style={{
          width: ringSize,
          height: ringSize,
          borderWidth: '1.5px',
          borderStyle: 'solid',
          borderColor: ringBorder,
          backgroundColor: ringBackground,
          transition:
            'width 0.25s cubic-bezier(.2,.8,.2,1), height 0.25s cubic-bezier(.2,.8,.2,1), background-color 0.25s, border-color 0.25s',
          willChange: 'transform',
        }}
      />
    </>
  );
}
