import fs from 'fs';
import path from 'path';

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  subtitle: string;
  date: string;
  cover: string;
  work: string[];
  tags: string[];
  datePublished: string;
  dateModified: string;
  author: string;
  ogImage: string;
  canonicalUrl: string;
  noIndex: boolean;
};

export type NewsFrontmatter = {
  title: string;
  slug: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  date: string;
  cover: string;
  tags: string[];
  datePublished: string;
  dateModified: string;
  author: string;
  ogImage: string;
  canonicalUrl: string;
  noIndex: boolean;
};

const projectsDir = path.join(process.cwd(), 'app/markdown/projects');
const newsDir = path.join(process.cwd(), 'app/markdown/news');

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(projectsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export async function getAllProjects(): Promise<ProjectFrontmatter[]> {
  const slugs = getProjectSlugs();
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await import(`@/app/markdown/projects/${slug}.mdx`);
      return frontmatter as ProjectFrontmatter;
    })
  );
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsSlugs(): string[] {
  return fs
    .readdirSync(newsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export async function getAllNews(): Promise<NewsFrontmatter[]> {
  const slugs = getNewsSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await import(`@/app/markdown/news/${slug}.mdx`);
      return frontmatter as NewsFrontmatter;
    })
  );
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
