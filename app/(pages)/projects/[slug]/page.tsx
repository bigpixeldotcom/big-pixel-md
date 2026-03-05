import { getProjectSlugs } from '@/app/lib/mdx';
import GraphCard from '@/app/components/projects/graph-card';
import ProjectDetails from '@/app/components/projects/details';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { default: Project, frontmatter } = await import(`@/app/markdown/projects/${slug}.mdx`);

  return (
    <main className="flex flex-col items-start gap-8">
      <div className="flex flex-col lg:flex-row items-start justify-start gap-8">
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
        />
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;
