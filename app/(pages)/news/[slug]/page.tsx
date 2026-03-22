import Image from 'next/image';
import { getNewsSlugs } from '@/app/lib/mdx';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = await import(`@/app/markdown/news/${slug}.mdx`);
  return {
    title: frontmatter.metaTitle,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
    alternates: { canonical: frontmatter.canonicalUrl },
    openGraph: {
      title: frontmatter.metaTitle,
      description: frontmatter.description,
      images: [{ url: frontmatter.ogImage }],
      type: 'article',
    },
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
      <div className="mt-8 flex flex-col prose-slate prose lg:prose-lg xl:prose-xl dark:prose-invert font-sans font-normal mx-auto">
        <Post />
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
