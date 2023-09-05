import { Grid, Typography } from '@mui/material'
import { FC } from 'react'

interface dataPod{
    dataPodcast:any
}
const Podcastplayer:FC<dataPod> = ({dataPodcast}) => {
  return (
    <Grid>
     <Grid item><Typography variant='h1'>NOne</Typography></Grid>
    </Grid>
  )
}

export default Podcastplayer