import { Grid } from '@mui/material';
import PodCard from '@components/common/card/Card';
import PlayListPlayer from '@components/common/playlisPlayer/PlaylistPlayer';


const LayoutHome = () => {
  return (
    <Grid sx={{display:'flex'}}>
    <PodCard/>
    <PlayListPlayer/>
    </Grid>
  )
}

export default LayoutHome;