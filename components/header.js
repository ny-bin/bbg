import Logo from './logo';

export function Header() {
  return (
    <header className="flex content-start shadow h-16">
      <div className="w-1/3 p-2 flex justify-start ">
        <p className="w-1/5 text-xs text-center text-gray-300 uppercase py-2 m-1">Home</p>
        <p className="w-1/5 text-xs text-center text-gray-300 uppercase py-2 m-1">Work</p>
        <p className="w-1/5 text-xs text-center text-gray-300 uppercase py-2 m-1">About</p>
        <p className="w-1/5 text-xs text-center text-gray-300 uppercase py-2 m-1">Blog</p>
      </div>

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
