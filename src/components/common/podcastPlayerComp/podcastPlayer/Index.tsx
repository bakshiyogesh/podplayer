import { Card, CardContent, CardMedia, Grid,Typography } from '@mui/material'
import { FC } from 'react'
import PodcastDetails from '../podcastDetails/PodcastDetails';
import AudioPlayer from '../../audioComp/AudioPlayer'
import { podData } from '../../../../interface/types';

interface dataPod{
    dataPodcast:podData[]
}
const PodcastPlayer:FC<dataPod> = ({dataPodcast}) => {
    const backGround='../../../public/background.jpg'
  return (
   <>
     
     <Grid container
        sx={{
          width: "100vw",
          height: "50vh",
          backgroundImage:`url(${backGround})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          WebkitBackgroundSize:'cover',
          mt:2
        }}/>
        <Grid  container sx={{display:'flex',width:'100vw',background:'#2D2D2D'}}>
     <Grid item sx={{borderRadius:'4px',display:'flex',maxWidth:'40vw',justifyContent:'flex-start',flexWrap:'wrap'}} >
    {dataPodcast.map((item:any)=>{
        return(
            <>
                <Card sx={{ Width:200,background:'#1F1E1E',m:3}} key={item.id}>
                <CardMedia
        component="img"
        height="194"
        image={item.imgSRC}
        alt="Paella dish"
        sx={{"&:hover": {
          transform: 'scale(1.1)',
        }}}
      />
      <CardContent>
        <Typography variant="body2" color="#F8F8F8">
          {item.title}
        </Typography>
      </CardContent>
                </Card>
            </>
        )
      })}
      </Grid>
     <PodcastDetails dataPodCast={dataPodcast}/>
    </Grid>
     <AudioPlayer selectData={dataPodcast}/>
    </>
  )
}

export default PodcastPlayer;