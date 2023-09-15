import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./style.css";
import { Navigation ,EffectCoverflow} from "swiper/modules";
import { useSelector } from "react-redux";
import { RootState } from "services/storeRedux/store/Store";
import Spinner from "components/videoModal/Spinner";
// import CONST_VIDEO_DATA from "constant/VideoData";
export default function Model() {
  const selectedID=useSelector((state:RootState)=>state.podcast.id);
  console.log("selectedID:",selectedID);
  
  const videoDataSelected=useSelector((state:RootState)=>state.podcast.videoData);
  console.log("videoSelectedD from modal:",videoDataSelected);
  
  const videoData=videoDataSelected[0].slice(selectedID-1);
  console.log("after slicing data of videos:",videoData);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const[snapIndex,setSnapIndex]=useState(0);


  const handleSlideChange = useCallback((swiper:any) => {
    setActiveIndex(swiper.realIndex);
    setSnapIndex(swiper.snapIndex);
  },[]);
  return (
    <>
    {videoDataSelected.length<=0 ? <Spinner/>:
    <Swiper
        effect={"coverflow"}
        navigation={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={60}
        coverflowEffect={{
          rotate: 0,
          stretch:20,
          depth: 250,
          modifier:3,
          slideShadows: true,
        }}
        autoplay
        modules={[EffectCoverflow,Navigation]}
        className="mySwipe"
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {videoData.length>0&&videoData.map((element,index)=>{
          return(
            <SwiperSlide key={element.id}>
              <video width="330" height="360"  src={element.videoURL} controls={activeIndex===index?true:false} onContextMenu={(e)=>e.preventDefault()} controlsList="nodownload" autoPlay={element.autoplay} loop/>  
                            
            </SwiperSlide>
          )
        })}
      </Swiper>}
    </>
  );
}
