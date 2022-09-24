import React, { useContext, useState } from "react";



import { css } from "@emotion/react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    Typography,
    Divider,
    Tooltip,
} from "@mui/material";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import WarningIcon from "@mui/icons-material/Warning";

import useDialog from "hooks/useDialog";
import MoveDialog from "./MoveDialog";

const MovedButton = ({ mapData }) => {
    const { open, handleOpen, handleClose } = useDialog(false);

    const [moved, setMoved] = useState(false);

    const handleChange = () => {
        handleClose();
        setMoved(true);
    };

    // const handleLock = () => {
    //     setMoved(false);
    //     setMarkerPosition(newMarkerPosition);

    //     postData({
    //         id: mapDataId,
    //         latitude: newMarkerPosition.lat,
    //         longitude: newMarkerPosition.lng,
    //     });

    //     // 妥協案:HomeのMapのピンにも変更を反映させるためにページをリロードする処理
    //     window.location.reload();

    //     // mapData[mapData.id]でそこの緯度経度を上書きする方法でやってみた
    //     // -> 非常に複雑だし、未完了・完了」・全件表示でそれぞれの場合に応じたmapData,archivedMapData, allMapDataを変更して、SaveDisplayMapIconsに渡すようにしなきゃいけない。。。

    //     // const newMapData = mapData.map((data) => {
    //     //     if (data.id === mapDataId) {
    //     //         const { latitude, longitude, ...rest } = data;
    //     //         return {
    //     //             ...rest,
    //     //             latitude: newMarkerPosition.lat,
    //     //             longitude: newMarkerPosition.lng,
    //     //         };
    //     //     } else {
    //     //         return data;
    //     //     }
    //     // });

    //     // console.log(newMapData);
    //     // setMapData(newMapData);
    //     // saveDisplayIcons(hogehoge)

    // };

    return (
        <>
            {moved ? (
                <MoveDialog mapData={mapData} moved={moved} setMoved={setMoved}/>
            ) : (
                <>
                    <Tooltip title="ピンの位置を変更する" placement="bottom">
                        <Button
                            variant="outlined"
                            css={styles.button}
                            onClick={handleOpen}
                        >
                            <EditLocationIcon />
                        </Button>
                    </Tooltip>
                    <Dialog open={open} maxWidth="xs" fullWidth>
                        <DialogTitle>本当にピンを移動しますか</DialogTitle>
                        <Divider />
                        <div css={styles.contentContainer}>
                            <Typography>
                                マップ上のピンの位置を変更できるようにします
                            </Typography>
                            <div css={styles.alertContainer}>
                                <WarningIcon css={styles.alertIcon} />
                                <span css={styles.text}>
                                    後から変更を取り消すことはできません
                                </span>
                            </div>
                        </div>
                        <DialogActions>
                            <Button onClick={handleChange}>はい</Button>
                            <Button onClick={handleClose}>いいえ</Button>
                        </DialogActions>
                    </Dialog>
                </>
            )}
        </>
    );
};

const styles = {
    contentContainer: css`
        margin: 5%;
        width: 100%;
    `,
    alertContainer: css`
        margin-top: 2%;
        vertical-align: middle;
        display: inline-flex;
        width: 100%;
    `,
    button: css`
        color: black;
        text-transform: none;
        margin: 5px;
        font-size: 15px;
    `,
    text: css`
        margin-left: 2%;
    `,
};

export default MovedButton;
