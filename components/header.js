import Logo from './logo';

export const siteTitle = 'Next.js Sample Website';

export default function Header({}) {
  return (
    <div className="flex content-start bg-gray-700 shadow w-screen">
      <div className="w-1/3 p-2 flex justify-start h-full">
        <p className="w-1/4 text-xs text-right text-white uppercase">Home</p>
        <p className="w-1/4 text-xs text-right text-gray-300 uppercase">Work</p>
        <p className="w-1/4 text-xs text-right text-gray-300 uppercase">About</p>
        <p className="w-1/4 text-xs text-right text-gray-300 uppercase">Blog</p>
      </div>
      <Logo width={100} height={50} className="w-1/3 p-2" />
      <div className="w-1/3 p-2 flex space-x-6  justify-end w-32 h-1/2">
        <p className="w-1/5 h-full text-2xl text-center"></p>
        <p className="w-1/5 h-full text-2xl text-center"></p>
        <p className="w-1/5 h-full text-2xl text-center"></p>
      </div>
    </div>
  );
}
