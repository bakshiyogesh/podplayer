import { Grid } from '@mui/material';
import React from 'react'
import PodCard from '../../common/card/card';
import PlayListplayer from '../../common/playlisplayer/playlistplayer';

type Props = {}

const LayoutHome = (props: Props) => {
  return (
    <Grid sx={{display:'flex'}}>
    <PodCard/>
    <PlayListplayer/>
    </Grid>
  )
}

export default LayoutHome;