import Link from 'next/link';

export function SimpleBlog(props) {
  return (
    <div className="pb-5">
      <p className="relative py-12 text-4xl text-center text-white">Blog</p>
      <div className=" md:flex content-start ">
        <ul className="w-full h-full md:flex content-center px-10">
          {props.data.slice(0, 2).map(({ id, date, title, img }) => (
            <li className="md:w-1/2 justify-center" key={id}>
              <img className="justify-center m-auto" src={img} width="60"></img>
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
    </div>
  );
}
