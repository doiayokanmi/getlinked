import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSlide({open, setOpen}: {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          className: 'bg-transparent', 
        }}
      >
        <DialogContent
          className='bg-transparent border border-primary rounded p-4'
          style={{ backdropFilter: 'blur(5px)' }} 
        >
          <DialogContentText
            id="alert-dialog-slide-description"
            className='text-white text-center'
          >
            <Image src={'/images/congratulation.png'} className='mx-auto' width={300} height={300} alt='' />
            <h1 className="font-bold text-2xl my-4">
            Congratulations <br /> you have successfully Registered!
            </h1>

            <p>
            Yes, it was easy and you did it! check your mail box for next step
            </p>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
