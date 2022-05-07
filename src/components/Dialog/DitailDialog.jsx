import {useState} from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button} from '@mui/material';

import ProgressButtons from '../Button/ProgressButtons';
import SideMap from '../SideMap';

const DetailDialog=({
  listLabel,
  mapData,
  saveProgress=()=>undefined,
  variant,
  hideProgress=false
})=> {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant={variant}
        style={{width:"80%",textAngle:"center",color:'black'}}
      >
        {listLabel||mapData.place}
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
      >

        <DialogTitle>苦情個所 {mapData.place}</DialogTitle>

        <DialogContent style={{display: 'flex',whiteSpace: 'pre-line'}} >
            <div style={{width:'40vw'}}>
              <DialogContentText>
                大区分 {mapData.majorDivisions}<br/>
                苦情個所の詳細 {mapData.detail}<br/>
                内容 {mapData.contents}<br/>
                元のメッセージ<br/>
                {mapData.message}<br/>
              </DialogContentText>
              {hideProgress||(
                <ProgressButtons
                  saveProgress={saveProgress}
                  mapData={mapData}
                />
              )}
            </div>
            <SideMap mapData={mapData} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>戻る</Button>
        </DialogActions>

      </Dialog>

    </>
  );
}

export default DetailDialog;

//https://mui.com/material-ui/react-dialog/