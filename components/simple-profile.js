export function SimpleProfile() {
  return (
    <div>
      <p className="relative py-12 text-5xl text-center text-white">Profile</p>
      <div className=" md:flex content-start ">
        <ul className="md:w-1/2 flex-none content-center px-10">
          <li className="flex items-center justify-center">
            <img src="images/faceimg.png" className="w-48 h-48 rounded-full " />
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
    </div>
  );
}
