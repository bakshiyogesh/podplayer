import { Grid, Typography } from '@mui/material';
import { FC } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
type Props = {}
const PlayListplayer  :FC= (props: Props) => {
  return (<>
     <Grid container sx={{background:' #2D2D2D',width:'100vw',borderRadius:'4px',maxHeight:'18vh'}}>
      <Grid item direction={'row'}>
        <HomeIcon/><Typography component='h6'  color={'white'} fontSize={"large"} sx={{background:'',border:'2px solid whitesmoke'}}>Home</Typography>
        <Typography  component='div' sx={{fontStyle:'italic'}} color={'white'} fontSize={"large"}><SearchIcon/>Search</Typography>
        </Grid>
    </Grid>
        </>
  )
}
export default PlayListplayer;