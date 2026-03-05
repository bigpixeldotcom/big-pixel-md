import Image from 'next/image';
import NavBar from '@/app/components/global/navbar';
import { CTAButton } from '@/app/components/global/buttons';

const ctaButtons = [
  {
    _key: 'cta1',
    label: 'See my work',
    url: '/work',
    linkType: 'internal',
    style: 'primary',
  },
  {
    _key: 'cta2',
    label: 'Contact me',
    url: '/contact',
    linkType: 'internal',
    style: 'secondary',
  },
];

export default function Hero() {
  return (
    <div className="h-screen w-full">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/images/hero-7360x4912.jpg"
          alt="Background Image"
          fill
          className="object-cover w-full h-full"
          style={{ objectPosition: '75.24039470589804% 49.36504295604304%' }}
          priority
        />
      </div>
      <NavBar />
      <section className="relative z-10 flex h-full w-full max-w-6xl px-6 lg:mx-auto flex-col lg:justify-center pt-30 md:pt-36 xl:pt-0 gap-4 text-white font-sans">
        <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 lg:w-2/3">
          <h1 className="font-headline font-black text-4xl md:text-8xl lg:text-9xl 2xl:text-[10rem]">
            Look as good as the work you do
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Web Design for charities, non-profits & ethical organisations &ndash; built by someone
            who&apos;s worked in the sector.
          </p>
          {ctaButtons && (
            <div className="flex flex-wrap gap-4 mt-6">
              {ctaButtons.map((button) => (
                <CTAButton key={button._key} button={button} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
