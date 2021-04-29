import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SimpleProfile } from './simple-profile';
import { SimpleBlog } from './simple-blog';

export function SimpleSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="pb-12">
      <Slider className="w-4/5 md:w-2/3 mx-auto bg-gray-800 rounded-3xl py-8" {...settings}>
        <div>
          <SimpleProfile />
        </div>
        <div>
          <SimpleBlog data={props.data} />
        </div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
      </Slider>
    </div>
  );
}
