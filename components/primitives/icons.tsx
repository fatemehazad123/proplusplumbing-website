import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function ArrowRight({ size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2 8h12m0 0l-4-4m4 4l-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ArrowDown({ size = 12, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6 1v10m0 0l-4-4m4 4l4-4"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function ArrowUp({ size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8 14V2m0 0l-4 4m4-4l4 4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Phone({ size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3 2.5h2.5l1 3-1.5 1A8 8 0 009 10l1-1.5 3 1V12a1.5 1.5 0 01-1.5 1.5A10 10 0 011.5 4 1.5 1.5 0 013 2.5z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Mail({ size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <rect
        x="1.5"
        y="3"
        width="13"
        height="10"
        rx="0.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Pin({ size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8 14s5-4.5 5-8.5a5 5 0 10-10 0C3 9.5 8 14 8 14z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="5.5" r="1.75" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
