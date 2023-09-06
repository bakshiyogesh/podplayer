import { useState, useRef, FC } from "react";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Forward10Icon from "@mui/icons-material/Forward10";
import Replay10Icon from '@mui/icons-material/Replay10';
import { Button, Grid } from "@mui/material";
interface AudioProps {
  selectData: any;
}

const AudioPlayer: FC<AudioProps> = ({ selectData }) => {
  console.log("selectedData", selectData);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const togglePlay = () => {
    if (audioRef.current!.paused) {
      audioRef.current!.play();
      setIsPlaying(true);
    } else {
      audioRef.current!.pause();
      setIsPlaying(false);
    }
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current!.currentTime);
    setDuration(audioRef.current!.duration);
  };
const handleForwTenSeconds=()=>{
  console.log("curentTime:",currentTime);
  const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60)
    console.log("minutes:seconds",minutes,seconds);
    console.log("hours",Math.floor(minutes/60));
    console.log("minutes:",Math.floor(minutes%60));
    
  const afterTenSec=currentTime+10;
  audioRef.current!.currentTime=afterTenSec;
  setCurrentTime(afterTenSec);
}
const handleBackTenSec=()=>{
  const beforeTenSec=currentTime-10;
  audioRef.current!.currentTime=beforeTenSec;
  setCurrentTime(beforeTenSec);
  const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60)
    console.log("minutes:seconds",minutes,seconds);
    console.log("hours",Math.floor(minutes/60));
    console.log("minutes:",Math.floor(minutes%60));
}
  const handleSeek = (event: any, newValue: any) => {
    console.log("duration:",duration);
    console.log("neValue",newValue)
    const newTime = (newValue / 100) * duration;
    console.log("duration:", duration);

    console.log("newTime:", newTime);
    audioRef.current!.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handlemutedChange = (event: any,) => {
    audioRef.current!.muted = !audioRef.current?.muted;
    setMuted(!muted);
  };
  
  return (
    <Grid container sx={{ background: "#454545",width:'100vw'}}>
      <audio
        ref={audioRef}
        src={selectData[0].audioURL}
        onTimeUpdate={handleTimeUpdate}
      />
      <IconButton onClick={togglePlay}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <Slider
        value={(currentTime / duration) * 100}
        onChange={handleSeek}
        min={0}
        max={100}
        aria-labelledby="muted-slidMr"
        style={{ width: "320px" }}
        sx={{ m: 2 }}
      />
      <IconButton onClick={handlemutedChange}>
        {muted ?<VolumeOffIcon />:<VolumeUpIcon/>}
      </IconButton>
      <Button onClick={handleForwTenSeconds} disabled={currentTime>=duration}><Forward10Icon sx={{ m: 2 }} /></Button>
      <Button onClick={handleBackTenSec} disabled={!currentTime}><Replay10Icon sx={{m:1}}/></Button>
    </Grid>
  );
};

export default AudioPlayer;
