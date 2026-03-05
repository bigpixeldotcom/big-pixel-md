import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullhorn,
  faBullseyeArrow,
  faLockHashtag,
  faTelescope,
  faUserMagnifyingGlass,
} from '@awesome.me/kit-85090e0c99/icons/duotone/regular';

export default async function ChooseUs() {
  const benefits = [
    {
      _key: 'benefit1',
      textStrong: 'Beautiful, user-focused web design',
      text: 'that reflects your values.',
      icon: faUserMagnifyingGlass,
      colour: 'text-violet-600',
    },
    {
      _key: 'benefit2',
      textStrong: 'Strategic UX & messaging',
      text: 'that drives action.',
      icon: faBullseyeArrow,
      colour: 'text-green-600',
    },
    {
      _key: 'benefit3',
      textStrong: 'Secure, scalable development',
      text: 'built for growth.',
      icon: faLockHashtag,
      colour: 'text-blue-500 dark:text-blue-400',
    },
    {
      _key: 'benefit4',
      textStrong: 'Branding & visual identity',
      text: 'that builds trust.',
      icon: faBullhorn,
      colour: 'text-orange-500',
    },
    {
      _key: 'benefit5',
      textStrong: 'SEO-ready sites',
      text: 'so more people can find you.',
      icon: faTelescope,
      colour: 'text-indigo-700 dark:text-indigo-500',
    },
  ];

  return (
    <section className="flex w-full max-w-6xl px-6 lg:mx-auto flex-col lg:justify-center py-8 md:py-12 xl:py-16 gap-4 font-sans">
      <div className="flex flex-col gap-6 lg:gap-8 xl:gap-10">
        <h2 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl">
          I&apos;ve been where you are&hellip; that makes a lot of difference.
        </h2>
        <div className="text-base sm:text-lg md:text-2xl">
          I&apos;ve spent twenty years in design and over a decade working inside a charity. This
          means I know how organisations like yours actually work &ndash; the funding cycles, the
          trustee decisions, the gap between what you want your website to do and what your budget
          allows. At Big Pixel, I design and build bespoke websites that help charities tell their
          story, engage supporters, and make the most of every pound they spend online.
        </div>
        {benefits && (
          <ul className="list-none flex flex-col gap-6 max-w-2xl mx-auto">
            {benefits.map((benefit) => (
              <li key={benefit._key} className="flex items-center gap-4">
                <div
                  className={`flex aspect-square w-14 items-center justify-center rounded-lg border-2 border-metal-100 dark:border-metal-600 bg-transparent dark:bg-black/50 ${benefit.colour}`}
                >
                  <FontAwesomeIcon icon={benefit.icon} className="text-2xl" />
                </div>
                <span className="text-base sm:text-lg md:text-xl flex-1">
                  <strong>{benefit.textStrong}</strong> {benefit.text}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
