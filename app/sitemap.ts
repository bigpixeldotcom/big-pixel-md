import type { MetadataRoute } from 'next';

export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://big-pixel.com' : 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
