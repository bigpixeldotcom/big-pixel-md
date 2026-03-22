import Image from 'next/image';
import Link from 'next/link';
import { getAllNews } from '@/app/lib/mdx';

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <main className="flex flex-col items-start gap-8">
      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        News &amp; Articles
      </h1>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {news.map((post) => (
          <li
            key={post.slug}
            className="rounded-lg bg-white shadow-md dark:divide-white/10 dark:bg-metal-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10 hover:scale-105 transition-transform duration-300 ease-out"
          >
            <Link href={`/news/${post.slug}`} className="divide-y divide-metal-200 overflow-hidden">
              <div className="relative overflow-hidden rounded-t-lg">
                {post.cover && (
                  <div className="aspect-video w-full rounded-md bg-gray-50">
                    <Image
                      src={`/images/news/${post.cover}`}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="px-4 py-4 sm:px-6">
                <h2 className="font-headline font-bold text-xl">{post.title}</h2>
                {post.description && <p className="text-sm text-gray-600">{post.description}</p>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="font-headline font-bold text-metal-500 text-2xl mt-8">
        News and updates coming soon...
      </h2>
      {/* Add news cards here */}
    </main>
  );
}
