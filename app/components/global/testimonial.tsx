import Image from 'next/image';

type TestimonialItem = {
  children: React.ReactNode;
  organisation: string;
  logo: string;
};

export default function Testimonial(testimonial: TestimonialItem) {
  return (
    <div className="embla__slide w-full max-w-6xl">
      <div className="flex flex-col items-center justify-center min-h-96 md:min-h-72 p-6 md:p-12 bg-metal-100 rounded-3xl prose prose-metal max-w-none text-base md:text-lg lg:text-xl text-center">
        {testimonial.children}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Image
            src={testimonial.logo ? testimonial.logo : '/images/testimonial-icon.png'}
            alt={`${testimonial.organisation} logo`}
            width={96}
            height={96}
            className="size-8 md:size-12 object-contain"
          />
          <p className="font-bold text-base md:text-xl text-metal-700 tracking-tight">
            {testimonial.organisation}
          </p>
        </div>
      </div>
    </div>
  );
}
