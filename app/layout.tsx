import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/styles/base.css';
import { ConsentManager } from './consent-manager';
import { Analytics } from '@vercel/analytics/next';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const bpDescription =
  'Charity web design specialist based in Norfolk. With over decade of sector experience, I build websites using the latest technologies and best practices. I understand the unique challenges charities face, and I work closely with you to create a site that supports your mission and goals.';

const nexa = localFont({
  src: [
    {
      path: './fonts/nexa-800.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/nexa-900.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-nexa',
});

const nexaText = localFont({
  src: [
    {
      path: './fonts/nexa-text-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/nexa-text-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/nexa-text-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/nexa-text-900.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-nexa-text',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.big-pixel.com'),
  title: {
    template: '%s - Big Pixel',
    default: 'Big Pixel | Web Design for Charities & Ethical Organisations',
  },
  description: bpDescription,
  keywords: [
    'web design for charities',
    'charity web design',
    'non-profit web design',
    'ethical organisation web design',
  ],
  openGraph: {
    title: 'Big Pixel | Web Design for Charities & Ethical Organisations',
    description: bpDescription,
    url: 'https://www.big-pixel.com',
    siteName: 'Big Pixel',
    images: [
      {
        url: 'https://www.big-pixel.com/open-graph/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Big Pixel - Web Design for Charities & Ethical Organisations',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Big Pixel | Web Design for Charities & Ethical Organisations',
    description: bpDescription,
    images: [
      {
        url: 'https://www.big-pixel.com/open-graph/og-default.png',
        width: 1200,
        height: 675,
        alt: 'Big Pixel - Web Design for Charities & Ethical Organisations',
      },
    ],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Big Pixel',
  url: 'https://www.big-pixel.com',
  logo: 'https://www.big-pixel.com/brand/big-pixel-full-black.png',
  description: bpDescription,
  founder: { '@type': 'Person', name: 'James Beston' },
  areaServed: 'Norfolk, UK',
  sameAs: [
    'https://www.facebook.com/bigpixeldotcom',
    'https://www.linkedin.com/company/bigpixeldotcom',
    'https://www.instagram.com/bigpixeldotcom',
    'https://bsky.app/profile/big-pixel.com',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Big Pixel',
  url: 'https://www.big-pixel.com',
  description: bpDescription,
  publisher: { '@type': 'Organization', name: 'Big Pixel' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nexa.variable} ${nexaText.variable} antialiased`}>
        <ConsentManager>{children}</ConsentManager>
        <Analytics />
      </body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
        }}
      />
    </html>
  );
}
