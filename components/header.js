import Link from 'next/link';
import Logo from './logo';
import { useRouter } from 'next/dist/client/router';

export function Header(props) {
  const router = useRouter();
  return (
    <header className="flex content-start shadow h-16">
      <nav className="w-1/3 p-2 flex justify-start text-gray-100">
        <Link href="/">
          <a
            className={
              router.pathname == '/'
                ? 'w-1/5 text-xs text-center uppercase py-2 m-1 text-red-300'
                : 'w-1/5 text-xs text-center uppercase py-2 m-1'
            }
          >
            Home
          </a>
        </Link>
        <Link href="/blog">
          <a
            className={
              router.pathname == '/blog'
                ? 'w-1/5 text-xs text-center uppercase py-2 m-1 text-red-300'
                : 'w-1/5 text-xs text-center uppercase py-2 m-1'
            }
          >
            Blog
          </a>
        </Link>
        <p className="w-1/5 text-xs text-center uppercase py-2 m-1">About</p>
        <p className="w-1/5 text-xs text-center uppercase py-2 m-1">Work</p>
      </nav>

      <Logo width={100} height={55} className="w-1/3 py-2 m-2" />

      <div className="w-1/3 py-2 px-10 flex space-x-6  justify-end  ">
        <p className="w-1/10 h-full py-2 m-1">
          <img src="images/twitter.svg"></img>
        </p>
        <p className="w-1/10 h-full py-2 m-1">
          <img src="images/github.svg"></img>
        </p>
        <p className="w-1/10 h-full py-2 m-1">
          <img src="images/twitch.svg"></img>
        </p>
      </div>
    </header>
  );
}
