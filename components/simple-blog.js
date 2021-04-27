import Link from 'next/link';

export function SimpleBlog(props) {
  console.log(props.data[0]);
  return (
    <div className="pb-5">
      <p className="relative py-12 text-5xl text-center text-white">Blog</p>
      <div className=" md:flex content-start ">
        <ul className="w-full h-full md:flex content-center px-10">
          {props.data.slice(0, 2).map(({ id, date, title, img }, index) => (
            <li className="md:w-1/2 justify-center" key={id}>
              <img className="justify-center m-auto" src={img}></img>
              <br />
              <div className="text-center ">
                <Link href={'/posts/' + id}>
                  <a className="text-4xl text-red-200"> {title}</a>
                </Link>
              </div>
              <br />

              <p className="text-4xs text-gray-100 text-center  text-center">投稿日:{date}</p>
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
