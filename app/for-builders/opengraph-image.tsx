import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og-image';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'ProPlus Plumbing — for builders and architects';

export default function Image() {
  return renderOgImage({
    eyebrow: 'For builders & architects',
    headlinePrefix: 'The plumbing partner for Toronto’s',
    headlineAccent: 'custom-home',
    headlineSuffix: 'builders.',
  });
}
