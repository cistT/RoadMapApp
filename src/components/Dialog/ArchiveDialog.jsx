import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

import ArchiveButton from "../ui/button/ArchiveButton";

const ArchiveDialog = ({ mapData, archiveMapData }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const decisionArchiveMapData = () => {
    archiveMapData(mapData);
    handleClose();
  };

  return (
    <>
      <ArchiveButton title="アーカイブに移動する" onClick={handleClickOpen} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{mapData.place}をアーカイブしますか</DialogTitle>

        <DialogContent style={{ display: "flex", whiteSpace: "pre-line" }}>
          <DialogContentText>{mapData.majorDivisions}</DialogContentText>

          <DialogContentText>{mapData.contents}</DialogContentText>

          <DialogContentText>{mapData.message}</DialogContentText>
        </DialogContent>

        <DialogContent
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <DialogActions>
            <Button onClick={handleClose}>やめる</Button>
          </DialogActions>

          <DialogActions>
            <Button onClick={decisionArchiveMapData}>する</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ArchiveDialog;
