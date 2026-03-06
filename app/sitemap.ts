import type { MetadataRoute } from 'next';
import { getAllProjects } from '@/app/lib/mdx';

export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://www.big-pixel.com' : 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getAllProjects();
  const projectEntries = projects
    .filter((p) => !p.noIndex)
    .map((p) => ({
      url: `${baseUrl}/projects/${p.slug}`,
      lastModified: new Date(p.dateModified),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  return [
    { url: baseUrl, lastModified: new Date('2026-03-06'), priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date('2026-03-05'), priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date('2026-03-06'), priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date('2026-03-06'), priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.5 },
    ...projectEntries,
  ];
}
