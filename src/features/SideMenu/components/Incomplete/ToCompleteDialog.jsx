import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

import ArchiveButton from "components/Button/ArchiveButton";

import useDialog from "hooks/useDialog";
import usePostGAS from "hooks/usePostGAS";

//未完了リストから完了リストに移動するダイアログ
const ToCompleteDialog = ({ mapData, archiveMapData }) => {
    const { open, handleOpen, handleClose } = useDialog(false);

    const { post } = usePostGAS();

    const decisionArchiveMapData = () => {
        post({
            id: mapData.id,
            complete: true,
        });
        archiveMapData(mapData);
        handleClose();
    };

    return (
        <>
            <ArchiveButton title="完了にする" onClick={handleOpen} />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{mapData.place}を完了にしますか</DialogTitle>

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
                        <Button onClick={decisionArchiveMapData}>する</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ToCompleteDialog;
