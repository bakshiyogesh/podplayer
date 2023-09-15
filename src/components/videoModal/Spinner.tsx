import CircularProgress from '@mui/material/CircularProgress';
import { Box, Grid } from '@mui/material';

export default function Spinner() {

  return (
    <Grid container sx={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Box>
        <CircularProgress color="primary" size={100}/>
        </Box>
    </Grid>
  );
}
