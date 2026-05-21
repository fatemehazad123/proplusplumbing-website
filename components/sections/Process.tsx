'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { SectionLabel } from '@/components/primitives/SectionLabel';

const PHASES = [
  {
    num: '01',
    tag: 'PHASE ONE',
    title: 'Consultation',
    desc: 'We meet on-site or at the table with you, your builder, and architect. Scope, budget, deadlines, assessed and documented before a single fitting is ordered.',
  },
  {
    num: '02',
    tag: 'PHASE TWO',
    title: 'Design & Spec',
    desc: 'Full plumbing system design with material specification. Tight coordination with HVAC, electrical, and framing trades. Built to the latest Ontario Building Code.',
  },
  {
    num: '03',
    tag: 'PHASE THREE',
    title: 'Installation',
    desc: 'Underground, rough-in, and finishing in disciplined sequence. Daily site cleanliness, weekly progress reporting, zero surprises.',
  },
  {
    num: '04',
    tag: 'PHASE FOUR',
    title: 'Inspection & Handover',
    desc: 'Pressure testing, code inspection, walk-through with the homeowner. Full warranty documentation and 24-month service guarantee.',
  },
];

const INTRO_COPY =
  'Four phases, designed around the realities of Toronto custom construction. Clear communication, dependable scheduling, code-compliant work at every checkpoint.';

function PhaseCard({ phase }: { phase: (typeof PHASES)[number] }) {
  return (
    <div
      className="relative flex h-[600px] w-[480px] shrink-0 flex-col justify-between rounded-sm border border-white/10 bg-white/[0.03] p-12"
    >
      <div
        aria-hidden="true"
        className="font-display text-[200px] font-extralight italic leading-[0.85] tracking-[-0.04em]"
        style={{
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(255,255,255,0.15)',
        }}
      >
        {phase.num}
      </div>
      <div>
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-red-brand">
          {phase.tag}
        </div>
        <h3 className="mb-4 font-display text-[40px] font-normal leading-none tracking-[-0.02em]">
          {phase.title}
        </h3>
        <p className="text-[15px] leading-[1.6] text-white/60">{phase.desc}</p>
      </div>
    </div>
  );
}

function HorizontalProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66%']);

  return (
    <div ref={ref} className="relative hidden h-[400vh] md:block">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          className="flex gap-12 px-12"
          style={{ x, willChange: 'transform' }}
        >
          <div className="w-[50vw] shrink-0 pr-20">
            <SectionLabel theme="dark">03 / How we work</SectionLabel>
            <h2 className="my-6 font-display text-[clamp(48px,6vw,96px)] font-light leading-none tracking-[-0.03em]">
              The <em className="italic text-red-brand">process</em>.
            </h2>
            <p className="mt-8 max-w-[420px] text-[18px] leading-[1.6] text-white/60">
              {INTRO_COPY}
            </p>
          </div>
          {PHASES.map((phase) => (
            <PhaseCard key={phase.num} phase={phase} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function StackedProcess() {
  return (
    <div className="block px-6 py-20 md:hidden">
      <SectionLabel theme="dark">03 / How we work</SectionLabel>
      <h2 className="my-6 font-display text-[48px] font-light leading-none tracking-[-0.03em]">
        The <em className="italic text-red-brand">process</em>.
      </h2>
      <p className="mb-12 text-[16px] leading-[1.6] text-white/60">
        {INTRO_COPY}
      </p>
      <div className="flex flex-col gap-6">
        {PHASES.map((phase) => (
          <PhaseCard key={phase.num} phase={phase} />
        ))}
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-navy text-white">
      <HorizontalProcess />
      <StackedProcess />
    </section>
  );
}
