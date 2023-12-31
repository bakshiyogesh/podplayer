import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CONST_POD_DATA from 'constant/Data';
import { useDispatch } from "react-redux";
import {addPodData} from 'services/storeRedux/slice/Slice';
import { FC } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

 const PodCard:FC=()=>{
    const dispatch=useDispatch();

    return(
    <>
        <Grid container sx={{display:'flex'}} maxWidth={'100%'}>
          <Grid item sx={{background:'#1F1E1E',borderRadius:'4px',display:'flex',maxWidth:'60vw',justifyContent:'flex-start',flexWrap:'wrap'}} >
    {CONST_POD_DATA.map((item)=>{
        return(
            <>
                <Card sx={{ Width:200,background:'#1F1E1E',m:3}} key={item.id}>
                  <Link to={`/podcasts`}>
                <CardMedia
        component="img"
        height="194"
        image={item.imgSRC}
        alt="Paella dish"
        sx={{"&:hover": {
          transform: 'scale(1.1)',
        }}}
        onClick={()=>dispatch(addPodData(item))}
      />
      </Link>
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
    </Grid>
    
    
    </>
    )
 }
export default PodCard;