import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og-image';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'About ProPlus Plumbing — Toronto family-owned practice';

export default function Image() {
  return renderOgImage({
    eyebrow: 'About',
    headlinePrefix: 'A family practice for Toronto’s most demanding',
    headlineAccent: 'builds.',
  });
}
