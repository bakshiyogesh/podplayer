import { Grid } from '@mui/material';
import PodCard from '../../components/card/card';
import PlayListplayer from '../../components/playlisplayer/playlistplayer';
const Homepage = () => {
  return (
    <Grid sx={{display:'flex'}}>
    <PodCard/>
    <PlayListplayer/>
    </Grid>
  )
}

export default Homepage;