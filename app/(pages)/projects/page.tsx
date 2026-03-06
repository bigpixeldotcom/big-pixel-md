import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects } from '@/app/lib/mdx';

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="flex flex-col items-start gap-8">
      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Projects Portfolio
      </h1>
      <ul className="grid grid-cols-3 gap-8 w-full">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="rounded-lg bg-white shadow-md dark:divide-white/10 dark:bg-metal-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10 hover:scale-105 transition-transform duration-300 ease-out"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="divide-y divide-metal-200 overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                {project.cover && (
                  <div className="aspect-video w-full rounded-md bg-gray-50">
                    <Image
                      src={`/images/projects/${project.cover}`}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="px-4 py-4 sm:px-6">
                <h2 className="font-headline font-bold text-xl">{project.title}</h2>
                {project.subtitle && <p className="text-sm text-gray-600">{project.subtitle}</p>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="font-headline font-bold text-metal-500 text-2xl mt-8">
        More projects coming soon as I update the website...
      </h2>
    </main>
  );
}
