import Image from 'next/image';
import { getNewsSlugs } from '@/app/lib/mdx';
import type { Metadata } from 'next';
import { format } from 'date-fns';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = await import(`@/app/markdown/news/${slug}.mdx`);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: {
      canonical: frontmatter.canonicalUrl,
    },
    openGraph: {
      title: frontmatter.metaTitle,
      description: frontmatter.description,
      url: frontmatter.canonicalUrl,
      images: [
        {
          url: `/images/news/${frontmatter.ogImage}` || `/images/news/${frontmatter.cover}`,
          alt: frontmatter.title || '',
          width: 1200,
          height: 630,
        },
      ],
      type: 'article',
    },
    robots: { index: frontmatter.noIndex, follow: true },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { default: Post, frontmatter } = await import(`@/app/markdown/news/${slug}.mdx`);

  const newsContext = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: frontmatter.metaTitle,
    author: { '@type': 'Person', name: frontmatter.author },
    datePublished: frontmatter.datePublished,
    dateModified: frontmatter.dateModified,
    publisher: { '@type': 'Organization', name: 'Big Pixel' },
  };

  return (
    <main className="flex flex-col items-start gap-8">
      <Image
        src={`/images/news/${frontmatter.cover}`}
        alt={frontmatter.title}
        width={1200}
        height={630}
        className="rounded-lg object-cover"
        priority
      />
      <div className="px-4 py-8 max-w-3xl mx-auto sm:px-6 sm:py-10 lg:max-w-4xl lg:py-12 xl:max-w-6xl">
        <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {frontmatter.title}
        </h1>
        <p className="mt-4 text-lg text-metal-500">by {frontmatter.author}</p>
        <p className="mt-4 text-sm text-metal-500">
          Published {format(new Date(frontmatter.datePublished), 'do MMMM yyyy')}
          {frontmatter.dateModified && (
            <span className="italic">
              {' '}
              &mdash; updated {format(new Date(frontmatter.dateModified), 'do MMMM yyyy')}
            </span>
          )}
        </p>
        <p className="mt-2 text-sm text-metal-500">
          Reading time: {Math.ceil(frontmatter.readingTime)} minutes
        </p>
        <article className="mt-8 prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl prose-slate dark:prose-invert font-light mx-auto">
          <Post />
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsContext).replace(/</g, '\\u003c'),
        }}
      />
    </main>
  );
}

export function generateStaticParams() {
  return getNewsSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;
