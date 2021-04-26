export function Profile() {
  return (
    <main className="relative bg-gray-700 shadow w-screen min-h-screen">
      <p className="relative py-12 text-5xl text-center text-white">Profile</p>
      <div className=" md:flex content-start w-screen ">
        <ul className="md:w-1/2 flex-none content-center px-10">
          <li className="flex items-center justify-center">
            <img src="images/profile.jpg" className="w-48 h-48 rounded-full " />
          </li>
          <li className=" text-lg font-bold text-center text-red-400 uppercase">Lorem Ipsum</li>
          <li className="text-base italic font-italic leading-snug text-center text-gray-300">
            Jan 13th, 2018
          </li>
        </ul>

        <div className="flex text-center">
          <p className="text-2xl text-white text-center">
            Lorem Ipsum dolor sitLorem Ipsum dolor sit
            <br />
            amet consecteturaaaaaaaaaa
            <br />
            amet consecteturLorem Ipsum dolor sit
            <br />
            amet consecteturLorem Ipsum dolor sit
            <br />
            amet consecteturLorem Ipsum dolor sit
            <br />
            amet consecteturLorem Ipsum dolor sit
            <br />
            amet consectetur
          </p>
        </div>
      </div>
      {/* <div
        className="relative absolute"
        style={{ width: 237.83, height: 49.32, left: 151.89, top: 587.66 }}
      >
        <div className="inline-flex items-center justify-center w-60 h-12 px-20 py-4 bg-gradient-to-r from-red-400 to-purple-500 rounded-lg">
          <p className="flex-1 h-full text-xs font-bold text-white uppercase">READ ARTICLE</p>
        </div>
        <p className="w-9 h-12 absolute right-0 bottom-0 text-2xl leading-tight text-center text-white">
          keyboard_arrow_right
        </p>
      </div>
      <div
        className="relative absolute"
        style={{ width: 237.83, height: 49.32, left: 627.56, top: 587.66 }}
      >
        <div className="inline-flex items-center justify-center w-60 h-12 px-20 py-4 bg-gradient-to-r from-red-400 to-purple-500 rounded-lg">
          <p className="flex-1 h-full text-xs font-bold text-white uppercase">READ ARTICLE</p>
        </div>
        <p className="w-9 h-12 absolute right-0 bottom-0 text-2xl leading-tight text-center text-white">
          keyboard_arrow_right
        </p>
      </div>
      <div
        className="relative absolute"
        style={{ width: 237.83, height: 49.32, left: 1103.23, top: 585.99 }}
      >
        <div className="inline-flex items-center justify-center w-60 h-12 px-20 py-4 bg-gradient-to-r from-red-400 to-purple-500 rounded-lg">
          <p className="flex-1 h-full text-xs font-bold text-white uppercase">READ ARTICLE</p>
        </div>
        <p className="w-9 h-12 absolute right-0 bottom-0 text-2xl leading-tight text-center text-white">
          keyboard_arrow_right
        </p>
      </div> */}
    </main>
  );
}
