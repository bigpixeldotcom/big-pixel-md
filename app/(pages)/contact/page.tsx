import ContactForm from '@/app/components/contact/contact-form';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch about web design for your charity, non-profit, or ethical organisation. Based in Norfolk.',
  alternates: { canonical: 'https://www.big-pixel.com/contact' },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-start gap-8">
      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Contact Me
      </h1>
      <h2 className="font-normal text-metal-500 text-xl mt-8">
        I primarily work with charities, non-profits, and ethical organisations. With personal
        charity experience, I understand funding cycles, committee decisions, and balancing ambition
        with budget. I build ongoing partnerships to support your goals as your needs evolve. If
        that sounds like what you&apos;re after, get in touch.
      </h2>
      <div className="w-full">
        <ContactForm />
        <Toaster />
      </div>
    </main>
  );
}
