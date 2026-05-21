import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: { brand: '#EC1C24' },
        blue: { brand: '#243D97' },
        navy: '#0F1B45',
        ink: '#0A0A0A',
        paper: '#FAFAF7',
        cream: '#F4F2EC',
        grey: { 1: '#6B6B68', 2: '#2E2E2C' },
        line: '#E5E3DD',
      },
      fontFamily: {
        display: ['var(--font-general-sans)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
