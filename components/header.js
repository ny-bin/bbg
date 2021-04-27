import Link from 'next/link';
import Logo from './logo';
import React, { useState } from 'react';
import { Burger } from './burger';
import { useRouter } from 'next/dist/client/router';

export function Header(props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    // <header className="container mx-auto">
    //   {/* <Burger open={open} setOpen={setOpen} /> */}
    //   <div className="">
    //     <button className="" onClick={() => setOpen(!open)}>
    //       <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
    //         <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
    //       </svg>
    //     </button>
    //   </div>
    //   <nav className="w-1/3 p-2 flex justify-start text-gray-100">
    //     <Link href="/" onClick={() => setOpen(!open)}>
    //       <a
    //         className={
    //           router.pathname == '/'
    //             ? 'w-1/5 text-xs text-center uppercase py-2 m-1 text-red-300'
    //             : 'w-1/5 text-xs text-center uppercase py-2 m-1'
    //         }
    //       >
    //         Home
    //       </a>
    //     </Link>
    //     <Link href="/blog" onClick={() => setOpen(!open)}>
    //       <a
    //         className={
    //           router.pathname == '/blog'
    //             ? 'w-1/5 text-xs text-center uppercase py-2 m-1 text-red-300'
    //             : 'w-1/5 text-xs text-center uppercase py-2 m-1'
    //         }
    //       >
    //         Blog
    //       </a>
    //     </Link>
    //     <p className="w-1/5 text-xs text-center uppercase py-2 m-1">About</p>
    //     <p className="w-1/5 text-xs text-center uppercase py-2 m-1">Work</p>
    //   </nav>

    //   <Logo width={100} height={55} className="w-1/3 py-2 m-2" />

    //   {/* <div className="w-1/3 py-2 px-10 flex space-x-6  justify-end  ">
    //     <p className="w-1/10 h-full py-2 m-1">
    //       <img src="images/twitter.svg"></img>
    //     </p>
    //     <p className="w-1/10 h-full py-2 m-1">
    //       <img src="images/github.svg"></img>
    //     </p>
    //     <p className="w-1/10 h-full py-2 m-1">
    //       <img src="images/twitch.svg"></img>
    //     </p>
    //   </div> */}
    // </header>
    <div className="bg-gray-800 pb-16 md:pb-0">
      <header className="container mx-auto text-white">
        <div className="flex justify-between items-center fixed w-full left-0 bg-gray-800 md:static z-10 h-16">
          <Logo width={100} height={55} />
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
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
              <a href="#" class="block px-8 py-1 my-1 hover:bg-gray-600 rounded">
                HRとは
              </a>
            </li>
            <li class="border-b md:border-none">
              <a href="#" class="block px-8 py-1 my-1 hover:bg-gray-600 rounded">
                機能一覧
              </a>
            </li>
            <li class="border-b md:border-none">
              <a href="#" class="block px-8 py-1 my-1 hover:bg-gray-600 rounded">
                料金プラン
              </a>
            </li>
            <li class="border-b md:border-none">
              <a href="#" class="block px-8 py-1 my-1 hover:bg-gray-600 rounded">
                お知らせ
              </a>
            </li>
            <li>
              <a href="#" class="block px-8 py-1 my-1 hover:bg-gray-600 rounded">
                お問い合わせ
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
