import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import { Table } from '@/app/components/global/mdx';

const components = {
  table: (props) => <Table data={props} />,
  img: (props: ImageProps) => <Image className="rounded-lg" {...(props as ImageProps)} />,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
