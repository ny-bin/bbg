import Link from 'next/link';
import Logo from './logo';
import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

export function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-800 pb-16 md:pb-0">
      <header className="container mx-auto text-white">
        <div className="flex justify-between items-center fixed w-full left-0 bg-gray-800 md:static z-10 h-16">
          <Logo width={100} height={55} />
          <div className="md:hidden mx-8">
            <button className="py-5" onClick={() => setOpen(!open)}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className={open ? 'hidden' : undefined}
                  d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
                />
                <path
                  className={open ? undefined : 'hidden'}
                  d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={
            open
              ? 'mt-16 block fixed bg-gray-800 z-10 w-full left-0 md:block md:static md:mt-0'
              : 'hidden md:block'
          }
        >
          <ul class="md:flex md:justify-end">
            <li class="border-b md:border-none">
              <Link href="/">
                <a
                  className={
                    router.pathname == '/'
                      ? 'block px-8 py-1 my-1 hover:bg-gray-600 rounded text-red-300'
                      : 'block px-8 py-1 my-1 hover:bg-gray-600 rounded'
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li class="border-b md:border-none">
              <Link href="/profile">
                <a
                  className={
                    router.pathname == '/profile'
                      ? 'block px-8 py-1 my-1 hover:bg-gray-600 rounded text-red-300'
                      : 'block px-8 py-1 my-1 hover:bg-gray-600 rounded'
                  }
                >
                  Profile
                </a>
              </Link>
            </li>
            <li class="border-b md:border-none">
              <Link href="/blog">
                <a
                  className={
                    router.pathname == '/blog'
                      ? 'block px-8 py-1 my-1 hover:bg-gray-600 rounded text-red-300'
                      : 'block px-8 py-1 my-1 hover:bg-gray-600 rounded'
                  }
                >
                  Blog
                </a>
              </Link>
            </li>
            <li class="border-b md:border-none">
              <Link href="/contact">
                <a
                  className={
                    router.pathname == '/contact'
                      ? 'block px-8 py-1 my-1 hover:bg-gray-600 rounded text-red-300'
                      : 'block px-8 py-1 my-1 hover:bg-gray-600 rounded'
                  }
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
