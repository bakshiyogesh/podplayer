import { Grid } from '@mui/material';
import PodCard from 'components/common/podcastsCard/PodcastCard';
import PlayListPlayer from 'components/common/playlistPlayer/PlaylistPlayer';


const Home = () => {
  return (
    <Grid sx={{display:'flex',width:'100vw'}}>
    <PodCard/>
    <PlayListPlayer/>
    </Grid>
  )
}

export default Home;