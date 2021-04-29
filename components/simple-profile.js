export function SimpleProfile() {
  return (
    <div>
      <p className="relative py-12 text-4xl text-center text-white">Profile</p>
      <div className=" md:flex content-start ">
        <ul className="md:w-1/2 flex-none content-center px-10 md:border-r md:border-b-0 border-b mb-5">
          <li className="flex items-center justify-center">
            <img src="images/faceimg.png" className="w-48 h-48 rounded-full " />
          </li>
          <li className=" text-lg font-italic text-center text-red-400">Yuto Nakai (bin)</li>
          <li className="text-base italic font-italic leading-snug text-center text-gray-300">
            Dec.10th,1997
          </li>
        </ul>

        <div className="flex text-center px-5">
          <p className="text-lg text-gray-200 text-center">
            初めまして、binです。
            <br />
            関西でエンジニアとして働いてます。
            <br />
            <br />
            主に.Net(C#)を使用したシステム開発、
            <br />
            TypeScript,Next.js辺りを使用したWebアプリやサイト制作メインで活動しています。
            <br />
            <br />
            お問い合わせ等はメニューのContact欄からご覧ください。
          </p>
        </div>
      </div>
    </div>
  );
}
