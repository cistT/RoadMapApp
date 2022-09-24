import { useReducer } from "react";

import { css } from "@emotion/react";

import { Button, Tab, Tabs } from "@mui/material";
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
import usePostGAS from "hooks/usePostGAS";
import Manager from "./components/Manager";
import { useState } from "react";

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

    const { postData } = usePostGAS();

    const onClickProgressButton = (value, label) => {
        saveProgress(mapData.id, value);
        postData({
            id: mapData.id,
            progress: label,
        });
    };

    const [tab, setTab] = useState(0);
    const switchTab = (_, tab) => {
        setTab(tab);
    };

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
                    <span>{mapData.respondent_name || "不明"}</span>
                </Button>
            )}

            <Dialog open={open} onClose={handleClose} maxWidth="xl">
                <div css={styles.header}>
                    {/* <h1 css={styles.titleSpace}>
                        {mapData.place}
                        <span styles={{ size: "16px" }}>{mapData.address}</span>
                    </h1> */}

                    <div>
                        <h2 css={styles.titleSpace}> {mapData.place}</h2>
                        <span css={styles.addressSpace}>
                            (住所 : {mapData.address})
                        </span>
                    </div>

                    {/* <div css={styles.respondentSpace}>
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
                    </div> */}

                    <DialogActions>
                        <Button
                            onClick={switchContents}
                            css={styles.sideContentButton}
                        >
                            {contents ? "メッセージを見る" : "マップを見る"}
                        </Button>
                    </DialogActions>
                </div>

                <DialogContent css={styles.body}>
                    <div css={styles.left}>
                        <>
                            {/* <div css={styles.addressAndPerson}>
                                <>{mapData.address}</>
                                <span>
                                    <Manager
                                        manager={mapData?.manager || "未定"}
                                        id={mapData.id}
                                    />
                                </span>
                            </div>
                            <hr css={styles.border} /> */}
                            <Tabs value={tab} onChange={switchTab} centered>
                                <Tab label="修繕箇所の情報" />
                                <Tab label="市民の情報" />
                            </Tabs>
                            <div css={styles.mainContainer}>
                                {tab === 0 && (
                                    <>
                                        <TextWithTitle
                                            title="受付日"
                                            text={mapData.timestamp}
                                        />
                                        <TextWithTitle
                                            title="大区分"
                                            text={mapData.majorDivisions}
                                        />
                                        <Manager
                                            manager={mapData?.manager || "未定"}
                                            id={mapData.id}
                                        />

                                        <Remarks
                                            id={mapData.id}
                                            value={mapData.remarks}
                                        />
                                    </>
                                )}

                                {tab === 1 && (
                                    <>
                                        <TextWithTitle
                                            title="情報提供者"
                                            text={
                                                mapData?.respondent_name ??
                                                "不明"
                                            }
                                        />
                                        <TextWithTitle
                                            title="連絡先"
                                            text={
                                                mapData.respondent_phone_number ||
                                                "不明"
                                            }
                                        />
                                        <TextWithTitle
                                            title="住所"
                                            text={
                                                mapData.respondent_address ||
                                                "不明"
                                            }
                                        />
                                        <TextWithTitle
                                            title="市民からのメッセージ"
                                            text={
                                                mapData?.messages_citizens || ""
                                            }
                                        />
                                    </>
                                )}
                            </div>
                        </>
                        {hideProgress || (
                            <ProgressButtons
                                progress={mapData?.progress || 0}
                                onClick={onClickProgressButton}
                            />
                        )}

                        <Box css={styles.down}>
                            <LinearProgress
                                css={styles.progressBar}
                                variant="determinate"
                                value={mapData?.progress ?? 0}
                            />
                        </Box>
                        {hideProgress || (
                            <NotCompliedProgressButton
                                onClick={onClickProgressButton}
                                progress={mapData?.progress || 0}
                                css={styles.notComplied}
                            />
                        )}
                        <Box css={styles.down}>
                            <label css={styles.right}>予定日</label>
                            <CalendarButton
                                id={mapData.id}
                                scheduled={mapData.scheduled}
                            />
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
        align-items: center;
        justify-content: space-between;
    `,
    body: css`
        display: flex;
        white-space: pre-line;
        padding-top: 0;
        gap: 30px;
    `,
    left: css`
        width: 45vw;
    `,
    down: css`
        padding: 9px 0 0 0;
    `,
    right: css`
        padding: 0 20px 0 0;
    `,
    titleSpace: css`
        display: inline;
        font-size: 30px;
        margin: 0 20px;
    `,
    addressSpace: css`
        font-size: 20px;
    `,
    respondentSpace: css`
        /* padding: 37px 0 0 0;
        font-style: italic;
        justify-content: flex-end;
        font-size: 17px; */
        font-style: italic;
    `,
    respondentTitle: css`
        font-weight: bold;
    `,
    respondentColumn: css`
        display: flex;
        justify-content: flex-end;
    `,
    addressAndPerson: css`
        width: 45vw;
        height: 50px;
        display: flex;
        align-items: center;
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
    mainContainer: css`
        min-height: 330px;
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
        width: 95%;
        padding: 10px 0 0 0;
    `,
    sideContentButton: css`
        width: 12vw;
    `,
};

export default DetailDialog;

//https://mui.com/material-ui/react-dialog/
