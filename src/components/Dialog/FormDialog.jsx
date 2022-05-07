import {useState} from 'react';
import { useForm } from "react-hook-form";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Button} from '@mui/material';
import {TextField} from '@mui/material';
import Typography from '@mui/material/Typography';

import SideMap from "../SideMap";
import DecisionButton from "../Button/DecisionButton";
import EditButton from "../Button/EditButton";

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
      <EditButton title="編集する" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>苦情個所 {mapData.place}</DialogTitle>
        <Typography gutterBottom>
                大区分 {mapData.majorDivisions}<br/>
                苦情個所の詳細 {mapData.detail}<br/>
                内容 {mapData.contents}<br/>
                元のメッセージ<br/>
                {mapData.message}<br/>
          </Typography>
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
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>戻る</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;





















// import {useState,useEffect} from 'react';
// import { useForm } from "react-hook-form";

// import SideMap from "../SideMap";
// import DecisionButton from "../Button/DecisionButton";

// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import {IconButton,Tooltip,Button} from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import {TextField} from '@mui/material';

// import firebase from "firebase/compat/app";
// import {db} from "../../firebase.js"

// //ソースコード及びUIがものすごくきたない
// const FormDialog=({mapData,updateMapData})=> {
//   const [open, setOpen] = useState(false);

//   // const [messages,setMessages] = useState([]);
//   // useEffect(()=>{
//   //   //データをすべて取得するのではなく、idに一致したデータだけを取りたい
//   //   db.collection("messages")
//   //   .orderBy("time")
//   //   .limit(50)
//   //   .onSnapshot((snapshot)=>{
//   //     setMessages(snapshot.docs.map(doc=>doc.data()));
//   //   })
//   // },[]);

//   // const [message,setMessage] =useState("");
//   //   const sendMessage=(e)=>{
//   //       e.preventDefault();
//   //       db.collection("messages").add({
//   //           id:"AAA",
//   //           message: message,
//   //           time:firebase.firestore.FieldValue.serverTimestamp()
//   //       })
//   //       setMessage("");
//   //   }

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   // const [decisionMessage,setDecisionMessage]=useState("");
//   // const { register, handleSubmit } = useForm();
//   // const onSubmit=(newMapData)=>{
//   //     db.collection("messages").add({
//   //       id:mapData.id,
//   //       message: newMapData.message,
//   //       time:firebase.firestore.FieldValue.serverTimestamp()
//   //   })
//   // setMessage("");
//   //     // updateMapData(newMapData.message,mapData.id);
//   //     setDecisionMessage("変更しました");
//   // }

//   function getStringFromDate(date) {
 
//     const year_str = date.getFullYear();
//     //月だけ+1すること
//     const month_str = 1 + date.getMonth();
//     const day_str = date.getDate();
//     const hour_str = date.getHours();
//     const minute_str = date.getMinutes();
//     const second_str = date.getSeconds();

//     let format_str = 'YYYY-MM-DD hh:mm:ss';
//     format_str = format_str.replace(/YYYY/g, year_str);
//     format_str = format_str.replace(/MM/g, month_str);
//     format_str = format_str.replace(/DD/g, day_str);
//     format_str = format_str.replace(/hh/g, hour_str);
//     format_str = format_str.replace(/mm/g, minute_str);
//     format_str = format_str.replace(/ss/g, second_str);
    
//     return format_str;
//    };

//   return (
//     <div>
//         <Tooltip title="編集する">
//             <IconButton onClick={handleClickOpen} style={{height:'50px',width:'50px'}}>
//                 <EditIcon />
//             </IconButton>
//         </Tooltip>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>{mapData.place}</DialogTitle>

//         <DialogContentText>
//           元のメッセージ:  {mapData.message}
//         </DialogContentText>

//         {/* <DialogContent>
//           {messages.map((message)=>{
//             if(message.id===mapData.id){
//               return(
//                 <DialogContentText key={message.message}>
//                   {message.message}
//                 </DialogContentText>
//               )
//             }
//           })}
//         </DialogContent> */}
//         <DialogContent style={{display: 'flex'}}>
//               <form
//                   onSubmit={handleSubmit(onSubmit)}
//                   style={{height:'300px',margin:"10px",width:'40vw'}}
//               >
//                   <TextField
//                       label="メッセージ"
//                       multiline
//                       rows={10}
//                       defaultValue={message}
//                       {...register("message")}
//                       style={{whiteSpace: 'pre-line',width:"90%"}}
//                   />

//                   <DecisionButton decisionMessage={decisionMessage} />
//               </form>

//             <SideMap mapData={mapData} />

//             {/* <Form data={mapData} updateMapData={updateMapData} /> */}
//           {/* <DialogContentText>
//             {mapData.majorDivisions}
//           </DialogContentText>
//           <DialogContentText>
//             {mapData.contents}
//           </DialogContentText>
//           <DialogContentText>
//             {mapData.message}
//           </DialogContentText> */}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>戻る</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default FormDialog;

//https://mui.com/material-ui/react-dialog/