import Slider from "components/common/slider/Slider";
import Home from "components/layout/Index";
import PodHeader from 'components/layout/podHeader/PodCastHeader';
import CONST_VIDEO_DATA from "constant/VideoData";
import { FC } from "react";
const HomePage:FC= () => {
  return (
    <>
    <PodHeader/>
    <Slider videodata={CONST_VIDEO_DATA}/>
    <Home/>
    </>
  )
}

export default HomePage;