'use client';

import Image from 'next/image';
import FocusText, { frontmatter } from '@/app/markdown/pages/focus-text.mdx';

const textPositionClass: Record<string, string> = {
  left: 'items-start',
  right: 'items-end',
  center: 'items-center',
};

export default function Focus() {
  const alignClass = textPositionClass[frontmatter.textPosition ?? 'left'] ?? 'items-start';

  return (
    <div className="h-screen w-full">
      <div className="relative w-full h-full">
        <Image
          src={frontmatter.image ? frontmatter.image : ''}
          alt="Background Image"
          fill
          style={{
            objectPosition: frontmatter.objectPosition,
            objectFit: 'cover',
          }}
          priority
        />
        <section
          className={`absolute inset-0 z-10 max-w-7xl mx-auto flex flex-col ${alignClass} justify-center px-6 text-white font-sans`}
        >
          <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 w-full lg:w-1/2 bg-black/80 p-8 rounded-lg">
            <h2 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl text-yellow-300">
              {frontmatter.title}
            </h2>
            <div className="text-base lg:text-lg prose prose-white">
              <FocusText />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
