import Image from 'next/image';
import AboutCopy, { frontmatter } from '@/app/markdown/pages/about-doc.mdx';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-start gap-8">
      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        {frontmatter.title}
      </h1>
      <Image
        src={frontmatter.heroImage}
        alt={frontmatter.altText}
        width={1200}
        height={800}
        className="rounded-lg object-cover"
      />
      <p className="text-sm text-metal-500">{frontmatter.caption}</p>
      <div className="prose prose-metal dark:prose-invert max-w-none text-base lg:text-lg xl:text-xl prose-headings:font-headline prose-headings:font-black">
        <AboutCopy />
      </div>
    </main>
  );
}
