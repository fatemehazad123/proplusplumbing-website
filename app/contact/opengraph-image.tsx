import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og-image';

export const runtime = 'edge';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Contact ProPlus Plumbing — Toronto';

export default function Image() {
  return renderOgImage({
    eyebrow: 'Get in touch',
    headlinePrefix: 'Tell us about your',
    headlineAccent: 'project.',
  });
}
