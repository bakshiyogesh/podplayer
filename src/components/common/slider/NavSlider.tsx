import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import {FC,useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import { videoData } from 'interface/types';
import { addVideoData, addVideoId } from 'services/storeRedux/slice/Slice';
import TransitionsModal from 'components/videoModal/VideoModal';
interface VideoProps {
  videodata:videoData[];
}
const Slider:FC<VideoProps>= ({videodata}) => {
  
  
  const [open, setOpen] = useState(false);
  const handleOpen= () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(addVideoData(videodata))
    console.log("effect checking running or not");
    console.log("videoData in effect:",videodata);
  },[dispatch]);
    return(
      <>
    <Swiper
        direction={"horizontal"}
        slidesPerView={6}
        spaceBetween={15}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        {videodata.map((item:any) => {
          return (
            <SwiperSlide key={item.id} className='main-slider'>
              <img src={item.imgSRC}  alt="number" onClick={()=>{
              dispatch(addVideoId(item.id));
              handleOpen();
            }}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <TransitionsModal open={open} handleClose={handleClose}/>
      </>
    )
}

export default Slider;

