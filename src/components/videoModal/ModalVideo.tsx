import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Model from './Modal';
import { Grid } from '@mui/material';
const style = {
  width: '100vw',
  height:'100vh',
  bgcolor: 'black',
  boxShadow: 24,
  p:1,
};

export default function TransitionsModal({open,handleClose}) {

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
          <Button onClick={handleClose} sx={{direction:'rtl'}}>Close</Button>
            <Model/>
          </Box>
      </Modal>
    </Grid>
  );
}