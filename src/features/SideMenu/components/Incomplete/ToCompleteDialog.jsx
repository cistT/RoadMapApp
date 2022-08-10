import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

import ArchiveButton from "components/Button/ArchiveButton";

import useDialog from "hooks/useDialog";

//ToDo コンポーネント名を変える
//未完了リストから完了リストに移動するダイアログ
const ToCompleteDialog = ({ mapData, archiveMapData }) => {
    const { open, handleOpen, handleClose } = useDialog(false);

    const decisionArchiveMapData = () => {
        archiveMapData(mapData);
        handleClose();
    };

    return (
        <>
            <ArchiveButton title="完了にする" onClick={handleOpen} />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{mapData.place}を完了にしますか</DialogTitle>

                <DialogContent
                    style={{ display: "flex", whiteSpace: "pre-line" }}
                >
                    <DialogContentText>
                        {mapData.majorDivisions}
                    </DialogContentText>

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

export default ToCompleteDialog;
