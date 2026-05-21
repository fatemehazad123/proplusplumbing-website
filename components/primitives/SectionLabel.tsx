import type { ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'dark-vivid';

const TEXT_COLOR: Record<Theme, string> = {
  light: 'text-grey-1',
  dark: 'text-white/50',
  'dark-vivid': 'text-white',
};

export function SectionLabel({
  children,
  theme = 'light',
  className = '',
}: {
  children: ReactNode;
  theme?: Theme;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] ${TEXT_COLOR[theme]} ${className}`}
    >
      <span aria-hidden="true" className="block h-px w-6 bg-red-brand" />
      {children}
    </div>
  );
}
