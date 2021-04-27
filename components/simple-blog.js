import Link from 'next/link';

export function SimpleBlog(props) {
  console.log(props.data[0]);
  return (
    <div className="pb-5">
      <p className="relative py-12 text-5xl text-center text-white">Blog</p>
      <div className=" md:flex content-start ">
        <ul className="w-full h-full md:flex content-center px-10">
          {props.data.map(({ id, date, title }) => (
            <li className="md:w-1/2 items-center justify-center" key={id}>
              <p className="text-center ">{title}</p>
              <br />
              <p className="text-center">投稿日:{date}</p>
              <Link href={'/posts/' + id}>
                <a className="item-center bg-gray-700"> 記事へ</a>
              </Link>
              <p className="text-center">{id}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* {props.allPostData && props.allPostData.length > 0 ? (
        <ul className="md:w-1/2 flex-none content-center px-10">
          <li className="flex items-center justify-center">
            <img src={props.allPostData.img} className="w-48 h-48 rounded-full" />
          </li>
          <li className=" text-lg font-bold text-center text-red-400 uppercase">
            {props.allPostData.title}
          </li>
          <li className="text-base italic font-italic leading-snug text-center text-gray-300">
            {props.allPostData.date}
          </li>
        </ul>
      ) : null} */}
    </div>
  );
}
