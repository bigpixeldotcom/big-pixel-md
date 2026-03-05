'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogPanel } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@awesome.me/kit-85090e0c99/icons/classic/regular';

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navList = [
    {
      label: 'About Big Pixel®',
      slug: '/about',
    },
    {
      label: 'Work',
      slug: '/work',
    },
    {
      label: 'Services',
      slug: '/services',
    },
    {
      label: 'Blog',
      slug: '/blog',
    },
  ];

  return (
    <header className="z-50 fixed top-6 lg:top-9 w-full">
      <div className="w-full max-w-7xl px-6 lg:mx-auto">
        <nav
          aria-label="Global"
          className="w-full p-4 bg-white/60 dark:bg-black/60 rounded-full outline-1 outline-white dark:outline-metal-950 backdrop-blur-sm inline-flex justify-between items-center overflow-hidden shadow-lg shadow-metal-300/30 dark:shadow-black/60"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <div className="size-10 relative">
                <span className="sr-only">Big Pixel</span>
                <Image src="/brand/nav-icon.svg" width={40} height={40} alt="" />
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-metal-700 dark:text-metal-400 cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} aria-hidden="true" className="text-2xl" />
            </button>
          </div>
          <div className="hidden lg:flex gap-x-12">
            {navList.map((nav) => (
              <Link
                key={nav.label}
                href={nav.slug || '#'}
                className="font-semibold tracking-tight px-6 py-3 rounded-full bg-transparent hover:bg-white dark:hover:bg-black transition-colors ease-in-out duration-300"
              >
                {nav.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="font-semibold text-purple-800 dark:text-purple-400 tracking-tight px-6 py-3 rounded-full bg-transparent hover:bg-white dark:hover:bg-black transition-colors ease-in-out duration-300"
            >
              Contact me
            </Link>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel
            transition
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black-900 p-6"
          >
            <div className="flex items-center justify-between">
              <Link href="/">
                <div className="size-10 relative">
                  <span className="sr-only">Big Pixel</span>
                  <Image src="/brand/nav-icon.svg" width={40} height={40} alt="" />
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-metal-700 dark:text-metal-400 cursor-pointer"
              >
                <span className="sr-only">Close menu</span>
                <FontAwesomeIcon icon={faXmark} aria-hidden="true" className="text-2xl" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-metal-100 dark:divide-metal-700">
                <div className="space-y-2 py-6">
                  {navList.map((nav) => (
                    <Link
                      key={nav.label}
                      href={nav.slug || '#'}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                    >
                      {nav.label}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-purple-800 dark:text-purple-400"
                  >
                    Contact me
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </header>
  );
}
