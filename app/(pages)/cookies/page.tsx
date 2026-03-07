import CookiesCopy, { frontmatter } from '@/app/markdown/footer/cookies-doc.mdx';

export default function CookiesPage() {
  return (
    <main className="flex flex-col items-start gap-8">
      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        {frontmatter.title}
      </h1>
      <div className="prose prose-metal dark:prose-invert max-w-none text-base lg:text-lg xl:text-xl prose-headings:font-headline prose-headings:font-black">
        <CookiesCopy />
      </div>
    </main>
  );
}
