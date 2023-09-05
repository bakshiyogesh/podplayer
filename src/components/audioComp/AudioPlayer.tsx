import { Button, Grid } from '@mui/material';
import React, { useState, useRef, FC } from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
type Props = {}
interface AudioProps{
    selectData:any
}

const AudioPlayer:FC<AudioProps> = ({selectData}) => {
    console.log("selectedData",selectData);
    
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef= useRef<HTMLAudioElement>(null);
    const togglePlay = () => {
        if (audioRef.current?.paused) {
          audioRef.current.play();
          setIsPlaying(true);
        } else {
          audioRef.current?.pause();
          setIsPlaying(false);
        }
      }
  return (
    <Grid>
        <audio  ref={audioRef}>
            <source src={selectData} type='audio/mpeg'/>
        </audio>
        <Button onClick={()=>togglePlay}>{isPlaying?<PauseCircleFilledIcon/>:<PlayCircleFilledIcon/>}</Button>
    </Grid>
  )
}

export default AudioPlayer;