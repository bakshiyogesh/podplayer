import { Grid, Typography } from '@mui/material'
import React, { FC } from 'react'

type Props = {}

const Podheader:FC = (props: Props) => {
  return (
    <Grid sx={{background:'linear-gradient(156deg, rgba(158,41,185,1) 0%, rgba(0,0,1,1) 0%, rgba(1,45,54,1) 9%)',width:'100%'}}>
        <Typography variant='h1'>Podcasts</Typography>
    </Grid>
  )
}

export default Podheader;