import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SimpleProfile } from './simple-profile';
import { SimpleBlog } from './simple-blog';

export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slider = {
    background: 'rgb(70,86,99)',
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '30px',
  };
  return (
    <div className="pb-12">
      <Slider style={slider} className="" {...settings}>
        <div>
          <SimpleProfile />
        </div>
        <div>
          <SimpleBlog />
        </div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
      </Slider>
    </div>
  );
};
