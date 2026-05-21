import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og-image';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt =
  'ProPlus Plumbing services — Custom home plumbing, floor heating, snow melting';

export default function Image() {
  return renderOgImage({
    eyebrow: 'Services',
    headlinePrefix: 'Three core practices, deeply',
    headlineAccent: 'specialised.',
  });
}
