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
import LinearProgress from "@mui/material/LinearProgress";
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import CalendarButton from "../ui/button/CalendarButton";

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
                    <h1 css={stylestitlespace}> 
                        {mapData.place}
                    </h1>
                    <DialogActions>
                        <Button onClick={switchContents}>
                            {contents ? "メッセージを見る" : "マップを見る"}
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
                            <TextWithTitle title="詳細" text={mapData.detail} />
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
                        <Box css={stylesdown} >
                            <LinearProgress
                                css={stylesdown} 
                                variant="determinate"
                                value={mapData?.progress ?? 0}
                            />
                        </Box >
                        <Box css={stylesdown} >
                            <label css={stylesright}>予定日</label>
                            <CalendarButton></CalendarButton>
                            
                            </Box>
                    </div>
                    {contents ? (
                        <SideMap mapData={mapData} />
                    ) : (
                        <Form dbMessages={dbMessages} mapData={mapData} />
                    )}
                </DialogContent>

                <DialogActions>
                    <BackButton onClick={handleClose} />
                </DialogActions>
            </Dialog>
        </>
    );
};


const stylesdown = css`width: 80% ;
                    padding : 20px 0 0 0 ;`
                
const stylesright = css`width: 80% ;
                    padding : 0 20px 0 0 ;`
const stylestitlespace=css`width: 80% ;
                    padding : 30px 0 0 20px ;
                    `


export default DetailDialog;

//https://mui.com/material-ui/react-dialog/
