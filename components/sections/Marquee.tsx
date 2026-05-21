const ITEMS = [
  'Custom Homes',
  'Radiant Floor Heating',
  'Snow Melting',
  'Subdivision Developments',
  'Major Renovations',
  'Hot Water Systems',
];

function Track() {
  return (
    <span className="flex shrink-0 items-center gap-[60px] pr-[60px]">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-[60px]">
          <span>{item}</span>
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-red-brand"
          />
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div
      aria-label="Services"
      className="overflow-hidden border-y border-white/10 bg-navy py-5 text-white"
    >
      <div className="inline-flex font-display text-[24px] font-light italic tracking-[-0.02em] motion-safe:animate-marquee">
        <Track />
        <Track />
      </div>
    </div>
  );
}
