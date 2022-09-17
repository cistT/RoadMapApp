import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

import RevertButton from "../../../../components/Button/RevertButton";

import useDialog from "hooks/useDialog";

const ToIncompleteDialog = ({ mapData, onClickRevertButton }) => {
    const { open, handleOpen, handleClose } = useDialog(false);

    const revertMapData = () => {
        onClickRevertButton();
        handleClose();
    };

    return (
        <>
            <RevertButton title="元に戻す" onClick={handleOpen} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {mapData.id} {mapData.place} を元に戻しますか？
                </DialogTitle>

                <DialogContent style={{ whiteSpace: "pre-line" }}>
                    <DialogContentText>
                        大区分 : {mapData.majorDivisions}
                    </DialogContentText>
                    <DialogContentText>
                        依頼者 :{" "}
                        {mapData.respondent_name
                            ? mapData.respondent_name + "さん"
                            : "不明"}
                    </DialogContentText>
                    <DialogContentText>{mapData.remarks}</DialogContentText>
                </DialogContent>

                <DialogContent
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <DialogActions>
                        <Button onClick={handleClose}>やめる</Button>
                    </DialogActions>

                    <DialogActions>
                        <Button onClick={revertMapData}>元に戻す</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ToIncompleteDialog;
