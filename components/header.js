import Logo from './logo';

export const siteTitle = 'Next.js Sample Website';

export default function Header({}) {
  return (
    <header className="flex content-start bg-gray-700 shadow w-screen h-auto">
      <div className="w-1/3 p-2 flex justify-start ">
        <p className="w-1/5 text-xs text-center text-gray-300 uppercase py-2 m-2">Home</p>
        <p className="w-1/5 text-xs text-center text-gray-300 uppercase py-2 m-2">Work</p>
        <p className="w-1/5 text-xs text-center text-gray-300 uppercase py-2 m-2">About</p>
        <p className="w-1/5 text-xs text-center text-gray-300 uppercase py-2 m-2">Blog</p>
      </div>

      <Logo width={100} height={50} className="w-1/3 py-2 m-2" />

      <div className="w-1/3 p-2 flex space-x-6  justify-end ">
        <p className="w-1/5 h-full text-xm text-center py-2 m-1">
          <img src="images/twitter.svg"></img>
        </p>
        <p className="w-1/5 h-full text-xm text-center py-2 m-1">
          <img src="images/github.svg"></img>
        </p>
        <p className="w-1/5 h-full text-xm text-center py-2 m-1">
          <img src="images/twitch.svg"></img>
        </p>
      </div>
    </header>
  );
}
