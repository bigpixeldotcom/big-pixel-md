'use client';

import Calibre, { frontmatter as calibreFM } from '@/app/markdown/testimonials/calibre.mdx';
import Mcnag, { frontmatter as mcnagFM } from '@/app/markdown/testimonials/mcnag.mdx';
import Carousel from '@/app/components/global/carousel';
import Testimonial from '@/app/components/global/testimonial';

export default function Testimonials() {
  return (
    <div className="w-full max-w-6xl px-6 py-12 mx-auto">
      <h2 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl text-center mb-8">
        What my clients say
      </h2>
      <Carousel>
        <Testimonial organisation={calibreFM.organisation} logo={calibreFM.logo}>
          <Calibre />
        </Testimonial>
        <Testimonial organisation={mcnagFM.organisation} logo={mcnagFM.logo}>
          <Mcnag />
        </Testimonial>
      </Carousel>
    </div>
  );
}
