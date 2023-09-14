import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./style.css";
import { Navigation ,EffectCoverflow} from "swiper/modules";
import { useSelector } from "react-redux";
import { RootState } from "services/storeRedux/store/Store";
import CONST_VIDEO_DATA from "constant/VideoData";
export default function Model() {
  const selector=useSelector((state:RootState)=>state.podcast.videoData);
  const selectedID=useSelector((state:RootState)=>state.podcast.id);
  const videoData=CONST_VIDEO_DATA.slice(selectedID-1);
  console.log("selector data:",selector);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper:any) => {
    setActiveIndex(swiper.realIndex);
  };
  console.log("activeIndex:",activeIndex);
  
  return (
    <>
      <Swiper
        effect={"coverflow"}
        navigation={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 0,
          stretch:20,
          depth: 450,
          modifier:3,
          slideShadows: true,
        }}
        modules={[EffectCoverflow,Navigation]}
        className="mySwipe"
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {videoData.map((element,index)=>{
          console.log("element.id",element.id)
          return(
            <SwiperSlide key={element.id} >
              <video width="330" height="360"  src={element.videoURL} controls={activeIndex===index?true:false} onContextMenu={(e)=>e.preventDefault()} controlsList="nodownload" autoPlay={activeIndex===index?true:false}/>
                            
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}
