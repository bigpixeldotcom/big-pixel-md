import Hero from '@/app/components/home/hero';
import ChooseUs from '@/app/components/home/choose';
import Services from '@/app/components/home/services';
import Focus from '@/app/components/home/focus';
import Testimonials from '@/app/components/home/testimonials';
import ProcessPrices from '@/app/components/home/process-prices';
import Footer from '@/app/components/global/footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <ChooseUs />
      <Services />
      <Focus />
      <Testimonials />
      <ProcessPrices />
      <Footer />
    </div>
  );
}
