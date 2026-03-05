import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

const components = {
  img: (props: ImageProps) => <Image className="rounded-lg" {...(props as ImageProps)} />,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
