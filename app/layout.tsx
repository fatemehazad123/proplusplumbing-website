import type { Metadata } from 'next';
import Script from 'next/script';
import { generalSans, inter, jetbrainsMono } from './fonts';
import './globals.css';
import { BackToTop } from '@/components/chrome/BackToTop';
import { CustomCursor } from '@/components/chrome/CustomCursor';
import { Nav } from '@/components/chrome/Nav';
import { ScrollProgress } from '@/components/chrome/ScrollProgress';
import { SideBars } from '@/components/chrome/SideBars';
import { Footer } from '@/components/sections/Footer';
import { JsonLd } from '@/components/shared/JsonLd';
import { localBusinessSchema } from '@/lib/seo';
import { SITE } from '@/lib/site';

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ProPlus Plumbing — Toronto's Custom Home Plumbing Specialists",
    template: '%s | ProPlus Plumbing',
  },
  description: SITE.description,
  keywords: [
    'custom home plumbing Toronto',
    'luxury home plumbing',
    'radiant floor heating Toronto',
    'snow melting systems Toronto',
    'custom plumbing contractor',
    'builder plumbing partner',
    'North York plumbing',
  ],
  applicationName: SITE.shortName,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: SITE.shortName,
    url: SITE.url,
    title: "ProPlus Plumbing — Toronto's Custom Home Plumbing Specialists",
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: "ProPlus Plumbing — Toronto's Custom Home Plumbing Specialists",
    description: SITE.description,
  },
  ...(googleVerification && {
    verification: { google: googleVerification },
  }),
  category: 'business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper font-body text-ink">
        <JsonLd data={localBusinessSchema} />
        <ScrollProgress />
        <CustomCursor />
        <SideBars />
        <Nav />
        {children}
        <Footer />
        <BackToTop />

        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}', { anonymize_ip: true });`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
