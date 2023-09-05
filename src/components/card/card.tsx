import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import podData from '../../constant/data';
import { FC } from 'react';
import { Grid } from '@mui/material';
import Podheader from '../podheader/podheader';

 const PodCard:FC=()=>{
    console.log("podcard data:",podData);
    
    return(
    <>
        <Grid container sx={{display:'flex'}} >
          <Podheader/>
          <Grid item sx={{m:3,background:'#979595',borderRadius:'4px',display:'flex',width:'70vw',justifyContent:'flex-start',flexWrap:'wrap'}} xs={10}>
    {podData.map((item)=>{
        return(
            <>
                <Card sx={{ Width:200,background:'#4C4946',m:3}}>
                <CardMedia
        component="img"
        height="194"
        image={item.imgSRC}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="#F8F8F8">
          {item.title}
        </Typography>
      </CardContent>
                </Card>
            </>
        )
      })}
      </Grid>
      <audio src='https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chrt.fm/track/G481GD/traffic.megaphone.fm/ADV8318757959.mp3' controls> </audio>
    </Grid>
    
    
    </>
    )
 }
export default PodCard;