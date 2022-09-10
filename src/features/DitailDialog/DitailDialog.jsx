import { useReducer } from "react";

import { css } from "@emotion/react";

import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

import ProgressButtons from "../../components/Button/ProgressButtons";
import SideMap from "./components/SideMap";
import SideMessage from "./components/SideMessage";
import BackButton from "../../components/Button/BackButton";
import TextWithTitle from "./components/Text/TextWithTitle";
import CalendarButton from "../../components/Button/CalendarButton";

import useDialog from "hooks/useDialog";
import Remarks from "./components/Remarks";

const DetailDialog = ({
    listLabel,
    mapData,
    dbMessages,
    saveProgress = () => undefined,
    variant,
    hideProgress = false,
}) => {
    const { open, handleOpen, handleClose } = useDialog(false);

    const [contents, switchContents] = useReducer(
        (contents) => !contents,
        true
    );

    return (
        <>
            <Button
                onClick={handleOpen}
                variant={variant}
                style={{ width: "100%", textAngle: "center", color: "black" }}
            >
                {listLabel || mapData.place}
            </Button>

            <Dialog open={open} onClose={handleClose} maxWidth="xl">
                <div
                    style={{
                        display: "flex",
                        height: "100px",
                        justifyContent: "space-between",
                    }}
                >
                    <h1 css={stylestitlespace}>{mapData.place}</h1>

                    <div css={stylesrespondentspace}>
                        <div css={stylesrepodentcolumn}>
                            <div css={stylesrepondenttitle}>受付日:&nbsp;</div>
                            {mapData.timestamp || "不明"}
                            <div css={stylesrepondenttitle}>
                                &nbsp;&nbsp;情報提供者:&nbsp;
                            </div>
                            {mapData.respondent_name || "不明"}
                            <div css={stylesrepondenttitle}>
                                &nbsp;&nbsp;連絡先:&nbsp;
                            </div>
                            {mapData.respondent_phone_number || "不明"}
                        </div>
                        <div css={stylesrepodentcolumn}>
                            <div css={stylesrepondenttitle}>
                                &nbsp;&nbsp;住所:&nbsp;
                            </div>
                            {mapData.respondent_address || "不明"}
                        </div>
                    </div>

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
                            <div css={stylesaddressandperson}>
                                <>{mapData.address}</>
                                <span>
                                    <span css={stylesrepondenttitle}>
                                        担当者:{" "}
                                    </span>
                                    {mapData.Tantousha || "白石"}
                                </span>
                            </div>
                            <hr css={stylesborder} />
                            <TextWithTitle
                                title="大区分"
                                text={mapData.majorDivisions}
                            />
                            <TextWithTitle
                                title="市民からのメッセージ"
                                text={mapData.remarks}
                            />
                            {/* ここのvalueにgasから取得した備考欄の値を渡す */}
                            <Remarks value="かなり深い水溜りなので、なるべく早急に対処したいです"/>
                        </>
                        {hideProgress || (
                            <ProgressButtons
                                saveProgress={saveProgress}
                                mapData={mapData}
                            />
                        )}

                        <Box css={stylesdown}>
                            <LinearProgress
                                css={stylesdown}
                                variant="determinate"
                                value={mapData?.progress ?? 0}
                            />
                        </Box>
                        <Box css={stylesdown}>
                            <label css={stylesright}>予定日</label>
                            <CalendarButton></CalendarButton>
                        </Box>
                    </div>
                    {contents ? (
                        <SideMap mapData={mapData} />
                    ) : (
                        <SideMessage
                            dbMessages={dbMessages}
                            mapData={mapData}
                        />
                    )}
                </DialogContent>

                <DialogActions>
                    <BackButton onClick={handleClose} />
                </DialogActions>
            </Dialog>
        </>
    );
};

const stylesdown = css`
    width: 80%;
    padding: 20px 0 0 0;
`;

const stylesright = css`
    width: 80%;
    padding: 0 20px 0 0;
`;
const stylestitlespace = css`
    width: 40%;
    margin: 30px 0 0 20px;
`;

const stylesrespondentspace = css`
    padding: 37px 0 0 0;
    font-style: italic;
    width: 750px;
    justify-content: flex-end;
    font-size: 17px;
`;

const stylesrepondenttitle = css`
    font-weight: bold;
`;

const stylesrepodentcolumn = css`
    display: flex;
    justify-content: flex-end;
`;

const stylesaddressandperson = css`
    width: 38vw;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
`;

const stylesborder = css`
    height: 2px;
    width: 80%;
    text-align: left;
    margin-left: 0px;
    background: black;
    border: none;
`;

export default DetailDialog;

//https://mui.com/material-ui/react-dialog/
