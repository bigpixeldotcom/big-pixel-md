import Image from 'next/image';

type TestimonialItem = {
  children: React.ReactNode;
  organisation?: string;
  logo?: string;
};

export default function Testimonial(testimonial: TestimonialItem) {
  return (
    <div className="embla__slide w-full max-w-7xl">
      <div className="p-4 md:p-6 lg:p-12 bg-metal-100 rounded-md md:rounded-3xl">
        <div className="flex flex-col items-center gap-4 lg:gap-6">
          <div className="prose prose-metal max-w-none text-base md:text-lg lg:text-xl text-center">
            {testimonial.children}
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-center">
            <Image
              src={testimonial.logo ? testimonial.logo : '/images/testimonial-icon.png'}
              alt={`${testimonial.organisation ?? 'Organisation'} logo`}
              width={48}
              height={48}
              className="size-12 object-contain"
            />
            <p className="font-light text-sm sm:text-base md:text-lg text-metal-600 tracking-tight text-center lg:text-left">
              {testimonial.organisation ?? 'Organisation'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
