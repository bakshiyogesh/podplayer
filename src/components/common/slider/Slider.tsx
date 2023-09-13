import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import CONST_VIDEO_DATA from 'constant/VideoData';
import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { videoData } from 'interface/types';
import { addVideoId } from 'services/storeRedux/slice/Slice';
interface VideoProps {
  videodata: videoData[];
}
const Slider:FC<VideoProps>= ({videodata}) => {
  // const slicedData=vide
  const dispatch=useDispatch();
  // const handlerVideoIdChange=useCallback((index:any):void=>{
  //   dispatch(addVideoId(index.activeIndex));
  // },[])
    return(
    <Swiper
        direction={"horizontal"}
        slidesPerView={6}
        spaceBetween={15}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        {videodata.map((item:any,index:number) => {
          return (
            <SwiperSlide key={item.id} onClick={()=>dispatch(addVideoId(item.id))}>
              <img src={item.imgSRC}  alt="number" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
}

export default Slider;