import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import UsageButton from "../../Button/UsageButton";
import BackButton from "../../Button/BackButton";

import useDialog from "hooks/useDialog";

const UsageDialog = () => {
    const { open, handleOpen, handleClose } = useDialog(false);
    return (
        <>
            <UsageButton onClick={handleOpen} />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>使い方</DialogTitle>

                <DialogContent
                    style={{ display: "flex", whiteSpace: "pre-line" }}
                >
                    <div style={{ width: "40vw" }}>制作中</div>
                </DialogContent>

                <DialogActions>
                    <BackButton onClick={handleClose} />
                </DialogActions>
            </Dialog>
        </>
    );
};

export default UsageDialog;
