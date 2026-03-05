import Link from 'next/link';
import clsx from 'clsx';

export type CTAButtonItem = {
  label: string;
  linkType: string;
  url: string;
  style: string;
};

export function CTAButton({ button }: { button: CTAButtonItem }) {
  return (
    <Link
      href={button.url || '#'}
      passHref
      target={button.linkType === 'external' ? '_blank' : '_self'}
    >
      <button
        className={clsx(
          'self-start font-semibold tracking-tight px-6 py-3 rounded-full transition-colors ease-in-out duration-300 cursor-pointer border border-white',
          {
            'bg-purple-700 hover:bg-purple-800 text-white': button.style === 'primary',
            'bg-white/60 hover:bg-white text-purple-800': button.style === 'secondary',
            'bg-transparent hover:bg-black/20 text-white': button.style === 'tertiary',
          }
        )}
      >
        {button.label}
      </button>
    </Link>
  );
}
