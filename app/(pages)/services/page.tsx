import ServiceCopy, { frontmatter } from '@/app/markdown/pages/services-doc.mdx';
import StatementCards from '@/app/markdown/pages/statement-cards.mdx';

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-start gap-8">
      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        {frontmatter.title}
      </h1>
      <h2 className="font-headline font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        {frontmatter.headline}
      </h2>
      <p className="text-xl lg:text-2xl xl:text-3xl text-metal-700 dark:text-metal-400">
        {frontmatter.description}
      </p>
      <div className="prose prose-metal dark:prose-invert max-w-none text-lg lg:text-xl xl:text-2xl prose-headings:font-headline prose-headings:font-black">
        <ServiceCopy />
      </div>
      <h2 className="font-headline font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        How I can help your organisation
      </h2>
      <StatementCards />
    </main>
  );
}
