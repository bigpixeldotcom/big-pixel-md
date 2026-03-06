import Image from 'next/image';
import AboutCopy, { frontmatter } from '@/app/markdown/pages/about-doc.mdx';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: frontmatter.title,
    description: frontmatter.description,
    url: '/about',
    images: [
      {
        url: frontmatter.ogImage || '/images/about-2752x1536.jpg',
        alt: frontmatter.headline || '',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const breadcrumbList = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://big-pixel.com' },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://big-pixel.com/projects' },
    {
      '@type': 'ListItem',
      position: 3,
      name: frontmatter.title,
      item: 'https://big-pixel.com/about',
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-start gap-8">
      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        {frontmatter.title}
      </h1>
      <Image
        src={frontmatter.heroImage || '/images/about-2752x1536.jpg'}
        alt={frontmatter.altText || ''}
        width={1200}
        height={800}
        className="rounded-lg object-cover"
      />
      <p className="text-sm text-metal-500">{frontmatter.caption}</p>
      <div className="prose prose-metal dark:prose-invert max-w-none text-base lg:text-lg xl:text-xl prose-headings:font-headline prose-headings:font-black">
        <AboutCopy />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbList).replace(/</g, '\\u003c'),
        }}
      />
    </main>
  );
}
