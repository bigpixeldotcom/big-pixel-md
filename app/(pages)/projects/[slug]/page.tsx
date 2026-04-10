import Image from 'next/image';
import { getProjectSlugs } from '@/app/lib/mdx';
import GraphCard from '@/app/components/projects/graph-card';
import ProjectDetails from '@/app/components/projects/details';
import Carousel from '@/app/components/global/carousel';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = await import(`@/app/markdown/projects/${slug}.mdx`);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
    alternates: { canonical: frontmatter.canonicalUrl },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.subtitle,
      images: [{ url: frontmatter.ogImage }],
      type: 'article',
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { default: Project, frontmatter } = await import(`@/app/markdown/projects/${slug}.mdx`);

  const creativeWork = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    headline: frontmatter.title,
    author: { '@type': 'Person', name: frontmatter.author },
    datePublished: frontmatter.datePublished,
    dateModified: frontmatter.dateModified,
    publisher: { '@type': 'Organization', name: 'Big Pixel' },
  };

  return (
    <main className="flex flex-col items-start gap-8">
      <div className="flex flex-col lg:flex-row items-stretch justify-start gap-4">
        <GraphCard
          title={frontmatter.title}
          client={frontmatter.client}
          subtitle={frontmatter.subtitle}
        >
          <Project />
        </GraphCard>
        <ProjectDetails
          client={frontmatter.client}
          date={frontmatter.date}
          projectType={frontmatter.projectType}
          projectColour={frontmatter.projectColour}
          tags={frontmatter.tags}
          tech={frontmatter.tech}
          caseStudy={frontmatter.caseStudy || false}
          caseStudyTitle={frontmatter.caseStudyTitle}
          caseStudyUrl={frontmatter.caseStudyUrl}
        />
      </div>
      <Carousel>
        {frontmatter.images?.map((image: { src: string; alt: string }, index: number) => (
          <Image
            key={index}
            src={`/images/projects/${image.src}`}
            alt={image.alt}
            width={1600}
            height={1138}
            className="embla__slide"
          />
        ))}
      </Carousel>
      {frontmatter.scrollableImage && (
        <div className="w-full h-full relative rounded-lg overflow-clip shadow-2xl">
          <div className="h-8 w-full bg-metal-50 border-b border-metal-400 rounded-t-lg py-1 px-4 flex items-center gap-2">
            <div className="size-3 bg-red-600 rounded-full" />
            <div className="size-3 bg-yellow-300 rounded-full" />
            <div className="size-3 bg-green-300 rounded-full" />
          </div>
          <div className="overflow-y-scroll aspect-video">
            <Image
              src={`/images/projects/${frontmatter.scrollableImage}`}
              alt={`${frontmatter.title} scrollable image`}
              width={1600}
              height={1138}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
      {frontmatter.mp4 && (
        <video autoPlay loop muted className="max-w-244 mx-auto shadow-2xl">
          <source src={`/images/projects/${frontmatter.mp4}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWork).replace(/</g, '\\u003c'),
        }}
      />
    </main>
  );
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;
