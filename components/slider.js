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
  const slider = {
    background: 'rgb(70,86,99)',
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '30px',
  };
  return (
    <div className="pb-12">
      <Slider style={slider} {...settings}>
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
