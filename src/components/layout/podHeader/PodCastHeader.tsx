import { Grid, Typography } from '@mui/material'
import  { FC } from 'react'


const PodCastHeader:FC = () => {
  return (
    <Grid sx={{background:' linear-gradient(156deg, rgba(158,41,185,1) 0%, rgba(0,0,1,1) 0%, rgba(29,121,70,1) 57%)',width:'60vw',borderRadius:'4px',maxHeight:'20vh'}}>
        <Typography variant='h1' color={'white'} sx={{fontSize:'600',fontStyle:"oblique"}}>Podcasts</Typography>
        <Typography  variant='h5' sx={{fontStyle:'italic'}} color={'white'} >Best episodes of the week</Typography>
    </Grid>
  )
}

export default PodCastHeader;