import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import {FC,useState} from 'react';
import { useDispatch } from 'react-redux';
import { videoData } from 'interface/types';
import { addVideoId } from 'services/storeRedux/slice/Slice';
import TransitionsModal from 'components/videoModal/ModalVideo';
interface VideoProps {
  videodata:videoData[];
}
const Slider:FC<VideoProps>= ({videodata}) => {
  
  const [open, setOpen] = useState(false);
  const handleOpen= () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const slicedData=vide
  const dispatch=useDispatch();
  // const handlerVideoIdChange=useCallback((index:any)=>{
  //   dispatch(addVideoId(index.activeIndex));
  //   setOpen(true);
  // },[])
    return(
      <>
    <Swiper
        direction={"horizontal"}
        slidesPerView={6}
        spaceBetween={15}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
        // onLoad={()=>dispatch(addVideoData(videodata))}
      >
        {videodata.map((item:any) => {
          return (
            <SwiperSlide key={item.id} onClick={()=>{
              dispatch(addVideoId(item.id));
              handleOpen();
            }} className='main-slider'>
              <img src={item.imgSRC}  alt="number" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <TransitionsModal open={open} handleClose={handleClose}/>
      </>
    )
}

export default Slider;

