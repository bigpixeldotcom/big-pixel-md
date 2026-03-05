declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types';

  export const frontmatter: Record<string, unknown>;

  const MDXComponent: (props: MDXProps) => JSX.Element;
  export default MDXComponent;
}
