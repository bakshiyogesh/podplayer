import { Grid, Typography } from '@mui/material';
import { FC } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
const PlayListPlayer  :FC= () => {
  return (
     <Grid container sx={{background:' #2D2D2D',width:'100%',borderRadius:'5px',maxHeight:'18vh'}} flexDirection={'column'} justifyContent={'center'}>
        <Typography component='h6'  color={'white'} fontSize={"large"} sx={{background:'',border:'1px solid #DEE2E2',borderRadius:'4px',m:1}}><HomeIcon/>Home</Typography>
        <Typography  component='h3' sx={{fontStyle:'italic',border:'1px solid #DEE2E2',borderRadius:'4px',m:1}} color={'white'} fontSize={"large"}><SearchIcon/>Search</Typography>
    </Grid>
  )
}
export default PlayListPlayer;