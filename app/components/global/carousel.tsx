'use client';

import useEmblaCarousel from 'embla-carousel-react';

function PrevIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="none">
      <path
        d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z"
        fill="currentColor"
      />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="none">
      <path
        d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Carousel({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="embla flex items-center gap-1 sm:gap-2 md:gap-4">
      <button
        onClick={scrollPrev}
        className="size-8 lg:size-12 text-metal-300 hover:text-metal-600 transition-colors ease-in-out duration-300"
      >
        <PrevIcon />
      </button>
      <div className="embla__viewport flex-1" ref={emblaRef}>
        <div className="embla__container items-center mx-auto">{children}</div>
      </div>
      <button
        onClick={scrollNext}
        className="size-8 lg:size-12 text-metal-300 hover:text-metal-600 transition-colors ease-in-out duration-300"
      >
        <NextIcon />
      </button>
    </div>
  );
}
