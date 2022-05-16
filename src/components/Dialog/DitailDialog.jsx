import { useReducer, useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

import ProgressButtons from "../ui/button/ProgressButtons";
import SideMap from "../page/SideMap";
import Form from "./Form/Form";
import BackButton from "../ui/button/BackButton";
import TextWithTitle from "../ui/text/TextWithTitle";

const DetailDialog = ({
    listLabel,
    mapData,
    dbMessages,
    saveProgress = () => undefined,
    variant,
    hideProgress = false,
}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [contents, switchContents] = useReducer(
        (contents) => !contents,
        true
    );

    return (
        <>
            <Button
                onClick={handleClickOpen}
                variant={variant}
                style={{ width: "100%", textAngle: "center", color: "black" }}
            >
                {listLabel || mapData.place}
            </Button>

            <Dialog open={open} onClose={handleClose} maxWidth="xl">
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <DialogTitle>苦情個所　{mapData.place}</DialogTitle>
                    <DialogActions>
                        <Button onClick={switchContents}>
                            {contents ? "マップを見る" : "メッセージを見る"}
                        </Button>
                    </DialogActions>
                </div>

                <DialogContent
                    style={{ display: "flex", whiteSpace: "pre-line" }}
                >
                    <div style={{ width: "50vw" }}>
                        <>
                            <TextWithTitle
                                title="大区分"
                                text={mapData.majorDivisions}
                            />
                            <TextWithTitle
                                title="苦情個所の詳細"
                                text={mapData.detail}
                            />
                            <TextWithTitle
                                title="内容"
                                text={mapData.contents}
                            />
                            <TextWithTitle
                                title="市民からのメッセージ"
                                text={mapData.message}
                            />
                        </>
                        {hideProgress || (
                            <ProgressButtons
                                saveProgress={saveProgress}
                                mapData={mapData}
                            />
                        )}
                    </div>
                    {contents ? (
                        <Form dbMessages={dbMessages} mapDataId={mapData.id} />
                    ) : (
                        <SideMap mapData={mapData} />
                    )}
                </DialogContent>

                <DialogActions>
                    <BackButton onClick={handleClose} />
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DetailDialog;

//https://mui.com/material-ui/react-dialog/
