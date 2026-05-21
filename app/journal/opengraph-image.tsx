import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og-image';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'ProPlus Plumbing Journal — Notes from the trade';

export default function Image() {
  return renderOgImage({
    eyebrow: 'Journal',
    headlinePrefix: 'Notes from the',
    headlineAccent: 'trade.',
  });
}
