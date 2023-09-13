import Slider from "components/common/slider/Slider";
import Home from "components/layout/Index";
import PodHeader from 'components/layout/podHeader/PodCastHeader';
import CONST_VIDEO_DATA from "constant/VideoData";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "services/storeRedux/store/Store";
const HomePage:FC= () => {
  const selectedID=useSelector((state:RootState)=>state.podcast.id);
  console.log("selected Id:",selectedID);
  return (
    <>
    <PodHeader/>
    <Slider videodata={CONST_VIDEO_DATA}/>
    <Home/>
    </>
  )
}

export default HomePage;