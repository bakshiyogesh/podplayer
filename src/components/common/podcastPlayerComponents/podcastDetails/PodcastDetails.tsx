import { Grid, Typography } from '@mui/material'
import  { FC } from 'react'
import { podData } from 'interface/types';

interface dataPod{
    dataPodCast:podData[]
}
const PodcastDetails:FC<dataPod> = ({dataPodCast}) => {
  return (
    <Grid sx={{width:'70vw'}}>{dataPodCast.map((item:any)=>{
        return(
          <>
       <Typography variant='h3' sx={{color:'white'}}>{item.title}</Typography>
       <Typography variant='h6' sx={{color:'white'}}>{item.audioLength}</Typography>
       <Typography component={'div'} sx={{color:'white',fontSize:'800',lineHeight:2}}>{item.description}</Typography>
       </>
        )
      })}</Grid>
  )
}

export default PodcastDetails