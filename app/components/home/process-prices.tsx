'use client';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSeedling,
  faArrowTrendUp,
  faRocketLaunch,
} from '@awesome.me/kit-85090e0c99/icons/duotone/regular';
import Process from '@/app/markdown/pages/process.mdx';

const prices = [
  {
    _key: 'price1',
    title: 'Starter Sites',
    copy: 'A simple, beautiful website for a small charity or campaign.',
    cost: 'Starting at £500',
    colour: 'bg-green-500',
    icon: faSeedling,
  },
  {
    _key: 'price2',
    title: 'Growth Sites',
    copy: 'A more complex website with custom design, integrations, or functionality.',
    cost: 'Between £1,000 and £2,500',
    colour: 'bg-violet-600',
    icon: faArrowTrendUp,
  },
  {
    _key: 'price3',
    title: 'Bespoke projects',
    copy: 'Larger or fully customised projects with unique requirements.',
    cost: 'Quoted individually',
    colour: 'bg-indigo-800',
    icon: faRocketLaunch,
  },
];

export default function ProcessPrices() {
  return (
    <section className="flex w-full py-8 md:py-12 xl:py-16 font-sans">
      <div className="max-w-6xl px-6 lg:mx-auto">
        <div className="w-full flex flex-col gap-8">
          <div>
            <h2 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl">
              A simple, supportive process
            </h2>
            <div className="mt-8 prose prose-metal dark:prose-invert prose-headings:font-headline prose-headings:font-black max-w-none text-base sm:text-lg md:text-xl">
              <Process />
            </div>
          </div>
          {prices && (
            <div className="w-full">
              <ul className="flex flex-col md:flex-row gap-4">
                {prices.map((price) => (
                  <li
                    key={price._key}
                    className={clsx(
                      'p-6 rounded-xl text-white flex-1',
                      price.colour ? `${price.colour}` : null
                    )}
                  >
                    <div className="flex flex-col items-start justify-start gap-4">
                      <FontAwesomeIcon
                        icon={price.icon}
                        className="text-4xl md:text-5xl lg:text-6xl"
                      />

                      <h4 className="font-bold text-xl lg:text-2xl tracking-tight">
                        {price.title}
                      </h4>
                      <p>{price.copy}</p>
                      <p className="text-xl font-bold tracking-tight">{price.cost}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
