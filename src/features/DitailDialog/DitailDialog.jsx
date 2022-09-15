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
import NotCompliedProgressButton from "components/Button/NotCompliedProgressButton";

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
            {listLabel ? (
                <div css={styles.buttonContainer}>
                    <Button
                        onClick={handleOpen}
                        variant={variant}
                        css={styles.mapMarkerButton}
                    >
                        <span>{listLabel}</span>
                    </Button>
                </div>
            ) : (
                <Button
                    onClick={handleOpen}
                    variant={variant}
                    css={styles.listItemButton}
                >
                    <span>{mapData.id}</span>
                    <span>{mapData.place || "詳細地不明"}</span>
                    <span>{mapData.respondent_name || "依頼者不明"}</span>
                </Button>
            )}

            <Dialog open={open} onClose={handleClose} maxWidth="xl">
                <div css={styles.header}>
                    <h1 css={styles.titleSpace}>{mapData.place}</h1>

                    <div css={styles.respondentSpace}>
                        <div css={styles.respondentColumn}>
                            <div css={styles.respondentTitle}>
                                受付日:&nbsp;
                            </div>
                            {mapData.timestamp || "不明"}
                            <div css={styles.respondentTitle}>
                                &nbsp;&nbsp;情報提供者:&nbsp;
                            </div>
                            {mapData.respondent_name || "不明"}
                            <div css={styles.respondentTitle}>
                                &nbsp;&nbsp;連絡先:&nbsp;
                            </div>
                            {mapData.respondent_phone_number || "不明"}
                        </div>
                        <div css={styles.respondentColumn}>
                            <div css={styles.respondentTitle}>
                                &nbsp;&nbsp;住所:&nbsp;
                            </div>
                            {mapData.respondent_address || "不明"}
                        </div>
                    </div>

                    <DialogActions>
                        <Button onClick={switchContents} css={styles.sideContentButton}>
                            {contents ? "メッセージを見る" : "マップを見る"}
                        </Button>
                    </DialogActions>
                </div>

                <DialogContent css={styles.body}>
                    <div css={styles.left}>
                        <>
                            <div css={styles.addressAndPerson}>
                                <>{mapData.address}</>
                                <span>
                                    <span css={styles.respondentTitle}>
                                        担当者:{" "}
                                    </span>
                                    {mapData.Tantousha || "未定"}
                                </span>
                            </div>
                            <hr css={styles.border} />
                            <TextWithTitle
                                title="大区分"
                                text={mapData.majorDivisions}
                            />
                            <TextWithTitle
                                title="市民からのメッセージ"
                                text={mapData.remarks}
                            />
                            {/* ここのvalueにgasから取得した備考欄の値を渡す */}
                            <Remarks value="かなり深い水溜りなので、なるべく早急に対処したいです" />
                        </>
                        {hideProgress || (
                            <ProgressButtons
                                saveProgress={saveProgress}
                                mapData={mapData}
                            />
                        )}

                        <Box css={styles.down}>
                            <LinearProgress
                                css={styles.progressBar}
                                variant="determinate"
                                value={mapData?.progress ?? 0}
                            />
                        </Box>
                        <NotCompliedProgressButton
                            saveProgress={saveProgress}
                            mapData={mapData}
                            css={styles.notComplied}
                        />
                        <Box css={styles.down}>
                            <label css={styles.right}>予定日</label>
                            {/* ここでgasから取得した値を渡してあげればいい？ */}
                            <CalendarButton />
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

const styles = {
    header: css`
        display: flex;
        height: 100px;
        justify-content: space-between;
    `,
    body: css`
        display: flex;
        white-space: pre-line;
        padding-top: 0;
    `,
    left: css`
        width: 50vw;
    `,
    down: css`
        width: 80%;
        padding: 10px 0 0 0;
    `,
    right: css`
        width: 80%;
        padding: 0 20px 0 0;
    `,
    titleSpace: css`
        width: 40%;
        margin: 30px 0 0 20px;
    `,
    respondentSpace: css`
        padding: 37px 0 0 0;
        font-style: italic;
        width: 750px;
        justify-content: flex-end;
        font-size: 17px;
    `,
    respondentTitle: css`
        font-weight: bold;
    `,
    respondentColumn: css`
        display: flex;
        justify-content: flex-end;
    `,
    addressAndPerson: css`
        width: 38vw;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
    `,
    border: css`
        height: 2px;
        width: 45vw;
        text-align: left;
        margin-left: 0px;
        background: black;
        border: none;
    `,
    notComplied: css`
        border: 1px solid red;
    `,
    listItemButton: css`
        width: 100%;
        justify-content: space-between;
        color: black;
    `,
    mapMarkerButton: css`
        justify-content: center;
        color: black;
        width: 50%;
    `,
    buttonContainer: css`
        text-align: center;
    `,
    progressBar: css`
        width: 30.5vw;
        padding: 10px 0 0 0;
    `,
    sideContentButton: css`
        width: 12vw;
    `
};

export default DetailDialog;

//https://mui.com/material-ui/react-dialog/
