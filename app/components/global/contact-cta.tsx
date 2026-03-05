import Link from 'next/link';

export default function ContactCTA() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 my-16">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center lg:justify-between w-full p-9 outline-4 outline-foreground rounded-4xl">
        <div className="flex-1 flex-col gap-y-3">
          <h3 className="font-headline text-4xl font-black tracking-tight text-center lg:text-left">
            Get in touch
          </h3>
          <p className="text-lg text-center lg:text-left">
            Contact me to get a quote or discuss a project
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-end gap-y-3">
          <Link
            href="/contact"
            className="flex space-x-2.5 px-8 py-4 bg-green-500 hover:bg-green-600 transition-colors ease-in-out duration-300 rounded-2xl text-white font-headline font-black text-2xl"
          >
            Say hello 👋
          </Link>
          <p>Or call +44 (0)1692 774 886</p>
        </div>
      </div>
    </div>
  );
}
