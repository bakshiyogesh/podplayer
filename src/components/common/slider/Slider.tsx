import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import CONST_VIDEO_DATA from 'constant/VideoData';
import { FC } from 'react';
const Slider:FC = () => {
    return(
    <Swiper
        direction={"horizontal"}
        slidesPerView={6}
        spaceBetween={15}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        {CONST_VIDEO_DATA.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img src={item.imgSRC}  alt="number" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
}

export default Slider;