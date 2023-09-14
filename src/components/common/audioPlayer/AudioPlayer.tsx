import { useState, useRef, FC,useCallback} from "react";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Forward10Icon from "@mui/icons-material/Forward10";
import Replay10Icon from '@mui/icons-material/Replay10';
import { Button, Grid,} from "@mui/material";
import {podData} from 'interface/types';
interface AudioProps {
  selectData: podData[];
}

const AudioPlayer: FC<AudioProps> = ({ selectData }) => {

  const audioRef = useRef<HTMLAudioElement>(null);
  const[state,setState]=useState({isPlay:false,isMuted:false,duration:0,currentTime:0});

  const togglePlay = useCallback(()=> {
    if (audioRef.current!.paused) {
      audioRef.current!.play();
      setState({...state,isPlay:true});
    } else {
      audioRef.current!.pause();
     setState({...state,isPlay:false});
    }
},[state]);
  const handleTimeUpdate =useCallback(()=> {
    setState({...state,currentTime:audioRef.current!.currentTime,duration:audioRef.current!.duration  });
    // setState({...state,duration:audioRef.current!.duration});
  },[state]);
const handleForwTenSeconds=useCallback(()=>{  
  const afterTenSec=state.currentTime+10;
  audioRef.current!.currentTime=afterTenSec;
  setState({...state,currentTime:afterTenSec});
},[state]);
const handleBackTenSec=useCallback(()=>{
  const beforeTenSec=state.currentTime-10;
  audioRef.current!.currentTime=beforeTenSec;
  setState({...state,currentTime:beforeTenSec});
  
},[state]);
  const handleSeek =useCallback((e:Event,newValue: number|number[]) => {
    const newTime = (+newValue / 100) * state.duration;
    audioRef.current!.currentTime = newTime;
    setState({...state,currentTime:newTime});
  },[state]);

  const handlemutedChange=useCallback(()=> {
    audioRef.current!.muted = !audioRef.current!.muted;
    setState({...state,isMuted:!state.isMuted})
  },[state]);
  
  return (
    <Grid container sx={{ background: "#454545",width:'100vw'}}>
      <audio
        ref={audioRef}
        src={selectData[0].audioURL}
        onTimeUpdate={handleTimeUpdate}
      />
      <IconButton onClick={togglePlay}>
        {state.isPlay ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <Slider
        value={(+state.currentTime / state.duration) * 100}
        onChange={handleSeek}
        min={0}
        max={100}
        aria-labelledby="muted-slidMr"
        style={{ width: "320px" }}
        sx={{ m: 2 }}
      />
      <IconButton onClick={handlemutedChange}>
        {state.isMuted ?<VolumeOffIcon />:<VolumeUpIcon/>}
      </IconButton>
      <Button onClick={handleForwTenSeconds} disabled={state.currentTime>=state.duration}><Forward10Icon sx={{ m: 2 }} /></Button>
      <Button onClick={handleBackTenSec} disabled={!state.currentTime}><Replay10Icon sx={{m:1}}/></Button>
    </Grid>
  );
};

export default AudioPlayer;
