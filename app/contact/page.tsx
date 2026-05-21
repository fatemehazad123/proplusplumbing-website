import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/shared/ContactForm';
import { JsonLd } from '@/components/shared/JsonLd';
import { PageHero } from '@/components/shared/PageHero';
import { Mail, Phone, Pin } from '@/components/primitives/icons';
import { contactPageSchema } from '@/lib/seo';

const DESCRIPTION =
  'Request a consultation for custom home plumbing, radiant floor heating, or snow melting systems. Family-owned practice based in North York, serving Toronto and the GTA.';

export const metadata: Metadata = {
  title: { absolute: 'Contact ProPlus Plumbing — Toronto Custom Home Specialists' },
  description: DESCRIPTION,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact ProPlus Plumbing — Toronto Custom Home Specialists',
    description: DESCRIPTION,
    url: '/contact',
    type: 'website',
  },
  twitter: {
    title: 'Contact ProPlus Plumbing — Toronto Custom Home Specialists',
    description: DESCRIPTION,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <main>
      <PageHero
        variant="light"
        backgroundImage="/images/contact-hero.jpg"
        imageOpacity={0.18}
        eyebrow="Get in touch"
        headline={
          <>
            Tell us about your{' '}
            <em className="font-normal italic text-red-brand">project</em>.
          </>
        }
        tagline="We typically respond within one business day. For active job-site emergencies, please call us directly."
      />

      <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[2fr_3fr] md:gap-20">
          <aside>
            <div className="space-y-12">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey-1">
                  Phone
                </div>
                <Link
                  href="tel:+16475187787"
                  data-cursor="hover"
                  className="mt-3 block font-display text-[clamp(28px,3vw,40px)] font-light leading-tight tracking-[-0.02em] text-ink"
                >
                  (647) 518-7787
                </Link>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey-1">
                  Email
                </div>
                <Link
                  href="mailto:info@proplusplumbing.com"
                  data-cursor="hover"
                  className="mt-3 block break-all font-display text-[clamp(20px,2.4vw,32px)] font-light leading-tight tracking-[-0.02em] text-ink"
                >
                  info@proplusplumbing.com
                </Link>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey-1">
                  Location
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=181+Maxwell+St+North+York+ON+M3H+5B5"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="mt-3 block text-[15px] leading-[1.6] text-ink transition-colors duration-300 hover:text-red-brand"
                >
                  181 Maxwell St
                  <br />
                  North York, ON M3H 5B5
                </a>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey-1">
                  Hours
                </div>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink">
                  Monday – Friday
                  <br />
                  8:00 AM – 6:00 PM
                </p>
              </div>

              <div className="overflow-hidden rounded-sm border border-line">
                <iframe
                  src="https://www.google.com/maps?q=181+Maxwell+St+North+York+ON+M3H+5B5&output=embed"
                  width="100%"
                  height={200}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ProPlus Plumbing office location"
                  allowFullScreen
                  className="block"
                  style={{
                    border: 0,
                    filter: 'grayscale(40%) contrast(95%)',
                  }}
                />
              </div>

              <ul className="flex flex-col gap-3 pt-6 text-[14px] text-grey-1">
                <li className="flex items-center gap-3">
                  <Phone size={14} />
                  Direct line for active job-site issues
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={14} />
                  Replies to inquiries within one business day
                </li>
                <li className="flex items-center gap-3">
                  <Pin size={14} />
                  Serving Toronto and the GTA
                </li>
              </ul>
            </div>
          </aside>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
