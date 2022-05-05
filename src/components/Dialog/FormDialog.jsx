import {useState} from 'react';
import { useForm } from "react-hook-form";

import SideMap from "../SideMap";
import DecisionButton from "../Button/DecisionButton";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {IconButton,Tooltip,Button} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import {TextField} from '@mui/material';

const FormDialog=({mapData,updateMapData})=> {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [decisionMessage,setDecisionMessage]=useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit=(newMapData)=>{
      updateMapData(newMapData.message,mapData.id);
      setDecisionMessage("変更しました");
  }

  return (
    <div>
        <Tooltip title="編集する">
            <IconButton onClick={handleClickOpen} style={{height:'50px',width:'50px'}}>
                <EditIcon />
            </IconButton>
        </Tooltip>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{mapData.place}</DialogTitle>
        <DialogContent style={{display: 'flex'}}>
              <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{height:'300px',margin:"10px",width:'40vw'}}
              >
                  <TextField
                      label="メッセージ"
                      multiline
                      rows={10}
                      defaultValue={mapData.message}
                      {...register("message")}
                      style={{whiteSpace: 'pre-line',width:"90%"}}
                  />

                  <DecisionButton decisionMessage={decisionMessage} />
              </form>

            <SideMap mapData={mapData} />

            {/* <Form data={mapData} updateMapData={updateMapData} /> */}
          {/* <DialogContentText>
            {mapData.majorDivisions}
          </DialogContentText>
          <DialogContentText>
            {mapData.contents}
          </DialogContentText>
          <DialogContentText>
            {mapData.message}
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>戻る</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;

//https://mui.com/material-ui/react-dialog/