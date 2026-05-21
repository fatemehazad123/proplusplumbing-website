import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og-image';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt =
  "ProPlus Plumbing — Toronto's custom home plumbing specialists";

export default function Image() {
  return renderOgImage({
    eyebrow: 'EST. 2015 · TORONTO',
    headlinePrefix: 'The plumbers Toronto’s builders',
    headlineAccent: 'trust.',
  });
}
