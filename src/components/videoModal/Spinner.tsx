import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from '@mui/material';

export default function Spinner() {

  return (
    <Grid sx={{width:'100vw',height:'100vh'}}>
        <CircularProgress color="primary" />
    </Grid>
  );
}
