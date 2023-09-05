import { Grid } from '@mui/material'
import './App.css'
import PodCard from './components/card/card'
import PlayListplayer from './components/playlisplayer/playlistplayer'

function App() {

  return (
    <>
    <Grid sx={{display:'flex'}}>
   <PodCard/>
   <PlayListplayer/>
   </Grid>
      </>
  )
}

export default App
