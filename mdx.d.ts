declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types';

  export const frontmatter: {
    title?: string;
    headline?: string;
    description?: string;
    heroImage?: string;
    caption?: string;
    altText?: string;
    image?: string;
    objectPosition?: string;
    textPosition?: string;
    datePublished?: string;
    dateModified?: string;
    author?: string;
    organisation?: string;
    logo?: string;
    ogImage?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
  };

  const MDXComponent: (props: MDXProps) => JSX.Element;
  export default MDXComponent;
}
