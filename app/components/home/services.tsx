import ServiceCards from '@/app/markdown/pages/service-cards.mdx';

export default function Services() {
  return (
    <section className="flex w-full py-8 md:py-12 xl:py-16 font-sans">
      <div className="max-w-6xl px-6 lg:mx-auto">
        <h2 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Services offered
        </h2>
        <ServiceCards />
      </div>
    </section>
  );
}
