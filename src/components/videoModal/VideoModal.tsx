import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Model from './VideoSlider';
import { Grid } from '@mui/material';
import { FC } from 'react';
const style = {
  width: '100vw',
  height:'100vh',
  bgcolor: 'black',
  boxShadow: 24,
  p:1,
};
 type TransitionalProps={
  open:boolean,
  handleClose:()=>void;
 }
const TransitionsModal:FC<TransitionalProps>=({open,handleClose})=> {

  return (
    <Grid container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
          <Box sx={style}>
          <IconButton onClick={handleClose} sx={{ml:'85vw'}} color='primary'><CloseIcon/></IconButton>
            <Model/>
          </Box>
      </Modal>
    </Grid>
  );
}
export default TransitionsModal;