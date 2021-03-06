import React, { useRef, useState } from "react";

import firebase from "firebase/compat/app";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
import { db } from "../../../firebase.js";

import { css } from "@emotion/react";

import { Paper } from "@material-ui/core";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { Tooltip } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

const SendImage = ({ mapDataId }) => {
    const inputRef = useRef();
    const [image, setImage] = useState("");
    const [fileName, setFileName] = useState(null);

    const [successMessage, setSuccessMessage] = useState(" ");

    const saveImgUrl = (id, url) => {
        db.collection("img").add({
            mapDataId: id,
            url: url,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        });
    };

    const OnFileUploadToFirebase = (e) => {
        e.preventDefault();

        const file = inputRef?.current?.files[0];

        const storage = getStorage();

        const storageRef = ref(storage, `${mapDataId}/test`);

        image &&
            uploadString(storageRef, image).then(() => {
                saveImgUrl(
                    mapDataId,
                    `${process.env.REACT_APP_STORAGE_URL}/${mapDataId}/test`
                );
            });

        file?.name &&
            uploadBytes(ref(storage, `${mapDataId}/${file.name}`), file).then(
                () => {
                    saveImgUrl(
                        mapDataId,
                        `${process.env.REACT_APP_STORAGE_URL}/${mapDataId}/${file.name}`
                    );
                    setSuccessMessage("保存できました");
                    setFileName(null);
                }
            );
    };

    return (
        <>
            <Paper
                component="form"
                sx={{
                    p: "2px 4px",
                    marginTop: "10px",
                    width: "40vw",
                }}
                onSubmit={OnFileUploadToFirebase}
            >
                <div css={styles.container}>
                    <label htmlFor="file" style={{ display: "flex" }}>
                        <input
                            type="file"
                            ref={inputRef}
                            accept=".png, .jpg, .jpeg"
                            css={styles.input}
                            onChange={(e) => setFileName(e.target.value)}
                            id="file"
                        />
                        <Tooltip title="画像を選択する">
                            <InsertPhotoIcon css={styles.icon} />
                        </Tooltip>

                        {fileName ? (
                            <p css={styles.message(1)}>{fileName}</p>
                        ) : (
                            <p css={styles.message(0.5)}>
                                画像は選択されていません
                            </p>
                        )}
                    </label>
                    <div style={{ display: "flex" }}>
                        <Divider
                            sx={{ height: 50, m: 0.5 }}
                            orientation="vertical"
                        />
                        <Tooltip title="画像を保存する">
                            <IconButton type="submit" css={styles.icon}>
                                <SendIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </Paper>
            <p css={styles.successMessage}>{successMessage}</p>
        </>
    );
};

export default SendImage;

const styles = {
    container: css`
        display: flex;
        max-height: 60px;
        justify-content: space-between;
    `,
    input: css`
        display: none;
    `,
    icon: css`
        height: 50px;
        width: 50px;
        margin: 5px;
        cursor: pointer;
    `,
    message: (alpha = 1) => css`
        margin-left: 20px;
        color: rgba(0, 0, 0, ${alpha});
        cursor: pointer;
    `,
    successMessage: css`
        font-size: 15px;
        margin-left: 100px;
    `,
};
