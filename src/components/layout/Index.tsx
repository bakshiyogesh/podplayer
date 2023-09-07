import { Grid } from '@mui/material';
import PodCard from '../common/card/Card';
import PlayListplayer from '../common/playlisPlayer/PlaylistPlayer';


const LayoutHome = () => {
  return (
    <Grid sx={{display:'flex'}}>
    <PodCard/>
    <PlayListplayer/>
    </Grid>
  )
}

export default LayoutHome;