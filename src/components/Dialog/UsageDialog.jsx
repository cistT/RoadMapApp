import {useState} from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button} from '@mui/material';

const UsageDialog=()=>{
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
    <>
            <Button onClick={handleClickOpen} style={{width:"60px",color:"white"}}>
                使い方
            </Button>

      <Dialog open={open} onClose={handleClose}>

        <DialogTitle>使い方</DialogTitle>

        <DialogContent style={{display: 'flex',whiteSpace: 'pre-line'}} >
            <div style={{width:'40vw'}}>
                制作中
                {/* <DialogContentText>
                    地図の見方
                </DialogContentText>

                <DialogContentText>
                    サイドメニューの見方
                </DialogContentText>

                <DialogContentText>
                    詳細の見方
                </DialogContentText> */}
            </div>

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>戻る</Button>
        </DialogActions>

      </Dialog>
    </>
    )
}

export default UsageDialog;