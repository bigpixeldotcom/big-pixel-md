import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/styles/base.css';
import { ConsentManager } from './consent-manager';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

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
  metadataBase: new URL('https://big-pixel.com'),
  title: {
    template: '%s - Big Pixel',
    default: 'Big Pixel | Web Design for Non-Profits & Ethical Organisations',
  },
  description:
    'Norfolk-based web design and full-stack development for charities, heritage organisations, and causes that matter. Design experience meets technical depth.',
  openGraph: {
    title: 'Big Pixel | Web Design for Non-Profits & Ethical Organisations',
    description:
      'Norfolk-based web design and full-stack development for charities, heritage organisations, and causes that matter. Design experience meets technical depth.',
    url: 'https://big-pixel.com',
    siteName: 'Big Pixel',
    images: [
      {
        url: 'https://big-pixel.com/images/generic-og.png',
        width: 1200,
        height: 630,
        alt: 'Big Pixel - Web design for non-profits and ethical organisations',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Big Pixel | Web Design for Non-Profits & Ethical Organisations',
    description:
      'Norfolk-based web design and full-stack development for charities, heritage organisations, and causes that matter. Design experience meets technical depth.',
    images: [
      {
        url: 'https://big-pixel.com/images/generic-twitter.png',
        width: 1200,
        height: 675,
        alt: 'Big Pixel - Web design for non-profits and ethical organisations',
      },
    ],
  },
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
      </body>
    </html>
  );
}
