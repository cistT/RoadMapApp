import {useState} from 'react';

import SideMap from '../SideMap';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {ListItem,ListItemText,Button} from '@mui/material';


const DetailDialog=({mapData})=> {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ListItem button onClick={handleClickOpen} style={{width:"80%"}}>
        <ListItemText primary={mapData.place} />
      </ListItem>

      <Dialog open={open} onClose={handleClose}>

        <DialogTitle>{mapData.place}</DialogTitle>

        <DialogContent style={{display: 'flex',whiteSpace: 'pre-line'}} >
            <div style={{width:'40vw'}}>
                <DialogContentText>
                {mapData.majorDivisions}
              </DialogContentText>

              <DialogContentText>
                {mapData.contents}
              </DialogContentText>

              <DialogContentText>
                {mapData.message}
              </DialogContentText>
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